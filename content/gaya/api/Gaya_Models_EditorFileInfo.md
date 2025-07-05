---
Title: "CLASS EditorFileInfo"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Models"
  type: "class"
---

- **Namespace:** [Gaya.Models](/gaya/api/namespace-gaya.models)
- **Source File:** EditorFileInfo.cs

Represents information about a file or directory in the editor

## Properties

### **Name**

(*string*) { get; set } = `""`: Gets or sets the name of the file or directory

### **IsDirectory**

(*bool*) { get; set }: Gets or sets a value indicating whether this item is a directory

### **IsExpanded**

(*bool*) { get; set }: Gets or sets a value indicating whether this directory is expanded

### **FullPath**

(*string*) { get; set } = `""`: Gets or sets the full path to the file or directory

### **LastModified**

(*DateTime*) { get; set }: Gets or sets the last modified date and time

### **Size**

(*long*) { get; set }: Gets or sets the size of the file in bytes (0 for directories)

### **IndentLevel**

(*int*) { get; set } = `0`: Gets or sets the indentation level for tree display


