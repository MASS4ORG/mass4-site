---
Title: "CLASS PanelAttribute"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Panels"
  type: "class"
---

- **Namespace:** [Gaya.Panels](/gaya/api/namespace-gaya.panels)
- **Source File:** PanelAttribute.cs

Attribute to mark classes as panels that can be dynamically discovered and loaded. Used for the plugin system and automatic panel registration.

## Properties

### **Id**

(*string*) { get }: The unique identifier for this panel

### **DisplayName**

(*string*) { get }: The display name shown in the UI

### **Icon**

(*string*) { get }: The icon identifier for this panel (from Icons class or font awesome)

### **DefaultPosition**

(*PanelPosition*) { get }: The default position where this panel should appear

### **DefaultVisible**

(*bool*) { get }: Whether this panel is visible by default

### **DefaultSize**

(*float*) { get }: The default width for side panels or height for top/bottom panels

### **MinSize**

(*float*) { get }: The minimum size this panel can be resized to

### **Order**

(*int*) { get }: The order priority for this panel (lower numbers appear first)

### **CanClose**

(*bool*) { get }: Whether this panel can be closed by the user

### **CanMove**

(*bool*) { get }: Whether this panel supports being moved to different positions


