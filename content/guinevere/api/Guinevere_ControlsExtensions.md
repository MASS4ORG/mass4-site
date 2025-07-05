---
Title: "ControlsExtensions"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Dropdown.cs
## Public Methods

### Dropdown

```csharp
public static void Dropdown(Gui gui, string[] options, int selectedIndex, float width = 200, float height = 32, string placeholder = "Select an option...", Color? backgroundColor = null, Color? borderColor = null, Color? textColor = null, Color? placeholderColor = null, Color? dropdownColor = null, Color? hoverColor = null, Color? selectedColor = null, float fontSize = 14, float padding = 8, float borderRadius = 4, int maxVisibleItems = 6, string filePath = "", int lineNumber = 0)
```

Creates a dropdown/combobox that allows selection from a list of options with internal state management

**Parameters:**

- `gui` (*Gui*)
- `options` (*string[]*)
- `selectedIndex` (*int*)
- `width` (*float*) (Default: `200`)
- `height` (*float*) (Default: `32`)
- `placeholder` (*string*) (Default: `"Select an option..."`)
- `backgroundColor` (*Color?*) (Default: `null`)
- `borderColor` (*Color?*) (Default: `null`)
- `textColor` (*Color?*) (Default: `null`)
- `placeholderColor` (*Color?*) (Default: `null`)
- `dropdownColor` (*Color?*) (Default: `null`)
- `hoverColor` (*Color?*) (Default: `null`)
- `selectedColor` (*Color?*) (Default: `null`)
- `fontSize` (*float*) (Default: `14`)
- `padding` (*float*) (Default: `8`)
- `borderRadius` (*float*) (Default: `4`)
- `maxVisibleItems` (*int*) (Default: `6`)
- `filePath` (*string*) (Default: `""`)
- `lineNumber` (*int*) (Default: `0`)


### Dropdown

```csharp
public static int Dropdown(Gui gui, string[] options, int selectedIndex = -1, float width = 200, float height = 32, string placeholder = "Select an option...", Color? backgroundColor = null, Color? borderColor = null, Color? textColor = null, Color? placeholderColor = null, Color? dropdownColor = null, Color? hoverColor = null, Color? selectedColor = null, float fontSize = 14, float padding = 8, float borderRadius = 4, int maxVisibleItems = 6, string filePath = "", int lineNumber = 0)
```

Creates a dropdown that returns the selected index without modifying the input

**Parameters:**

- `gui` (*Gui*)
- `options` (*string[]*)
- `selectedIndex` (*int*) (Default: `-1`)
- `width` (*float*) (Default: `200`)
- `height` (*float*) (Default: `32`)
- `placeholder` (*string*) (Default: `"Select an option..."`)
- `backgroundColor` (*Color?*) (Default: `null`)
- `borderColor` (*Color?*) (Default: `null`)
- `textColor` (*Color?*) (Default: `null`)
- `placeholderColor` (*Color?*) (Default: `null`)
- `dropdownColor` (*Color?*) (Default: `null`)
- `hoverColor` (*Color?*) (Default: `null`)
- `selectedColor` (*Color?*) (Default: `null`)
- `fontSize` (*float*) (Default: `14`)
- `padding` (*float*) (Default: `8`)
- `borderRadius` (*float*) (Default: `4`)
- `maxVisibleItems` (*int*) (Default: `6`)
- `filePath` (*string*) (Default: `""`)
- `lineNumber` (*int*) (Default: `0`)

**Returns:** `int`


### SearchableDropdown

```csharp
public static int SearchableDropdown(Gui gui, string[] options, int selectedIndex = -1, float width = 200, float height = 32, string placeholder = "Search and select...", Color? backgroundColor = null, Color? borderColor = null, Color? textColor = null, Color? placeholderColor = null, Color? dropdownColor = null, Color? hoverColor = null, Color? selectedColor = null, float fontSize = 14, float padding = 8, float borderRadius = 4, int maxVisibleItems = 6, string filePath = "", int lineNumber = 0)
```

Creates a searchable dropdown/combobox (simplified version)

**Parameters:**

- `gui` (*Gui*)
- `options` (*string[]*)
- `selectedIndex` (*int*) (Default: `-1`)
- `width` (*float*) (Default: `200`)
- `height` (*float*) (Default: `32`)
- `placeholder` (*string*) (Default: `"Search and select..."`)
- `backgroundColor` (*Color?*) (Default: `null`)
- `borderColor` (*Color?*) (Default: `null`)
- `textColor` (*Color?*) (Default: `null`)
- `placeholderColor` (*Color?*) (Default: `null`)
- `dropdownColor` (*Color?*) (Default: `null`)
- `hoverColor` (*Color?*) (Default: `null`)
- `selectedColor` (*Color?*) (Default: `null`)
- `fontSize` (*float*) (Default: `14`)
- `padding` (*float*) (Default: `8`)
- `borderRadius` (*float*) (Default: `4`)
- `maxVisibleItems` (*int*) (Default: `6`)
- `filePath` (*string*) (Default: `""`)
- `lineNumber` (*int*) (Default: `0`)

**Returns:** `int`


### ClearDropdownStates

```csharp
public static void ClearDropdownStates(Gui gui)
```

