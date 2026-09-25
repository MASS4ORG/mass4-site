---
title: "Turian is live — a 3D game engine built entirely in Zig"
date: 2026-06-11
summary: "Turian now has a home on the web. A component-based 3D engine and editor, one language from engine to game logic — and an honest look at what works today."
tags: ["announcement", "turian", "zig", "engine", "mega4"]
socialmedia: |
  Turian now has a home: turian.mass4.org. A component-based 3D engine and editor with one language across engine, editor, game logic and build toolchain.

  #Turian #ziglang #gamedev #gameengine

  https://turian.mass4.org
---

Turian now has its own home: **[turian.mass4.org](https://turian.mass4.org)**.

It's a component-based 3D game engine and editor built entirely in [Zig](https://ziglang.org/) — one language for the engine, the editor, your game logic, and the build toolchain, with no garbage collector and no revenue share.

## What's working today

Turian is early. It covers a useful subset of the basics — import, scenes, components, build — and is not
comparable to a mature engine yet:

- **Turian Studio** — a visual editor with a scene hierarchy, inspector, asset browser, and a GPU-accelerated 3D viewport via SDL3 (Vulkan, Metal, or D3D12 depending on platform).
- **Components are just structs** — add `pub const is_component = true;` to any Zig struct and it shows up in *Add Component* with its public fields editable in the inspector. The engine parses real Zig source directly, not regexes or annotations.
- **Live script discovery** — drop a `.zig` file into your project's `assets/` folder, hit *Refresh*, and your component is immediately available. No codegen, no build step.
- **Asset pipeline** — OBJ, glTF/GLB, PNG, and JPEG import, with full PBR materials: metallic-roughness, normal maps, emissive, occlusion, all the maps.
- **Headless builds** — `turian-cli build` cooks your assets and links a single self-contained native binary, identical to what the editor produces and fully CI-friendly.

## The roadmap ahead

Milestones ship usable leaps, not feature dumps:

| Milestone | Focus |
|-----------|-------|
| **Playable Game** | input, audio, physics |
| **AAA Workflows** | Play Mode, gizmos, undo/redo everywhere, drag-and-drop |
| **Real 3D** | glTF material import, mip-mapped textures, KTX2, multi-light shadows, color management |
| **Rich Content** | animation, prefabs, particles, LOD |
| **Production Ready** | a stable, documented release with an upgrade path |

The live [milestone tracker](https://github.com/MASS4ORG/turian/) shows exactly where things stand.

## Where it fits in MEGA4

Turian sits at the top of the stack. Its editor is planned to eventually become a plugin for [Gaya](/gaya), with [Guinevere](/guinevere) as the GUI layer underneath — the same architecture that powers the rest of the initiative. The first real game built with it is [Mystery](/mystery).

## Try it

The dedicated site has the getting-started guide, install instructions, and a frank assessment of every subsystem's current state. Free software under GPLv3.

→ **[turian.mass4.org](https://turian.mass4.org)**
