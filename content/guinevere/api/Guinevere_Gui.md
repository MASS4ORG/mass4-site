---
Title: "Gui"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Gui.LayoutNode.cs
## Properties

### **CurrentNode**

(*LayoutNode*): Retrieves the currently active `LayoutNode` within the layout context.

### **CurrentNodeScope**

(*LayoutNodeScope*): Provides the current `LayoutNodeScope` within the context of the layout system.

### **LayoutNodeScopeStack**

(*Stack<LayoutNodeScope>*) { get } = `new()`: Represents a stack of `LayoutNodeScope` objects used to manage the hierarchical structure and context of layout nodes during GUI rendering and layout calculations.

### **RootNode**

(*LayoutNode?*) { get; set }: Represents the root layout node in the hierarchy of the graphical user interface (GUI). This node serves as the container and entry point for all other layout nodes.

### **Pass**

(*Pass*) { get; set }: Represents the current operational stage of the graphical user interface (GUI) rendering process. Determines whether the GUI is in the initial layout-building phase or the final rendering phase.


## Public Methods

### NodeId

```csharp
public static string NodeId(string filePath, int lineNumber, int extra = 0)
```

Generates a unique node identifier based on the provided file path, line number, and optional extra parameter.

**Parameters:**

- `filePath` (*string*): The source file path where the node is being defined.
- `lineNumber` (*int*): The line number in the source file where the node is being defined.
- `extra` (*int*): An optional integer to append additional uniqueness to the identifier. Defaults to 0. (Default: `0`)

**Returns:** `string`

- A formatted string representing the unique node identifier.

### Enter

```csharp
public LayoutNodeScope Enter(LayoutNode node)
```

Enters a given layout node context, registers it in the scope stack, and returns the associated layout node scope.

**Parameters:**

- `node` (*LayoutNode*): The layout node to enter and register in the context.

**Returns:** `LayoutNodeScope`

- The scope associated with the entered layout node.

### Exit

```csharp
public LayoutNode Exit()
```

Exits the current layout node scope and returns the associated layout node.

**Returns:** `LayoutNode`

- The layout node associated with the exited scope.

### CalculateLayout

```csharp
public void CalculateLayout()
```

Performs layout calculations on the root node of the GUI tree. This ensures that all nodes have their layout properties properly computed based on the hierarchy and cascading style rules.


### Node

```csharp
public LayoutNode Node(float width = -1, float height = -1, string? id = null, string filePath = "", int lineNumber = 0)
```

Creates a node with a specified size

**Parameters:**

- `width` (*float*) (Default: `-1`)
- `height` (*float*) (Default: `-1`)
- `id` (*string?*) (Default: `null`)
- `filePath` (*string*) (Default: `""`)
- `lineNumber` (*int*) (Default: `0`)

**Returns:** `LayoutNode`


ex

```csharp
public int GetEffectiveZIndex(LayoutNodeScope? scope = null)
```

Gets the effective icon font for the current scope, inheriting from parent scopes if not set.

**Parameters:**

- `scope` (*LayoutNodeScope?*) (Default: `null`)

**Returns:** `int`


### GetEffectiveScrollContainerId

```csharp
public string? GetEffectiveScrollContainerId(LayoutNodeScope? scope = null)
```

Gets the effective scroll container ID for the current scope, inheriting from parent scopes if not set.

**Parameters:**

- `scope` (*LayoutNodeScope?*) (Default: `null`)

**Returns:** `string?`


### GetEffectiveIsClipped

```csharp
public bool GetEffectiveIsClipped(LayoutNodeScope? scope = null)
```

Gets the effective clipping state for the current scope, inheriting from parent scopes if not set.

**Parameters:**

- `scope` (*LayoutNodeScope?*) (Default: `null`)

**Returns:** `bool`


### SetScrollContainer

```csharp
public void SetScrollContainer(string containerId, LayoutNodeScope? scope = null)
```

Sets the scroll container ID for the current scope, marking it as a scrollable container.

**Parameters:**

- `containerId` (*string*)
- `scope` (*LayoutNodeScope?*) (Default: `null`)


### GetEffectiveCumulativeScrollOffset

```csharp
public Vector2 GetEffectiveCumulativeScrollOffset(LayoutNodeScope? scope = null)
```

Gets the effective cumulative scroll offset for the current scope, inheriting from parent scopes.

**Parameters:**

- `scope` (*LayoutNodeScope?*) (Default: `null`)

**Returns:** `Vector2`


### SetCumulativeScrollOffset

```csharp
public void SetCumulativeScrollOffset(Vector2 offset, LayoutNodeScope? scope = null)
```

Sets the cumulative scroll offset for the current scope.

**Parameters:**

- `offset` (*Vector2*)
- `scope` (*LayoutNodeScope?*) (Default: `null`)


### SetIsScrollContainer

```csharp
public void SetIsScrollContainer(bool isScrollContainer, LayoutNodeScope? scope = null)
```

Marks the current scope as a scrollable container.

**Parameters:**

- `isScrollContainer` (*bool*)
- `scope` (*LayoutNodeScope?*) (Default: `null`)


### GetEffectiveIsScrollContainer

```csharp
public bool GetEffectiveIsScrollContainer(LayoutNodeScope? scope = null)
```

Gets whether the current scope is a scrollable container.

**Parameters:**

- `scope` (*LayoutNodeScope?*) (Default: `null`)

**Returns:** `bool`


### SetLocalScrollOffset

```csharp
public void SetLocalScrollOffset(Vector2 offset, LayoutNodeScope? scope = null)
```

Sets the local scroll offset for the current scope.

**Parameters:**

- `offset` (*Vector2*)
- `scope` (*LayoutNodeScope?*) (Default: `null`)


### GetEffectiveLocalScrollOffset

```csharp
public Vector2 GetEffectiveLocalScrollOffset(LayoutNodeScope? scope = null)
```

Gets the effective local scroll offset for the current scope.

**Parameters:**

- `scope` (*LayoutNodeScope?*) (Default: `null`)

**Returns:** `Vector2`


### SetClipped

```csharp
public void SetClipped(bool isClipped, LayoutNodeScope? scope = null)
```

Sets the clipping state for the current scope.

**Parameters:**

- `isClipped` (*bool*)
- `scope` (*LayoutNodeScope?*) (Default: `null`)


