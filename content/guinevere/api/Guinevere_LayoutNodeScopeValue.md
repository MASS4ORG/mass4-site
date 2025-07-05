---
Title: "RECORD LayoutNodeScopeValue"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "record"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** LayoutNodeScopeValue.cs

Represents an abstract base class for managing scope-specific values in a layout node context. Provides methods for retrieving and setting values of a specific type.

## Public Methods

### Get

```csharp
public abstract T Get()
```

Retrieves the value associated with the current layout node scope for the specified type.

**Returns:** `T`

- The value associated with the specified type within the layout node scope, or a default value if no value is set.

### Set

```csharp
public abstract void Set(T value)
```

Sets the value associated with the current layout node scope for the specified type.

**Parameters:**

- `value` (*T*): The value to set within the layout node scope.


