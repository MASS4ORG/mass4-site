---
Title: "CLASS ImprovedTopMenu"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Components.Menu"
  type: "class"
---

- **Namespace:** [Guinevere.Components.Menu](/guinevere/api/namespace-guinevere.components.menu)
- **Source File:** ImprovedTopMenu.cs

Improved top menu with hierarchical hamburger menu for Guinevere GUI framework

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
public override void Draw(Gui gui, float width, float height)
```

Draws the top menu

**Parameters:**

- `gui` (*Gui*)
- `width` (*float*)
- `height` (*float*)


### Draw

```csharp
public void Draw(Gui gui, AppTheme theme, float width, float height = 30f)
```

Draws the top menu with specific theme

**Parameters:**

- `gui` (*Gui*)
- `theme` (*AppTheme*)
- `width` (*float*)
- `height` (*float*) (Default: `30f`)


### ApplyTheme

```csharp
public void ApplyTheme(object theme)
```

Applies a theme to the component

**Parameters:**

- `theme` (*object*)


