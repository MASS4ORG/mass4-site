---
Title: "LayoutNodeDrawingExtensions"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** LayoutNode.Drawing.cs

Drawing extension methods for LayoutNode to provide a fluent API

## Public Methods

### SetZIndex

```csharp
public static LayoutNode SetZIndex(LayoutNode node, int index)
```

Sets the icon font for the current node and its children using the Font wrapper. The font is automatically restored when exiting the node scope.

**Parameters:**

- `node` (*LayoutNode*)
- `index` (*int*)

**Returns:** `LayoutNode`


### DrawBackgroundRect

```csharp
public static LayoutNode DrawBackgroundRect(LayoutNode node, Color? color = null, float radius = 0.0f, Corner corners = Corner.All)
```

Draws a background rectangle for this layout node

**Parameters:**

- `node` (*LayoutNode*)
- `color` (*Color?*) (Default: `null`)
- `radius` (*float*) (Default: `0.0f`)
- `corners` (*Corner*) (Default: `Corner.All`)

**Returns:** `LayoutNode`


### DrawBorder

```csharp
public static LayoutNode DrawBorder(LayoutNode node, Color color, float thickness = 1f, float radius = 0.0f, Corner corners = Corner.All)
```

Draws a border rectangle for this layout node

**Parameters:**

- `node` (*LayoutNode*)
- `color` (*Color*)
- `thickness` (*float*) (Default: `1f`)
- `radius` (*float*) (Default: `0.0f`)
- `corners` (*Corner*) (Default: `Corner.All`)

**Returns:** `LayoutNode`


### DrawText

```csharp
public static LayoutNode DrawText(LayoutNode node, string text, float size = 0, Color? color = null, Font? font = null, float wrapWidth = 0, bool centerInRect = true, bool clip = false)
```

Draws text content within this layout node without creating an additional node

**Parameters:**

- `node` (*LayoutNode*)
- `text` (*string*)
- `size` (*float*) (Default: `0`)
- `color` (*Color?*) (Default: `null`)
- `font` (*Font?*) (Default: `null`)
- `wrapWidth` (*float*) (Default: `0`)
- `centerInRect` (*bool*) (Default: `true`)
- `clip` (*bool*) (Default: `false`)

**Returns:** `LayoutNode`


### DrawGlyph

```csharp
public static LayoutNode DrawGlyph(LayoutNode node, char iconCode, float size = 0, Color? color = null, Font? font = null, bool centerInRect = true, bool clip = false)
```

Draws a glyph (icon) content within this layout node without creating an additional node

**Parameters:**

- `node` (*LayoutNode*)
- `iconCode` (*char*)
- `size` (*float*) (Default: `0`)
- `color` (*Color?*) (Default: `null`)
- `font` (*Font?*) (Default: `null`)
- `centerInRect` (*bool*) (Default: `true`)
- `clip` (*bool*) (Default: `false`)

**Returns:** `LayoutNode`


### DrawRect

```csharp
public static LayoutNode DrawRect(LayoutNode node, Rect rect, Color color, float radius = 0.0f, Corner corners = Corner.All)
```

Draws a filled rectangle within this layout node

**Parameters:**

- `node` (*LayoutNode*)
- `rect` (*Rect*)
- `color` (*Color*)
- `radius` (*float*) (Default: `0.0f`)
- `corners` (*Corner*) (Default: `Corner.All`)

**Returns:** `LayoutNode`


### DrawRect

```csharp
public static LayoutNode DrawRect(LayoutNode node, Vector2 position, Vector2 size, Color color, float radius = 0.0f, Corner corners = Corner.All)
```

Draws a filled rectangle within this layout node at the specified position and size

**Parameters:**

- `node` (*LayoutNode*)
- `position` (*Vector2*)
- `size` (*Vector2*)
- `color` (*Color*)
- `radius` (*float*) (Default: `0.0f`)
- `corners` (*Corner*) (Default: `Corner.All`)

**Returns:** `LayoutNode`


### DrawCircle

```csharp
public static LayoutNode DrawCircle(LayoutNode node, Vector2 center, float radius, Color color)
```

Draws a filled circle within this layout node

**Parameters:**

- `node` (*LayoutNode*)
- `center` (*Vector2*)
- `radius` (*float*)
- `color` (*Color*)

**Returns:** `LayoutNode`


### DrawCircleBorder

```csharp
public static LayoutNode DrawCircleBorder(LayoutNode node, Vector2 center, float radius, Color color, float thickness = 1f)
```

Draws a circle border within this layout node

**Parameters:**

- `node` (*LayoutNode*)
- `center` (*Vector2*)
- `radius` (*float*)
- `color` (*Color*)
- `thickness` (*float*) (Default: `1f`)

**Returns:** `LayoutNode`


### DrawLine

```csharp
public static LayoutNode DrawLine(LayoutNode node, Vector2 start, Vector2 end, Color color, float thickness = 1f)
```

Draws a line within this layout node

**Parameters:**

- `node` (*LayoutNode*)
- `start` (*Vector2*)
- `end` (*Vector2*)
- `color` (*Color*)
- `thickness` (*float*) (Default: `1f`)

**Returns:** `LayoutNode`


