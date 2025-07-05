---
Title: "CLASS Gui"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Gui.State.cs
## Public Methods

### GetValue

```csharp
public ref T GetValue(T defaultValue, string id = "")
```

Retrieves a reference to a value of type associated with the specified identifier. If the identifier does not exist in the store, the default value is added and returned.

**Parameters:**

- `defaultValue` (*T*): The default value to insert if the identifier does not exist.
- `id` (*string*): The identifier associated with the value. By default, this is the name of the variable passed as `defaultValue`. (Default: `""`)

**Returns:** `ref T`

- A reference to the value of type associated with the specified identifier.

### SetValue

```csharp
public void SetValue(T value, string id = "")
```

Sets the value of type associated with the specified identifier. If the identifier already exists in the store, the value is updated.

**Parameters:**

- `value` (*T*): The value to associate with the specified identifier.
- `id` (*string*): The identifier associated with the value. By default, this is the name of the variable passed as `value`. (Default: `""`)


### GetFloat

```csharp
public ref float GetFloat(float defaultValue, string id = "")
```

Retrieves a reference to a float value associated with the specified identifier. If the identifier does not exist in the store, the default value is added and returned.

**Parameters:**

- `defaultValue` (*float*): The default float value to insert if the identifier does not exist.
- `id` (*string*): The identifier associated with the float value. This is typically the name of the variable passed as `defaultValue`. (Default: `""`)

**Returns:** `ref float`

- A reference to the float value associated with the specified identifier.

### SetFloat

```csharp
public void SetFloat(float value, string id = "")
```

Sets the value of type `float` associated with the specified identifier. If the identifier already exists in the store, the value is updated.

**Parameters:**

- `value` (*float*): The value to associate with the specified identifier.
- `id` (*string*): The identifier associated with the value. By default, this is the name of the variable passed as `value`. (Default: `""`)


