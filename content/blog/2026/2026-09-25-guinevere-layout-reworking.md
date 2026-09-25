---
title: "Reworking Guinevere's Layout Engine"
date: 2026-09-25
summary: "Composable UnitValue sizing, zero-allocation layout, and linear deep-tree scaling — what it took to make Guinevere's layout engine both more expressive and faster."
tags:
  - guinevere
  - dotnet
  - csharp
socialmedia: |
  Guinevere's layout engine got a rework: composable UnitValue sizing (blend pixels, percentages, ratios, expand and fit-content in one value), zero steady-state allocations, and linear deep-tree scaling.

  #Guinevere #dotnet #csharp #gamedev

  https://mass4.org/blog/reworking-guinevere-s-layout-engine/
---

Guinevere's layout engine began with a familiar immediate-mode design: build a mutable node tree, measure content,
and place every node during a two-pass frame. It supported fixed pixels, percentages, content sizing, expansion,
constraints, wrapping, and absolute positioning. The feature set was useful, but its representation had grown around
mutually exclusive modes. Moving smoothly from a fixed width to a percentage width, for example, required switching
between properties rather than interpolating one coherent value.

[Issue #121](https://github.com/MASS4ORG/Guinevere/issues/121) gave us an opportunity to revisit that design with measurements rather than assumptions. The work was
inspired in part by PanGui's published [layout rework and benchmarks](https://www.pangui.io/blog/05-layout-rework-and-benchmarks/),
which describes composable layout properties and emphasizes measuring actual layout computation independently from
tree construction. We adopted the useful parts of that methodology while keeping Guinevere's own API and immediate-mode
architecture.

## Composable sizes

`UnitValue` is now a compact value containing six independent contributions: pixels, parent percentage,
perpendicular-axis ratio, remaining-space expansion, fit-content, and fit-largest-child. Contributions can be added
together and scaled. Interpolation operates on every coefficient, which means an animation can move continuously
between unrelated modes without a discrete mode switch.

```csharp
var width = UnitValue.Lerp(
    UnitValue.Pixels(120),
    UnitValue.Percentage(0.7f) + UnitValue.FitContent(0.1f),
    progress);

gui.Node().Width(width).Height(44);
```

The existing numeric fluent API remains available, while expression overloads opt into composition. We also added
`FitLargest`, which is useful for controls whose width or height should follow their largest child.

## Finding the actual allocation source

The first benchmark run showed that layout allocated approximately 32 bytes for every positioned node. The source was
not the object graph or a missing structure-of-arrays representation. `Rect` was a reference record, so every computed
rectangle created a heap object. Changing it to a 16-byte record struct removed that cost at its source.

Other temporary costs came from LINQ aggregation, filtered child lists, dimension arrays, and nested lists used to
build wrap lines. Direct loops, pooled dimension buffers, value-type calculation contexts, and streaming wrap-line
processing removed those allocations. Representative fixed, wrapped, constrained-expand, percentage, ratio, and fit
fixtures now perform layout with zero steady-state allocations.

We also evaluated ZLinq rather than adopting it on reputation alone. For a representative 10,000-item layout
aggregation, System LINQ took roughly 54.3 microseconds and allocated 256 bytes. ZLinq reduced that to 30.4 microseconds
and zero bytes. A direct loop completed the same work in 7.5 microseconds with zero allocations. ZLinq is a meaningful
improvement for expressive general-purpose queries, but the measured layout hot path is better served by straightforward
loops and no additional dependency.

| Items | System LINQ | ZLinq | Direct loop |
|---:|---:|---:|---:|
| 100 | 761 ns, 256 B | 531 ns, 0 B | 109 ns, 0 B |
| 1,000 | 5.60 μs, 256 B | 3.05 μs, 0 B | 0.77 μs, 0 B |
| 10,000 | 54.35 μs, 256 B | 30.35 μs, 0 B | 7.53 μs, 0 B |

## Making deep trees linear

Wide trees were fast, but a chain of nested fit-content nodes exposed quadratic scaling. Two independent operations
were repeatedly walking descendants or ancestors. Content measurements recursively remeasured the same intrinsic
subtrees, while scroll-offset calculation walked the complete ancestor chain for every positioned node.

The revised engine prepares intrinsic measurements bottom-up for subtrees whose sizes do not depend on parent
constraints. Percentage, ratio, expansion, and wrapping remain on the constraint-aware path. During the same traversal,
cumulative scroll offsets are propagated to descendants, making their application constant time. A single-child path
also avoids retaining one pooled dimension buffer per recursion level.

The result is approximately linear deep-tree behavior. Chains from 129 through 1,025 nodes remain around 48–49
nanoseconds per node with zero allocations. Clean retained trees now skip layout entirely. Child mutations and fluent
layout changes invalidate ancestors automatically; direct writes through the public `Style` field use the explicit
`InvalidateLayout()` method.

## A benchmark suite that remains useful

The benchmark example now contains every workload described in the PanGui article, including the 101,111-node nested
fit tree and 100,001-node wide tree. The suite is guidance rather than a cross-machine leaderboard: runtime version,
hardware, and exact semantics still matter. Fixtures validate their results, so a fast wrong answer fails the run
instead of being timed.

The last unsupported PanGui workload was a pixel size constrained by an `Expand` minimum. Min/max constraints now
accept the same `UnitValue` expressions as sizes, so a bound can mix pixels, percentages, ratios, fit and expansion,
and be interpolated. That exposed an old approximation: expanding children were clamped after space was shared out,
so a clamped child's surplus or deficit overflowed the line. The engine now solves for the share instead. Each child
is measured once into a clamped linear function of that share, and a few Newton steps over those cached coefficients
find the exact fill without measuring the child again. Lines where nothing expands skip the solver.

That precision has a price only where the result changed. Expanding children with bounds cost 7–18% more than the
old clamp, which produced overflowing layouts. The formerly unsupported fixture runs at about 50 nanoseconds per
node. Unconstrained layouts are equal or faster, because optional bounds sit behind a presence mask and resolving an
expression no longer measures content it does not use.

This rework reinforced a useful engineering lesson. The proposed large storage rewrite was not necessary to reach
zero-allocation layout or linear representative scaling. Benchmarks pointed to smaller, clearer changes with lower API
risk. Guinevere gained a more expressive sizing model, substantially faster layout, and reusable performance fixtures.
