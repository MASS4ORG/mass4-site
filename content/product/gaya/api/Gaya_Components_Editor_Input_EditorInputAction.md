---
Title: "CLASS EditorInputAction"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor.Input"
  type: "class"
---

- **Namespace:** [Gaya.Components.Editor.Input](/gaya/api/namespace-gaya.components.editor.input)
- **Source File:** EditorInputAction.cs

Represents an input action to be performed by the editor

## Properties

### **Type**

(*EditorInputType*) { get; set } = `EditorInputType.None`: Gets or sets the type of input action to perform

### **Direction**

(*CursorDirection*) { get; set }: Gets or sets the direction for cursor movement actions

### **ExtendSelection**

(*bool*) { get; set }: Gets or sets a value indicating whether the selection should be extended during cursor movement

### **Character**

(*char*) { get; set }: Gets or sets the character to insert for character input actions

### **Line**

(*int*) { get; set }: Gets or sets the target line for cursor positioning actions

### **Column**

(*int*) { get; set }: Gets or sets the target column for cursor positioning actions

### **ScrollDelta**

(*int*) { get; set }: Gets or sets the scroll delta for scroll actions


