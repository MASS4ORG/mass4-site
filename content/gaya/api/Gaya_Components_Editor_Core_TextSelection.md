---
Title: "STRUCT TextSelection"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor.Core"
  type: "struct"
---

- **Namespace:** [Gaya.Components.Editor.Core](/gaya/api/namespace-gaya.components.editor.core)
- **Source File:** TextSelection.cs

Represents a text selection in the editor

## Properties

### **StartLine**

(*int*) { get; set }: Gets or sets the starting line of the selection (0-based)

### **StartColumn**

(*int*) { get; set }: Gets or sets the starting column of the selection (0-based)

### **EndLine**

(*int*) { get; set }: Gets or sets the ending line of the selection (0-based)

### **EndColumn**

(*int*) { get; set }: Gets or sets the ending column of the selection (0-based)

### **IsEmpty**

(*bool*): Gets a value indicating whether the selection is empty (start and end positions are the same)


## Public Methods

### GetNormalized

```csharp
public (int startLine, int startColumn, int endLine, int endColumn) GetNormalized()
```

Gets the normalized selection where start position is guaranteed to be before end position

**Returns:** `(int startLine, int startColumn, int endLine, int endColumn)`

- A tuple containing the normalized start and end positions

