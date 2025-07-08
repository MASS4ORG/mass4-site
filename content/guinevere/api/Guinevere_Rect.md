---
Title: "Rect"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "Rect"
  namespace: "Guinevere"
  symbol: "record"
  source: "Rect.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [Rect.cs](https://github.com/brmassa/blob/main/Rect.cs)

Represents a rectangle defined by its position (X, Y) and size (W, H). Provides properties and methods for working with rectangles, such as calculating various points, centers, and containment checks.

## Properties

### **Position**

(*Vector2*): Gets the position of the rectangle, represented as the coordinates of its top-left corner (X, Y).

### **Size**

(*Vector2*): Gets the size of the rectangle, represented as the width and height (W, H).

### **LocalCenter**

(*Vector2*): Gets the local center of the rectangle relative to its width and height. The local center is the midpoint defined by half the width and half the height of the rectangle.

### **Center**

(*Vector2*): Gets the absolute center of the rectangle by adding its local center to its position. The center is calculated as the midpoint of width (W) and height (H) relative to the rectangle's position (X, Y).

### **BottomRight**

(*Vector2*): Gets the position of the rectangle's bottom-right corner. Defined as the point where the rectangle's X and Width values meet its Y and Height values.

### **Zero**

(*Rect*): Represents a rectangle with zero-position and size. A predefined rectangle instance with X, Y, W, and H set to 0.

### **One**

(*Rect*): Gets a rectangle instance where all the position and size values (X, Y, W, H) are initialized to 1.

### **Height**

(*float*) { get; set }: Gets the height of the rectangle, represented as the vertical dimension (H).

### **Width**

(*float*) { get; set }: Gets the width of the rectangle.

### **X**

(*float*) { get; set }: The x-coordinate of the rectangle's top-left corner.

### **Y**

(*float*) { get; set }: The y-coordinate of the rectangle's top-left corner.

### **W**

(*float*) { get; set }: The width of the rectangle.

### **H**

(*float*) { get; set }: The height of the rectangle.


## Public Methods

### Contains

```csharp
public bool Contains(Vector2 point)
```

Checks whether the rectangle contains the specified point.

**Parameters:**

- `point` (*Vector2*): The point to check.

**Returns:** `bool`

- True if the point is within the rectangle's bounds; otherwise false.

### ToString

```csharp
public override string ToString()
```

Returns a string representation of the rectangle, including its position and size, formatted to one decimal place.

**Returns:** `string`

- A string in the format "Rect(x:{X}, y:{Y}, w:{W}, h:{H})", where X, Y, W, and H are the rectangle's properties.

### Deconstruct

```csharp
public void Deconstruct(float x, float y, float w, float h)
```

Deconstructs the rectangle into its components: position (X, Y) and size (W, H).

**Parameters:**

- `x` (*float*): The x-coordinate of the rectangle's top-left corner.
- `y` (*float*): The y-coordinate of the rectangle's top-left corner.
- `w` (*float*): The width of the rectangle.
- `h` (*float*): The height of the rectangle.


