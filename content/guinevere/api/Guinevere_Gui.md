---
Title: "Gui"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "Gui"
  namespace: "Guinevere"
  symbol: "class"
  source: "Gui.Scroll.cs, Gui.DrawShapes.cs, Gui.DrawText.cs, Gui.State.cs, Gui.Interaction.cs, Gui.cs, Gui.Animation.cs, Gui.LayoutNodeScopeValues.cs, Gui.LayoutNode.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [Gui.Scroll.cs](https://github.com/brmassa/blob/main/Gui.Scroll.cs), [Gui.DrawShapes.cs](https://github.com/brmassa/blob/main/Gui.DrawShapes.cs), [Gui.DrawText.cs](https://github.com/brmassa/blob/main/Gui.DrawText.cs), [Gui.State.cs](https://github.com/brmassa/blob/main/Gui.State.cs), [Gui.Interaction.cs](https://github.com/brmassa/blob/main/Gui.Interaction.cs), [Gui.cs](https://github.com/brmassa/blob/main/Gui.cs), [Gui.Animation.cs](https://github.com/brmassa/blob/main/Gui.Animation.cs), [Gui.LayoutNodeScopeValues.cs](https://github.com/brmassa/blob/main/Gui.LayoutNodeScopeValues.cs), [Gui.LayoutNode.cs](https://github.com/brmassa/blob/main/Gui.LayoutNode.cs)
## Properties

### **Input**

(*IInputHandler*) { get; set } = `null!`: Provides access to the input handling system for the GUI, enabling interaction through keyboard and mouse events. This property represents a contract to handle input-related functionalities such as detecting key presses, mouse movements, and clipboard interactions.

### **Canvas**

(*SKCanvas?*) { get; set }: A property that represents the core rendering surface for graphical operations.

### **Time**

(*Time*) { get } = `new()`: A property that manages the application's time-related data and operations.

### **WindowHandler**

(*IWindowHandler*) { get; set } = `null!`: A property that provides an interface for handling window-specific operations.

### **ScreenRect**

(*Rect*): A property that provides the dimensions of the screen available for rendering.

### **ActiveAnimationCount**

(*int*): Gets the total number of active boolean animations being managed.

### **RunningAnimationCount**

(*int*): Gets the number of currently running boolean animations.

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

### ScrollX

```csharp
public LayoutNode ScrollX(Color? foregroundColor = null, Color? backgroundColor = null)
```

Enables horizontal scrolling for the current node.

**Parameters:**

- `foregroundColor` (*Color?*): Color of the scrollbar thumb (Default: `null`)
- `backgroundColor` (*Color?*): Color of the scrollbar track (Default: `null`)

**Returns:** `LayoutNode`

- The current node for chaining

### ScrollY

```csharp
public LayoutNode ScrollY(Color? foregroundColor = null, Color? backgroundColor = null)
```

Enables vertical scrolling for the current node.

**Parameters:**

- `foregroundColor` (*Color?*): Color of the scrollbar thumb (Default: `null`)
- `backgroundColor` (*Color?*): Color of the scrollbar track (Default: `null`)

**Returns:** `LayoutNode`

- The current noden for chaining

### Scroll

```csharp
public LayoutNode Scroll(Color? foregroundColor = null, Color? backgroundColor = null)
```

Enables both horizontal and vertical scrolling for the current node.

**Parameters:**

- `foregroundColor` (*Color?*): Color of the scrollbar thumb (Default: `null`)
- `backgroundColor` (*Color?*): Color of the scrollbar track (Default: `null`)

**Returns:** `LayoutNode`

- The current node for chaining

### ClipContent

```csharp
public void ClipContent()
```

Clips drawing to the current node's bounds. Proper clipping for scrollable containers.


### ScrollContainer

```csharp
public LayoutNode ScrollContainer(bool scrollX = false, bool scrollY = true, Color? foregroundColor = null, Color? backgroundColor = null)
```

Creates a scrollable container with proper clipping and overflow handling. This is the recommended way to create scrollable areas.

