---
Title: "CLASS Font"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Font.cs

Represents a font wrapper that provides an abstraction layer over SkiaSharp's SKFont, allowing users to work with fonts without directly depending on SkiaSharp.

## Properties

### **Size**

(*float*) { get; set }: Gets or sets the size of the font in points.


## Public Methods

### MeasureText

```csharp
public Rect MeasureText(string text)
```

Measures the dimensions of the specified text when rendered with this font.

**Parameters:**

- `text` (*string*): The text to measure.

**Returns:** `Rect`

- A rectangle representing the bounds of the text.

### WithSize

```csharp
public Font WithSize(float size)
```

Creates a new Font instance with the specified size while keeping the same typeface.

**Parameters:**

- `size` (*float*): The new size for the font in points.

**Returns:** `Font`

- A new Font instance with the specified size.

### FromFile

```csharp
public static Font FromFile(string fontPath, float size = 12f)
```

Creates a Font from a file path.

**Parameters:**

- `fontPath` (*string*): The path to the font file.
- `size` (*float*): The size of the font in points. Default is 12. (Default: `12f`)

**Returns:** `Font`

- A new Font instance loaded from the specified file.

### FromStream

```csharp
public static Font FromStream(Stream fontStream, float size = 12f)
```

Creates a Font from a stream.

**Parameters:**

- `fontStream` (*Stream*): The stream containing the font data.
- `size` (*float*): The size of the font in points. Default is 12. (Default: `12f`)

**Returns:** `Font`

- A new Font instance loaded from the specified stream.

### FromFamilyName

```csharp
public static Font FromFamilyName(string familyName, float size = 12f, FontStyle style = FontStyle.Normal)
```

Creates a Font from a system font family name.

**Parameters:**

- `familyName` (*string*): The name of the font family.
- `size` (*float*): The size of the font in points. Default is 12. (Default: `12f`)
- `style` (*FontStyle*): The style of the font. Default is Normal. (Default: `FontStyle.Normal`)

**Returns:** `Font`

- A new Font instance with the specified family name and style.

### Dispose

```csharp
public void Dispose()
```

Releases all resources used by the Font.


### LoadFont

```csharp
public static Font LoadFont(string fontPath, string? member = null)
```

Loads a font from the specified file path.

**Parameters:**

- `fontPath` (*string*): The path to the font file to load.
- `member` (*string?*): The name of the calling member for diagnostic purposes. Defaults to the name of the caller. (Default: `null`)

**Returns:** `Font`

- A Font object representing the loaded font.

