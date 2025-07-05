---
Title: "INTERFACE ILayoutNodeEnterExit"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "interface"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** ILayoutNodeEnterExit.cs

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

