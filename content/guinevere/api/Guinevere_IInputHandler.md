---
Title: "IInputHandler"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "IInputHandler"
  namespace: "Guinevere"
  symbol: "interface"
  source: "IInputHandler.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [IInputHandler.cs](https://github.com/brmassa/blob/main/IInputHandler.cs)

Provides input handling functionalities including keyboard and mouse events.

## Properties

### **IsAnyKeyDown**

(*bool*) { get }: Gets a value indicating whether any key on the keyboard is currently being pressed. This property is useful for detecting general keyboard activity without targeting specific keys. The implementation may vary depending on the input system being used.

### **MouseDelta**

(*Vector2*) { get }: Gets the change in the mouse pointer's position since the previous frame. The delta is represented as a vector, where the X and Y components correspond to the horizontal and vertical differences in mouse movement, respectively. This is useful for tracking relative mouse movement over time.

### **MousePosition**

(*Vector2*) { get }: Gets the current position of the mouse pointer in screen coordinates. The position is represented as a vector, where the X and Y components correspond to the horizontal and vertical mouse location respectively. This can be used to track mouse movement or interaction within the application.

### **MouseWheelDelta**

(*float*) { get }: Gets the change in the mouse wheel's scrolling value since the last frame. This value represents the amount of scrolling performed, which can be positive for scrolling up or negative for scrolling down, depending on the platform and input device configuration.

### **PrevMousePosition**

(*Vector2*) { get }: Gets the previous position of the mouse cursor in screen coordinates. This represents the mouse position in the previous frame, which can be used to calculate movement or interactions based on changes in position.


## Public Methods

### IsKeyPressed

```csharp
 bool IsKeyPressed(KeyboardKey keyboardKey)
```

Checks if the specified keyboard key was pressed on the current frame.

**Parameters:**

- `keyboardKey` (*KeyboardKey*): The keyboard key to check for a press event.

**Returns:** `bool`

- True if the specified key was pressed in the current frame; otherwise, false.

### IsKeyDown

```csharp
 bool IsKeyDown(KeyboardKey keyboardKey)
```

Determines whether the specified key is currently pressed.

**Parameters:**

- `keyboardKey` (*KeyboardKey*): The keyboard key to check.

**Returns:** `bool`

- True if the specified key is pressed; otherwise, false.

### IsKeyUp

```csharp
 bool IsKeyUp(KeyboardKey keyboardKey)
```

Determines whether the specified key is currently not pressed or released.

**Parameters:**

- `keyboardKey` (*KeyboardKey*): The keyboard key to check.

**Returns:** `bool`

- True if the specified key is not pressed or has been released; otherwise, false.

### IsMouseButtonPressed

```csharp
 bool IsMouseButtonPressed(MouseButton button)
```

Checks whether the specified mouse button is currently pressed.

**Parameters:**

- `button` (*MouseButton*): The mouse button to check.

**Returns:** `bool`

- True if the specified mouse button is pressed; otherwise, false.

### IsMouseButtonDown

```csharp
 bool IsMouseButtonDown(MouseButton button)
```

Determines whether the specified mouse button is currently in the "down" state (pressed).

**Parameters:**

- `button` (*MouseButton*): The mouse button to check.

**Returns:** `bool`

- True if the specified mouse button is down; otherwise, false.

### IsMouseButtonUp

```csharp
 bool IsMouseButtonUp(MouseButton button)
```

Determines whether the specified mouse button is currently in the "up" state (not pressed).

**Parameters:**

- `button` (*MouseButton*): The mouse button to check.

**Returns:** `bool`

- True if the specified mouse button is up; otherwise, false.

### GetTypedCharacters

```csharp
 string GetTypedCharacters()
```

Retrieves characters that have been typed by the user during the current frame or input cycle.

**Returns:** `string`

- A string containing the characters typed by the user. Returns an empty string if no characters were typed.

### GetClipboardText

```csharp
 string GetClipboardText()
```

Retrieves the current text stored in the system clipboard.

**Returns:** `string`

- The text stored in the clipboard. If the clipboard is empty or an error occurs, returns an empty string.

### SetClipboardText

```csharp
 void SetClipboardText(string text)
```

Sets the clipboard text to the specified value.

**Parameters:**

- `text` (*string*): The text to set in the clipboard.


