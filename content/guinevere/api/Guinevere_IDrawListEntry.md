---
Title: "IDrawListEntry"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "IDrawListEntry"
  namespace: "Guinevere"
  symbol: "interface"
  source: "IDrawListEntry.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [IDrawListEntry.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/IDrawListEntry.cs)

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
