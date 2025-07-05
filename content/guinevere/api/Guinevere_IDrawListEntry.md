---
Title: "IDrawListEntry"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "interface"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** IDrawListEntry.cs

Represents an entry in a drawing list, allowing customizable drawing actions to be performed on a given GUI layout node using an associated canvas.

## Public Methods

### Execute

```csharp
 void Execute(Gui gui, LayoutNode node, SKCanvas canvas)
```

Executes a drawing operation using the provided GUI, layout node, and canvas.

**Parameters:**

- `gui` (*Gui*): The GUI context to utilize for the drawing operation.
- `node` (*LayoutNode*): The layout node in the GUI hierarchy where the operation should take place.
- `canvas` (*SKCanvas*): The canvas on which the drawing operation is performed.


