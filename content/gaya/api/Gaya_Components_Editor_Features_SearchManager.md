---
Title: "CLASS SearchManager"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor.Features"
  type: "class"
---

- **Namespace:** [Gaya.Components.Editor.Features](/gaya/api/namespace-gaya.components.editor.features)
- **Source File:** SearchManager.cs

Manages search and replace functionality for the text editor

## Properties

### **SearchResults**

(*IReadOnlyList<SearchResult>*): Gets the current search results

### **CurrentResultIndex**

(*int*): Gets the current result index

### **HasResults**

(*bool*): Gets whether there are any search results

### **ResultCount**

(*int*): Gets the total number of results


## Public Methods

### Search

```csharp
public void Search(string content, string searchText, bool caseSensitive = false, bool wholeWord = false)
```

Searches for text in the content

**Parameters:**

- `content` (*string*)
- `searchText` (*string*)
- `caseSensitive` (*bool*) (Default: `false`)
- `wholeWord` (*bool*) (Default: `false`)


### FindNext

```csharp
public SearchResult? FindNext()
```

Finds the next occurrence

**Returns:** `SearchResult?`


### FindPrevious

```csharp
public SearchResult? FindPrevious()
```

Finds the previous occurrence

**Returns:** `SearchResult?`


### FindFromPosition

```csharp
public SearchResult? FindFromPosition(int line, int column)
```

Finds the first occurrence at or after the specified position

**Parameters:**

- `line` (*int*)
- `column` (*int*)

**Returns:** `SearchResult?`


### GetCurrentResult

```csharp
public SearchResult? GetCurrentResult()
```

Gets the current search result

**Returns:** `SearchResult?`


### ReplaceCurrentResult

```csharp
public string ReplaceCurrentResult(string content, string replaceText)
```

Replaces the current result with the specified text

**Parameters:**

- `content` (*string*)
- `replaceText` (*string*)

**Returns:** `string`


### ReplaceAll

```csharp
public string ReplaceAll(string content, string replaceText)
```

Replaces all occurrences with the specified text

**Parameters:**

- `content` (*string*)
- `replaceText` (*string*)

**Returns:** `string`


### ClearResults

```csharp
public void ClearResults()
```

Clears all search results


### RefreshSearch

```csharp
public void RefreshSearch(string content)
```

Updates the search with the same parameters (useful after content changes)

**Parameters:**

- `content` (*string*)


### GetStatistics

```csharp
public SearchStatistics GetStatistics()
```

Gets search statistics

**Returns:** `SearchStatistics`


### GetCurrentResultSelection

```csharp
public TextSelection? GetCurrentResultSelection()
```

Highlights the current search result

**Returns:** `TextSelection?`


### GetAllResultSelections

```csharp
public List<TextSelection> GetAllResultSelections()
```

Gets all search result selections

**Returns:** `List<TextSelection>`


