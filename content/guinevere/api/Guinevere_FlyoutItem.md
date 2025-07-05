---
Title: "FlyoutItem"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** FlyoutItem.cs

Represents a flyout menu item

## Properties

### **Text**

(*string*) { get; set } = `""`: Gets or sets the display text of the menu item

### **Action**

(*Action?*) { get; set }: Gets or sets the action to execute when clicked

### **Submenu**

(*List<FlyoutItem>?*) { get; set }: Gets or sets the submenu items

### **Shortcut**

(*string*) { get; set } = `""`: Gets or sets the keyboard shortcut text

### **Enabled**

(*bool*) { get; set } = `true`: Gets or sets whether the item is enabled

### **IsSeparator**

(*bool*) { get; set }: Gets or sets whether this is a separator

### **HasSubmenu**

(*bool*): Gets whether this item has a submenu