**Parameters:**

- `scrollX` (*bool*): Enable horizontal scrolling (Default: `false`)
- `scrollY` (*bool*): Enable vertical scrolling (Default: `true`)
- `foregroundColor` (*Color?*): Scrollbar foreground color (Default: `null`)
- `backgroundColor` (*Color?*): Scrollbar background color (Default: `null`)

**Returns:** `LayoutNode`

- The scrollable container node

### GetScrollState

```csharp
public ScrollState? GetScrollState(string nodeId)
```

Gets the scroll state for the specified node ID (public access for ClipOperation).

**Parameters:**

- `nodeId` (*string*): The node ID to get scroll state for

**Returns:** `ScrollState?`

- The scroll state or null if not found

### ScrollToTop

```csharp
public void ScrollToTop(string nodeId)
```

Scrolls the specified node to the top.

**Parameters:**

- `nodeId` (*string*): The node ID to scroll


### ScrollToBottom

```csharp
public void ScrollToBottom(string nodeId)
```

Scrolls the specified node to the bottom.

**Parameters:**

- `nodeId` (*string*): The node ID to scroll


### ScrollToLeft

```csharp
public void ScrollToLeft(string nodeId)
```

Scrolls the specified node to the left.

**Parameters:**

- `nodeId` (*string*): The node ID to scroll


### ScrollToRight

```csharp
public void ScrollToRight(string nodeId)
```

Scrolls the specified node to the right.

**Parameters:**

- `nodeId` (*string*): The node ID to scroll


### ScrollBy

```csharp
public void ScrollBy(string nodeId, Vector2 delta)
```

Scrolls the specified node by the given amount.

**Parameters:**

- `nodeId` (*string*): The node ID to scroll
- `delta` (*Vector2*): The amount to scroll by


### CanScroll

```csharp
public bool CanScroll(string nodeId, Axis axis)
```

Gets whether the specified node can scroll in the given direction.

**Parameters:**

- `nodeId` (*string*): The node ID to check
- `axis` (*Axis*): The axis to check (Horizontal or Vertical)

**Returns:** `bool`

- True if the node can scroll in the specified direction

### GetScrollPercentage

```csharp
public float GetScrollPercentage(string nodeId, Axis axis)
```

Gets the scroll percentage for the specified node and axis (0.0 to 1.0).

**Parameters:**

- `nodeId` (*string*): The node ID to get scroll percentage for
- `axis` (*Axis*): The axis to get percentage for

**Returns:** `float`

- The scroll percentage from 0.0 to 1.0

### SetScrollPercentage

```csharp
public void SetScrollPercentage(string nodeId, Axis axis, float percentage)
```

Sets the scroll percentage for the specified node and axis (0.0 to 1.0).

**Parameters:**

- `nodeId` (*string*): The node ID to set scroll percentage for
- `axis` (*Axis*): The axis to set percentage for
- `percentage` (*float*): The scroll percentage from 0.0 to 1.0


### DrawRectBorder

```csharp
public Shape DrawRectBorder(Rect screenRect, Color color, float thickness = 1f, float radius = 0.0f, Corner corners = Corner.All)
```

Draws a rectangle border

**Parameters:**

- `screenRect` (*Rect*)
- `color` (*Color*)
- `thickness` (*float*) (Default: `1f`)
- `radius` (*float*) (Default: `0.0f`)
- `corners` (*Corner*) (Default: `Corner.All`)

**Returns:** `Shape`


### DrawRectFilled

```csharp
public Shape DrawRectFilled(Rect screenRect, Color? color, float radius = 0.0f, Corner corners = Corner.All)
```

Draws a filled rectangle

**Parameters:**

- `screenRect` (*Rect*)
- `color` (*Color?*)
- `radius` (*float*) (Default: `0.0f`)
- `corners` (*Corner*) (Default: `Corner.All`)

**Returns:** `Shape`


### DrawTriangleFilled

