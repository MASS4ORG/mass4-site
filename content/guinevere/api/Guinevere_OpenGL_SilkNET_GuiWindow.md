---
Title: "GuiWindow"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "GuiWindow"
  namespace: "Guinevere.OpenGL.SilkNET"
  symbol: "class"
  source: "GuiWindow.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere.OpenGL.SilkNET](/guinevere/api/guinevere.opengl.silknet)
- **Source File:** [GuiWindow.cs](https://github.com/brmassa/blob/main/GuiWindow.cs)

Represents a GUI window implementation using SilkNET for OpenGL rendering. Provides input handling, window management, and rendering capabilities for the Guinevere GUI framework.

## Properties

### **IsAnyKeyDown**

(*bool*): Gets a value indicating whether any key is currently pressed.

### **MouseDelta**

(*Vector2*): Gets the mouse movement delta from the previous frame.

### **MousePosition**

(*Vector2*): Gets the current mouse position.

### **MouseWheelDelta**

(*float*): Gets the mouse wheel scroll delta.

### **PrevMousePosition**

(*Vector2*): Gets the previous mouse position.


## Public Methods

### GetStringResource

```csharp
public static string GetStringResource(string resource)
```

Gets a string resource from the assembly's embedded resources.

**Parameters:**

- `resource` (*string*): The name of the resource to retrieve.

**Returns:** `string`

- The content of the resource as a string.

### RunGui

```csharp
public void RunGui(Action draw)
```

Runs the GUI application with the specified draw callback.

**Parameters:**

- `draw` (*Action*): The callback method that defines the GUI layout and rendering.


### Dispose

```csharp
public void Dispose()
```

Releases all resources used by the GuiWindow.


### DrawWindowTitlebar

```csharp
public void DrawWindowTitlebar(bool show)
```

Shows or hides the window title bar.

**Parameters:**

- `show` (*bool*): True to show the title bar; false to hide it.


### IsKeyPressed

```csharp
public bool IsKeyPressed(KeyboardKey keyboardKey)
```

Determines whether the specified key was just pressed this frame.

**Parameters:**

- `keyboardKey` (*KeyboardKey*): The key to check.

**Returns:** `bool`

- True if the key was just pressed; otherwise, false.

### IsKeyDown

```csharp
public bool IsKeyDown(KeyboardKey keyboardKey)
```

Determines whether the specified key is currently held down.

**Parameters:**

- `keyboardKey` (*KeyboardKey*): The key to check.

**Returns:** `bool`

- True if the key is held down; otherwise, false.

### IsKeyUp

```csharp
public bool IsKeyUp(KeyboardKey keyboardKey)
```

Determines whether the specified key is currently up (not pressed).

**Parameters:**

- `keyboardKey` (*KeyboardKey*): The key to check.

**Returns:** `bool`

- True if the key is up; otherwise, false.

### IsMouseButtonPressed

```csharp
public bool IsMouseButtonPressed(MouseButton button)
```

Determines whether the specified mouse button was just pressed this frame.

**Parameters:**

- `button` (*MouseButton*): The mouse button to check.

**Returns:** `bool`

- True if the button was just pressed; otherwise, false.

### IsMouseButtonDown

```csharp
public bool IsMouseButtonDown(MouseButton button)
```

Determines whether the specified mouse button is currently held down.

**Parameters:**

- `button` (*MouseButton*): The mouse button to check.

**Returns:** `bool`

- True if the button is held down; otherwise, false.

### IsMouseButtonUp

```csharp
public bool IsMouseButtonUp(MouseButton button)
```

Determines whether the specified mouse button is currently up (not pressed).

**Parameters:**

- `button` (*MouseButton*): The mouse button to check.

**Returns:** `bool`

- True if the button is up; otherwise, false.

### GetTypedCharacters

```csharp
public string GetTypedCharacters()
```

Gets all characters typed since the last call to this method.

**Returns:** `string`

- A string containing all typed characters.

### GetClipboardText

```csharp
public string GetClipboardText()
```

Gets the current clipboard text content.

**Returns:** `string`

- The clipboard text content, or an empty string if retrieval fails.

### SetClipboardText

```csharp
public void SetClipboardText(string text)
```

Sets the clipboard text content.

**Parameters:**

- `text` (*string*): The text to set in the clipboard.


