---
Title: Guinevere
Description: A GPU-native, immediate-mode GUI toolkit in Zig — planned as a fork of DVUI, tuned to be the foundation of the MEGA4 stack.
---

<section class="project-hero">
  <div class="wrap">
    <img src="/guinevere-logo-1.svg" alt="Guinevere logo">
    <div class="eyebrow">Foundation · GUI</div>
    <h1>Guinevere</h1>
    <p class="lede" style="margin-inline:auto">A GPU-native, immediate-mode UI toolkit — the layer that draws every interface in the MEGA4 stack.</p>
    <div class="hero-cta" style="justify-content:center">
      <a class="btn btn-primary" href="https://github.com/MASS4ORG/Guinevere">Source</a>
      <a class="btn btn-ghost" href="https://github.com/david-vanderson/dvui">DVUI (upstream)</a>
    </div>
  </div>
</section>

<div class="wrap section">
<div class="prose narrow">

> **Direction, not a release.** Guinevere is at an early, formative stage. This page
> describes what it's for and where it's going, not a finished library.

Modern UI stacks are deep. A window with a few buttons and some text often sits on
millions of lines of framework code. Guinevere is our attempt to keep the interface
layer small, fast, and understandable — close enough to the GPU that you can reason
about what every frame costs.

## The plan: a Zig fork of DVUI

Guinevere began as a from-scratch C# experiment. With the move to Zig, the most
sensible path is to build on [**DVUI**](https://github.com/david-vanderson/dvui), a
mature immediate-mode GUI library for Zig, rather than reinvent it. Guinevere will be
a fork tuned for the needs of the rest of the stack — primarily [Gaya](/gaya) and the
[Turian](/turian) editor.

That means we inherit a working foundation and focus our effort where it's specific to
MEGA4, instead of re-solving problems the Zig GUI community has already solved well.

## What we're aiming for

- **Immediate-mode first.** UI code lives next to the data it represents, with an
  optional retained layer on top when it helps.
- **GPU rendering.** Shapes, text, and effects resolved on the graphics card.
- **Small and embeddable.** The job is turning input into a list of draw commands, so
  it can slot into any rendering pipeline — including a game engine's.
- **Code-driven.** No separate markup or stylesheet files; the API is the interface.

## Where it fits

Guinevere is the bottom of the MEGA4 stack. [Gaya](/gaya) is built on it, the
[Turian](/turian) editor renders through it, and [Mystery](/mystery) exercises it in a
shipping game. Building the toolkit and its consumers together is the point — it keeps
the API grounded in real use.

---

*Guinevere is part of the [MEGA4 initiative](/mega4) by [MASS4](/).*

</div>
</div>
