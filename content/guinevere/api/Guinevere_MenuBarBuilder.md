---
Title: "MenuBarBuilder"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "MenuBarBuilder"
  namespace: "Guinevere"
  symbol: "class"
  source: "MenuBarBuilder.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [MenuBarBuilder.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/MenuBarBuilder.cs)

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
