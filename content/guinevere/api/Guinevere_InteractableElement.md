---
Title: "InteractableElement"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "InteractableElement"
  namespace: "Guinevere"
  symbol: "struct"
  source: "InteractableElement.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [InteractableElement.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/InteractableElement.cs)

Represents an interactive UI element within the graphical user interface. This structure encapsulates information necessary to enable interactivity for a specific visual region or shape, including rectangle or custom-defined shapes, and associates it with a graphical user interface context to handle various user interactions.

## Public Methods

### On

```csharp
public bool On(Interactions mask)
```

Determines whether the specified interaction type is occurring on the element.

**Parameters:**

- `mask` (*Interactions*): The type of interaction(s) to check for, specified as a combination of one or more `Interactions` flags.

**Returns:** `bool`

- True if the specified interaction(s) are occurring on the element; otherwise, false.

### OnHover

```csharp
public bool OnHover()
```

Determines if the mouse cursor is currently hovering over the interactive element's defined shape or boundary within the associated GUI context.

**Returns:** `bool`

- True if the cursor is within the interactive region of the element; otherwise, false.

### OnHold

```csharp
public bool OnHold(MouseButton button = MouseButton.Left)
```

Determines whether the specified mouse button is currently being held down on the interactive element.

**Parameters:**

- `button` (*MouseButton*): The mouse button to check, defaulting to the left button if not specified. (Default: `MouseButton.Left`)

**Returns:** `bool`

- True if the specified mouse button is being held down; otherwise, false.

### OnHold

```csharp
public bool OnHold(HoldArgs args)
```

Determines if the interactive element is currently being held by the user, and provides details about the hold interaction, such as the start and current positions.

**Parameters:**

- `args` (*HoldArgs*): When the method returns true, contains details about the hold interaction. The details include the starting position of the hold and the current mouse position.

**Returns:** `bool`

- True if the interactive element is being held; otherwise, false.

### OnClick

```csharp
public bool OnClick(MouseButton button = MouseButton.Left)
```

Determines if the specified mouse button was clicked while the interactive element is hovered.

**Parameters:**

- `button` (*MouseButton*): The mouse button to check for the click interaction. Defaults to `Left`. (Default: `MouseButton.Left`)

**Returns:** `bool`

- True if the specified mouse button was clicked and the interactive element is hovered; otherwise, false.
