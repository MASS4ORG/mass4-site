---
Title: "CLASS TabBuilder"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** TabBuilder.cs

Helper class for building tabs

## Public Methods

### Tab

```csharp
public TabBuilder Tab(string title, Action? content = null, bool enabled = true, bool closable = false, Color? backgroundColor = null, Color? textColor = null)
```

Adds a new tab with the specified configuration options to the current tab list.

**Parameters:**

- `title` (*string*): The title of the tab to be displayed.
- `content` (*Action?*): The action that defines the content to be displayed within the tab. (Default: `null`)
- `enabled` (*bool*): A value indicating whether the tab is enabled or disabled. Defaults to true. (Default: `true`)
- `closable` (*bool*): A value indicating whether the tab can be closed by the user. Defaults to false. (Default: `false`)
- `backgroundColor` (*Color?*): The background color of the tab. Defaults to null. (Default: `null`)
- `textColor` (*Color?*): The text color of the tab. Defaults to null. (Default: `null`)

**Returns:** `TabBuilder`

- Returns the current TabBuilder instance with the newly added tab, allowing for further configuration.

### Tab

```csharp
public TabBuilder Tab(string title, Action content)
```

Adds a new tab to the current tab list with the specified title and content.

**Parameters:**

- `title` (*string*): The title of the tab to be displayed.
- `content` (*Action*): The action that defines the content to be displayed within the tab.

**Returns:** `TabBuilder`

- A TabBuilder instance with the tab added, enabling further configuration.

### DisabledTab

```csharp
public TabBuilder DisabledTab(string title)
```

Adds a new disabled tab to the current tab list.

**Parameters:**

- `title` (*string*): The title displayed on the tab.

**Returns:** `TabBuilder`

- A TabBuilder instance with the disabled tab added, allowing for further configuration.

### ClosableTab

```csharp
public TabBuilder ClosableTab(string title, Action? content = null)
```

Adds a new tab that is closable to the current tab list.

**Parameters:**

- `title` (*string*): The title displayed on the tab.
- `content` (*Action?*): The content to be displayed when the tab is selected. This parameter is optional. (Default: `null`)

**Returns:** `TabBuilder`

- A TabBuilder instance with the closable tab added, allowing for further configuration.

