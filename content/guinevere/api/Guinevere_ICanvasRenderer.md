---
Title: "INTERFACE ICanvasRenderer"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "interface"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** ICanvasRenderer.cs

Defines the interface for rendering graphics to a canvas. Provides methods for initializing, resizing, and rendering content onto the canvas surface.

## Public Methods

### Initialize

```csharp
 void Initialize(int width, int height)
```

Initializes the canvas with the specified width and height.

**Parameters:**

- `width` (*int*): The width of the canvas in pixels. Must be greater than zero.
- `height` (*int*): The height of the canvas in pixels. Must be greater than zero.


### Resize

```csharp
 void Resize(int width, int height)
```

Resizes the canvas to the specified width and height.

**Parameters:**

- `width` (*int*): The new width of the canvas. Must be greater than zero.
- `height` (*int*): The new height of the canvas. Must be greater than zero.


### Render

```csharp
 void Render(Action<SKCanvas> draw)
```

Renders the graphical content to the canvas using the provided draw action.

**Parameters:**

- `draw` (*Action<SKCanvas>*): The action that defines the drawing logic on the canvas.


