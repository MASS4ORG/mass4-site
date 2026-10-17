---
draft: true
title: "Guinevere Gets a Color Picker and Follows the System Theme"
date: 2026-10-09
tags:
  - guinevere
  - dotnet
  - csharp
Params:
  summary: "A color picker assembled from public parts, with swappable shapes and color models and #rrggbbaa copy and paste, plus the operating system's light/dark preference and accent color, with change notification."
  socialmedia: |
    Guinevere now has a color picker built from public parts: swap the surface (rectangle, wheel or your own), the channel models (RGB, HSV, HSL, linear or your own), or replace the whole layout. Hex fields copy and paste #rrggbbaa. Apps can also follow the OS light/dark theme and accent color.
  
    #Guinevere #dotnet #csharp #gamedev
  
    https://mass4.org/blog/guinevere-gets-a-color-picker-and-follows-the-system-theme/
---

Two more pieces of the theming effort land in Guinevere: a color picker ([issue #57](https://github.com/MASS4ORG/Guinevere/issues/57)) and access to the operating system's appearance ([issue #163](https://github.com/MASS4ORG/Guinevere/issues/163)).

## A picker made of parts

Every UI kit ships a slightly different color picker, and applications often want their own. So Guinevere's picker is not a monolith: it is assembled from public parts that you can use on their own.

```csharp
gui.ColorField(ref accent);                 // swatch + hex; the swatch opens the picker in a popup
gui.ColorPicker(ref color, original: saved); // the full picker inline, with a before/after preview
```

The default layout is a saturation/value rectangle with hue and alpha strips, RGB/HSV/HSL number fields, a hex field, preset swatches and recently used colors. Each piece is also a control of its own: `ColorArea`, `ColorStrip`, `ColorChannels`, `ColorHex`, `ColorSwatches` and `ColorPreview`.

Three levels of customization:

```csharp
// 1. Swap the surface or the color models.
var options = new ColorPickerOptions { Shape = ColorPickerShapes.Wheel, Modes = [ColorPickerModes.Rgb, ColorPickerModes.Linear] };

// 2. Replace the layout with parts of your own, for example a compact picker.
var compact = new ColorPickerOptions
{
    Body = (Gui gui, ref Hsva value, Color? _) =>
        gui.ColorArea(ref value, width: 0, height: 150) | gui.ColorStrip(ref value, HsvChannel.Hue, length: 0)
};

// 3. Make it the default for every picker and color field of the GUI.
ColorPickerOptions.SetDefault(gui, compact);
```

New surfaces and color models plug in through `IColorPickerShape` and `IColorPickerMode`. The picker keeps hue and saturation while you drag through grays and black, so the color never jumps back to red.

Every hex field reads and writes `#rrggbbaa`, with copy and paste buttons. It also accepts `#rgb`, `#rgba` and `#rrggbb`, with or without `#` or `0x`, so values from other tools paste as they are. Every part has a `.pss` style contract (`color-area cursor`, `color-strip thumb`, `swatch:selected`, …) in the default sheet. An `IColorSamplerCapability` hook adds an eyedropper button wherever the platform provides one.

## Following the system theme

`gui.SystemAppearance` reports the user's light/dark preference, accent color and contrast preference. The desktop integrations read it from the XDG desktop portal on Linux, the registry on Windows and `defaults` on macOS. Other platforms report "no preference". Changes arrive while the application runs, and `gui.SystemAppearanceChanged` flags the frame where they happen.

One call themes an Excalibur application to match:

```csharp
ExcaliburStyles.FollowSystemAppearance(gui); // light or dark theme, plus the system accent as $accent
```

The control gallery (Example 50) has a new Colors page and a "Follow system theme" option.
