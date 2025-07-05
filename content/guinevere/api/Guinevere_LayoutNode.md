---
Title: "CLASS LayoutNode"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** LayoutNode.Traversal.cs

LayoutNode partial class containing node traversal and management operations

## Properties

### **FirstChild**

(*LayoutNode*): The first of it`s children

### **LastChild**

(*LayoutNode*): The last of it`s children


## Public Methods

### AddChild

```csharp
public LayoutNode AddChild(LayoutNode child)
```

Adds a child node to this layout node

**Parameters:**

- `child` (*LayoutNode*)

**Returns:** `LayoutNode`


### RemoveChild

```csharp
public bool RemoveChild(LayoutNode child)
```

Removes a child node from this layout node

**Parameters:**

- `child` (*LayoutNode*)

**Returns:** `bool`


### RemoveChildById

```csharp
public bool RemoveChildById(string id)
```

Removes a child node by its ID

**Parameters:**

- `id` (*string*)

**Returns:** `bool`


### ClearChildren

```csharp
public void ClearChildren()
```

Clears all child nodes


### ClearRoot

```csharp
public void ClearRoot()
```

Recursively clears this node and all its children


### FindChildById

```csharp
public LayoutNode? FindChildById(string id)
```

Finds a child node by its ID (searches recursively)

**Parameters:**

- `id` (*string*)

**Returns:** `LayoutNode?`


### GetPath

```csharp
public string GetPath()
```

Gets the path from root to this node (useful for debugging)

**Returns:** `string`


