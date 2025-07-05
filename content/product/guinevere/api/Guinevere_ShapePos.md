---
Title: "CLASS ShapePos"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** ShapePos.cs

Represents a shape with positional and potentially rounded rectangle configurations. This class extends the functionality of the `Shape` class.

## Public Methods

### Rectangle

```csharp
public static ShapePos Rectangle(Rect rect)
```

Creates a rectangle shape based on the specified rectangular dimensions.

**Parameters:**

- `rect` (*Rect*): The dimensions of the rectangle defined by the `Rect` object.

**Returns:** `ShapePos`

- A new instance of `ShapePos` representing the rectangular shape.

### RectangleRounded

```csharp
public static ShapePos RectangleRounded(LayoutNode node, float radius)
```

Creates a rounded rectangle shape with the specified additional height and corner radius.

**Parameters:**

- `node` (*LayoutNode*): The additional height for the shape. Can be a float, int, or other valid type convertible to height.
- `radius` (*float*): The corner radius to apply to the rectangle.

**Returns:** `ShapePos`

- A new instance of `ShapePos` representing the rounded rectangle shape.

