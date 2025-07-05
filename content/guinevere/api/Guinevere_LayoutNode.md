---
Title: "LayoutNode"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** LayoutNode.cs

Represents a layout node in the GUI framework's hierarchical layout system. A layout node manages positioning, sizing, styling, and rendering of UI elements, providing a flexible system for building complex user interfaces.

### Remarks
Layout nodes form the foundation of the GUI framework's layout system. Each node can contain child nodes, creating a hierarchical structure that enables complex UI layouts. Nodes handle both the layout calculation (sizing and positioning) and rendering phases of the GUI pipeline.

## Fields

### **ChildNodes** (*List<LayoutNode>*) = `new()`: Represents the collection of child nodes directly associated with this `LayoutNode`.
### **Scope** (*LayoutNodeScope*): Gets the scope management object associated with this layout node.
### **Style** (*LayoutStyle*): Represents the layout style configuration for the `LayoutNode`.

## Properties

### **Gui**

(*Gui*) { get }: Represents the graphical user interface context associated with this instance.

### **Id**

(*string*) { get; set }: Gets the unique identifier for this `LayoutNode`.

### **DrawList**

(*DrawList*) { get; set } = `new()`: Gets or sets the list of graphical draw commands associated with this layout node.

### **Pass2NodeCount**

(*int*) { get; set }: Gets or sets the node count used during the second pass of layout processing.

### **Children**

(*IReadOnlyList<LayoutNode>*): Gets a read-only list of child nodes contained within this layout node.

### **Parent**

(*LayoutNode?*): Gets the parent node of this layout node, or null if this is a root node.

### **Rect**

(*Rect*): Gets the computed rectangle bounds of this layout node.

### **Center**

(*Vector2*): Gets the center point of this layout node.

### **InnerRect**

(*Rect*): Gets the inner rectangle of this layout node, accounting for padding.

### **OuterRect**

(*Rect*): Gets the outer rectangle of this layout node, including margins.


## Public Methods

### Enter

```csharp
public LayoutNodeScope Enter()
```

Enters this layout node's scope, making it the current active node in the GUI context.

**Returns:** `LayoutNodeScope`

- The current `Scope` after entering this node's scope.
**Remarks:**
Entering a node's scope affects how subsequent GUI operations are applied. Style settings and child node creation will be associated with this node's context.



### Exit

```csharp
public LayoutNodeScope Exit()
```

Exits this layout node's scope, returning to the previous scope in the GUI context.

**Returns:** `LayoutNodeScope`

- The current `Scope` after exiting this node's scope.
**Remarks:**
Exiting a node's scope typically returns control to the parent node's scope. This is important for proper scope management in nested layout structures.



### Dispose

```csharp
public void Dispose()
```

Disposes this layout node by exiting its scope.

**Remarks:**
This method implements the `IDisposable` interface and is typically called automatically when using the node in a using statement. It ensures proper cleanup of the node's scope in the GUI context.



### CreateRoot

```csharp
public static LayoutNode CreateRoot(Gui gui, float width, float height)
```

Creates a root layout node for the GUI system.

**Parameters:**

- `gui` (*Gui*): The GUI instance that will own the root node.
- `width` (*float*): The width of the root node, typically the screen or window width.
- `height` (*float*): The height of the root node, typically the screen or window height.

**Returns:** `LayoutNode`

- A new `LayoutNode` configured as a root node.
**Remarks:**
Root nodes serve as the top-level container for all other layout nodes in the GUI. They typically represent the full viewport or window area and have no parent node.



### AppendNode

```csharp
public LayoutNode AppendNode(UnitValue? sizeX = null, UnitValue? sizeY = null, string filePath = "", int lineNumber = 0)
```

Appends a new child node to the current layout node.

**Parameters:**

- `sizeX` (*UnitValue?*): Node X size (Default: `null`)
- `sizeY` (*UnitValue?*): Node Y size (Default: `null`)
- `filePath` (*string*): The source file path of the caller, automatically provided by the compiler. (Default: `""`)
- `lineNumber` (*int*): The line number in the source file of the caller, automatically provided by the compiler. (Default: `0`)

**Returns:** `LayoutNode`

- A new instance of `LayoutNode` as a child of the current node.

### ToScope

```csharp
public LayoutNodeScope ToScope()
```

Converts the current `LayoutNode` to its associated `LayoutNodeScope` instance.

**Returns:** `LayoutNodeScope`

- The `LayoutNodeScope` instance associated with this `LayoutNode`.

