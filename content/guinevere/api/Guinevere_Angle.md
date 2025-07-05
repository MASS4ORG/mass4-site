---
Title: "Angle"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "struct"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Angle.cs

Represents an angle defined in terms of radians, and provides methods for converting and performing operations with angles.

## Properties

### **Radian**

(*float*) { get }: Represents the angle in radians.

### **Degree**

(*float*): Represents the angle in degrees, derived from the angle's radian value.

### **FullCircle**

(*Angle*): Represents a full rotation angle, equivalent to 360 degrees or 2π radians.


## Public Methods

### Turns

```csharp
public static Angle Turns(float turns)
```

Creates a new `Angle` instance representing the specified number of turns.

**Parameters:**

- `turns` (*float*): The angle value in turns, where 1 turn is equivalent to 360 degrees or 2π radians.

**Returns:** `Angle`

- A new `Angle` corresponding to the specified number of turns.

### Degrees

```csharp
public static Angle Degrees(float degrees)
```

Creates a new `Angle` instance from the given degree value.

**Parameters:**

- `degrees` (*float*): The angle value in degrees.

**Returns:** `Angle`

- A new `Angle` representing the specified degree value.

### Radians

```csharp
public static Angle Radians(float radians)
```

Creates a new `Angle` instance from the given radian value.

**Parameters:**

- `radians` (*float*): The angle value in radians.

**Returns:** `Angle`

- A new `Angle` representing the specified radian value.

### GetDirectionVector

```csharp
public Vector2 GetDirectionVector()
```

Calculates the direction vector corresponding to the angle represented by this `Angle` instance.

**Returns:** `Vector2`

- A `Vector2` representing the direction of the angle, where the X and Y components correspond to the cosine and sine of the angle in radians, respectively.

