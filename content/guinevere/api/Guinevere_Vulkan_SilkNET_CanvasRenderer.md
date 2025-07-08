---
Title: "CanvasRenderer"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "CanvasRenderer"
  namespace: "Guinevere.Vulkan.SilkNET"
  symbol: "class"
  source: "CanvasRenderer.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere.Vulkan.SilkNET](/guinevere/api/guinevere.vulkan.silknet)
- **Source File:** [CanvasRenderer.cs](https://github.com/brmassa/blob/main/CanvasRenderer.cs)

Represents a Vulkan-based canvas renderer using Silk.NET and SkiaSharp. This class handles rendering operations, screen resizing, and resource disposal for a Vulkan-powered window interface.

## Public Methods

### Initialize

```csharp
public void Initialize(int width, int height)
```

**Parameters:**

- `width` (*int*)
- `height` (*int*)


### Initialize

```csharp
public void Initialize(int width, int height, IWindow window, bool firstTime = true)
```

Initializes the CanvasRenderer with the specified dimensions, window context, and configuration.

**Parameters:**

- `width` (*int*): The width of the rendering canvas.
- `height` (*int*): The height of the rendering canvas.
- `window` (*IWindow*): The window context to associate with the renderer.
- `firstTime` (*bool*): Indicates whether this is the first time initialization. If true, performs full initialization. False allows for partial initialization, such as during resizing. (Default: `true`)


### Render

```csharp
public void Render(Action<SKCanvas> draw)
```

**Parameters:**

- `draw` (*Action<SKCanvas>*)


### Resize

```csharp
public void Resize(int width, int height)
```

**Parameters:**

- `width` (*int*)
- `height` (*int*)


### Dispose

```csharp
public void Dispose()
```


