---
Title: "MenuBarBuilder"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "MenuBarBuilder"
  namespace: "Guinevere"
  symbol: "class"
  source: "MenuBarBuilder.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [MenuBarBuilder.cs](https://github.com/brmassa/blob/main/MenuBarBuilder.cs)

Builder for creating menu bars

## Public Methods

### Menu

```csharp
public MenuBarBuilder Menu(string text, Action<FlyoutBuilder> buildMenu)
```

Adds a menu to the menu bar

**Parameters:**

- `text` (*string*)
- `buildMenu` (*Action<FlyoutBuilder>*)

**Returns:** `MenuBarBuilder`


