---
Title: "ClipOperation"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "ClipOperation"
  namespace: "Guinevere"
  symbol: "class"
  source: "ClipOperation.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [ClipOperation.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/ClipOperation.cs)

Represents an operation that applies or restores clipping to the provided canvas. Allows specifying a shape to clip to or restoring the previous canvas state.

## Public Methods

### Execute

```csharp
public void Execute(Gui gui, LayoutNode node, SKCanvas canvas)
```

Executes the clip operation on the provided canvas, applying clipping to the specified node's bounds or restoring the canvas state if required. For scrollable containers, clips to the viewport bounds.

**Parameters:**

- `gui` (*Gui*): The GUI instance managing the current state and operations.
- `node` (*LayoutNode*): The layout node to which the clip operation is applied.
- `canvas` (*SKCanvas*): The canvas on which the clip operation is performed.
