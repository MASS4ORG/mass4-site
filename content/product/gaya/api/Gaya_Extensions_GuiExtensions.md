---
Title: "CLASS GuiExtensions"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Extensions"
  type: "class"
---

- **Namespace:** [Gaya.Extensions](/gaya/api/namespace-gaya.extensions)
- **Source File:** GuiExtensions.cs

Extension methods for GUI components

## Public Methods

### DrawTabBar

```csharp
public static void DrawTabBar(ITabManager tabManager, Gui gui, AppTheme theme)
```

Draws a tab bar for the specified tab manager

**Parameters:**

- `tabManager` (*ITabManager*): The tab manager to draw tabs for
- `gui` (*Gui*): The GUI context to draw with
- `theme` (*AppTheme*): The theme to use for drawing


### DrawFileExplorer

```csharp
public static void DrawFileExplorer(IFileExplorerManager fileExplorer, Gui gui, AppTheme theme, float width)
```

Draws a file explorer for the specified file explorer manager

**Parameters:**

- `fileExplorer` (*IFileExplorerManager*): The file explorer manager to draw for
- `gui` (*Gui*): The GUI context to draw with
- `theme` (*AppTheme*): The theme to use for drawing
- `width` (*float*): The available width for drawing


### DrawActiveTabContent

```csharp
public static void DrawActiveTabContent(ITabManager tabManager, Gui gui, AppTheme theme)
```

Draws the active tab content for the specified tab manager

**Parameters:**

- `tabManager` (*ITabManager*): The tab manager to draw content for
- `gui` (*Gui*): The GUI context to draw with
- `theme` (*AppTheme*): The theme to use for drawing


### SetTabManager

```csharp
public static void SetTabManager(IFileExplorerManager fileExplorer, ITabManager tabManager)
```

Sets the tab manager for the file explorer manager

**Parameters:**

- `fileExplorer` (*IFileExplorerManager*): The file explorer manager to configure
- `tabManager` (*ITabManager*): The tab manager to set


### WireFileExplorerToTabManager

```csharp
public static void WireFileExplorerToTabManager(IFileExplorerManager fileExplorer, ITabManager tabManager)
```

Wires the file explorer manager to the tab manager to enable file opening

**Parameters:**

- `fileExplorer` (*IFileExplorerManager*): The file explorer manager to wire
- `tabManager` (*ITabManager*): The tab manager to wire to


### OnFileSelected

```csharp
public static void OnFileSelected(IFileExplorerManager fileExplorer, string filePath)
```

Handles file selection events for the file explorer manager

**Parameters:**

- `fileExplorer` (*IFileExplorerManager*): The file explorer manager handling the selection
- `filePath` (*string*): The path of the selected file


