---
Title: "DrawList"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "DrawList"
  namespace: "Guinevere"
  symbol: "class"
  source: "DrawList.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [DrawList.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/DrawList.cs)

Represents a list of drawable entries or operations which can be added, modified, or rendered to a canvas.

## Public Methods

### Add

```csharp
public void Add(IDrawable shape)
```

Adds a drawable shape to the draw list.

**Parameters:**

- `shape` (*IDrawable*): The drawable object to add.


### Prepend

```csharp
public void Prepend(IDrawable shape)
```

Adds a drawable shape to the beginning of the draw list.

**Parameters:**

- `shape` (*IDrawable*): The drawable object to prepend to the draw list.


### Add

```csharp
public void Add(IDrawListEntry entry)
```

Adds any draw list entry to the draw list.

**Parameters:**

- `entry` (*IDrawListEntry*): The draw list entry to add.


### Prepend

```csharp
public void Prepend(IDrawListEntry entry)
```

Adds any draw list entry to the beginning of the draw list.

**Parameters:**

- `entry` (*IDrawListEntry*): The draw list entry to prepend to the draw list.


### AddClip

```csharp
public void AddClip(Shape shape, Vector2 positon)
```

Adds a clip operation to the draw list using the specified shape.

**Parameters:**

- `shape` (*Shape*)
- `positon` (*Vector2*)


### AddClip

```csharp
public void AddClip(Rect rect)
```

Adds a clip operation to the draw list using the specified shape.

**Parameters:**

- `rect` (*Rect*)


### Render

```csharp
public void Render(Gui gui, LayoutNode node, SKCanvas canvas)
```

Renders all drawable entries in the list onto the specified canvas.

**Parameters:**

- `gui` (*Gui*): The GUI context used for rendering operations.
- `node` (*LayoutNode*): The layout node containing structural and styling information.
- `canvas` (*SKCanvas*): The canvas to render the drawable entries onto.
