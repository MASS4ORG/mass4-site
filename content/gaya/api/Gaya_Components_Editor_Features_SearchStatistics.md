---
Title: "CLASS SearchStatistics"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor.Features"
  type: "class"
---

- **Namespace:** [Gaya.Components.Editor.Features](/gaya/api/namespace-gaya.components.editor.features)
- **Source File:** SearchStatistics.cs

Search statistics information

## Properties

### **TotalResults**

(*int*) { get; set }: Gets or sets the total number of search results found

### **CurrentResultNumber**

(*int*) { get; set }: Gets or sets the current result number being viewed (1-based)

### **SearchText**

(*string*) { get; set } = `""`: Gets or sets the text that was searched for

### **CaseSensitive**

(*bool*) { get; set }: Gets or sets a value indicating whether the search was case sensitive

### **WholeWord**

(*bool*) { get; set }: Gets or sets a value indicating whether the search was for whole words only


## Public Methods

### ToString

```csharp
public override string ToString()
```

Returns a string representation of the search statistics

**Returns:** `string`

- A formatted string containing search information