```csharp
public Shape DrawTriangleFilled(Vector2 a, Vector2 b, Vector2 c, Color colorA, Color? colorB = null, Color? colorC = null)
```

Draws a filled triangle

**Parameters:**

- `a` (*Vector2*)
- `b` (*Vector2*)
- `c` (*Vector2*)
- `colorA` (*Color*)
- `colorB` (*Color?*) (Default: `null`)
- `colorC` (*Color?*) (Default: `null`)

**Returns:** `Shape`


### DrawRect

```csharp
public Shape DrawRect(Rect rect, Color color, float radius = 0.0f, Corner corners = Corner.All)
```

Draws a filled rectangle (alias for DrawRectFilled)

**Parameters:**

- `rect` (*Rect*)
- `color` (*Color*)
- `radius` (*float*) (Default: `0.0f`)
- `corners` (*Corner*) (Default: `Corner.All`)

**Returns:** `Shape`


### DrawCircleBorder

```csharp
public Shape DrawCircleBorder(Vector2 center, float radius, Color color, float thickness = 1f)
```

Draws a circle border

**Parameters:**

- `center` (*Vector2*)
- `radius` (*float*)
- `color` (*Color*)
- `thickness` (*float*) (Default: `1f`)

**Returns:** `Shape`


### DrawCircleFilled

```csharp
public Shape DrawCircleFilled(Vector2 center, float radius, Color color)
```

Draws a filled circle

**Parameters:**

- `center` (*Vector2*)
- `radius` (*float*)
- `color` (*Color*)

**Returns:** `Shape`


### DrawCircle

```csharp
public Shape DrawCircle(Vector2 center, float radius, Color color)
```

Draws a filled circle (alias for DrawCircleFilled)

**Parameters:**

- `center` (*Vector2*)
- `radius` (*float*)
- `color` (*Color*)

**Returns:** `Shape`


### DrawTriangle

```csharp
public void DrawTriangle(Vector2 a, Vector2 b, Vector2 c, Color colorA, Color? colorB = null, Color? colorC = null)
```

Draws a filled triangle (alias for DrawTriangleFilled)

**Parameters:**

- `a` (*Vector2*)
- `b` (*Vector2*)
- `c` (*Vector2*)
- `colorA` (*Color*)
- `colorB` (*Color?*) (Default: `null`)
- `colorC` (*Color?*) (Default: `null`)


### DrawBackgroundRect

```csharp
public Shape DrawBackgroundRect(Color? color = null, float radius = 0.0f, Corner corners = Corner.All, LayoutNode? node = null)
```

Draws a filled rectangle

**Parameters:**

- `color` (*Color?*) (Default: `null`)
- `radius` (*float*) (Default: `0.0f`)
- `corners` (*Corner*) (Default: `Corner.All`)
- `node` (*LayoutNode?*) (Default: `null`)

**Returns:** `Shape`


### DrawLine

```csharp
public void DrawLine(Vector2 start, Vector2 end, Color color, float thickness = 1f)
```

Draws a line between two points

**Parameters:**

- `start` (*Vector2*)
- `end` (*Vector2*)
- `color` (*Color*)
- `thickness` (*float*) (Default: `1f`)


### DrawShape

```csharp
public Shape DrawShape(Vector2 position, Shape shape)
```

Draws a shape at the specified position and applies transformations.

**Parameters:**

- `position` (*Vector2*): The position where the shape should be drawn.
- `shape` (*Shape*): The shape to be drawn, which will be transformed and rendered.

**Returns:** `Shape`

- The newly created and rendered shape.

### SetClipArea

```csharp
public void SetClipArea(LayoutNode node, Shape clipShape)
```

Sets a clipping area for rendering content inside a specific layout node.

**Parameters:**

- `node` (*LayoutNode*): The layout node to which the clipping area is applied.
- `clipShape` (*Shape*): The shape defining the clipping area.


### DrawText

```csharp
public LayoutNode DrawText(string text, float size = 0, Color? color = null, Font? font = null, float wrapWidth = 0, bool centerInRect = true, bool clip = false, string filePath = "", int lineNumber = 0)
```

