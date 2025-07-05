---
Title: "INTERFACE IRecentFilesService"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Services"
  type: "interface"
---

- **Namespace:** [Gaya.Services](/gaya/api/namespace-gaya.services)
- **Source File:** IRecentFilesService.cs

Interface for managing recent files and folders

## Public Methods

### GetRecentFolders

```csharp
 IReadOnlyList<string> GetRecentFolders()
```

Gets the list of recently opened folders

**Returns:** `IReadOnlyList<string>`

- A read-only list of recent folder paths

### AddRecentFolder

```csharp
 void AddRecentFolder(string path)
```

Adds a folder to the recent folders list

**Parameters:**

- `path` (*string*): The path of the folder to add


### AddRecentFile

```csharp
 void AddRecentFile(string path)
```

Adds a file to the recent files list

**Parameters:**

- `path` (*string*): The path of the file to add


