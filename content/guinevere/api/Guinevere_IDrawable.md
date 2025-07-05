---
Title: "IDrawable"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "interface"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** IDrawable.cs

Represents a drawable object that can be rendered onto a canvas.

## Properties

### **Paint**

(*SKPaint?*) { get }: Gets or sets the paint properties associated with the drawable entity. This property defines the visual style, such as color, stroke, and other painting characteristics, used when rendering the element.


## Public Methods

### Render

```csharp
 void Render(Gui gui, LayoutNode node, SKCanvas canvas)
```

Renders the drawable element onto the specified canvas according to the provided GUI and layout node contexts.

**Parameters:**

- `gui` (*Gui*): The GUI instance providing rendering context and state.
- `node` (*LayoutNode*): The layout node containing positional and styling data for rendering.
- `canvas` (*SKCanvas*): The canvas on which the drawable element will be rendered.


