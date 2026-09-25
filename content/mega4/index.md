---
Title: MEGA4
Description: One initiative, four interdependent projects worked on in the open — a GUI toolkit, an editor workbench, a game engine, and a game.
---

<section class="project-hero">
  <div class="wrap">
    <img src="/mega4-logo-1.svg" alt="MEGA4 logo">
    <div class="eyebrow">The initiative</div>
    <h1>MEGA4</h1>
    <p class="lede" style="margin-inline:auto">Four interdependent projects, worked on in the open. Each one is the foundation for the next.</p>
  </div>
</section>

<div class="wrap section">
<div class="prose narrow">

Most software gets finished before anyone sees it. MEGA4 publishes the middle: four
codependent projects where the dead ends, the rewrites and the rough edges are visible
alongside whatever happens to be working.

## The four projects

<div class="pillars">
<a class="pillar g" href="/guinevere">
<span class="role">Foundation · GUI</span>
<h3><img src="/guinevere-logo-1.svg" alt="Guinevere logo"> Guinevere</h3>
<p>A GPU-accelerated, immediate-mode UI toolkit for C#, built on SkiaSharp. Everything else draws its interface with it.</p>
<span class="more">Learn more →</span>
</a>
<a class="pillar ga" href="/gaya">
<span class="role">Tool · Workbench</span>
<h3><img src="/gaya-logo-1.svg" alt="Gaya logo"> Gaya</h3>
<p>A plugin-driven desktop workbench built on Guinevere — the host that Turian Studio is becoming a plugin for.</p>
<span class="more">Learn more →</span>
</a>
<a class="pillar t" href="/turian">
<span class="role">Engine · 3D</span>
<h3><img src="/turian-logo-1.svg" alt="Turian logo"> Turian</h3>
<p>A component-based 3D game engine and editor, entirely in modern C#.</p>
<span class="more">Learn more →</span>
</a>
<a class="pillar m" href="/mystery">
<span class="role">Goal · Game</span>
<h3><img src="/mystery-logo-1.svg" alt="Mystery logo"> Mystery</h3>
<p>The game that will exercise the whole stack end to end.</p>
<span class="more">Learn more →</span>
</a>
</div>

## How they depend on each other

- **Guinevere** renders the interfaces for Gaya and the Turian editor.
- **Gaya** is the platform; the Turian editor is designed to run inside it as a plugin.
- **Turian** is the engine that **Mystery** is built with.
- **Mystery** is the real-world workload that stress-tests everything below it.

Building them together keeps each one honest: a GUI toolkit is only as good as the
editor built on it, and an engine is only as good as the game it has to run.

## What changed: C#, a Zig detour, and back to C#

MEGA4 began as a C#/.NET stack. In mid-2026 we paused it for a six-month deep dive
into **Zig**, rebuilding the engine and toolchain from the ground up as TurianZ. It
grew into a substantial Zig engine — but along the way we kept using modern .NET for
every other side project, and the conclusion arrived on its own: more of the code we
enjoyed writing was C#. The stack is back in C#, with the useful ideas from the Zig
experiment carried over. TurianZ stays preserved as a legacy repository for anyone who
wants to fork or continue it. The full story is in
[the 180° turn](/blog/the-180-turn-why-turian-is-coming-home-to-c).

## Principles

- **Open by default.** Where a project is public, it is public from the first commit.
- **One language.** The entire stack is C#/.NET, top to bottom.
- **No overselling.** We describe what exists and what's planned, and keep the two clearly separate.

---

*Follow progress on [GitHub](https://github.com/MASS4ORG) or in the [blog](/blog).*

</div>
</div>
