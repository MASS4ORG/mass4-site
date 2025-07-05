---
Title: "INTERFACE IUndoable"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Core"
  type: "interface"
---

- **Namespace:** [Guinevere.Core](/guinevere/api/namespace-guinevere.core)
- **Source File:** IGuiComponent.cs

Interface for components that support undo/redo operations

## Properties

### **CanUndo**

(*bool*) { get }: Whether undo operation is available

### **CanRedo**

(*bool*) { get }: Whether redo operation is available


## Public Methods

### Undo

```csharp
 void Undo()
```

Performs undo operation


### Redo

```csharp
 void Redo()
```

Performs redo operation


