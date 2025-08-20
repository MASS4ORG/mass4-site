---
Title: "Shape"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "Shape"
  namespace: "Guinevere"
  symbol: "class"
  source: "Shape.Commands.cs, Shape.Paint.cs, Shape.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [Shape.Commands.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/Shape.Commands.cs), [Shape.Paint.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/Shape.Paint.cs), [Shape.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/Shape.cs)

Represents a base abstract class for creating and manipulating 2D geometric shapes with customizable rendering behaviors, transformations, and visual effects.

## Fields

### **Layers** (*SortedDictionary<int, List<(SKPath path, SKPaint paint)>>*) = `new()`: Represents a collection of layered path and paint elements associated with the shape. These layers allow for advanced rendering effects such as shadows, fills, and other visual modifications. Each layer is defined by a geometric path and its corresponding painting parameters with a Z-index for ordering.

## Properties

### **Paint**

(*SKPaint?*) { get; set }: Gets the `SKPaint` used to render the shape. This property defines the specific paint settings, such as color, style, and effects, that are applied during the rendering of the shape.

### **Path**

(*SKPath*) { get }: Gets the `SKPath` defining the geometric representation of the shape. This property represents the core structure of the shape, storing its path data, such as lines, curves, and other geometric elements.

### **Node**

(*LayoutNode?*) { get; set }: Gets or sets the associated `LayoutNode` for the shape. This property represents the layout node that provides context and layout information for the shape during rendering.


## Public Methods

### Expand

```csharp
public Shape Expand(float amount)
```

**Parameters:**

- `amount` (*float*)

**Returns:** `Shape`


### Copy

```csharp
public Shape Copy()
```

Creates a deep copy of the current shape, including all its layers and properties.

**Returns:** `Shape`

- A new `Shape` instance that is a copy of the current shape.

### Union

```csharp
public static Shape Union(Shape shape1, Shape shape2, int smoothness)
```

Combines two shapes into a single shape using a union operation, allowing customization of the result's smoothness.

**Parameters:**

- `shape1` (*Shape*): The first shape to include in the union.
- `shape2` (*Shape*): The second shape to include in the union.
- `smoothness` (*int*): The level of smoothness for the union operation. A higher value results in smoother transitions.

**Returns:** `Shape`

- A new `Shape` representing the union of the two input shapes.

### Rotate

```csharp
public Shape Rotate(Angle angle)
```

Rotates the shape by a specified angle.

**Parameters:**

- `angle` (*Angle*): The angle by which to rotate the shape, specified in degrees.

**Returns:** `Shape`

- The updated `Shape` after applying the rotation.

### Scale

```csharp
public Shape Scale(float scaleX, float scaleY)
```

Scales the shape by the specified factors along the X and Y axes.

**Parameters:**

- `scaleX` (*float*): The scaling factor for the X-axis.
- `scaleY` (*float*): The scaling factor for the Y-axis.

**Returns:** `Shape`

- The updated `Shape` after applying the scaling.

### Mix

```csharp
public Shape Mix(Shape other, float amount)
```

Creates a morphed shape by blending this shape with another shape based on the specified amount. This method performs shape interpolation by creating a weighted union of the two shapes. At amount=0, returns this shape; at amount=1, returns the other shape; values in between create a morphed blend that gradually transitions from one shape to the other.

**Parameters:**

- `other` (*Shape*): The other shape to blend with this shape.
- `amount` (*float*): The blending amount. 0.0 returns this shape, 1.0 returns the other shape, values in between create a blend.

**Returns:** `Shape`

- A new `Shape` representing the blended result.

### Onion

```csharp
public Shape Onion(float thickness)
```

Transforms a filled shape into a thick outline (onion ring) with the specified thickness.

**Parameters:**

- `thickness` (*float*): The thickness of the outline.

**Returns:** `Shape`

- A new `Shape` representing the thick outline.

### MoveX

```csharp
public Shape MoveX(float deltaX)
```

Moves the shape horizontally by the specified amount.

**Parameters:**

- `deltaX` (*float*): The amount to move the shape along the X-axis.

**Returns:** `Shape`

- A new `Shape` with the translated position.

### MoveY

```csharp
public Shape MoveY(float deltaY)
```

Moves the shape vertically by the specified amount.

**Parameters:**

- `deltaY` (*float*): The amount to move the shape along the Y-axis.

**Returns:** `Shape`

- A new `Shape` with the translated position.

### Move

```csharp
public Shape Move(float deltaX, float deltaY)
```

Moves the shape both horizontally and vertically by the specified amounts.

**Parameters:**

- `deltaX` (*float*): The amount to move the shape along the X-axis.
- `deltaY` (*float*): The amount to move the shape along the Y-axis.

**Returns:** `Shape`

- A new `Shape` with the translated position.

