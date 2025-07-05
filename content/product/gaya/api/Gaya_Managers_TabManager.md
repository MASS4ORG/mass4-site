---
Title: "CLASS TabManager"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Managers"
  type: "class"
---

- **Namespace:** [Gaya.Managers](/gaya/api/namespace-gaya.managers)
- **Source File:** TabManager.cs

Manages editor tabs including opening, closing, and saving files

## Properties

### **OpenTabs**

(*IReadOnlyList<TabInfo>*): Gets the list of currently open tabs

### **ActiveTab**

(*int*) { get; set }: Gets or sets the index of the active tab

### **CurrentTab**

(*TabInfo?*): Gets the currently active tab, or null if no tabs are open


## Public Methods

### OpenFile

```csharp
public void OpenFile(string filePath)
```

Opens a file in a new tab

**Parameters:**

- `filePath` (*string*): The path to the file to open


### CreateNewFile

```csharp
public void CreateNewFile()
```

Creates a new empty file tab


### SaveCurrentTab

```csharp
public void SaveCurrentTab()
```

Saves the currently active tab


### SaveTab

```csharp
public void SaveTab(int index)
```

Saves the tab at the specified index

**Parameters:**

- `index` (*int*): The index of the tab to save


### SaveTabAs

```csharp
public void SaveTabAs(int index, string filePath)
```

Saves the tab at the specified index with a new file path

**Parameters:**

- `index` (*int*): The index of the tab to save
- `filePath` (*string*): The new file path to save to


### HasUnsavedChanges

```csharp
public bool HasUnsavedChanges()
```

Determines whether any open tabs have unsaved changes

**Returns:** `bool`

- True if any tabs have unsaved changes, false otherwise

### UpdateTabContent

```csharp
public void UpdateTabContent(int index, string content)
```

Updates the content of the tab at the specified index

**Parameters:**

- `index` (*int*): The index of the tab to update
- `content` (*string*): The new content for the tab


### HasActiveTabs

```csharp
public bool HasActiveTabs()
```

Determines whether there are any active tabs

**Returns:** `bool`

- True if there are active tabs, false otherwise

### TryCloseTab

```csharp
public bool TryCloseTab(int index)
```

Attempts to close a tab with proper handling of unsaved changes

**Parameters:**

- `index` (*int*): The index of the tab to close

**Returns:** `bool`

- True if the tab was closed, false if the operation was cancelled

### SaveAllModifiedTabs

```csharp
public bool SaveAllModifiedTabs()
```

Prompts to save all modified tabs

**Returns:** `bool`

- True if all tabs were saved or user chose to discard, false if cancelled

### DrawTabBar

```csharp
public void DrawTabBar(Gui gui, AppTheme theme)
```

Draws the tab bar UI

**Parameters:**

- `gui` (*Gui*): The GUI instance
- `theme` (*AppTheme*): The application theme


