---
Title: "CLASS GuiComponentBase"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Core"
  type: "class"
---

- **Namespace:** [Gaya.Components.Core](/gaya/api/namespace-gaya.components.core)
- **Source File:** GuiComponentBase.cs

Base abstract class for GUI components

## Properties

### **Id**

(*string*) { get; set }: Gets the unique identifier for this component

### **IsVisible**

(*bool*) { get; set } = `true`: Gets or sets a value indicating whether the component is visible

### **IsEnabled**

(*bool*) { get; set } = `true`: Gets or sets a value indicating whether the component is enabled


## Public Methods

### Draw

```csharp
public abstract void Draw(Gui gui, float width, float height)
```

Draws the component using the specified GUI context

**Parameters:**

- `gui` (*Gui*): The GUI context to draw with
- `width` (*float*): The available width for drawing
- `height` (*float*): The available height for drawing


### Initialize

```csharp
public virtual void Initialize()
```

Initializes the component. Override this method to provide custom initialization logic


### Dispose

```csharp
public void Dispose()
```

Releases all resources used by the component


