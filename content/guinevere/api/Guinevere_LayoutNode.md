---
Title: "LayoutNode"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "LayoutNode"
  namespace: "Guinevere"
  symbol: "class"
  source: "LayoutNode.Interaction.cs, LayoutNode.Calculation.cs, LayoutNode.Commands.cs, LayoutNode.Traversal.cs, LayoutNode.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [LayoutNode.Interaction.cs](https://github.com/brmassa/blob/main/LayoutNode.Interaction.cs), [LayoutNode.Calculation.cs](https://github.com/brmassa/blob/main/LayoutNode.Calculation.cs), [LayoutNode.Commands.cs](https://github.com/brmassa/blob/main/LayoutNode.Commands.cs), [LayoutNode.Traversal.cs](https://github.com/brmassa/blob/main/LayoutNode.Traversal.cs), [LayoutNode.cs](https://github.com/brmassa/blob/main/LayoutNode.cs)
## Fields

### **ChildNodes** (*List<LayoutNode>*) = `new()`: Represents the collection of child nodes directly associated with this `LayoutNode`.
### **Scope** (*LayoutNodeScope*): Gets the scope management object associated with this layout node.
### **Style** (*LayoutStyle*): Represents the layout style configuration for the `LayoutNode`.

## Properties

### **FirstChild**

(*LayoutNode*): The first of it`s children

### **LastChild**

(*LayoutNode*): The last of it`s children

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

### GetInteractable

```csharp
public InteractableElement GetInteractable()
```

Retrieves the interactable element associated with the current layout node. The returned interactable element can be used to handle user interactions such as hover and hold events.

**Returns:** `InteractableElement`

- An instance of `InteractableElement` representing the interactable properties of the layout node.

### OnClick

```csharp
public bool OnClick()
```

Handles a click interaction on the current layout node.

**Returns:** `bool`

- True if the click interaction is successful, otherwise false.

### OnHover

```csharp
public bool OnHover()
```

Handles a hover interaction on the current layout node.

**Returns:** `bool`

- True if the hover interaction is successful; otherwise, false.

### IsClicked

```csharp
public bool IsClicked(MouseButton button = MouseButton.Left)
```

Determines if the layout node was clicked during the current frame.

**Parameters:**

- `button` (*MouseButton*): The mouse button to check for click interaction. (Default: `MouseButton.Left`)

**Returns:** `bool`

- True if the node was clicked; otherwise, false.

### IsHovered

```csharp
public bool IsHovered()
```

Determines if the mouse cursor is currently hovering over the layout node.

**Returns:** `bool`

- True if the node is being hovered; otherwise, false.

### IsHeld

```csharp
public bool IsHeld(MouseButton button = MouseButton.Left)
```

Determines if the layout node is currently being held down.

**Parameters:**

- `button` (*MouseButton*): The mouse button to check for hold interaction. (Default: `MouseButton.Left`)

**Returns:** `bool`

- True if the node is being held; otherwise, false.

### CalculateLayout

```csharp
public void CalculateLayout()
```

Calculates and sets the rectangle for this layout node


### ApplyScrollOffset

```csharp
public void ApplyScrollOffset()
```

Applies cumulative scroll offset to this node's position


### Expand

```csharp
public LayoutNode Expand(float widthPercentage = 1.0f, float heightPercentage = 1.0f)
```

Configures the layout node to expand its dimensions proportionally based on the specified width and height percentages.

**Parameters:**

- `widthPercentage` (*float*): The proportion of width to expand, where 1.0 represents full width expansion. Defaults to 1.0. (Default: `1.0f`)
- `heightPercentage` (*float*): The proportion of height to expand, where 1.0 represents full height expansion. Defaults to 1.0. (Default: `1.0f`)

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### ExpandWidth

```csharp
public LayoutNode ExpandWidth(float percentage = 1.0f)
```

Configures the layout node to expand its width proportionally based on the specified percentage.

**Parameters:**

- `percentage` (*float*): The proportion of width to expand, where 1.0 represents full width expansion. Defaults to 1.0. (Default: `1.0f`)

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### ExpandHeight

```csharp
public LayoutNode ExpandHeight(float percentage = 1.0f)
```

Configures the layout node to expand its height proportionally based on the specified percentage.

**Parameters:**

- `percentage` (*float*): The proportion of height to expand, where 1.0 represents full height expansion. Defaults to 1.0. (Default: `1.0f`)

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### Gap

```csharp
public LayoutNode Gap(float gap)
```

Sets the spacing between child elements for the current layout node.

**Parameters:**

- `gap` (*float*): The amount of spacing to apply between child elements.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, allowing for method chaining.

### Margin

```csharp
public LayoutNode Margin(float value)
```

Sets a uniform margin for all sides of the layout node using the specified margin value.

**Parameters:**

- `value` (*float*): The margin value to be applied to all sides of the layout node.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, allowing for method chaining.

### MarginTop

```csharp
public LayoutNode MarginTop(float value)
```

Sets the top margin of the layout node to the specified value.

**Parameters:**

- `value` (*float*): The top margin value to apply, in pixels.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### MarginRight

```csharp
public LayoutNode MarginRight(float value)
```

Sets the right margin of the layout node.

**Parameters:**

- `value` (*float*): The size of the right margin in pixels.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### MarginBottom

```csharp
public LayoutNode MarginBottom(float value)
```

Sets the bottom margin of the layout node to the specified value.

**Parameters:**

- `value` (*float*): The margin value to apply to the bottom of the layout node, measured in pixels.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### MarginLeft

```csharp
public LayoutNode MarginLeft(float value)
```

