---
Title: "CLASS GitManager"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Managers"
  type: "class"
---

- **Namespace:** [Gaya.Managers](/gaya/api/namespace-gaya.managers)
- **Source File:** GitManager.cs

Manages Git repository operations including status tracking, staging, and committing

## Properties

### **CurrentBranch**

(*string*): Gets the current Git branch name

### **CurrentRepository**

(*string*): Gets the current Git repository path

### **Changes**

(*IReadOnlyList<GitChangeInfo>*): Gets the list of unstaged changes in the repository

### **StagedChanges**

(*IReadOnlyList<GitChangeInfo>*): Gets the list of staged changes in the repository

### **IsGitRepository**

(*bool*): Gets a value indicating whether the current directory is a Git repository


## Public Methods

### SetRepository

```csharp
public void SetRepository(string repositoryPath)
```

Sets the Git repository to the specified path

**Parameters:**

- `repositoryPath` (*string*): The path to the Git repository


### RefreshStatusAsync

```csharp
public async Task RefreshStatusAsync()
```

Refreshes the Git status asynchronously

**Returns:** `Task`

- A task representing the asynchronous operation

### StageFileAsync

```csharp
public async Task<bool> StageFileAsync(string filePath)
```

Stages a file for commit asynchronously

**Parameters:**

- `filePath` (*string*): The path to the file to stage

**Returns:** `Task<bool>`

- A task representing the asynchronous operation with a boolean result indicating success

### UnstageFileAsync

```csharp
public async Task<bool> UnstageFileAsync(string filePath)
```

Unstages a file asynchronously

**Parameters:**

- `filePath` (*string*): The path to the file to unstage

**Returns:** `Task<bool>`

- A task representing the asynchronous operation with a boolean result indicating success

### CommitAsync

```csharp
public async Task<bool> CommitAsync(string message)
```

Commits staged changes with the specified message asynchronously

**Parameters:**

- `message` (*string*): The commit message

**Returns:** `Task<bool>`

- A task representing the asynchronous operation with a boolean result indicating success

### GetBranchAsync

```csharp
public async Task<string> GetBranchAsync()
```

Gets the current branch name asynchronously

**Returns:** `Task<string>`

- A task representing the asynchronous operation with the current branch name

