---
Title: "INTERFACE IPanel"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Panels"
  type: "interface"
---

- **Namespace:** [Gaya.Panels](/gaya/api/namespace-gaya.panels)
- **Source File:** IPanel.cs

Interface that all panels must implement to be part of the panel system

## Properties

### **Id**

(*string*) { get }: The unique identifier for this panel

### **DisplayName**

(*string*) { get }: The display name shown in the UI

### **Icon**

(*string*) { get }: The icon identifier for this panel

### **IsVisible**

(*bool*) { get; set }: Whether this panel is currently visible

### **Size**

(*float*) { get; set }: The current size of the panel (width for side panels, height for top/bottom panels)

### **MinSize**

(*float*) { get }: The minimum size this panel can be resized to

### **Position**

(*PanelPosition*) { get; set }: The current position of this panel

### **CanClose**

(*bool*) { get }: Whether this panel can be closed by the user

### **CanMove**

(*bool*) { get }: Whether this panel supports being moved to different positions

### **Order**

(*int*) { get }: The order priority for this panel (lower numbers appear first)


## Public Methods

### Initialize

```csharp
 void Initialize()
```

Initialize the panel with any required dependencies


### Draw

```csharp
 void Draw(Gui gui, AppTheme theme)
```

Draw the panel content using the provided GUI context

**Parameters:**

- `gui` (*Gui*): The GUI context to draw with
- `theme` (*AppTheme*): The current theme


### OnClosing

```csharp
 bool OnClosing()
```

Called when the panel is about to be closed

**Returns:** `bool`

- True if the panel can be closed, false to cancel

### OnClosed

```csharp
 void OnClosed()
```

Called when the panel is closed


### OnShown

```csharp
 void OnShown()
```

Called when the panel is shown


### OnHidden

```csharp
 void OnHidden()
```

Called when the panel is hidden


### OnPositionChanged

```csharp
 void OnPositionChanged(PanelPosition oldPosition, PanelPosition newPosition)
```

Called when the panel is moved to a new position

**Parameters:**

- `oldPosition` (*PanelPosition*): The previous position
- `newPosition` (*PanelPosition*): The new position


### OnSizeChanged

```csharp
 void OnSizeChanged(float oldSize, float newSize)
```

Called when the panel is resized

**Parameters:**

- `oldSize` (*float*): The previous size
- `newSize` (*float*): The new size