### AddY

```csharp
public Shape AddY(float deltaY)
```

Alias for MoveY - adds the specified amount to the Y position of the shape.

**Parameters:**

- `deltaY` (*float*): The amount to add to the Y position.

**Returns:** `Shape`

- A new `Shape` with the translated position.

### InnerShadow

```csharp
public Shape InnerShadow(Color color, Vector2 offset, float blurRadius = 0, int spread = 0)
```

Applies an inner shadow effect to the shape using the specified color, offset, blur radius, and spread value.

**Parameters:**

- `color` (*Color*): The color of the shadow.
- `offset` (*Vector2*): The offset of the shadow relative to the shape.
- `blurRadius` (*float*): The radius of the blur applied to the shadow. (Default: `0`)
- `spread` (*int*): The spread of the shadow, which adjusts its size. (Default: `0`)

**Returns:** `Shape`

- The `Shape` instance with the applied inner shadow effect.

### OuterShadow

```csharp
public Shape OuterShadow(Color color, Vector2 offset, float blurRadius = 0, float spread = 0)
```

Applies an outer shadow effect to the shape using the specified color, offset, blur radius, and spread value.

**Parameters:**

- `color` (*Color*): The color of the shadow.
- `offset` (*Vector2*): The offset of the shadow relative to the shape.
- `blurRadius` (*float*): The radius of the blur applied to the shadow. (Default: `0`)
- `spread` (*float*): The spread of the shadow, which adjusts its size. (Default: `0`)

**Returns:** `Shape`

- The `Shape` instance with the applied outer shadow effect.

### RadialGradientColor

```csharp
public Shape RadialGradientColor(Color colorA, Color colorB, float innerRadius, float outerRadius, float offsetX = 0, float offsetY = 0)
```

Applies a radial gradient color effect to the shape using the specified colors, radii, and offsets.

**Parameters:**

- `colorA` (*Color*): The color at the inner radius of the gradient.
- `colorB` (*Color*): The color at the outer radius of the gradient.
- `innerRadius` (*float*): The radius where the gradient starts with the inner color.
- `outerRadius` (*float*): The outermost radius of the gradient where the outer color is applied.
- `offsetX` (*float*): Horizontal offset for the gradient center. Defaults to 0. (Default: `0`)
- `offsetY` (*float*): Vertical offset for the gradient center. Defaults to 0. (Default: `0`)

**Returns:** `Shape`

- The `Shape` instance with the applied radial gradient effect.

### LinearGradientColor

```csharp
public Shape LinearGradientColor(Color color1, Color color2, float angleDeg = 0, float scale = 1)
```

Applies a linear gradient color effect to the shape using the specified colors, angle, and scale.

**Parameters:**

- `color1` (*Color*): The starting color of the gradient.
- `color2` (*Color*): The ending color of the gradient.
- `angleDeg` (*float*): The angle of the gradient in degrees, with 0 being horizontal. Defaults to 0. (Default: `0`)
- `scale` (*float*): A scaling factor for the gradient's size. Defaults to 1. (Default: `1`)

**Returns:** `Shape`

- The `Shape` instance with the applied gradient effect.

### SolidColor

```csharp
public Shape SolidColor(Color? color)
```

Sets the shape's color to a solid color using the specified color.

**Parameters:**

- `color` (*Color?*): The color to apply to the shape as a solid fill.

**Returns:** `Shape`

- Returns the updated shape with the applied solid color.

### Stroke

```csharp
public Shape Stroke(Color color, float thickness)
```

Configures the shape to use a border with the specified color and thickness.

**Parameters:**

- `color` (*Color*): The color of the border.
- `thickness` (*float*): The thickness of the border.

**Returns:** `Shape`

- Returns the updated shape with the applied border settings.

### Render

```csharp
public virtual void Render(Gui gui, LayoutNode node, SKCanvas canvas)
```

Renders the shape, including its layers and main content, onto the specified canvas. This method draws layers in Z-order: negative layers first (outer shadows), then the main shape at layer 0, then positive layers (inner shadows). Applies cumulative scroll offset from parent scrollable containers.

**Parameters:**

- `gui` (*Gui*): The GUI context that facilitates rendering operations and state management.
- `node` (*LayoutNode*): The layout node associated with this shape, typically defining position and layout properties.
- `canvas` (*SKCanvas*): The canvas where the shape is rendered.


### Rect

```csharp
public static Shape Rect(float left, float top, float right, float bottom)
```

Creates a rectangular shape defined by the specified corner coordinates.

**Parameters:**

- `left` (*float*): The X-coordinate of the left side of the rectangle.
- `top` (*float*): The Y-coordinate of the top side of the rectangle.
- `right` (*float*): The X-coordinate of the right side of the rectangle.
- `bottom` (*float*): The Y-coordinate of the bottom side of the rectangle.

