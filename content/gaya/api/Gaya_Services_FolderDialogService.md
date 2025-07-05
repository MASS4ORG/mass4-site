---
Title: "CLASS FolderDialogService"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Services"
  type: "class"
---

- **Namespace:** [Gaya.Services](/gaya/api/namespace-gaya.services)
- **Source File:** FolderDialogService.cs

Service for displaying file and folder dialogs across different platforms

## Public Methods

### SelectFolderAsync

```csharp
public async Task<string?> SelectFolderAsync(string? initialDirectory = null)
```

Shows a folder selection dialog

**Parameters:**

- `initialDirectory` (*string?*): The initial directory to show in the dialog (Default: `null`)

**Returns:** `Task<string?>`

- The selected folder path, or null if cancelled

### OpenFileAsync

```csharp
public async Task<string?> OpenFileAsync(string? initialDirectory = null, string? filter = null)
```

Shows an open file dialog

**Parameters:**

- `initialDirectory` (*string?*): The initial directory to show in the dialog (Default: `null`)
- `filter` (*string?*): The file filter to apply (Default: `null`)

**Returns:** `Task<string?>`

- The selected file path, or null if cancelled

### SaveFileAsync

```csharp
public async Task<string?> SaveFileAsync(string? initialDirectory = null, string? defaultFileName = null, string? filter = null)
```

Shows a save file dialog

**Parameters:**

- `initialDirectory` (*string?*): The initial directory to show in the dialog (Default: `null`)
- `defaultFileName` (*string?*): The default file name to suggest (Default: `null`)
- `filter` (*string?*): The file filter to apply (Default: `null`)

**Returns:** `Task<string?>`

- The selected file path for saving, or null if cancelled

