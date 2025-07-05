---
Title: "INTERFACE IFocusable"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Core"
  type: "interface"
---

- **Namespace:** [Guinevere.Core](/guinevere/api/namespace-guinevere.core)
- **Source File:** IGuiComponent.cs

Interface for components that can receive focus

## Properties

### **HasFocus**

(*bool*) { get }: Whether this component currently has focus


## Public Methods

### SetFocus

```csharp
 void SetFocus(bool hasFocus)
```

Sets the focus state

**Parameters:**

- `hasFocus` (*bool*): True to give focus, false to remove it


