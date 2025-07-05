---
Title: "CLASS CanvasRenderer"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.OpenGL.SilkNET"
  type: "class"
---

- **Namespace:** [Guinevere.OpenGL.SilkNET](/guinevere/api/namespace-guinevere.opengl.silknet)
- **Source File:** CanvasRenderer.cs
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


