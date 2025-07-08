---
Title: "LineDrawable"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "LineDrawable"
  namespace: "Guinevere"
  symbol: "class"
  source: "LayoutNode.Drawing.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [LayoutNode.Drawing.cs](https://github.com/brmassa/blob/main/LayoutNode.Drawing.cs)

Custom drawable for lines

## Properties

### **Paint**

(*SKPaint?*): Gets the paint properties associated with this line


## Public Methods

### Render

```csharp
public void Render(Gui gui, LayoutNode node, SKCanvas canvas)
```

Renders the line onto the specified canvas

**Parameters:**

- `gui` (*Gui*): The GUI instance providing rendering context
- `node` (*LayoutNode*): The layout node containing positional data
- `canvas` (*SKCanvas*): The canvas on which the line will be rendered


