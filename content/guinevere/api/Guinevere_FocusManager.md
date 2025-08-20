---
Title: "FocusManager"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "FocusManager"
  namespace: "Guinevere"
  symbol: "class"
  source: "FocusManager.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [FocusManager.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/FocusManager.cs)

Manages focus state and navigation for GUI controls, providing Tab/Shift+Tab navigation and cascaded focus behavior similar to Dear ImGui and other IM GUI libraries.

## Properties

### **CurrentFocusedId**

(*string?*): Gets the ID of the currently focused control, or null if no control has focus.

### **HasAnyFocus**

(*bool*): Gets whether any control currently has focus.

### **FocusChangedThisFrame**

(*bool*): Gets whether the focus state changed during the current frame.


## Public Methods

### RegisterFocusableControl

```csharp
public void RegisterFocusableControl(string controlId, string? parentId = null, bool canReceiveFocus = true, bool isInteractable = true)
```

Registers a control as focusable for the current frame.

**Parameters:**

- `controlId` (*string*): Unique identifier for the control
- `parentId` (*string?*): ID of the parent control for cascaded focus, or null if no parent (Default: `null`)
- `canReceiveFocus` (*bool*): Whether this control can receive keyboard focus (Default: `true`)
- `isInteractable` (*bool*): Whether this control responds to mouse interactions (Default: `true`)


### HasFocus

```csharp
public bool HasFocus(string controlId)
```

Checks if the specified control currently has focus.

**Parameters:**

- `controlId` (*string*): The control ID to check

**Returns:** `bool`

- True if the control has focus, false otherwise

### HasFocusWithin

```csharp
public bool HasFocusWithin(string controlId)
```

Checks if the specified control or any of its descendants has focus.

**Parameters:**

- `controlId` (*string*): The control ID to check

**Returns:** `bool`

- True if the control or its descendants have focus, false otherwise

### RequestFocus

```csharp
public void RequestFocus(string controlId, FocusReason reason = FocusReason.Programmatic)
```

Requests focus for the specified control.

**Parameters:**

- `controlId` (*string*): The control ID to focus
- `reason` (*FocusReason*): The reason for the focus request (Default: `FocusReason.Programmatic`)


### ClearFocus

```csharp
public void ClearFocus()
```

Clears focus from all controls.


### HandleKeyboardNavigation

```csharp
public void HandleKeyboardNavigation(IInputHandler input)
```

Handles keyboard navigation (Tab/Shift+Tab) between focusable controls.

**Parameters:**

- `input` (*IInputHandler*): The input handler to check for key presses


### BeginFrame

```csharp
public void BeginFrame()
```

Should be called at the beginning of each frame to prepare for focus management.


### EndFrame

```csharp
public void EndFrame()
```

Should be called at the end of each frame to clean up focus management.


### GetParentChain

```csharp
public List<string> GetParentChain(string controlId)
```

Gets all parent IDs in the hierarchy chain for cascaded focus checking.

**Parameters:**

- `controlId` (*string*): The control to get parents for

**Returns:** `List<string>`

- List of parent IDs from immediate parent to root
