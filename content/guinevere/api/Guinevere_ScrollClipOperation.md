---
Title: "ScrollClipOperation"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "ScrollClipOperation"
  namespace: "Guinevere"
  symbol: "class"
  source: "ScrollClipOperation.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [ScrollClipOperation.cs](https://github.com/brmassa/blob/main/ScrollClipOperation.cs)

Represents a clipping operation specifically designed for scrollable containers. This operation clips content to the viewport bounds, ensuring that scrolled content outside the visible area is properly hidden.

## Public Methods

### Execute

```csharp
public void Execute(Gui gui, LayoutNode node, SKCanvas canvas)
```

Executes the scroll clip operation on the provided canvas. This clips rendering to the viewport bounds, preventing scrolled content from appearing outside the container.

**Parameters:**

- `gui` (*Gui*): The GUI instance managing the current state
- `node` (*LayoutNode*): The layout node associated with this clip operation
- `canvas` (*SKCanvas*): The canvas to apply the clipping to


