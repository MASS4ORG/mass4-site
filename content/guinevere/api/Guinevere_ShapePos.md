---
Title: "ShapePos"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "ShapePos"
  namespace: "Guinevere"
  symbol: "class"
  source: "ShapePos.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [ShapePos.cs](https://github.com/brmassa/blob/main/ShapePos.cs)

Represents a shape with positional and potentially rounded rectangle configurations. This class extends the functionality of the `Shape` class.

## Properties

### **Position**

(*Vector2*) { get }: Gets the position of the shape as a `Vector2` value.


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

