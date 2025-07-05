---
Title: "CLASS PanelButtonBar"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Core"
  type: "class"
---

- **Namespace:** [Gaya.Components.Core](/gaya/api/namespace-gaya.components.core)
- **Source File:** PanelButtonBar.cs

VSCode-like lateral panel button bar for opening/closing panels

## Public Methods

### Draw

```csharp
public override void Draw(Gui gui, float width, float height)
```

Draws the panel button bar using the default dark theme

**Parameters:**

- `gui` (*Gui*): The GUI context to draw with
- `width` (*float*): The available width for drawing
- `height` (*float*): The available height for drawing


### Draw

```csharp
public void Draw(Gui gui, AppTheme theme, float width, float height = 44f)
```

Draws the panel button bar with the specified theme

**Parameters:**

- `gui` (*Gui*): The GUI context to draw with
- `theme` (*AppTheme*): The theme to use for drawing
- `width` (*float*): The available width for drawing
- `height` (*float*): The height for drawing (default 44f) (Default: `44f`)


