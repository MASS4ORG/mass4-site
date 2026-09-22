---
title: "Turian is live — a 3D game engine built entirely in Zig"
date: 2026-06-11
summary: "Turian now has a home on the web. A component-based 3D engine and editor with no GC, no scripting bridge, and no per-seat licensing — built in Zig."
tags: ["announcement", "turian", "zig", "engine", "mega4"]
---

Turian now has its own home: **[turian.mass4.org](https://turian.mass4.org)**.

It's a component-based 3D game engine and editor built entirely in [Zig](https://ziglang.org/) — one language for the engine, the editor, your game logic, and the build toolchain. No C# VM, no scripting bridge, no garbage collector, no revenue share, no per-seat fee.

## What's working today

Turian is early — roughly Godot 3 parity — but it's genuinely usable:

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
| **Production Ready** | a credible alternative for professional studios |

The live [milestone tracker](https://github.com/MASS4ORG/turian/) shows exactly where things stand.

## Where it fits in MEGA4

Turian sits at the top of the stack. Its editor is planned to eventually become a plugin for [Gaya](/gaya), with [Guinevere](/guinevere) as the GUI layer underneath — the same architecture that powers the rest of the initiative. The first real game built with it is [Mystery](/mystery).

## Try it

The dedicated site has the getting-started guide, install instructions, and a frank assessment of every subsystem's current state. Free software under GPLv3.

→ **[turian.mass4.org](https://turian.mass4.org)**
