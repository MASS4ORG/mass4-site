---
Title: "CLASS HierarchicalMenu"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Components.Menu"
  type: "class"
---

- **Namespace:** [Guinevere.Components.Menu](/guinevere/api/namespace-guinevere.components.menu)
- **Source File:** HierarchicalMenu.cs

Hierarchical menu system for Guinevere GUI framework

## Properties

### **HasItems**

(*bool*)

### **Configuration**

(*MenuConfig*)


## Public Methods

### AddRootItem

```csharp
public void AddRootItem(MenuItem item)
```

Adds a root menu item

**Parameters:**

- `item` (*MenuItem*)


### Clear

```csharp
public void Clear()
```

Clears all menu items


### Show

```csharp
public void Show(float x, float y)
```

Shows the menu at the specified position

**Parameters:**

- `x` (*float*)
- `y` (*float*)


### Hide

```csharp
public void Hide()
```

Hides the menu


### Draw

```csharp
public override void Draw(Gui gui, float width, float height)
```

Draws the hierarchical menu

**Parameters:**

- `gui` (*Gui*)
- `width` (*float*)
- `height` (*float*)


### Draw

```csharp
public void Draw(Gui gui)
```

Draws the hierarchical menu

**Parameters:**

- `gui` (*Gui*)


### UpdateConfiguration

```csharp
public void UpdateConfiguration(MenuConfig config)
```

Updates the configuration

**Parameters:**

- `config` (*MenuConfig*)


