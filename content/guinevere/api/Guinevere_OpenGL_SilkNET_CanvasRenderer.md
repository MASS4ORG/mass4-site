---
Title: "CanvasRenderer"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "CanvasRenderer"
  namespace: "Guinevere.OpenGL.SilkNET"
  symbol: "class"
  source: "CanvasRenderer.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere.OpenGL.SilkNET](/guinevere/api/guinevere.opengl.silknet)
- **Source File:** [CanvasRenderer.cs](https://github.com/brmassa/blob/main/CanvasRenderer.cs)
## Public Methods

### Initialize

```csharp
public void Initialize(int width, int height, GL gl)
```

Configures and initializes the renderer with a specified width, height, and OpenGL (GL) context.

**Parameters:**

- `width` (*int*): The width of the rendering surface in pixels.
- `height` (*int*): The height of the rendering surface in pixels.
- `gl` (*GL*): The OpenGL context used for rendering operations.


### Render

```csharp
public unsafe void Render(Action<SKCanvas> draw)
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


### Initialize

```csharp
public void Initialize(int width, int height)
```

**Parameters:**

- `width` (*int*)
- `height` (*int*)


### Dispose

```csharp
public void Dispose()
```


