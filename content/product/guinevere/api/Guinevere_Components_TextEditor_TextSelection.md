---
Title: "STRUCT TextSelection"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Components.TextEditor"
  type: "struct"
---

- **Namespace:** [Guinevere.Components.TextEditor](/guinevere/api/namespace-guinevere.components.texteditor)
- **Source File:** GuiTextEditor.cs

Represents a text selection in the editor

## Properties

### **Start**

(*CursorPosition*) { get; set }

### **End**

(*CursorPosition*) { get; set }

### **IsEmpty**

(*bool*)


## Public Methods

### GetNormalized

```csharp
public (CursorPosition start, CursorPosition end) GetNormalized()
```

**Returns:** `(CursorPosition start, CursorPosition end)`


