---
Title: "ContextMenuItem"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "ContextMenuItem"
  namespace: "Guinevere"
  symbol: "class"
  source: "ContextMenuItem.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [ContextMenuItem.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/ContextMenuItem.cs)

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
