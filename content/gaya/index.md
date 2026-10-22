---
Title: Gaya
Description: A plugin-driven desktop workbench built on Guinevere — the host Turian Studio is becoming a plugin for.
Params:
  The: The Platform
  Logo: '/gaya-badge.svg'
---

{{< project-hero >}}

## Not Just a Text Editor

Earlier plans framed Gaya as a standalone text editor. In practice it turned out to be more useful as infrastructure: a small, well-tested application shell that other tools plug into, rather than another editor competing for attention.

- **GPU-Accelerated Rendering**: Every pixel is drawn through Guinevere, on your graphics card
- **Plugin Architecture**: `MASS4.Gaya.Sdk` defines the plugin contract; `MASS4.Gaya.Host` is the shell — plugin activation, workbench, docking, layout persistence
- **Host, Not Product**: The shell carries no built-in opinion about what it edits

## Powering Turian Studio

Gaya's first real plugin is **Turian Studio**: the scene tree, inspector, asset browser and viewport for the [Turian](/turian) engine, running as a plugin instead of a standalone application. That conversion is in progress — Turian's existing editor remains the daily driver until the Gaya-hosted version reaches parity.

{{< image-compare image1="Guinevere-theme-1.webp" description1="" image2="Guinevere-theme-2.webp" description2="" >}}

## Early and Not Yet Public

> Gaya currently lives inside the Turian repository and isn't released as a separate, public project yet.

Gaya is versioned independently of Turian and doesn't depend on it in either direction — that boundary is enforced in the codebase itself.

---

*Gaya is part of the [MEGA4 initiative](/mega4) by [MASS4](/).*
