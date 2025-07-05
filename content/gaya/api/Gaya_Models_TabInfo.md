---
Title: "CLASS TabInfo"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Models"
  type: "class"
---

- **Namespace:** [Gaya.Models](/gaya/api/namespace-gaya.models)
- **Source File:** TabInfo.cs

Represents information about an editor tab

## Properties

### **Name**

(*string*) { get; set } = `""`: Gets or sets the display name of the tab

### **IsModified**

(*bool*) { get; set }: Gets or sets a value indicating whether the tab has unsaved changes

### **FilePath**

(*string*) { get; set } = `""`: Gets or sets the file path associated with the tab (empty for new files)

### **Content**

(*string*) { get; set } = `""`: Gets or sets the content of the tab

### **LastModified**

(*DateTime*) { get; set } = `DateTime.Now`: Gets or sets the last modified date and time

### **IsTemporary**

(*bool*) { get; set }: Gets or sets a value indicating whether this is a temporary/untitled file


