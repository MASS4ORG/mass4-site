---
Title: "CLASS FlyoutBuilder"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** FlyoutBuilder.cs

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