Sets the left margin of the layout node to the specified value.

**Parameters:**

- `value` (*float*): The value to set as the left margin in pixels.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### Padding

```csharp
public LayoutNode Padding(float value)
```

Sets the padding for all sides of the layout node to the specified value.

**Parameters:**

- `value` (*float*): The value to be applied as padding to the top, right, bottom, and left sides of the node.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, allowing for method chaining.

### PaddingY

```csharp
public LayoutNode PaddingY(float value)
```

Sets the vertical padding for the layout node by applying the specified value equally to both the top and bottom padding.

**Parameters:**

- `value` (*float*): The amount of padding to apply to both the top and bottom edges of the layout node.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### PaddingX

```csharp
public LayoutNode PaddingX(float value)
```

Configures the horizontal padding of the layout node by applying the specified value to both the left and right sides.

**Parameters:**

- `value` (*float*): The amount of horizontal padding to apply, in logical units.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### PaddingTop

```csharp
public LayoutNode PaddingTop(float value)
```

Sets the top padding value for the layout node.

**Parameters:**

- `value` (*float*): The value to set as the top padding.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, allowing for method chaining.

### PaddingRight

```csharp
public LayoutNode PaddingRight(float value)
```

Sets the padding for the right side of the layout node.

**Parameters:**

- `value` (*float*): The padding value to apply to the right side, measured in units.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### PaddingBottom

```csharp
public LayoutNode PaddingBottom(float value)
```

Sets the bottom padding of the layout node to the specified value.

**Parameters:**

- `value` (*float*): The value to set for the bottom padding.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### PaddingLeft

```csharp
public LayoutNode PaddingLeft(float value)
```

Sets the left padding of the layout node to the specified value.

**Parameters:**

- `value` (*float*): The amount of padding to apply on the left side, measured in units.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### AlignContent

```csharp
public LayoutNode AlignContent(float alignment)
```

Sets the alignment for both horizontal and vertical content of the layout node.

**Parameters:**

- `alignment` (*float*): The alignment value to apply to the content. Range is typically between 0.0 and 1.0.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### ContentAlignX

```csharp
public LayoutNode ContentAlignX(float horizontal)
```

Sets the horizontal alignment of content within the layout node.

**Parameters:**

- `horizontal` (*float*): The horizontal alignment value, where 0.0 aligns the content to the left, 0.5 centers the content, and 1.0 aligns the content to the right.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### ContentAlignY

```csharp
public LayoutNode ContentAlignY(float vertical)
```

**Parameters:**

- `vertical` (*float*)

**Returns:** `LayoutNode`


### AlignSelf

```csharp
public LayoutNode AlignSelf(float alignment)
```

Sets the alignment behavior for the layout node relative to its parent container.

**Parameters:**

- `alignment` (*float*): The alignment value to apply. Typically ranges from 0.0 to 1.0, where 0.0 represents the start and 1.0 represents the end of the container. Intermediate values determine proportional alignment.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### Direction

```csharp
public LayoutNode Direction(Axis direction)
```

Sets the primary axis direction for the layout node, determining how child nodes should be arranged.

**Parameters:**

- `direction` (*Axis*): The axis direction to set. Possible values include `None`, `Horizontal`, or `Vertical`.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### Wrap

```csharp
public LayoutNode Wrap(int qty)
```

Enables wrapping behavior for the layout node, allowing content to wrap within its container.

**Parameters:**

- `qty` (*int*): An integer parameter that represents additional configuration for the wrap behavior.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### Width

```csharp
public LayoutNode Width(float width)
```

Sets the width of the layout node.

**Parameters:**

- `width` (*float*): The width value to set for the layout node.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### Height

```csharp
public LayoutNode Height(float height)
```

Sets the height of the layout node to the specified value.

**Parameters:**

- `height` (*float*): The height value to be set for the layout node.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### Left

```csharp
public LayoutNode Left(float value)
```

Sets the left position of the layout node.

**Parameters:**

- `value` (*float*): The new X-coordinate value defining the left position of the layout node.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### Top

```csharp
public LayoutNode Top(float value)
```

Sets the top position of the layout node to the specified value.

**Parameters:**

- `value` (*float*): The Y-coordinate value to set the top position of the layout node.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### Size

```csharp
public LayoutNode Size(float value)
```

Configures the layout node to set both its width and height to the specified value.

**Parameters:**

- `value` (*float*): The size value to be applied equally to both width and height.

**Returns:** `LayoutNode`

- The current instance of `LayoutNode`, enabling method chaining.

### AddChild

```csharp
public LayoutNode AddChild(LayoutNode child)
```

Adds a child node to this layout node

**Parameters:**

- `child` (*LayoutNode*)

**Returns:** `LayoutNode`


### RemoveChild

```csharp
public bool RemoveChild(LayoutNode child)
```

Removes a child node from this layout node

**Parameters:**

- `child` (*LayoutNode*)

**Returns:** `bool`


### RemoveChildById

```csharp
public bool RemoveChildById(string id)
```

Removes a child node by its ID

**Parameters:**

- `id` (*string*)

**Returns:** `bool`


### ClearChildren

```csharp
public void ClearChildren()
```

Clears all child nodes


### ClearRoot

```csharp
public void ClearRoot()
```

Recursively clears this node and all its children


### FindChildById

```csharp
public LayoutNode? FindChildById(string id)
```

Finds a child node by its ID (searches recursively)

**Parameters:**

- `id` (*string*)

**Returns:** `LayoutNode?`


### GetPath

```csharp
public string GetPath()
```

Gets the path from root to this node (useful for debugging)

**Returns:** `string`


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

