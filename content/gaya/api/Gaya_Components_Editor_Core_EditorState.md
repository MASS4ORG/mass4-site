---
Title: "CLASS EditorState"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor.Core"
  type: "class"
---

- **Namespace:** [Gaya.Components.Editor.Core](/gaya/api/namespace-gaya.components.editor.core)
- **Source File:** EditorState.cs

Represents the state of a text editor at a specific point in time Used for undo/redo functionality

## Properties

### **Content**

(*string*) { get; set } = `""`: Gets or sets the text content of the editor

### **CursorLine**

(*int*) { get; set }: Gets or sets the current cursor line (0-based)

### **CursorColumn**

(*int*) { get; set }: Gets or sets the current cursor column (0-based)

### **HasSelection**

(*bool*) { get; set }: Gets or sets a value indicating whether there is an active text selection

### **SelectionStartLine**

(*int*) { get; set }: Gets or sets the starting line of the text selection (0-based)

### **SelectionStartColumn**

(*int*) { get; set }: Gets or sets the starting column of the text selection (0-based)

### **SelectionEndLine**

(*int*) { get; set }: Gets or sets the ending line of the text selection (0-based)

### **SelectionEndColumn**

(*int*) { get; set }: Gets or sets the ending column of the text selection (0-based)

### **ScrollY**

(*int*) { get; set }: Gets or sets the vertical scroll position in pixels


## Public Methods

### Clone

```csharp
public EditorState Clone()
```

Creates a deep copy of the current EditorState

**Returns:** `EditorState`

- A new EditorState with the same values as the current instance

