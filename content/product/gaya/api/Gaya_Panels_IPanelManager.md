---
Title: "INTERFACE IPanelManager"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Panels"
  type: "interface"
---

- **Namespace:** [Gaya.Panels](/gaya/api/namespace-gaya.panels)
- **Source File:** IPanelManager.cs

Interface for managing panels in the application

## Properties

### **Panels**

(*IReadOnlyList<IPanel>*) { get }: Gets all registered panels


## Public Methods

### GetPanelsByPosition

```csharp
 IEnumerable<IPanel> GetPanelsByPosition(PanelPosition position)
```

Gets panels by position

**Parameters:**

- `position` (*PanelPosition*): The position to filter by

**Returns:** `IEnumerable<IPanel>`

- Panels at the specified position

### GetPanel

```csharp
 IPanel? GetPanel(string id)
```

Gets a panel by its ID

**Parameters:**

- `id` (*string*): The panel ID

**Returns:** `IPanel?`

- The panel if found, null otherwise

### RegisterPanel

```csharp
 void RegisterPanel(IPanel panel)
```

Registers a panel instance

**Parameters:**

- `panel` (*IPanel*): The panel to register


### UnregisterPanel

```csharp
 bool UnregisterPanel(string id)
```

Unregisters a panel

**Parameters:**

- `id` (*string*): The ID of the panel to unregister

**Returns:** `bool`

- True if the panel was found and removed

### ShowPanel

```csharp
 bool ShowPanel(string id)
```

Shows a panel

**Parameters:**

- `id` (*string*): The ID of the panel to show

**Returns:** `bool`

- True if the panel was found and shown

### HidePanel

```csharp
 bool HidePanel(string id)
```

Hides a panel

**Parameters:**

- `id` (*string*): The ID of the panel to hide

**Returns:** `bool`

- True if the panel was found and hidden

### TogglePanel

```csharp
 bool TogglePanel(string id)
```

Toggles a panel's visibility

**Parameters:**

- `id` (*string*): The ID of the panel to toggle

**Returns:** `bool`

- True if the panel was found and toggled

### ClosePanel

```csharp
 bool ClosePanel(string id)
```

Closes a panel (if it can be closed)

**Parameters:**

- `id` (*string*): The ID of the panel to close

**Returns:** `bool`

- True if the panel was found and closed

### MovePanel

```csharp
 bool MovePanel(string id, PanelPosition newPosition)
```

Moves a panel to a new position

**Parameters:**

- `id` (*string*): The ID of the panel to move
- `newPosition` (*PanelPosition*): The new position

**Returns:** `bool`

- True if the panel was found and moved

### ResizePanel

```csharp
 bool ResizePanel(string id, float newSize)
```

Resizes a panel

**Parameters:**

- `id` (*string*): The ID of the panel to resize
- `newSize` (*float*): The new size

**Returns:** `bool`

- True if the panel was found and resized

### DiscoverPanels

```csharp
 void DiscoverPanels(Assembly[]? assemblies = null)
```

Discovers and registers all panels marked with PanelAttribute from the specified assemblies

**Parameters:**

- `assemblies` (*Assembly[]?*): Assemblies to scan for panels. If null, scans the current assembly and loaded assemblies (Default: `null`)


### InitializePanels

```csharp
 void InitializePanels()
```

Initializes all registered panels


### DrawPanels

```csharp
 void DrawPanels(Gui gui, AppTheme theme, PanelPosition position)
```

Draws all visible panels at the specified position

**Parameters:**

- `gui` (*Gui*): The GUI context
- `theme` (*AppTheme*): The current theme
- `position` (*PanelPosition*): The position to draw panels for


### GetTotalSizeForPosition

```csharp
 float GetTotalSizeForPosition(PanelPosition position)
```

Gets the total width/height needed for all visible panels at the specified position

**Parameters:**

- `position` (*PanelPosition*): The position to calculate size for

**Returns:** `float`

- The total size needed

