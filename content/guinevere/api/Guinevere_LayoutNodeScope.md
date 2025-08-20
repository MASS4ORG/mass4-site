---
Title: "LayoutNodeScope"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "LayoutNodeScope"
  namespace: "Guinevere"
  symbol: "class"
  source: "LayoutNodeScope.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [LayoutNodeScope.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/LayoutNodeScope.cs)

Represents a scope management class for layout nodes, which facilitates entering, exiting, and managing specific properties of a layout node in a 2D or UI rendering context.

## Properties

### **Node**

(*LayoutNode*) { get } = `node`: Provides access to the current layout node within a specific scope. The property represents the layout node that is managed during the lifetime of the associated `LayoutNodeScope` instance.


## Public Methods

### Dispose

```csharp
public void Dispose()
```

Releases all resources used by the `LayoutNodeScope` instance and exits the current layout node context.

**Remarks:**
This method ensures that any resources associated with the current layout node scope are properly released, and that the `ILayoutNodeEnterExit` manager, if provided, is notified to exit the node context.



### Enter

```csharp
public LayoutNodeScope Enter()
```

Enters the current layout node context, typically used to prepare and set up the environment for drawing operations or related activities.

**Returns:** `LayoutNodeScope`

- Returns the current `LayoutNodeScope` after entering the layout node context.

### Exit

```csharp
public void Exit()
```

Exits the current layout node context, performing necessary cleanup operations.


### SetZIndex

```csharp
public LayoutNodeScope SetZIndex(int index)
```

Sets the Z-index value for the layout node, determining its stacking order.

**Parameters:**

- `index` (*int*): The Z-index value to assign to the layout node.

**Returns:** `LayoutNodeScope`

- Returns the current `LayoutNodeScope` instance for method chaining.

### Set

```csharp
public LayoutNodeScope Set(T record)
```

Stores a record of the specified generic type within the current layout node scope.

**Parameters:**

- `record` (*T*): The instance of the record to store. It replaces any existing record of the same type in this scope.

**Returns:** `LayoutNodeScope`


### Get

```csharp
public TValue Get()
```

Retrieves a cascaded value of a specified type from the current scope or any of its parent scopes.

**Returns:** `TValue`

- The instance of the requested value if found, starting from the current scope and moving up the parent hierarchy. Returns the default value of if no value is found.
