---
Title: "FlyoutBuilder"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "FlyoutBuilder"
  namespace: "Guinevere"
  symbol: "class"
  source: "FlyoutBuilder.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [FlyoutBuilder.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/FlyoutBuilder.cs)

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
