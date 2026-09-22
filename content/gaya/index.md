---
Title: Gaya
Description: A lightweight, GPU-accelerated text editor and plugin platform in Zig, built on Guinevere — the host that Turian Studio will plug into.
---

<section class="project-hero">
  <div class="wrap">
    <img src="/gaya-logo-1.svg" alt="Gaya logo">
    <div class="eyebrow">Tool · Editor</div>
    <h1>Gaya</h1>
    <p class="lede" style="margin-inline:auto">A small, fast text editor and plugin platform built on Guinevere — and the foundation Turian Studio runs on.</p>
    <div class="hero-cta" style="justify-content:center">
      <a class="btn btn-primary" href="https://github.com/MASS4ORG">Source</a>
    </div>
  </div>
</section>

<div class="wrap section">
<div class="prose narrow">

> **Early and experimental.** Gaya is minimal right now. The goal below is the
> direction; today it's a starting point, not a daily driver.

Gaya is a text editor built like a real-time application: the interface is drawn by
the GPU through [Guinevere](/guinevere), and redraws are cheap. The aim is an editor
that feels immediate, stays out of the way, and is small enough to understand.

## More than an editor: a platform

The more important role Gaya plays in MEGA4 is as a **generic host**. Rather than ship
the Turian engine editor as a separate desktop app, the plan is to build **Turian
Studio as a Gaya plugin**. Gaya provides the window, the document model, the layout,
and the extension API; Turian Studio adds the scene tree, inspector, and viewport on
top.

That keeps one well-tested application shell instead of several, and it means the
editor and the text tooling improve together.

## What we're aiming for

- **GPU-accelerated rendering** via Guinevere, with low input latency.
- **A small core** with a clear plugin API, so tools like Turian Studio are add-ons.
- **Fast startup and editing** on large files.

## Where it fits

Gaya sits in the middle of the stack: built on [Guinevere](/guinevere), and the host
for the [Turian](/turian) editor. It's open source under a permissive license.

---

*Gaya is part of the [MEGA4 initiative](/mega4) by [MASS4](/).*

</div>
</div>
