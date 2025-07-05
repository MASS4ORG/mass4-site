---
Title: "CLASS RecentFilesService"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Services"
  type: "class"
---

- **Namespace:** [Gaya.Services](/gaya/api/namespace-gaya.services)
- **Source File:** RecentFilesService.cs

Service for managing recently accessed files and folders

## Public Methods

### GetRecentFolders

```csharp
public IReadOnlyList<string> GetRecentFolders()
```

Gets the list of recently accessed folders

**Returns:** `IReadOnlyList<string>`

- A read-only list of recent folder paths

### AddRecentFolder

```csharp
public void AddRecentFolder(string path)
```

Adds a folder to the recent folders list

**Parameters:**

- `path` (*string*): The path of the folder to add


### AddRecentFile

```csharp
public void AddRecentFile(string path)
```

Adds a file to the recent files list by adding its parent directory to recent folders

**Parameters:**

- `path` (*string*): The path of the file to add


