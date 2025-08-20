---
Title: "UnitValue"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "UnitValue"
  namespace: "Guinevere"
  symbol: "struct"
  source: "UnitValue.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [UnitValue.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/UnitValue.cs)

Represents a unit value with an associated unit type. Provides functionality to work with different types of units such as pixels, percentages, ratios, etc., and allows easy conversion and arithmetic operations between units.

## Properties

### **Mode**

(*UnitType*) { get } = `mode`: Gets the unit type associated with this instance of `UnitValue`. Represents the mode of measurement or interpretation for the value, such as pixels, percentages, ratios, or other defined `UnitType` values.

### **Value**

(*float*) { get } = `value`: Gets the numeric value associated with this unit. The interpretation of this value depends on the `Mode` property. For example, if Mode is Pixels, this represents pixel units; if Mode is Percentage, this represents a percentage value.


## Public Methods

### FitContent

```csharp
public static UnitValue FitContent(float percentage = 1)
```

Creates a unit value that automatically fits content with an optional scaling percentage. This unit type adjusts its size based on the content it contains.

**Parameters:**

- `percentage` (*float*): The scaling percentage to apply. Default is 1 (100%). (Default: `1`)

**Returns:** `UnitValue`

- A new `UnitValue` with `Auto` mode.

### Expand

```csharp
public static UnitValue Expand(float percentage = 1)
```

Creates a unit value that expands to fill available space with an optional scaling percentage. This unit type takes up remaining space in its container.

**Parameters:**

- `percentage` (*float*): The scaling percentage to apply. Default is 1 (100%). (Default: `1`)

**Returns:** `UnitValue`

- A new `UnitValue` with `Expand` mode.

### Ratio

```csharp
public static UnitValue Ratio(float ratio)
```

Creates a unit value based on a ratio relative to other elements. This unit type is proportional to other ratio-based units in the same context.

**Parameters:**

- `ratio` (*float*): The ratio value. Higher values take proportionally more space.

**Returns:** `UnitValue`

- A new `UnitValue` with `Ratio` mode.

### Percentage

```csharp
public static UnitValue Percentage(float percentage)
```

Creates a unit value based on a percentage of the parent container's size.

**Parameters:**

- `percentage` (*float*): The percentage value (e.g., 0.5 for 50%, 1.0 for 100%).

**Returns:** `UnitValue`

- A new `UnitValue` with `Percentage` mode.

### Pixels

```csharp
public static UnitValue Pixels(float pixels)
```

Creates a unit value with an absolute pixel measurement.

**Parameters:**

- `pixels` (*float*): The number of pixels.

**Returns:** `UnitValue`

- A new `UnitValue` with `Pixels` mode.
