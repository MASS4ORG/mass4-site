---
Title: "INTERFACE IGuiComponent"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Core"
  type: "interface"
---

- **Namespace:** [Gaya.Components.Core](/gaya/api/namespace-gaya.components.core)
- **Source File:** IGuiComponent.cs

Base interface for all GUI components in the Gaya system

## Properties

### **Id**

(*string*) { get }: Unique identifier for this component

### **IsVisible**

(*bool*) { get; set }: Whether this component is currently visible

### **IsEnabled**

(*bool*) { get; set }: Whether this component is enabled for interaction


## Public Methods

### Draw

```csharp
 void Draw(Gui gui, float width, float height)
```

Draws the component

**Parameters:**

- `gui` (*Gui*): The GUI context
- `width` (*float*): Available width
- `height` (*float*): Available height


### Initialize

```csharp
 void Initialize()
```

Initializes the component


### Dispose

```csharp
 void Dispose()
```

Cleans up component resources


