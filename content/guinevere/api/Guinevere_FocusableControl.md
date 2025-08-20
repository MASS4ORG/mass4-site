---
Title: "FocusableControl"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "FocusableControl"
  namespace: "Guinevere"
  symbol: "class"
  source: "FocusManager.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [FocusManager.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/FocusManager.cs)

Represents a control that can participate in the focus system.

## Properties

### **Id**

(*string*) { get; set } = `string.Empty`: Unique identifier for this control.

### **ParentId**

(*string?*) { get; set }: ID of the parent control, or null if this is a root control.

### **CanReceiveFocus**

(*bool*) { get; set } = `true`: Whether this control can receive keyboard focus.

### **IsInteractable**

(*bool*) { get; set } = `true`: Whether this control responds to mouse interactions.
