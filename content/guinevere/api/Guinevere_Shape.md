---
Title: "Shape"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Shape.cs

Represents a base abstract class for creating and manipulating 2D geometric shapes with customizable rendering behaviors, transformations, and visual effects.

## Fields

### **Layers** (*SortedDictionary<int, List<(SKPath path, SKPaint paint)>>*) = `new()`: Represents a collection of layered path and paint elements associated with the shape. These layers allow for advanced rendering effects such as shadows, fills, and other visual modifications. Each layer is defined by a geometric path and its corresponding painting parameters with a Z-index for ordering.

## Properties

### **Path**

(*SKPath*) { get }: Gets the `SKPath` defining the geometric representation of the shape. This property represents the core structure of the shape, storing its path data, such as lines, curves, and other geometric elements.

### **Node**

(*LayoutNode?*) { get; set }: Gets or sets the associated `LayoutNode` for the shape. This property represents the layout node that provides context and layout information for the shape during rendering.


## Public Methods

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

### Triangle

```csharp
public static Shape Triangle(float aX, float aY, float bX, float bY, float cX, float cY)
```

Creates a triangular shape defined by three distinct vertices specified by their X and Y coordinates.

**Parameters:**

- `aX` (*float*): The X-coordinate of the first vertex of the triangle.
- `aY` (*float*): The Y-coordinate of the first vertex of the triangle.
- `bX` (*float*): The X-coordinate of the second vertex of the triangle.
- `bY` (*float*): The Y-coordinate of the second vertex of the triangle.
- `cX` (*float*): The X-coordinate of the third vertex of the triangle.
- `cY` (*float*): The Y-coordinate of the third vertex of the triangle.

**Returns:** `Shape`

- A new instance of `Shape` representing the triangle defined by the provided vertices.

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

