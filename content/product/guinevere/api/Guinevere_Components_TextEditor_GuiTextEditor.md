---
Title: "CLASS GuiTextEditor"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Components.TextEditor"
  type: "class"
---

- **Namespace:** [Guinevere.Components.TextEditor](/guinevere/api/namespace-guinevere.components.texteditor)
- **Source File:** GuiTextEditor.cs

Improved text editor component for Guinevere GUI framework

## Properties

### **Content**

(*string*) { get; set }

### **CursorPosition**

(*CursorPosition*)

### **HasFocus**

(*bool*)

### **HasSelection**

(*bool*)

### **IsReadOnly**

(*bool*) { get; set }

### **CanUndo**

(*bool*)

### **CanRedo**

(*bool*)

### **LineCount**

(*int*)

### **Configuration**

(*TextEditorConfig*)


## Public Methods

### Draw

```csharp
public override void Draw(Gui gui, float width, float height)
```

Draws the text editor

**Parameters:**

- `gui` (*Gui*)
- `width` (*float*)
- `height` (*float*)


### SetFocus

```csharp
public void SetFocus(bool hasFocus)
```

Sets focus state

**Parameters:**

- `hasFocus` (*bool*)


### SetCursorPosition

```csharp
public void SetCursorPosition(int line, int column)
```

Sets the cursor position

**Parameters:**

- `line` (*int*)
- `column` (*int*)


### InsertText

```csharp
public void InsertText(string text)
```

Inserts text at the current cursor position

**Parameters:**

- `text` (*string*)


### GetSelectedText

```csharp
public string GetSelectedText()
```

Gets the currently selected text

**Returns:** `string`


### SelectAll

```csharp
public void SelectAll()
```

Selects all text


### ClearSelection

```csharp
public void ClearSelection()
```

Clears the current selection


### Undo

```csharp
public void Undo()
```

Performs undo operation


### Redo

```csharp
public void Redo()
```

Performs redo operation


### GoToLine

```csharp
public void GoToLine(int lineNumber)
```

Goes to a specific line

**Parameters:**

- `lineNumber` (*int*)


### Clear

```csharp
public void Clear()
```

Clears all content


### ApplyTheme

```csharp
public void ApplyTheme(object theme)
```

Applies a theme to the component

**Parameters:**

- `theme` (*object*)


### UpdateConfiguration

```csharp
public void UpdateConfiguration(TextEditorConfig config)
```

Updates the configuration

**Parameters:**

- `config` (*TextEditorConfig*)


