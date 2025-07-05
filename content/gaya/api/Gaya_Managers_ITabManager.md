---
Title: "INTERFACE ITabManager"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Managers"
  type: "interface"
---

- **Namespace:** [Gaya.Managers](/gaya/api/namespace-gaya.managers)
- **Source File:** ITabManager.cs

Interface for managing editor tabs

## Properties

### **OpenTabs**

(*IReadOnlyList<TabInfo>*) { get }: Gets the list of currently open tabs

### **ActiveTab**

(*int*) { get; set }: Gets or sets the index of the active tab

### **CurrentTab**

(*TabInfo?*) { get }: Gets the currently active tab, or null if no tabs are open


## Public Methods

### OpenFile

```csharp
 void OpenFile(string filePath)
```

Opens a file in a new tab

**Parameters:**

- `filePath` (*string*): The path to the file to open


### CreateNewFile

```csharp
 void CreateNewFile()
```

Creates a new empty file tab


### TryCloseTab

```csharp
 bool TryCloseTab(int index)
```

Attempts to close the tab at the specified index with proper handling of unsaved changes

**Parameters:**

- `index` (*int*): The index of the tab to close

**Returns:** `bool`

- True if the tab was closed, false if the operation was cancelled

### SaveCurrentTab

```csharp
 void SaveCurrentTab()
```

Saves the currently active tab


### SaveTab

```csharp
 void SaveTab(int index)
```

Saves the tab at the specified index

**Parameters:**

- `index` (*int*): The index of the tab to save


### SaveTabAs

```csharp
 void SaveTabAs(int index, string filePath)
```

Saves the tab at the specified index with a new file path

**Parameters:**

- `index` (*int*): The index of the tab to save
- `filePath` (*string*): The new file path to save to


### SaveAllModifiedTabs

```csharp
 bool SaveAllModifiedTabs()
```

Prompts to save all modified tabs

**Returns:** `bool`

- True if all tabs were saved or user chose to discard, false if cancelled

### HasUnsavedChanges

```csharp
 bool HasUnsavedChanges()
```

Determines whether any open tabs have unsaved changes

**Returns:** `bool`

- True if any tabs have unsaved changes, false otherwise

### UpdateTabContent

```csharp
 void UpdateTabContent(int index, string content)
```

Updates the content of the tab at the specified index

**Parameters:**

- `index` (*int*): The index of the tab to update
- `content` (*string*): The new content for the tab


### HasActiveTabs

```csharp
 bool HasActiveTabs()
```

Determines whether there are any active tabs

**Returns:** `bool`

- True if there are active tabs, false otherwise

