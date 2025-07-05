---
Title: "CLASS EditorInputHandler"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor.Input"
  type: "class"
---

- **Namespace:** [Gaya.Components.Editor.Input](/gaya/api/namespace-gaya.components.editor.input)
- **Source File:** EditorInputHandler.cs

Handles all input processing for the text editor

## Public Methods

### ProcessInput

```csharp
public EditorInputAction ProcessInput(Gui gui)
```

Processes input and returns the action to perform

**Parameters:**

- `gui` (*Gui*)

**Returns:** `EditorInputAction`


### ProcessMouseClick

```csharp
public EditorInputAction ProcessMouseClick(Vector2 mousePosition, Rect editorRect, float lineHeight, int scrollY, List<string> lines)
```

Processes mouse click for cursor positioning

**Parameters:**

- `mousePosition` (*Vector2*)
- `editorRect` (*Rect*)
- `lineHeight` (*float*)
- `scrollY` (*int*)
- `lines` (*List<string>*)

**Returns:** `EditorInputAction`


### ProcessScroll

```csharp
public EditorInputAction ProcessScroll(float scrollDelta)
```

Processes scroll input

**Parameters:**

- `scrollDelta` (*float*)

**Returns:** `EditorInputAction`


