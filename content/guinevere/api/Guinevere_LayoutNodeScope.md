---
Title: "LayoutNodeScope"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** LayoutNodeScope.cs

Represents a scope management class for layout nodes, which facilitates entering, exiting, and managing specific properties of a layout node in a 2D or UI rendering context.

## Properties

### **Node**

(*LayoutNode*) { get } = `node`: Provides access to the current layout node within a specific scope. The property represents the layout node that is managed during the lifetime of the associated `LayoutNodeScope` instance.

### **TextColor**

(*Color?*) { get; set }: Gets or sets the text color for the current layout node within the scope. The value is used for rendering text and can be inherited from parent scopes if not explicitly set.

### **TextSize**

(*float?*) { get; set }: Gets or sets the size of the text for rendering within the current layout node. This property applies to the node and its children, inheriting the value from parent nodes if it is not explicitly specified in the current scope.

### **TextFont**

(*Font?*) { get; set }: Gets or sets the font used for rendering text within the current layout node. This property affects the node and its children, inheriting the value from parent nodes if it is not explicitly defined in the current scope.

### **IconFont**

(*Font?*) { get; set }: Gets or sets the font used for rendering icons in the current layout node. This property applies to the node and its children, and the value is inherited from parent nodes if not explicitly set.

### **ZIndex**

(*int?*) { get; set }: Gets or sets the Z-index of the layout node, which determines its rendering order in relation to sibling nodes. Nodes with higher Z-index values will be rendered in front of nodes with lower Z-index values.

### **ScrollContainerId**

(*string?*) { get; set }: Gets or sets the node ID of the scrollable container that affects this node. This is used to cascade scroll transforms to child nodes.

### **IsClipped**

(*bool?*) { get; set }: Gets or sets whether this node should be clipped to its parent container bounds. This cascades to child nodes unless explicitly overridden.

### **CumulativeScrollOffset**

(*Vector2?*) { get; set }: Gets or sets the cumulative scroll offset applied to this node and its children. This represents the total scroll offset from all scrollable parent containers.

### **IsScrollContainer**

(*bool?*) { get; set }: Gets or sets whether this node is a scrollable container. If true, this node can contribute its own scroll offset to child nodes.

### **LocalScrollOffset**

(*Vector2?*) { get; set }: Gets or sets the local scroll offset for this node (if it's a scroll container). This is the scroll offset that this specific node contributes.


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

