---
Title: "CLASS ImMath"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** ImMath.cs

Provides a collection of mathematical utility functions and constants optimized for performance.

## Fields

### **Deg2Rad** (*float*) = `MathF.PI / 180`: A constant factor used to convert an angle measurement from degrees to radians.
### **Rad2Deg** (*float*) = `180 / MathF.PI`: A constant factor used to convert an angle measurement from radians to degrees.

## Public Methods

### ApproximatelyEquals

```csharp
public static bool ApproximatelyEquals(float value1, float value2)
```

Determines whether two floating-point numbers are approximately equal, accounting for precision limitations.

**Parameters:**

- `value1` (*float*): The first value to compare.
- `value2` (*float*): The second value to compare.

**Returns:** `bool`

- True if the absolute difference between the two values is less than the smallest positive single precision number; otherwise, false.

### ApproximatelyEquals

```csharp
public static bool ApproximatelyEquals(Vector2 a, Vector2 b)
```

Determines whether two floating-point vectors are approximately equal, accounting for precision limitations.

**Parameters:**

- `a` (*Vector2*): The first vector to compare.
- `b` (*Vector2*): The second vector to compare.

**Returns:** `bool`

- True if all corresponding components of the vectors are approximately equal; otherwise, false.

### ApproximatelyEquals

```csharp
public static bool ApproximatelyEquals(Vector3 a, Vector3 b)
```

Determines whether two floating-point numbers are approximately equal, accounting for precision limitations.

**Parameters:**

- `a` (*Vector3*): The first value to compare.
- `b` (*Vector3*): The second value to compare.

**Returns:** `bool`

- True if the absolute difference between the two values is less than the smallest positive single precision number; otherwise, false.

### ApproximatelyEquals

```csharp
public static bool ApproximatelyEquals(Vector4 a, Vector4 b)
```

Determines whether two floating-point numbers are approximately equal, accounting for precision limitations.

**Parameters:**

- `a` (*Vector4*): The first value to compare.
- `b` (*Vector4*): The second value to compare.

**Returns:** `bool`

- True if the absolute difference between the two values is less than the smallest positive single precision number; otherwise, false.

### Lerp

```csharp
public static float Lerp(float a, float b, float duration)
```

Linearly interpolates between two values based on a specified interpolation factor.

**Parameters:**

- `a` (*float*): The start value.
- `b` (*float*): The end value.
- `duration` (*float*): The interpolation factor, typically in the range [0, 1]. A value of 0 will return `a`, and a value of 1 will return `b`.

**Returns:** `float`

- The interpolated value between `a` and `b` based on `duration`.

### Clamp01

```csharp
public static float Clamp01(float value)
```

Clamps the given value to the range [0, 1].

**Parameters:**

- `value` (*float*): The value to be clamped.

**Returns:** `float`

- The clamped value within the range of 0 to 1.

