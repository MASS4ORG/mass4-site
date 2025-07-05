---
Title: "CLASS TextEditor"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor"
  type: "class"
---

- **Namespace:** [Gaya.Components.Editor](/gaya/api/namespace-gaya.components.editor)
- **Source File:** TextEditor.cs

Main text editor component that orchestrates all editor functionality

## Properties

### **Content**

(*string*) { get; set }: Gets or sets the editor content

### **CursorPosition**

(*CursorPosition*): Gets the current cursor position

### **HasFocus**

(*bool*): Gets whether the editor has focus

### **HasSelection**

(*bool*): Gets whether there is an active selection

### **Selection**

(*TextSelection*): Gets the current selection

### **IsReadOnly**

(*bool*) { get; set }: Gets or sets whether the editor is read-only

### **CanUndo**

(*bool*): Gets whether undo is available

### **CanRedo**

(*bool*): Gets whether redo is available

### **LineCount**

(*int*): Gets the number of lines in the editor

### **SearchManager**

(*SearchManager*): Gets the search manager for find/replace operations


## Public Methods

### Draw

```csharp
public void Draw(Gui gui, float width, float height)
```

Draws the editor

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

Gets the selected text

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


### Copy

```csharp
public void Copy()
```

Copies the selected text to clipboard


### Cut

```csharp
public void Cut()
```

Cuts the selected text to clipboard


### Paste

```csharp
public void Paste(string text)
```

Pastes text from clipboard

**Parameters:**

- `text` (*string*)


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

Goes to the specified line number

**Parameters:**

- `lineNumber` (*int*)


### Find

```csharp
public void Find(string searchText, bool caseSensitive = false, bool wholeWord = false)
```

Finds text in the editor

**Parameters:**

- `searchText` (*string*)
- `caseSensitive` (*bool*) (Default: `false`)
- `wholeWord` (*bool*) (Default: `false`)


### FindNext

```csharp
public void FindNext()
```

Finds the next occurrence


### FindPrevious

```csharp
public void FindPrevious()
```

Finds the previous occurrence


### Replace

```csharp
public void Replace(string replaceText)
```

Replaces the current search result

**Parameters:**

- `replaceText` (*string*)


### ReplaceAll

```csharp
public void ReplaceAll(string replaceText)
```

Replaces all search results

**Parameters:**

- `replaceText` (*string*)


### GetLine

```csharp
public string GetLine(int lineNumber)
```

Gets the line at the specified index

**Parameters:**

- `lineNumber` (*int*)

**Returns:** `string`


### Clear

```csharp
public void Clear()
```

Clears all content


