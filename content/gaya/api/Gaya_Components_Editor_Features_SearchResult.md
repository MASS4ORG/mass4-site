---
Title: "CLASS SearchResult"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor.Features"
  type: "class"
---

- **Namespace:** [Gaya.Components.Editor.Features](/gaya/api/namespace-gaya.components.editor.features)
- **Source File:** SearchResult.cs

Represents a search result

## Properties

### **Line**

(*int*) { get; set }: Gets or sets the line number where the search result was found (0-based)

### **Column**

(*int*) { get; set }: Gets or sets the column number where the search result was found (0-based)

### **Length**

(*int*) { get; set }: Gets or sets the length of the search result text

### **Text**

(*string*) { get; set } = `""`: Gets or sets the text that was found

### **LineText**

(*string*) { get; set } = `""`: Gets or sets the full line text containing the search result


## Public Methods

### ToString

```csharp
public override string ToString()
```

Returns a string representation of the search result

**Returns:** `string`

- A string in the format "Line X, Column Y: Text"

