---
Title: Turian
Description: A component-based 3D game engine and editor built entirely in Zig. Part of the MEGA4 initiative.
---

<section class="project-hero">
  <div class="wrap">
    <img src="/turian-logo-1.svg" alt="Turian logo">
    <div class="eyebrow">Engine · 3D</div>
    <h1>Turian</h1>
    <p class="lede" style="margin-inline:auto">A component-based 3D game engine and editor, built entirely in Zig. It has its own dedicated site and documentation.</p>
    <div class="hero-cta" style="justify-content:center">
      <a class="btn btn-primary" href="https://turian.mass4.org">Visit turian.mass4.org</a>
      <a class="btn btn-ghost" href="https://gitlab.com/mass4org/mega4/turian">Source</a>
    </div>
  </div>
</section>

<div class="wrap section">
<div class="prose narrow">

Turian gives you a Unity-style editor workflow — a scene hierarchy, an inspector, an
asset browser, and a live 3D viewport — without a garbage collector or a scripting
bridge. The engine, the editor, your game logic, and the build tooling are all Zig.

## What works today

- A visual editor (Turian Studio) with scene tree, inspector, and asset browser.
- A GPU viewport via SDL3 (Vulkan / Metal / D3D12).
- Components defined as plain Zig structs, discovered from your project's `assets/`.
- An asset pipeline for OBJ, glTF/GLB, PNG, and JPG.
- A headless CLI that builds a self-contained game executable.

It's early — roughly Godot-3-level capability — and under active development. The
[dedicated site](https://turian.mass4.org) has the honest, up-to-date status, the
docs, and the download.

## Where it fits in MEGA4

Turian sits at the top of the stack. Its editor is planned to become a **plugin for
[Gaya](/gaya)** rather than a standalone application, with [Guinevere](/guinevere)
providing the interface layer underneath. The first real project built with it is
[Mystery](/mystery).

## Learn more

The full story lives on the dedicated site:

- **Website & docs:** [turian.mass4.org](https://turian.MASS4.org)
- **Source:** [github.com/mass4org/mega4/turian](https://github.com/MASS4ORG/turian)

</div>
</div>
