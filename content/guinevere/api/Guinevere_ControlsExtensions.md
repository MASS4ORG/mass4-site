---
Title: "CLASS ControlsExtensions"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Toggle.cs
## Public Methods

### Toggle

```csharp
public static void Toggle(Gui gui, bool isOn, string label = "", float width = 50, float height = 24, Color? onColor = null, Color? offColor = null, Color? thumbColor = null, Color? labelColor = null, float fontSize = 14, float spacing = 8)
```

Creates a toggle switch that can be turned on/off with internal state management

**Parameters:**

- `gui` (*Gui*)
- `isOn` (*bool*)
- `label` (*string*) (Default: `""`)
- `width` (*float*) (Default: `50`)
- `height` (*float*) (Default: `24`)
- `onColor` (*Color?*) (Default: `null`)
- `offColor` (*Color?*) (Default: `null`)
- `thumbColor` (*Color?*) (Default: `null`)
- `labelColor` (*Color?*) (Default: `null`)
- `fontSize` (*float*) (Default: `14`)
- `spacing` (*float*) (Default: `8`)


### Toggle

```csharp
public static bool Toggle(Gui gui, bool isOn, string label = "", float width = 50, float height = 24, Color? onColor = null, Color? offColor = null, Color? thumbColor = null, Color? labelColor = null, float fontSize = 14, float spacing = 8)
```

Creates a toggle switch that returns the toggled state without modifying the input

**Parameters:**

- `gui` (*Gui*)
- `isOn` (*bool*)
- `label` (*string*) (Default: `""`)
- `width` (*float*) (Default: `50`)
- `height` (*float*) (Default: `24`)
- `onColor` (*Color?*) (Default: `null`)
- `offColor` (*Color?*) (Default: `null`)
- `thumbColor` (*Color?*) (Default: `null`)
- `labelColor` (*Color?*) (Default: `null`)
- `fontSize` (*float*) (Default: `14`)
- `spacing` (*float*) (Default: `8`)

**Returns:** `bool`


