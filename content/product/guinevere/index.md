---
Title: Guinevere
Description: A blazing fast Immediate Mode GUI library for C# with razor-sharp focus on performance, simplicity, and expressive power.
kind: single
---

**A blazing fast Immediate Mode GUI library for C#**

Guinevere brings the power and simplicity of immediate mode GUI programming to the .NET ecosystem. Inspired by industry leaders like Dear ImGui and designed with C# developers in mind, Guinevere delivers uncompromising performance without sacrificing ease of use.

## Why Immediate Mode?

Traditional retained mode GUI frameworks require you to create, manage, and destroy UI elements. This leads to complex state management, memory overhead, and performance bottlenecks. Immediate mode flips this paradigm:

- **No state management**: UI is rebuilt every frame based on your application's current state
- **Minimal memory overhead**: No persistent UI objects cluttering memory
- **Direct control**: Your code directly drives the UI, making debugging and customization straightforward
- **High performance**: Optimized rendering path with minimal CPU overhead

## Core Features

:::{.col .span-4 .box}
### Blazing Performance
- Zero-allocation rendering where possible
- Optimized draw call batching
- 60+ FPS even with complex interfaces
- GPU-accelerated rendering pipeline
:::

:::{.col .span-4 .box}
### Simple API
- Clean, intuitive immediate mode paradigm
- No complex inheritance hierarchies
- Minimal boilerplate code
- Hot reload support for rapid development
:::

:::{.col .span-4 .box}
### Expressive Power
- Rich set of built-in controls
- Flexible layout system
- Comprehensive theming and styling
- Custom drawing primitives
:::

:::{.col .span-4 .box}
### Cross-Platform
- Windows, macOS, and Linux support
- Native performance on all platforms
- Consistent look and behavior
- OpenGL and Vulkan rendering backends
:::

## Quick Start

Get up and running in minutes:

```csharp
using Guinevere;

abstract class HelloWorld
{
    private string name = "World";
    private float value = 0.5f;
    private bool enabled = true;

    public void Main()
    {
        var gui = new Gui();
        var win = new Window(gui, "Hello, Guinevere!");

        win.RunGui(() {
            Gui.DrawText("Hello, Guinevere!");

            Gui.InputText("Name", ref name);
            Gui.Slider("Value", ref value, 0f, 1f);
            Gui.Checkbox("Enabled", ref enabled);

            if (Gui.Button($"Greet {name}") && enabled)
            {
                Console.WriteLine($"Hello, {name}! Value: {value:F2}");
            }
        });
    }
}
```

- **[API Reference](/guinevere/api)** - Complete API documentation

## Installation

### .NET CLI

```
dotnet add package Guinevere
```

## License

Guinevere is released under the MIT License. See [LICENSE](https://github.com/mass4/guinevere/blob/main/LICENSE) for details.

## Community

- 💬 [Discord Server](https://discord.gg/mass4)
- 🐛 [Issue Tracker](https://github.com/mass4/guinevere/issues)

---

*Guinevere is part of the [MEGA4](/mega4) Initiative by [MASS4](/) - four revolutionary tools for modern development.*
