---
Title: "CLASS ContextMenuItem"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** ContextMenuItem.cs

Represents a context menu item

## Properties

### **Text**

(*string*) { get; set } = `""`: Gets or sets the display text of the `ContextMenuItem`. This text is presented to the user as the label for the menu item.

### **Action**

(*Action?*) { get; set }: Gets or sets the action to be executed when this `ContextMenuItem` is clicked. This property defines the behavior or response triggered by interacting with the item.

### **Enabled**

(*bool*) { get; set } = `true`: Gets or sets a value indicating whether this `ContextMenuItem` is enabled. An enabled item can be interacted with, while a disabled item is typically visually distinct and non-interactive.

### **IsSeparator**

(*bool*) { get; set }: Gets or sets a value indicating whether this `ContextMenuItem` represents a separator. A separator is a visual divider within a context menu typically used to group items.


