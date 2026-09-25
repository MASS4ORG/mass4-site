---
Title: MEGA4
Description: One initiative, four interconnected projects built simultaneously and in the open — a GUI library, a text editor, a game engine, and a game.
---

<section class="project-hero">
  <div class="wrap">
    <img src="/mega4-logo-1.svg" alt="MEGA4 logo">
    <div class="eyebrow">The initiative</div>
    <h1>MEGA4</h1>
    <p class="lede" style="margin-inline:auto">Four projects, built at the same time and in public. Each one is the foundation for the next.</p>
  </div>
</section>

<div class="wrap section">
<div class="prose narrow">

Most software is built behind closed doors and revealed only when it's polished.
MEGA4 takes the opposite approach: four codependent projects, developed in the open,
where the rough edges and dead ends are visible alongside the progress.

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
<p>A community-shaped game that exercises the whole stack end to end.</p>
<span class="more">Learn more →</span>
</a>
</div>

## How they depend on each other

- **Guinevere** renders the interfaces for Gaya and the Turian editor.
- **Gaya** is the platform; the Turian editor is designed to run inside it as a plugin.
- **Turian** is the engine that **Mystery** is built with.
- **Mystery** is the real-world workload that stress-tests everything below it.

Building them together keeps each one honest: a GUI toolkit is only as good as the
editor built on it, and an engine is only as good as the game it has to ship.

## What changed: C#, a Zig detour, and back to C#

MEGA4 began as a C#/.NET stack. In mid-2026 we paused it for a six-month deep dive
into **Zig**, rebuilding the engine and toolchain from the ground up as TurianZ. It
grew into one of the more feature-rich Zig engines around — but along the way we kept
using modern .NET for every other side project, and eventually the conclusion was
inescapable: more of the code we enjoyed writing was C#. The whole stack is back home
in C#, with the best ideas from the Zig experiment carried over. TurianZ remains
preserved as a legacy repository for anyone who wants to fork or continue it. The full
story is in [the 180° turn](/blog/the-180-turn-why-turian-is-coming-home-to-c).

## Principles

- **Open by default.** Code, assets, and design decisions are public from the start.
- **One language.** The entire stack is C#/.NET, top to bottom.
- **No overselling.** We describe what exists and what's planned, and keep the two clearly separate.

---

*Follow progress on [GitHub](https://github.com/MASS4ORG) or in the [blog](/blog).*

</div>
</div>
