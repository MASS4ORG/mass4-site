---
Title: "CLASS TopMenu"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Menu"
  type: "class"
---

- **Namespace:** [Gaya.Components.Menu](/gaya/api/namespace-gaya.components.menu)
- **Source File:** TopMenu.cs

Top menu component with hamburger menu design, close button, and folder display

## Public Methods

### SetCurrentFolder

```csharp
public void SetCurrentFolder(string folderPath)
```

Sets the current folder name to display

**Parameters:**

- `folderPath` (*string*)


### Draw

```csharp
public void Draw(Gui gui, AppTheme theme, float width, float height = 30f)
```

Draws the top menu with the specified theme

**Parameters:**

- `gui` (*Gui*): The GUI context to draw with
- `theme` (*AppTheme*): The theme to use for drawing
- `width` (*float*): The available width for drawing
- `height` (*float*): The height for drawing (default 30f) (Default: `30f`)


