---
Title: "CLASS MenuItem"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Menu"
  type: "class"
---

- **Namespace:** [Gaya.Components.Menu](/gaya/api/namespace-gaya.components.menu)
- **Source File:** MenuItem.cs

Represents a menu item in the hierarchical menu system

## Properties

### **Id**

(*string*) { get; set } = `string.Empty`: Gets or sets the unique identifier for this menu item

### **Text**

(*string*) { get; set } = `string.Empty`: Gets or sets the display text for this menu item

### **Icon**

(*string*) { get; set } = `string.Empty`: Gets or sets the icon text/emoji for this menu item

### **Action**

(*string?*) { get; set }: Gets or sets the action to execute when this menu item is selected

### **Children**

(*List<MenuItem>*) { get; set } = `new()`: Gets or sets the child menu items for this item (for submenus)

### **IsEnabled**

(*bool*) { get; set } = `true`: Gets or sets a value indicating whether this menu item is enabled

### **IsSeparator**

(*bool*) { get; set } = `false`: Gets or sets a value indicating whether this menu item is a separator line

### **Shortcut**

(*string?*) { get; set }: Gets or sets the keyboard shortcut text for this menu item

### **HasChildren**

(*bool*): Gets a value indicating whether this menu item has child items


