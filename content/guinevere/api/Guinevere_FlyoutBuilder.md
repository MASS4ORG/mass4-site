---
Title: "FlyoutBuilder"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "FlyoutBuilder"
  namespace: "Guinevere"
  symbol: "class"
  source: "FlyoutBuilder.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [FlyoutBuilder.cs](https://github.com/brmassa/blob/main/FlyoutBuilder.cs)

Builder for creating flyout menus

## Public Methods

### Item

```csharp
public FlyoutBuilder Item(string text, Action? action = null, string shortcut = "", bool enabled = true)
```

Adds a menu item with an action

**Parameters:**

- `text` (*string*)
- `action` (*Action?*) (Default: `null`)
- `shortcut` (*string*) (Default: `""`)
- `enabled` (*bool*) (Default: `true`)

**Returns:** `FlyoutBuilder`


### Submenu

```csharp
public FlyoutBuilder Submenu(string text, Action<FlyoutBuilder> buildSubmenu, bool enabled = true)
```

Adds a menu item with a submenu

**Parameters:**

- `text` (*string*)
- `buildSubmenu` (*Action<FlyoutBuilder>*)
- `enabled` (*bool*) (Default: `true`)

**Returns:** `FlyoutBuilder`


### Separator

```csharp
public FlyoutBuilder Separator()
```

Adds a separator line

**Returns:** `FlyoutBuilder`


