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
<p>A GPU-native, immediate-mode UI toolkit — planned as a Zig fork of DVUI. Everything else draws its interface with it.</p>
<span class="more">Learn more →</span>
</a>
<a class="pillar ga" href="/gaya">
<span class="role">Tool · Editor</span>
<h3><img src="/gaya-logo-1.svg" alt="Gaya logo"> Gaya</h3>
<p>A small, fast text editor and plugin platform built on Guinevere — the host that Turian Studio plugs into.</p>
<span class="more">Learn more →</span>
</a>
<a class="pillar t" href="/turian">
<span class="role">Engine · 3D</span>
<h3><img src="/turian-logo-1.svg" alt="Turian logo"> Turian</h3>
<p>A component-based 3D game engine and editor in pure Zig, with its own site at turian.mass4.org.</p>
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

## What changed: C# to Zig

MEGA4 began as a C#/.NET stack. We've since moved the whole thing to **Zig** — a
single, lower-level toolchain with no garbage collector and no runtime, which suits a
GUI library, an editor, and a game engine far better. Some pages still describe the
direction rather than a finished product; that's deliberate.

## Principles

- **Open by default.** Code, assets, and design decisions are public from the start.
- **One language.** The entire stack is Zig, top to bottom.
- **No overselling.** We describe what exists and what's planned, and keep the two clearly separate.

---

*Follow progress on [GitLab](https://gitlab.com/mass4org/mega4) or in the [news](/news).*

</div>
</div>
