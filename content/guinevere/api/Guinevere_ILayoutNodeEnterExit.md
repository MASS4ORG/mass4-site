---
Title: "ILayoutNodeEnterExit"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "ILayoutNodeEnterExit"
  namespace: "Guinevere"
  symbol: "interface"
  source: "ILayoutNodeEnterExit.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [ILayoutNodeEnterExit.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/ILayoutNodeEnterExit.cs)

Provides methods to manage the entry and exit of layout node contexts within a UI rendering or layout system.

## Public Methods

### Enter

```csharp
 LayoutNodeScope Enter(LayoutNode node)
```

Enters the specified layout node's scope and begins managing its state or properties.

**Parameters:**

- `node` (*LayoutNode*): The layout node to enter and manage within a new scope.

**Returns:** `LayoutNodeScope`

- A `LayoutNodeScope` representing the entered scope of the given layout node.

### Exit

```csharp
 LayoutNode Exit()
```

Exits the current layout node's scope and returns the parent layout node, if any.

**Returns:** `LayoutNode`

- The parent layout node after exiting the current scope.
