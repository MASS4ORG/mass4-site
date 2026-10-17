---
draft: true
title: "Guinevere's Controls Are Now Styled by Stylesheets"
date: 2026-10-09
tags:
  - guinevere
  - dotnet
  - csharp
Params:  
  summary: "Every Excalibur control now takes its look from .pss stylesheets: one default sheet, token-only color themes, subtree tokens and per-control style contracts. ControlPalette is gone, the default is dark, and here is how to migrate."
  socialmedia: |
    Guinevere's Excalibur controls are now fully stylesheet-driven: a default .pss sheet, token-only color themes, subtree tokens and a documented style contract per control. ControlPalette is gone and the default look is dark. Migration steps inside.
  
    #Guinevere #dotnet #csharp #gamedev
  
    https://mass4.org/blog/guinevere-s-controls-are-now-styled-by-stylesheets/
---

Until now, Guinevere's Excalibur controls drew themselves by hand. Colors came from a 24-entry `ControlPalette`, and sizes, radii, focus rings and borders were literals inside each control. A stylesheet engine already existed, but the controls didn't read it. With [issue #160](https://github.com/MASS4ORG/Guinevere/issues/160) that changes: every control, from buttons to the file dialog, resolves its look from `.pss` stylesheets.

The direction follows PanGui's [immediate-mode styling](https://www.pangui.io/blog/03-immediate-mode-styling/) design. A look is a matter of taste and fashion, so Guinevere ships a complete, themable set of controls. Anyone who wants the last bit of performance can still compose their own controls from the same primitives.

## One default sheet, many themes

Excalibur embeds `guinevere.default.pss` and keeps it under every application sheet. Anything in it can be overridden by a theme, by an application sheet, or by a token on a subtree. A color theme is just a sheet of `$token = value;` declarations, layered right above the default:

```csharp
ExcaliburStyles.SetTheme(gui, ExcaliburStyles.Light);  // also MonoLight, MonoDark, or any token sheet of your own
var ink = ExcaliburStyles.TokenColor(gui, "text");      // theme colors for your own drawing
```

The default look is now **dark**. `ExcaliburStyles.Light`, `MonoLight` and `MonoDark` ship alongside it.

## Classes instead of color parameters

Controls no longer take color or radius arguments. They take `classes` and `id`, and the sheet decides:

```csharp
gui.StyleSheets.Add(StyleSheet.Parse("""
    $accent = #88c0d0;
    button.danger { background-color = #dc3545; color = #ffffff; :hover { background-color = #c82131; } }
    """));

if (gui.Button("Delete", classes: ["danger"])) Delete();

using (gui.Node().Enter())
{
    gui.SetStyleToken("surface", Color.FromArgb(255, 40, 44, 52)); // this subtree only
    gui.Button("Dark");
}
```

Tokens are inherited down the node tree, so a panel can re-theme everything inside it without touching the controls.

## Style contracts

Each control publishes a contract: its element name, the classes it adds, the states it sets (`:hover`, `:focus`, `:disabled`, `:checked`, `:open`, `:selected`, …) and the properties it reads. Drawn parts such as a slider's thumb or a checkbox's indicator are addressable too:

```pss
slider.volume > thumb { width = 18; height = 18; border-radius = 50%; }
slider.volume:focus > thumb { outline = 2px solid $accent; outline-offset = 3; }
progress.download > fill { background = linear-gradient(to right, #5081d9, #88c0d0); }
```

The full table lives in the Excalibur README, and the default sheet is the normative list.

## Borders follow CSS

A border used to be stroked on the box edge, so half of it fell outside the node and blurred across two pixels. Borders now lie inside the box, and per-side borders (`border-top-width`, …) are honored.

## Cost

Styled controls stay within budget of hand-drawn ones. In the benchmark suite, the styled/hard-coded loop ratio is 1.00×, and resolving a cached style costs about 50 ns with no allocation. Retiring the palette also shrank per-node scope storage: a fixed-frame probe measures about 210 fewer bytes per node than before (2,304 → 2,094).

## Migrating

This is a breaking release.

| Before | After |
|---|---|
| default (light) look | `ExcaliburStyles.SetTheme(gui, ExcaliburStyles.Light)`; the default is now dark |
| `ControlPalette = ControlPalette.Dark` | nothing: dark is the default |
| a custom `new ControlPalette { Surface = … }` | a sheet of `$surface = …;` tokens passed to `SetTheme`, or `gui.StyleSheets.SetToken("surface", …)` |
| `gui.ControlPalette.Text`, `gui.ControlStyle.Text` | `ExcaliburStyles.TokenColor(gui, "text")` |
| a subtree color override through `ControlStyles.Value<…>` | `gui.SetStyleToken("accent", c)` |
| `gui.ApplyControlPalette()` with a `control-palette { … }` rule | top-level `$token = value;` declarations in a sheet |
| color or radius arguments on a control | `classes:` or `id:` plus a sheet rule |

Token names are the old palette property names in kebab case (`SurfaceHover` → `surface-hover`). Control dimensions (`gui.ControlStyle` sizes and spacing) are unchanged. Excalibur now depends on the `MASS4.Guinevere.Styling` package.

## What's next

This is one step of a larger theming effort: animated state transitions, a font registry, a color picker built from composable parts, and following the operating system's light/dark preference. Together they let an application, including our own studio, ship and switch complete themes as plain files.
