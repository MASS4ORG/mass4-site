---
Title: "CLASS DrawList"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** DrawList.cs

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
public void AddClip()
```

Adds a clip operation to the draw list using the specified shape.


### RestoreClip

```csharp
public void RestoreClip(Vector2 position)
```

Restores the previous clipping area by adding a reset operation to the draw list. This operation ensures that the clipping state is reverted after applying a clip shape.

**Parameters:**

- `position` (*Vector2*)


### Render

```csharp
public void Render(Gui gui, LayoutNode node, SKCanvas canvas)
```

Renders all drawable entries in the list onto the specified canvas.

**Parameters:**

- `gui` (*Gui*): The GUI context used for rendering operations.
- `node` (*LayoutNode*): The layout node containing structural and styling information.
- `canvas` (*SKCanvas*): The canvas to render the drawable entries onto.


