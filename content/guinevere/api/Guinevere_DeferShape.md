---
Title: "DeferShape"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "DeferShape"
  namespace: "Guinevere"
  symbol: "class"
  source: "DeferShape.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [DeferShape.cs](https://github.com/brmassa/blob/main/DeferShape.cs)

The `DeferShape` class extends the `Shape` class and serves as a specialized geometric shape that supports deferred rendering with customizable properties such as corner rounding and selective corner modification.

## Fields

### **Radius** (*float*): Defines the radius used to round the corners of a shape. This property determines the degree of curvature applied, with larger values resulting in more pronounced rounding.
### **Corners** (*Corner*) = `Corner.All`: Specifies the corners of a shape to which a radius or modification is applied. This property determines which corners of the shape will be rounded or affected during rendering.

## Public Methods

### Render

```csharp
public override void Render(Gui gui, LayoutNode node, SKCanvas canvas)
```

Renders the current shape onto the specified canvas using the provided GUI and layout node.

**Parameters:**

- `gui` (*Gui*): The GUI instance providing context for the rendering operation.
- `node` (*LayoutNode*): The layout node defining the position and dimensions for rendering.
- `canvas` (*SKCanvas*): The canvas where the shape will be drawn.


### Rect

```csharp
public new static DeferShape Rect(float left, float top, float right, float bottom)
```

Creates a rectangular shape with specified boundaries.

**Parameters:**

- `left` (*float*): The x-coordinate of the left edge of the rectangle.
- `top` (*float*): The y-coordinate of the top edge of the rectangle.
- `right` (*float*): The x-coordinate of the right edge of the rectangle.
- `bottom` (*float*): The y-coordinate of the bottom edge of the rectangle.

**Returns:** `DeferShape`

- A `DeferShape` instance that represents the rectangular shape.

### DrawRectFilled

```csharp
public static DeferShape DrawRectFilled(Color color, float radius, Corner corners = Corner.All)
```

Creates a rectangular shape filled with a specified solid color, with options for rounded corners and a configurable radius.

**Parameters:**

- `color` (*Color*): The color used to fill the rectangle.
- `radius` (*float*): The radius of the rounded corners. Set to 0 for square corners.
- `corners` (*Corner*): Specifies which corners of the rectangle should be rounded. (Default: `Corner.All`)

**Returns:** `DeferShape`

- A `DeferShape` representing the filled rectangle with the specified attributes.

