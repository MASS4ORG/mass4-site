---
Title: "Text"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Text.cs

Represents a drawable text element that can be rendered onto a canvas. Instances of this class encapsulate text rendering properties such as the text content, position, font, and paint settings.

## Properties

### **Label**

(*string?*) { get } = `label`: Gets the label text to be rendered. This property contains the string value that represents the textual content associated with this drawing instance.

### **Font**

(*SKFont?*) { get } = `font`: Gets the `SKFont` defining the font style and typeface used to render the text. This property specifies the visual appearance of the text, including weight, size, and family.

### **Position**

(*Vector2*) { get } = `position ?? Vector2.Zero`: Gets the `Vector2` representing the position of the text. This property defines the coordinates within the canvas where the text will be drawn.

### **Paint**

(*SKPaint?*) { get; set } = `paint`: Gets or sets the `SKPaint` object used to define the paint style for rendering the text. This includes settings such as color, stroke, and fill for text drawing operations.


## Public Methods

### Render

```csharp
public void Render(Gui gui, LayoutNode node, SKCanvas canvas)
```

Renders the specified text onto the provided canvas using the given parameters. Scroll offsets are now handled during layout calculation.

**Parameters:**

- `gui` (*Gui*): The GUI context used for rendering the text.
- `node` (*LayoutNode*): The layout node that the text is associated with.
- `canvas` (*SKCanvas*): The canvas onto which the text will be drawn.


