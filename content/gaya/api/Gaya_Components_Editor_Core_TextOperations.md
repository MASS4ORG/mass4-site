---
Title: "CLASS TextOperations"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor.Core"
  type: "class"
---

- **Namespace:** [Gaya.Components.Editor.Core](/gaya/api/namespace-gaya.components.editor.core)
- **Source File:** TextOperations.cs

Handles text operations and manipulations for the editor

## Public Methods

### InsertCharacter

```csharp
public string InsertCharacter(string content, int line, int column, char character)
```

Inserts a character at the specified position

**Parameters:**

- `content` (*string*)
- `line` (*int*)
- `column` (*int*)
- `character` (*char*)

**Returns:** `string`


### InsertText

```csharp
public string InsertText(string content, int line, int column, string text)
```

Inserts text at the specified position

**Parameters:**

- `content` (*string*)
- `line` (*int*)
- `column` (*int*)
- `text` (*string*)

**Returns:** `string`


### InsertNewLine

```csharp
public string InsertNewLine(string content, int line, int column)
```

Inserts a new line at the specified position

**Parameters:**

- `content` (*string*)
- `line` (*int*)
- `column` (*int*)

**Returns:** `string`


### InsertTab

```csharp
public string InsertTab(string content, int line, int column)
```

Inserts a tab at the specified position

**Parameters:**

- `content` (*string*)
- `line` (*int*)
- `column` (*int*)

**Returns:** `string`


### DeleteBackward

```csharp
public (string content, int newLine, int newColumn) DeleteBackward(string content, int line, int column)
```

Deletes a character before the cursor position

**Parameters:**

- `content` (*string*)
- `line` (*int*)
- `column` (*int*)

**Returns:** `(string content, int newLine, int newColumn)`


### DeleteForward

```csharp
public string DeleteForward(string content, int line, int column)
```

Deletes a character after the cursor position

**Parameters:**

- `content` (*string*)
- `line` (*int*)
- `column` (*int*)

**Returns:** `string`


### DeleteSelection

```csharp
public string DeleteSelection(string content, TextSelection selection)
```

Deletes the selected text

**Parameters:**

- `content` (*string*)
- `selection` (*TextSelection*)

**Returns:** `string`


### GetSelectedText

```csharp
public string GetSelectedText(string content, TextSelection selection)
```

Gets the selected text

**Parameters:**

- `content` (*string*)
- `selection` (*TextSelection*)

**Returns:** `string`


### FindText

```csharp
public (int line, int column)? FindText(string content, string searchText, int startLine = 0, int startColumn = 0, bool caseSensitive = false, bool wholeWord = false)
```

Finds text in the content

**Parameters:**

- `content` (*string*)
- `searchText` (*string*)
- `startLine` (*int*) (Default: `0`)
- `startColumn` (*int*) (Default: `0`)
- `caseSensitive` (*bool*) (Default: `false`)
- `wholeWord` (*bool*) (Default: `false`)

**Returns:** `(int line, int column)?`


### ReplaceText

```csharp
public string ReplaceText(string content, string searchText, string replaceText, bool caseSensitive = false, bool wholeWord = false)
```

Replaces text in the content

**Parameters:**

- `content` (*string*)
- `searchText` (*string*)
- `replaceText` (*string*)
- `caseSensitive` (*bool*) (Default: `false`)
- `wholeWord` (*bool*) (Default: `false`)

**Returns:** `string`


### ReplaceAllText

```csharp
public string ReplaceAllText(string content, string searchText, string replaceText, bool caseSensitive = false, bool wholeWord = false)
```

Replaces all occurrences of text in the content

**Parameters:**

- `content` (*string*)
- `searchText` (*string*)
- `replaceText` (*string*)
- `caseSensitive` (*bool*) (Default: `false`)
- `wholeWord` (*bool*) (Default: `false`)

**Returns:** `string`


### GetWordAt

```csharp
public (int startColumn, int endColumn, string word) GetWordAt(string content, int line, int column)
```

Gets the word at the specified position

**Parameters:**

- `content` (*string*)
- `line` (*int*)
- `column` (*int*)

**Returns:** `(int startColumn, int endColumn, string word)`


### IndentLines

```csharp
public string IndentLines(string content, int startLine, int endLine)
```

Indents the selected lines

**Parameters:**

- `content` (*string*)
- `startLine` (*int*)
- `endLine` (*int*)

**Returns:** `string`


### UnindentLines

```csharp
public string UnindentLines(string content, int startLine, int endLine)
```

Unindents the selected lines

**Parameters:**

- `content` (*string*)
- `startLine` (*int*)
- `endLine` (*int*)

**Returns:** `string`


### FormatContent

```csharp
public string FormatContent(string content)
```

Formats the content (basic auto-formatting)

**Parameters:**

- `content` (*string*)

**Returns:** `string`