Clears all dropdown states (useful for cleanup)

**Parameters:**

- `gui` (*Gui*)


, supporting masked characters.

**Parameters:**

- `gui` (*Gui*): The GUI instance used to render the password input field.
- `text` (*string*): The reference to the string variable where the entered password will be stored.
- `width` (*float*): The width of the password input field. Default is 200. (Default: `200`)
- `height` (*float*): The height of the password input field. Default is 32. (Default: `32`)
- `maskChar` (*char*): The character used to mask the password input. Default is '*'. (Default: `'*'`)
- `placeholder` (*string*): The placeholder text displayed when the input is empty. Default is an empty string. (Default: `""`)
- `backgroundColor` (*Color?*): The background color of the input field. Default is null. (Default: `null`)
- `borderColor` (*Color?*): The border color of the input field. Default is null. (Default: `null`)
- `textColor` (*Color?*): The text color for the input field. Default is null. (Default: `null`)
- `placeholderColor` (*Color?*): The color of the placeholder text. Default is null. (Default: `null`)
- `cursorColor` (*Color?*): The color of the cursor within the input field. Default is null. (Default: `null`)
- `fontSize` (*float*): The font size of the input text. Default is 14. (Default: `14`)
- `padding` (*float*): The padding inside the input field. Default is 8. (Default: `8`)
- `enabled` (*bool*): Indicates whether the input field is interactive. Default is true. (Default: `true`)
- `id` (*string*): The unique identifier for the input field. Default is an empty string. (Default: `""`)

**Returns:** `string`

- Returns the updated text entered in the password input field.

### TextArea

```csharp
public static void TextArea(Gui gui, string text, float width = 300, float height = 100, string placeholder = "", Color? backgroundColor = null, Color? borderColor = null, Color? textColor = null, Color? placeholderColor = null, Color? cursorColor = null, float fontSize = 14, float padding = 8, bool enabled = true, string id = "")
```

Creates a text area input field with ref parameter.

**Parameters:**

- `gui` (*Gui*): The GUI context in which the text area is drawn.
- `text` (*string*): The text content of the text area, passed by reference.
- `width` (*float*): The width of the text area in pixels. Default is 300. (Default: `300`)
- `height` (*float*): The height of the text area in pixels. Default is 100. (Default: `100`)
- `placeholder` (*string*): The placeholder text displayed when the text area is empty. Default is an empty string. (Default: `""`)
- `backgroundColor` (*Color?*): The background color of the text area. Default is null, which uses the default color. (Default: `null`)
- `borderColor` (*Color?*): The border color of the text area. Default is null, which uses the default color. (Default: `null`)
- `textColor` (*Color?*): The color of the text in the text area. Default is null, which uses the default color. (Default: `null`)
- `placeholderColor` (*Color?*): The color of the placeholder text. Default is null, which uses the default color. (Default: `null`)
- `cursorColor` (*Color?*): The color of the cursor in the text area. Default is null, which uses the default color. (Default: `null`)
- `fontSize` (*float*): The font size of the text. Default is 14. (Default: `14`)
- `padding` (*float*): The padding inside the text area. Default is 8. (Default: `8`)
- `enabled` (*bool*): Specifies whether the text area is enabled for input. Default is true. (Default: `true`)
- `id` (*string*): An optional identifier for the text area. Default is an empty string. (Default: `""`)


### TextArea

```csharp
public static string TextArea(Gui gui, string text, float width = 300, float height = 100, string placeholder = "", Color? backgroundColor = null, Color? borderColor = null, Color? textColor = null, Color? placeholderColor = null, Color? cursorColor = null, float fontSize = 14, float padding = 8, bool enabled = true, string id = "")
```

Creates a multi-line text area for user input.

**Parameters:**

- `gui` (*Gui*): The GUI context where the text area will be drawn.
- `text` (*string*): The text content of the text area, passed by reference.
- `width` (*float*): The width of the text area in pixels. Default is 300. (Default: `300`)
- `height` (*float*): The height of the text area in pixels. Default is 100. (Default: `100`)
- `placeholder` (*string*): The placeholder text shown when the text area is empty. Default is an empty string. (Default: `""`)
- `backgroundColor` (*Color?*): The background color of the text area. Default is null. (Default: `null`)
- `borderColor` (*Color?*): The border color of the text area. Default is null. (Default: `null`)
- `textColor` (*Color?*): The text color used inside the text area. Default is null. (Default: `null`)
- `placeholderColor` (*Color?*): The color of the placeholder text. Default is null. (Default: `null`)
- `cursorColor` (*Color?*): The color of the cursor in the text area. Default is null. (Default: `null`)
- `fontSize` (*float*): The font size of the text. Default is 14. (Default: `14`)
- `padding` (*float*): The padding inside the text area. Default is 8. (Default: `8`)
- `enabled` (*bool*): Indicates whether the text area is active and editable. Default is true. (Default: `true`)
- `id` (*string*): An optional identifier for the text area. Default is an empty string. (Default: `""`)

**Returns:** `string`

- The updated text content of the text area.

### ClearInputStates

```csharp
public static void ClearInputStates(Gui gui)
```

Clears all input states - useful for cleanup

**Parameters:**

- `gui` (*Gui*)


