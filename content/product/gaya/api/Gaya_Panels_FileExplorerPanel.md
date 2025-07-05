---
Title: "CLASS FileExplorerPanel"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Panels"
  type: "class"
---

- **Namespace:** [Gaya.Panels](/gaya/api/namespace-gaya.panels)
- **Source File:** FileExplorerPanel.cs

Panel for displaying and navigating the file system

## Properties

### **Id**

(*string*): Gets the unique identifier for this panel

### **DisplayName**

(*string*): Gets the display name for this panel

### **Icon**

(*string*): Gets the icon for this panel

### **MinSize**

(*float*): Gets the minimum size for this panel

### **Order**

(*int*): Gets the order for this panel


## Public Methods

### Draw

```csharp
public override void Draw(Gui gui, AppTheme theme)
```

Draws the file explorer panel

**Parameters:**

- `gui` (*Gui*): The GUI instance
- `theme` (*AppTheme*): The application theme


### OnSizeChanged

```csharp
public override void OnSizeChanged(float oldSize, float newSize)
```

Called when the panel size changes

**Parameters:**

- `oldSize` (*float*): The old size
- `newSize` (*float*): The new size


### OnPositionChanged

```csharp
public override void OnPositionChanged(PanelPosition oldPosition, PanelPosition newPosition)
```

Called when the panel position changes

**Parameters:**

- `oldPosition` (*PanelPosition*): The old position
- `newPosition` (*PanelPosition*): The new position


### OnClosing

```csharp
public override bool OnClosing()
```

Called when the panel is about to be closed

**Returns:** `bool`

- True if the panel can be closed, false otherwise

### OnClosed

```csharp
public override void OnClosed()
```

Called when the panel has been closed


### OnShown

```csharp
public override void OnShown()
```

Called when the panel is shown


### OnHidden

```csharp
public override void OnHidden()
```

Called when the panel is hidden