Draws text as a layout node: in Pass1Build phase, creates a node sized to the text; in Pass2Render phase, draws the text in the node's rect. Returns the node for layout chaining.

**Parameters:**

- `text` (*string*)
- `size` (*float*) (Default: `0`)
- `color` (*Color?*) (Default: `null`)
- `font` (*Font?*) (Default: `null`)
- `wrapWidth` (*float*) (Default: `0`)
- `centerInRect` (*bool*) (Default: `true`)
- `clip` (*bool*) (Default: `false`)
- `filePath` (*string*) (Default: `""`)
- `lineNumber` (*int*) (Default: `0`)

**Returns:** `LayoutNode`


### DrawGlyph

```csharp
public LayoutNode DrawGlyph(char iconCode, float size = 0, Color? color = null, Font? font = null, bool centerInRect = true, bool clip = false, string filePath = "", int lineNumber = 0)
```

Draws a glyph (icon) as a layout node: in Pass1Build phase, creates a node sized to the glyph; in Pass2Render phase, draws the glyph in the node's rect. Returns the node for layout chaining.

**Parameters:**

- `iconCode` (*char*)
- `size` (*float*) (Default: `0`)
- `color` (*Color?*) (Default: `null`)
- `font` (*Font?*) (Default: `null`)
- `centerInRect` (*bool*) (Default: `true`)
- `clip` (*bool*) (Default: `false`)
- `filePath` (*string*) (Default: `""`)
- `lineNumber` (*int*) (Default: `0`)

**Returns:** `LayoutNode`


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


### GetInteractable

```csharp
public InteractableElement GetInteractable()
```

Retrieves an interactable element for the current layout node.

**Returns:** `InteractableElement`

- An instance of `InteractableElement` that represents the interactable element associated with the current layout node.

### BeginFrame

```csharp
public void BeginFrame(SKCanvas canvas, Font? font = null, Font? fontIcon = null)
```

Initializes the GUI for a new frame by preparing the canvas, resetting layout states, and setting up root nodes for the layout system. Optionally sets the primary and icon fonts for rendering using Font wrappers.

**Parameters:**

- `canvas` (*SKCanvas*): The canvas on which the GUI elements will be rendered for the current frame.
- `font` (*Font?*): Optional parameter to set the default font for text rendering using Font wrapper. (Default: `null`)
- `fontIcon` (*Font?*): Optional parameter to set the font for rendering icons using Font wrapper. (Default: `null`)


### EndFrame

```csharp
public void EndFrame()
```

Concludes the current GUI frame rendering process by releasing resources and performing cleanup tasks. Clears any completed drag operations and resets the current canvas to null.


### SetStage

```csharp
public void SetStage(Pass newPass)
```

Sets the current rendering stage for the graphical user interface (GUI). Updates the pass value and resets certain layout node properties if applicable.

**Parameters:**

- `newPass` (*Pass*): The new rendering stage to assign, represented as a value of the `Pass` enumeration.


### Render

```csharp
public void Render()
```

Renders all layout nodes in the graphical user interface (GUI) by iterating through the hierarchical structure of layout nodes in order of their `z` index.

**Remarks:**
This method collects all layout nodes in a flat list, organizes them by their z-order value, and calls the Render method on their respective draw lists to perform the rendering. It requires a valid SKCanvas instance to be set as the `Canvas` property of the GUI.



### DrawWindowTitlebar

```csharp
public void DrawWindowTitlebar(bool show = true)
```

Draws the window title bar, optionally showing or hiding it based on the specified parameter.

**Parameters:**

- `show` (*bool*): A boolean value indicating whether the title bar should be visible. The default value is true. (Default: `true`)


### GetAnimationFloat

```csharp
public AnimationFloat GetAnimationFloat(float initialValue = 0f)
```

Gets a new AnimationFloat instance with the specified initial value. Each call creates a new independent animation instance.

**Parameters:**

- `initialValue` (*float*): The initial value of the animation. Default is 0. (Default: `0f`)

