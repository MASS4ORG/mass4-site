---
Title: "INTERFACE IGitManager"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Managers"
  type: "interface"
---

- **Namespace:** [Gaya.Managers](/gaya/api/namespace-gaya.managers)
- **Source File:** IGitManager.cs

Interface for managing Git repository operations

## Properties

### **CurrentBranch**

(*string*) { get }: Gets the current Git branch name

### **CurrentRepository**

(*string*) { get }: Gets the current Git repository path

### **Changes**

(*IReadOnlyList<GitChangeInfo>*) { get }: Gets the list of unstaged changes in the repository

### **StagedChanges**

(*IReadOnlyList<GitChangeInfo>*) { get }: Gets the list of staged changes in the repository

### **IsGitRepository**

(*bool*) { get }: Gets a value indicating whether the current directory is a Git repository


## Public Methods

### SetRepository

```csharp
 void SetRepository(string repositoryPath)
```

Sets the Git repository to the specified path

**Parameters:**

- `repositoryPath` (*string*): The path to the Git repository


### RefreshStatusAsync

```csharp
 Task RefreshStatusAsync()
```

Refreshes the Git status asynchronously

**Returns:** `Task`

- A task representing the asynchronous operation

### StageFileAsync

```csharp
 Task<bool> StageFileAsync(string filePath)
```

Stages a file for commit asynchronously

**Parameters:**

- `filePath` (*string*): The path to the file to stage

**Returns:** `Task<bool>`

- A task representing the asynchronous operation with a boolean result indicating success

### UnstageFileAsync

```csharp
 Task<bool> UnstageFileAsync(string filePath)
```

Unstages a file asynchronously

**Parameters:**

- `filePath` (*string*): The path to the file to unstage

**Returns:** `Task<bool>`

- A task representing the asynchronous operation with a boolean result indicating success

### CommitAsync

```csharp
 Task<bool> CommitAsync(string message)
```

Commits staged changes with the specified message asynchronously

**Parameters:**

- `message` (*string*): The commit message

**Returns:** `Task<bool>`

- A task representing the asynchronous operation with a boolean result indicating success

### GetBranchAsync

```csharp
 Task<string> GetBranchAsync()
```

Gets the current branch name asynchronously

**Returns:** `Task<string>`

- A task representing the asynchronous operation with the current branch name

