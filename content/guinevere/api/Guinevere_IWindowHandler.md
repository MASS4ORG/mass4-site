---
Title: "IWindowHandler"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "IWindowHandler"
  namespace: "Guinevere"
  symbol: "interface"
  source: "IWindowHandler.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [IWindowHandler.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/IWindowHandler.cs)

Defines an interface for handling window-specific operations and management. Provides methods for controlling window appearance and behavior across different rendering backends.

## Public Methods

### DrawWindowTitlebar

```csharp
 void DrawWindowTitlebar(bool show)
```

Shows or hides the window title bar.

**Parameters:**

- `show` (*bool*): True to show the title bar; false to hide it.