**Returns:** `Shape`

- A new `Shape` representing the specified rectangle.

### RoundRect

```csharp
public static Shape RoundRect(float topLeftX, float topLeftY, float bottomRightX, float bottomRightY, float radius, Corner corners = Corner.All)
```

Creates a rectangular shape with rounded corners, defined by the specified bounds, corner radius, and optional rounded corner configuration.

**Parameters:**

- `topLeftX` (*float*): The X-coordinate of the top-left corner of the rectangle.
- `topLeftY` (*float*): The Y-coordinate of the top-left corner of the rectangle.
- `bottomRightX` (*float*): The X-coordinate of the bottom-right corner of the rectangle.
- `bottomRightY` (*float*): The Y-coordinate of the bottom-right corner of the rectangle.
- `radius` (*float*): The radius of the rounded corners.
- `corners` (*Corner*): A bitwise combination of `Corner` values to specify which corners are rounded. Defaults to `All`. (Default: `Corner.All`)

**Returns:** `Shape`

- A new `Shape` representing the specified rounded rectangle.

### Circle

```csharp
public static Shape Circle(float radius, Vector2? center = null)
```

Creates a circular shape defined by a radius and an optional center position.

**Parameters:**

- `radius` (*float*): The radius of the circle.
- `center` (*Vector2?*): The center position of the circle. If not specified, the default center is at (0, 0). (Default: `null`)

**Returns:** `Shape`

- A new `Shape` representing the specified circle.

### Arc

```csharp
public static Shape Arc(float centerRadius, float halfThickness, Angle? start, Angle? turn = null)
```

Creates an arc-shaped `Shape` object based on the given parameters, including its position, thickness, and angular span. The arc includes rounded caps at its start and end points based on the specified thickness.

**Parameters:**

- `centerRadius` (*float*): The radius from the center of the arc to the middle of its thickness.
- `halfThickness` (*float*): Half the thickness of the arc. This value determines how thick the arc will be.
- `start` (*Angle?*): The starting angle of the arc, represented in angular units such as degrees or radians.
- `turn` (*Angle?*): The angular span or sweep of the arc, beginning at the starting angle and extending clockwise. (Default: `null`)

**Returns:** `Shape`

- A new `Shape` object representing the constructed arc.

### Pie

```csharp
public static Shape Pie(float centerRadius, float halfThickness, Angle? start, Angle? turn = null)
```

Creates a new pie-shaped shape with the specified center radius, half thickness, start angle, and turn angle. The shape is defined as a pie slice bounded by the outer and inner arcs based on the provided parameters.

**Parameters:**

- `centerRadius` (*float*): The radius of the center point of the pie shape, halfway between the inner and outer edges.
- `halfThickness` (*float*): The thickness of the pie wedge, representing half the distance between the outer and inner radii.
- `start` (*Angle?*): The starting angle of the pie slice, where the arc begins in degrees or radians.
- `turn` (*Angle?*): The turn angle defining the extent of the pie slice, i.e., the angle between the start and end of the arc. Defaults to a full circle if not specified. (Default: `null`)

**Returns:** `Shape`

- A new Shape instance configured as a pie wedge with the specified dimensions and angles.

### Triangle

```csharp
public static Shape Triangle(Vector2 a, Vector2 b, Vector2 c)
```

Creates a triangular shape defined by three vertices.

**Parameters:**

- `a` (*Vector2*): The first vertex of the triangle.
- `b` (*Vector2*): The second vertex of the triangle.
- `c` (*Vector2*): The third vertex of the triangle.

**Returns:** `Shape`

- A new `Shape` representing the specified triangle.

### EquilateralTriangle

```csharp
public static Shape EquilateralTriangle(float knobRadius)
```

Creates an equilateral triangle shape with a specified knob radius. The triangle will have equal sides and can be used in rendering operations within the shape composition system.

**Parameters:**

- `knobRadius` (*float*): The radius of the knob, which determines the size of the equilateral triangle.

**Returns:** `Shape`

- A Shape representing the equilateral triangle.

### Rectangle

```csharp
public static Shape Rectangle(float width, float height)
```

Creates a rectangular shape with specified width and height.

**Parameters:**

- `width` (*float*): The width of the rectangle.
- `height` (*float*): The height of the rectangle.

**Returns:** `Shape`

- A new `Shape` representing the rectangle.

### RectangleRounded

```csharp
public static Shape RectangleRounded(float width, float height, float radius)
```

Creates a rectangular shape with specified dimensions and corner radius.

**Parameters:**

- `width` (*float*): The width of the rectangle.
- `height` (*float*): The height of the rectangle.
- `radius` (*float*): The radius of the rounded corners.

**Returns:** `Shape`

- A new `Shape` representing the rounded rectangle.
