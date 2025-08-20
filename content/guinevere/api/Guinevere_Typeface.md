---
Title: "Typeface"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "Typeface"
  namespace: "Guinevere"
  symbol: "class"
  source: "Typeface.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [Typeface.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/Typeface.cs)

Represents a typeface wrapper that provides an abstraction layer over SkiaSharp's SKTypeface.

## Properties

### **FamilyName**

(*string*): Gets the family name of the typeface.

### **Style**

(*FontStyle*): Gets the style of the typeface.


## Public Methods

### FromFile

```csharp
public static Typeface FromFile(string fontPath)
```

Creates a Typeface from a file path.

**Parameters:**

- `fontPath` (*string*): The path to the font file.

**Returns:** `Typeface`

- A new Typeface instance loaded from the specified file.

### FromStream

```csharp
public static Typeface FromStream(Stream fontStream)
```

Creates a Typeface from a stream.

**Parameters:**

- `fontStream` (*Stream*): The stream containing the font data.

**Returns:** `Typeface`

- A new Typeface instance loaded from the specified stream.

### FromFamilyName

```csharp
public static Typeface FromFamilyName(string familyName, FontStyle style = FontStyle.Normal)
```

Creates a Typeface from a system font family name.

**Parameters:**

- `familyName` (*string*): The name of the font family.
- `style` (*FontStyle*): The style of the font. Default is Normal. (Default: `FontStyle.Normal`)

**Returns:** `Typeface`

- A new Typeface instance with the specified family name and style.

### Dispose

```csharp
public void Dispose()
```

Releases all resources used by the Typeface.
