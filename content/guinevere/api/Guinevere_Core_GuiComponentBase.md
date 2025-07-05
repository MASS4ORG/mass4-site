---
Title: "CLASS GuiComponentBase"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Core"
  type: "class"
---

- **Namespace:** [Guinevere.Core](/guinevere/api/namespace-guinevere.core)
- **Source File:** IGuiComponent.cs

Base abstract class for GUI components

## Properties

### **Id**

(*string*) { get; set }

### **IsVisible**

(*bool*) { get; set } = `true`

### **IsEnabled**

(*bool*) { get; set } = `true`


## Public Methods

### Draw

```csharp
public abstract void Draw(Gui gui, float width, float height)
```

**Parameters:**

- `gui` (*Gui*)
- `width` (*float*)
- `height` (*float*)


### Initialize

```csharp
public virtual void Initialize()
```


### Dispose

```csharp
public void Dispose()
```


