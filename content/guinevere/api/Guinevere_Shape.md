---
Title: "CLASS Shape"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Shape.Paint.cs

Represents a base abstract class for creating and manipulating 2D geometric shapes with customizable rendering behaviors, transformations, and visual effects.

## Properties

### **Paint**

(*SKPaint?*) { get; set }: Gets the `SKPaint` used to render the shape. This property defines the specific paint settings, such as color, style, and effects, that are applied during the rendering of the shape.


## Public Methods

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

### InnerShadow

```csharp
public Shape InnerShadow(Color color, float blurRadius, int spread = 0)
```

Applies an inner shadow effect to the shape using the specified color, offset, blur radius, and spread value.

**Parameters:**

- `color` (*Color*): The color of the shadow.
- `blurRadius` (*float*): The radius of the blur applied to the shadow.
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

### OuterShadow

```csharp
public Shape OuterShadow(Color color, float blurRadius, float spread = 0)
```

Applies an outer shadow effect to the shape using the specified color, blur radius, offset, and spread value.

**Parameters:**

- `color` (*Color*): The color of the shadow.
- `blurRadius` (*float*): The radius of the blur applied to the shadow.
- `spread` (*float*): The spread of the shadow, which adjusts its size. Defaults to 0. (Default: `0`)

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

