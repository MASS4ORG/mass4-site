---
Title: "CLASS GitChangeInfo"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Models"
  type: "class"
---

- **Namespace:** [Gaya.Models](/gaya/api/namespace-gaya.models)
- **Source File:** GitChangeInfo.cs

Represents information about a Git change to a file

## Properties

### **FilePath**

(*string*) { get; set } = `""`: Gets or sets the path to the changed file

### **Status**

(*string*) { get; set } = `""`: Gets or sets the status of the change (M=Modified, A=Added, D=Deleted, R=Renamed, C=Copied)

### **IsStaged**

(*bool*) { get; set }: Gets or sets a value indicating whether this change is staged for commit


