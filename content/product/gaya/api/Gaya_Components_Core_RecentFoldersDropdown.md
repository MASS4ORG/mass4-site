---
Title: "CLASS RecentFoldersDropdown"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Core"
  type: "class"
---

- **Namespace:** [Gaya.Components.Core](/gaya/api/namespace-gaya.components.core)
- **Source File:** RecentFoldersDropdown.cs

Dropdown component for displaying and selecting recent folders

## Public Methods

### SetCurrentFolder

```csharp
public void SetCurrentFolder(string folderPath)
```

Sets the current folder for the dropdown, updating its displayed name based on the folder path.

**Parameters:**

- `folderPath` (*string*): The full path of the folder to set as the current folder. If the path is invalid or empty, a default folder name will be displayed.


### Draw

```csharp
public override void Draw(Gui gui, float width, float height)
```

Draws the dropdown component using the default dark theme

**Parameters:**

- `gui` (*Gui*): The GUI context to draw with
- `width` (*float*): The available width for drawing
- `height` (*float*): The available height for drawing


### Draw

```csharp
public void Draw(Gui gui, AppTheme theme, float availableWidth, float height = 30f)
```

Draws the dropdown component with the specified theme

**Parameters:**

- `gui` (*Gui*): The GUI context to draw with
- `theme` (*AppTheme*): The theme to use for drawing
- `availableWidth` (*float*): The available width for drawing
- `height` (*float*): The height for drawing (default 30f) (Default: `30f`)


### HandleOutsideClick

```csharp
public void HandleOutsideClick()
```

Handles clicks outside the dropdown to close it


