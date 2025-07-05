---
Title: "INTERFACE IUndoable"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Core"
  type: "interface"
---

- **Namespace:** [Gaya.Components.Core](/gaya/api/namespace-gaya.components.core)
- **Source File:** IUndoable.cs

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


