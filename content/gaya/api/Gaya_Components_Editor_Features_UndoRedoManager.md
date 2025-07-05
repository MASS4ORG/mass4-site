---
Title: "CLASS UndoRedoManager"
Type: api
Created: "2025-06-18 16:32:38"
Params:
  namespace: "Gaya.Components.Editor.Features"
  type: "class"
---

- **Namespace:** [Gaya.Components.Editor.Features](/gaya/api/namespace-gaya.components.editor.features)
- **Source File:** UndoRedoManager.cs

Manages undo/redo functionality for the text editor

## Properties

### **CanUndo**

(*bool*): Gets whether undo is available

### **CanRedo**

(*bool*): Gets whether redo is available

### **UndoCount**

(*int*): Gets the number of available undo operations

### **RedoCount**

(*int*): Gets the number of available redo operations


## Public Methods

### SaveState

```csharp
public void SaveState(EditorState? state)
```

Saves the current state for undo functionality

**Parameters:**

- `state` (*EditorState?*)


### Undo

```csharp
public EditorState? Undo(EditorState? currentState)
```

Performs an undo operation

**Parameters:**

- `currentState` (*EditorState?*)

**Returns:** `EditorState?`


### Redo

```csharp
public EditorState? Redo(EditorState? currentState)
```

Performs a redo operation

**Parameters:**

- `currentState` (*EditorState?*)

**Returns:** `EditorState?`


### Clear

```csharp
public void Clear()
```

Clears all undo/redo history


### SaveStateWithDelay

```csharp
public void SaveStateWithDelay(EditorState? state, Action saveCallback, int delayMs = 1000)
```

Saves a state with a delay to avoid too frequent saves during typing

**Parameters:**

- `state` (*EditorState?*)
- `saveCallback` (*Action*)
- `delayMs` (*int*) (Default: `1000`)


### CreateCheckpoint

```csharp
public void CreateCheckpoint(EditorState? state)
```

Creates a checkpoint - saves current state and clears redo

**Parameters:**

- `state` (*EditorState?*)


### PeekUndo

```csharp
public EditorState? PeekUndo()
```

Gets a preview of the undo state without performing the operation

**Returns:** `EditorState?`


### PeekRedo

```csharp
public EditorState? PeekRedo()
```

Gets a preview of the redo state without performing the operation

**Returns:** `EditorState?`


### OptimizeUndoStack

```csharp
public void OptimizeUndoStack()
```

Merges consecutive similar operations to reduce undo stack clutter


### CreateNamedCheckpoint

```csharp
public void CreateNamedCheckpoint(EditorState? state, string name)
```

Creates a named checkpoint that can be restored later

**Parameters:**

- `state` (*EditorState?*)
- `name` (*string*)


### GetMemoryUsage

```csharp
public (int undoMemory, int redoMemory) GetMemoryUsage()
```

Gets memory usage information for the undo/redo system

**Returns:** `(int undoMemory, int redoMemory)`


