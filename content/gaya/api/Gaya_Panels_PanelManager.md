---
Title: "CLASS PanelManager"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Panels"
  type: "class"
---

- **Namespace:** [Gaya.Panels](/gaya/api/namespace-gaya.panels)
- **Source File:** PanelManager.cs

Manages all panels in the application, including discovery, registration, and lifecycle management

## Properties

### **Panels**

(*IReadOnlyList<IPanel>*): Gets all registered panels ordered by their Order property


## Public Methods

### GetPanelsByPosition

```csharp
public IEnumerable<IPanel> GetPanelsByPosition(PanelPosition position)
```

Gets all panels at the specified position

**Parameters:**

- `position` (*PanelPosition*): The position to get panels for

**Returns:** `IEnumerable<IPanel>`

- An enumerable of panels at the specified position

### GetPanel

```csharp
public IPanel? GetPanel(string id)
```

Gets a panel by its ID

**Parameters:**

- `id` (*string*): The ID of the panel to get

**Returns:** `IPanel?`

- The panel with the specified ID, or null if not found

### RegisterPanel

```csharp
public void RegisterPanel(IPanel panel)
```

Registers a panel with the manager

**Parameters:**

- `panel` (*IPanel*): The panel to register


### UnregisterPanel

```csharp
public bool UnregisterPanel(string id)
```

Unregisters a panel from the manager

**Parameters:**

- `id` (*string*): The ID of the panel to unregister

**Returns:** `bool`

- True if the panel was unregistered successfully, false otherwise

### ShowPanel

```csharp
public bool ShowPanel(string id)
```

Shows a panel by making it visible

**Parameters:**

- `id` (*string*): The ID of the panel to show

**Returns:** `bool`

- True if the panel was shown successfully, false otherwise

### HidePanel

```csharp
public bool HidePanel(string id)
```

Hides a panel by making it invisible

**Parameters:**

- `id` (*string*): The ID of the panel to hide

**Returns:** `bool`

- True if the panel was hidden successfully, false otherwise

### TogglePanel

```csharp
public bool TogglePanel(string id)
```

Toggles the visibility of a panel

**Parameters:**

- `id` (*string*): The ID of the panel to toggle

**Returns:** `bool`

- True if the panel state was toggled successfully, false otherwise

### ClosePanel

```csharp
public bool ClosePanel(string id)
```

Closes a panel if it allows being closed

**Parameters:**

- `id` (*string*): The ID of the panel to close

**Returns:** `bool`

- True if the panel was closed successfully, false otherwise

### MovePanel

```csharp
public bool MovePanel(string id, PanelPosition newPosition)
```

Moves a panel to a new position if it allows being moved

**Parameters:**

- `id` (*string*): The ID of the panel to move
- `newPosition` (*PanelPosition*): The new position for the panel

**Returns:** `bool`

- True if the panel was moved successfully, false otherwise

### ResizePanel

```csharp
public bool ResizePanel(string id, float newSize)
```

Resizes a panel to a new size

**Parameters:**

- `id` (*string*): The ID of the panel to resize
- `newSize` (*float*): The new size for the panel

**Returns:** `bool`

- True if the panel was resized successfully, false otherwise

### DiscoverPanels

```csharp
public void DiscoverPanels(Assembly[]? assemblies = null)
```

Discovers and registers panels from the specified assemblies using reflection

**Parameters:**

- `assemblies` (*Assembly[]?*): The assemblies to scan for panels, or null to use the executing assembly (Default: `null`)


### InitializePanels

```csharp
public void InitializePanels()
```

Initializes all registered panels


### DrawPanels

```csharp
public void DrawPanels(Gui gui, AppTheme theme, PanelPosition position)
```

Draws all visible panels at the specified position

**Parameters:**

- `gui` (*Gui*): The GUI instance for rendering
- `theme` (*AppTheme*): The application theme
- `position` (*PanelPosition*): The position to draw panels for


### GetTotalSizeForPosition

```csharp
public float GetTotalSizeForPosition(PanelPosition position)
```

Gets the total size of all visible panels at the specified position

**Parameters:**

- `position` (*PanelPosition*): The position to calculate total size for

**Returns:** `float`

- The total size of all visible panels at the position

