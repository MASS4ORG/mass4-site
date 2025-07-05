---
Title: "CLASS PanelBase"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Panels"
  type: "class"
---

- **Namespace:** [Gaya.Panels](/gaya/api/namespace-gaya.panels)
- **Source File:** PanelBase.cs

Abstract base class for panels that provides common functionality

## Properties

### **Id**

(*string*) { get }: Gets the unique identifier for this panel

### **DisplayName**

(*string*) { get }: Gets the display name for this panel

### **Icon**

(*string*): Gets the icon for this panel

### **IsVisible**

(*bool*) { get; set } = `true`: Gets or sets a value indicating whether this panel is visible

### **Size**

(*float*) { get; set } = `250.0f`: Gets or sets the size of this panel

### **MinSize**

(*float*): Gets the minimum size for this panel

### **Position**

(*PanelPosition*) { get; set } = `PanelPosition.Left`: Gets or sets the position of this panel

### **CanClose**

(*bool*): Gets a value indicating whether this panel can be closed

### **CanMove**

(*bool*): Gets a value indicating whether this panel can be moved

### **Order**

(*int*): Gets the order for this panel


## Public Methods

### Initialize

```csharp
public virtual void Initialize()
```

Initializes the panel


### Draw

```csharp
public abstract void Draw(Gui gui, AppTheme theme)
```

Draws the panel

**Parameters:**

- `gui` (*Gui*): The GUI instance
- `theme` (*AppTheme*): The application theme


### OnClosing

```csharp
public virtual bool OnClosing()
```

Called when the panel is about to be closed

**Returns:** `bool`

- True if the panel can be closed, false otherwise

### OnClosed

```csharp
public virtual void OnClosed()
```

Called when the panel has been closed


### OnShown

```csharp
public virtual void OnShown()
```

Called when the panel is shown


### OnHidden

```csharp
public virtual void OnHidden()
```

Called when the panel is hidden


### OnPositionChanged

```csharp
public virtual void OnPositionChanged(PanelPosition oldPosition, PanelPosition newPosition)
```

Called when the panel position changes

**Parameters:**

- `oldPosition` (*PanelPosition*): The old position
- `newPosition` (*PanelPosition*): The new position


### OnSizeChanged

```csharp
public virtual void OnSizeChanged(float oldSize, float newSize)
```

Called when the panel size changes

**Parameters:**

- `oldSize` (*float*): The old size
- `newSize` (*float*): The new size


