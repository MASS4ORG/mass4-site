---
Title: "STRUCT CursorPosition"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor.Core"
  type: "struct"
---

- **Namespace:** [Gaya.Components.Editor.Core](/gaya/api/namespace-gaya.components.editor.core)
- **Source File:** CursorPosition.cs

Represents cursor position in the editor

## Properties

### **Line**

(*int*) { get; set }: Gets or sets the line number (0-based)

### **Column**

(*int*) { get; set }: Gets or sets the column number (0-based)


## Public Methods

### ToString

```csharp
public override string ToString()
```

Returns a string representation of the cursor position with 1-based indexing

**Returns:** `string`

- A string in the format "Line X, Column Y"

