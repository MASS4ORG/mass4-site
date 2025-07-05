---
Title: "ContextMenuBuilder"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** ContextMenuBuilder.cs

Helper class for building context menus

## Public Methods

### Item

```csharp
public ContextMenuBuilder Item(string text, Action action, bool enabled = true)
```

Adds an item to the context menu with the specified text, action, and enabled state.

**Parameters:**

- `text` (*string*): The displayed text of the menu item.
- `action` (*Action*): The action to be executed when the menu item is clicked.
- `enabled` (*bool*): Specifies whether the menu item is enabled. Defaults to `true`. (Default: `true`)

**Returns:** `ContextMenuBuilder`

- The current `ContextMenuBuilder` instance with the added item.

### Separator

```csharp
public ContextMenuBuilder Separator()
```

Adds a separator to the context menu.

**Returns:** `ContextMenuBuilder`

- The current `ContextMenuBuilder` instance with the added separator.