**Returns:** `AnimationFloat`

- A new AnimationFloat instance.

### AnimateBool01

```csharp
public float AnimateBool01(bool targetState, float duration, Func<float, float> easingFunction, string callerFilePath = "", int callerLineNumber = 0)
```

Animates a boolean value to a float between 0.0 and 1.0 with automatic ID generation based on the caller's file path and line number. This method both starts and processes the animation on each call, maintaining state internally.

**Parameters:**

- `targetState` (*bool*): The target boolean state to animate towards.
- `duration` (*float*): The duration of the animation in seconds.
- `easingFunction` (*Func<float, float>*): The easing function to use for the animation.
- `callerFilePath` (*string*): Automatically provided caller file path. (Default: `""`)
- `callerLineNumber` (*int*): Automatically provided caller line number. (Default: `0`)

**Returns:** `float`

- The current animated value between 0.0 and 1.0.

### ClearAnimations

```csharp
public void ClearAnimations()
```

Clears all animation instances. This should typically be called when resetting the GUI state or when cleaning up.


### SetTextColor

```csharp
public void SetTextColor(Color color, LayoutNodeScope? scope = null)
```

Sets the text color for the current node and its children. The color is automatically restored when exiting the node scope.

**Parameters:**

- `color` (*Color*)
- `scope` (*LayoutNodeScope?*) (Default: `null`)


### SetTextSize

```csharp
public void SetTextSize(float size, LayoutNodeScope? scope = null)
```

Sets the text size for the current node and its children. The size is automatically restored when exiting the node scope.

**Parameters:**

- `size` (*float*)
- `scope` (*LayoutNodeScope?*) (Default: `null`)


### SetTextFont

```csharp
public void SetTextFont(Font font, LayoutNodeScope? scope = null)
```

Sets the text font for the current node and its children using the Font wrapper. The font is automatically restored when exiting the node scope.

**Parameters:**

- `font` (*Font*)
- `scope` (*LayoutNodeScope?*) (Default: `null`)


### SetIconFont

```csharp
public void SetIconFont(Font font, LayoutNodeScope? scope = null)
```

Sets the icon font for the current node and its children using the Font wrapper. The font is automatically restored when exiting the node scope.

**Parameters:**

- `font` (*Font*)
- `scope` (*LayoutNodeScope?*) (Default: `null`)


### SetZIndex

```csharp
public void SetZIndex(int index, LayoutNodeScope? scope = null)
```

Sets the icon font for the current node and its children using the Font wrapper. The font is automatically restored when exiting the node scope.

**Parameters:**

- `index` (*int*)
- `scope` (*LayoutNodeScope?*) (Default: `null`)


### GetEffectiveTextColor

```csharp
public Color GetEffectiveTextColor(LayoutNodeScope? scope = null)
```

Gets the effective text color for the current scope, inheriting from parent scopes if not set.

**Parameters:**

- `scope` (*LayoutNodeScope?*) (Default: `null`)

**Returns:** `Color`


### GetEffectiveTextSize

```csharp
public float GetEffectiveTextSize(LayoutNodeScope? scope = null)
```

Gets the effective text size for the current scope, inheriting from parent scopes if not set.

**Parameters:**

- `scope` (*LayoutNodeScope?*) (Default: `null`)

**Returns:** `float`


### GetEffectiveTextFont

```csharp
public Font GetEffectiveTextFont(LayoutNodeScope? scope = null)
```

Gets the effective text font for the current scope, inheriting from parent scopes if not set.

**Parameters:**

- `scope` (*LayoutNodeScope?*) (Default: `null`)

**Returns:** `Font`


### GetEffectiveIconFont

```csharp
public Font GetEffectiveIconFont(LayoutNodeScope? scope = null)
```

Gets the effective icon font for the current scope, inheriting from parent scopes if not set.

**Parameters:**

- `scope` (*LayoutNodeScope?*) (Default: `null`)

**Returns:** `Font`


### GetEffectiveZIndex

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


