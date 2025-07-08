---
Title: "FlyoutItem"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "FlyoutItem"
  namespace: "Guinevere"
  symbol: "class"
  source: "FlyoutItem.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [FlyoutItem.cs](https://github.com/brmassa/blob/main/FlyoutItem.cs)

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


