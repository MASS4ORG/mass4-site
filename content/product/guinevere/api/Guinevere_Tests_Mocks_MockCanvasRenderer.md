---
Title: "CLASS MockCanvasRenderer"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Tests.Mocks"
  type: "class"
---

- **Namespace:** [Guinevere.Tests.Mocks](/guinevere/api/namespace-guinevere.tests.mocks)
- **Source File:** MockCanvasRenderer.cs
## Properties

### **Width**

(*int*) { get; set }

### **Height**

(*int*) { get; set }

### **Canvas**

(*SKCanvas*)


## Public Methods

### Initialize

```csharp
public void Initialize(int width, int height)
```

**Parameters:**

- `width` (*int*)
- `height` (*int*)


### Resize

```csharp
public void Resize(int width, int height)
```

**Parameters:**

- `width` (*int*)
- `height` (*int*)


### Render

```csharp
public void Render(Action<SKCanvas> draw)
```

**Parameters:**

- `draw` (*Action<SKCanvas>*)


### Dispose

```csharp
public void Dispose()
```


