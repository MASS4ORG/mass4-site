---
Title: "CLASS FileExplorerManager"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Managers"
  type: "class"
---

- **Namespace:** [Gaya.Managers](/gaya/api/namespace-gaya.managers)
- **Source File:** FileExplorerManager.cs

Manages file explorer functionality including folder navigation and file operations

## Properties

### **CurrentFolder**

(*string*): Gets the currently selected folder path

### **Files**

(*IReadOnlyList<EditorFileInfo>*): Gets the list of files in the current folder

### **IsVisible**

(*bool*) { get; set } = `true`: Gets or sets whether the file explorer is visible


## Public Methods

### SetFolder

```csharp
public void SetFolder(string folderPath)
```

Sets the current folder to the specified path

**Parameters:**

- `folderPath` (*string*): The path to the folder to set as current


### RefreshFolder

```csharp
public void RefreshFolder()
```

Refreshes the current folder contents


### ToggleDirectoryExpansion

```csharp
public void ToggleDirectoryExpansion(string directoryPath)
```

Toggles the expansion state of a directory

**Parameters:**

- `directoryPath` (*string*): The path to the directory to toggle


### TriggerFileSelected

```csharp
public void TriggerFileSelected(string filePath)
```

Triggers the file selected event for the specified file

**Parameters:**

- `filePath` (*string*): The path to the selected file


### GetFileIcon

```csharp
public string GetFileIcon(string fileInfoName)
```

Gets the icon name for the specified file

**Parameters:**

- `fileInfoName` (*string*): The name of the file to get the icon for

**Returns:** `string`

- The icon name for the file

