---
Title: "ENUM EditorInputType"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor.Input"
  type: "enum"
---

- **Namespace:** [Gaya.Components.Editor.Input](/gaya/api/namespace-gaya.components.editor.input)
- **Source File:** EditorInputType.cs

Types of input actions the editor can handle

## Enum Values

- **None**: No action to perform
- **MoveCursor**: Move the cursor in a specified direction
- **InsertCharacter**: Insert a character at the current cursor position
- **InsertNewLine**: Insert a new line at the current cursor position
- **InsertTab**: Insert a tab character at the current cursor position
- **DeleteBackward**: Delete the character before the cursor (backspace)
- **DeleteForward**: Delete the character after the cursor (delete)
- **SetCursorPosition**: Set the cursor to a specific position
- **ExtendSelection**: Extend the current selection
- **ClearSelection**: Clear the current selection
- **SelectAll**: Select all text in the editor
- **Copy**: Copy the selected text to clipboard
- **Cut**: Cut the selected text to clipboard
- **Paste**: Paste text from clipboard at cursor position
- **Undo**: Undo the last operation
- **Redo**: Redo the last undone operation
- **Find**: Open the find dialog
- **GoToLine**: Go to a specific line number
- **Save**: Save the current document
- **Scroll**: Scroll the editor view

