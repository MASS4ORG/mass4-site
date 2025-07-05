---
Title: "CLASS ConsolePanel"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Panels"
  type: "class"
---

- **Namespace:** [Gaya.Panels](/gaya/api/namespace-gaya.panels)
- **Source File:** ConsolePanel.cs

Panel for displaying console output and logs

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

Draws the console panel

**Parameters:**

- `gui` (*Gui*): The GUI instance
- `theme` (*AppTheme*): The application theme


### WriteLine

```csharp
public void WriteLine(string line)
```

Adds a line to the console output

**Parameters:**

- `line` (*string*): The line to add


### WriteLines

```csharp
public void WriteLines(IEnumerable<string> lines)
```

Adds multiple lines to the console output

**Parameters:**

- `lines` (*IEnumerable<string>*): The lines to add


### ClearConsole

```csharp
public void ClearConsole()
```

Clears the console output


### GetOutput

```csharp
public string GetOutput()
```

Gets the current console output

**Returns:** `string`


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


