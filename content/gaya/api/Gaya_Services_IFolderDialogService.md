---
Title: "INTERFACE IFolderDialogService"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Services"
  type: "interface"
---

- **Namespace:** [Gaya.Services](/gaya/api/namespace-gaya.services)
- **Source File:** IFolderDialogService.cs

Interface for folder and file dialog services

## Public Methods

### SelectFolderAsync

```csharp
 Task<string?> SelectFolderAsync(string? initialDirectory = null)
```

Shows a folder selection dialog

**Parameters:**

- `initialDirectory` (*string?*): The initial directory to show, or null for default (Default: `null`)

**Returns:** `Task<string?>`

- The selected folder path, or null if canceled

### OpenFileAsync

```csharp
 Task<string?> OpenFileAsync(string? initialDirectory = null, string? filter = null)
```

Shows a file open dialog

**Parameters:**

- `initialDirectory` (*string?*): The initial directory to show, or null for default (Default: `null`)
- `filter` (*string?*): The file filter to apply, or null for all files (Default: `null`)

**Returns:** `Task<string?>`

- The selected file path, or null if canceled

### SaveFileAsync

```csharp
 Task<string?> SaveFileAsync(string? initialDirectory = null, string? defaultFileName = null, string? filter = null)
```

Shows a file save dialog

**Parameters:**

- `initialDirectory` (*string?*): The initial directory to show, or null for default (Default: `null`)
- `defaultFileName` (*string?*): The default file name, or null for none (Default: `null`)
- `filter` (*string?*): The file filter to apply, or null for all files (Default: `null`)

**Returns:** `Task<string?>`

- The selected file path, or null if canceled

