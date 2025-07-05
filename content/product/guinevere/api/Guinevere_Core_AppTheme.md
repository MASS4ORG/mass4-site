---
Title: "CLASS AppTheme"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Core"
  type: "class"
---

- **Namespace:** [Guinevere.Core](/guinevere/api/namespace-guinevere.core)
- **Source File:** AppTheme.cs

Application theme configuration for Guinevere GUI components

## Properties

### **BackgroundColor**

(*Color*) { get; set } = `new Color(30, 30, 30, 255)`: // Background colors

### **SecondaryBackgroundColor**

(*Color*) { get; set } = `new Color(45, 45, 45, 255)`

### **TertiaryBackgroundColor**

(*Color*) { get; set } = `new Color(60, 60, 60, 255)`

### **TextColor**

(*Color*) { get; set } = `new Color(241, 241, 241, 255)`: // Text colors

### **SecondaryTextColor**

(*Color*) { get; set } = `new Color(200, 200, 200, 255)`

### **DisabledTextColor**

(*Color*) { get; set } = `new Color(120, 120, 120, 255)`

### **AccentColor**

(*Color*) { get; set } = `new Color(0, 122, 204, 255)`: // Accent colors

### **SecondaryAccentColor**

(*Color*) { get; set } = `new Color(40, 160, 240, 255)`

### **HoverColor**

(*Color*) { get; set } = `new Color(62, 62, 64, 255)`: // Interaction colors

### **ActiveColor**

(*Color*) { get; set } = `new Color(0, 122, 204, 255)`

### **PressedColor**

(*Color*) { get; set } = `new Color(0, 100, 180, 255)`

### **BorderColor**

(*Color*) { get; set } = `new Color(63, 63, 70, 255)`: // Border colors

### **FocusedBorderColor**

(*Color*) { get; set } = `new Color(0, 122, 204, 255)`

### **SuccessColor**

(*Color*) { get; set } = `new Color(106, 153, 85, 255)`: // Status colors

### **WarningColor**

(*Color*) { get; set } = `new Color(255, 193, 7, 255)`

### **ErrorColor**

(*Color*) { get; set } = `new Color(232, 17, 35, 255)`

### **InfoColor**

(*Color*) { get; set } = `new Color(0, 123, 255, 255)`

### **TopBarColor**

(*Color*) { get; set } = `new Color(45, 45, 48, 255)`: // Specific component colors

### **SidebarColor**

(*Color*) { get; set } = `new Color(37, 37, 38, 255)`

### **ToolbarColor**

(*Color*) { get; set } = `new Color(45, 45, 48, 255)`

### **StatusBarColor**

(*Color*) { get; set } = `new Color(0, 122, 204, 255)`

### **ButtonColor**

(*Color*) { get; set } = `new Color(62, 62, 64, 255)`: // Button colors

### **ButtonHoverColor**

(*Color*) { get; set } = `new Color(70, 70, 72, 255)`

### **ButtonPressedColor**

(*Color*) { get; set } = `new Color(50, 50, 52, 255)`

### **InputBackgroundColor**

(*Color*) { get; set } = `new Color(60, 60, 60, 255)`: // Input colors

### **InputBorderColor**

(*Color*) { get; set } = `new Color(80, 80, 80, 255)`

### **InputFocusedBorderColor**

(*Color*) { get; set } = `new Color(0, 122, 204, 255)`

### **SelectionColor**

(*Color*) { get; set } = `new Color(51, 153, 255, 100)`: // Selection colors

### **SelectionBorderColor**

(*Color*) { get; set } = `new Color(51, 153, 255, 255)`

### **ScrollbarColor**

(*Color*) { get; set } = `new Color(45, 45, 45, 255)`: // Scrollbar colors

### **ScrollbarThumbColor**

(*Color*) { get; set } = `new Color(100, 100, 100, 255)`

### **ScrollbarThumbHoverColor**

(*Color*) { get; set } = `new Color(120, 120, 120, 255)`

### **ShadowColor**

(*Color*) { get; set } = `new Color(0, 0, 0, 100)`: // Shadow colors

### **DropShadowColor**

(*Color*) { get; set } = `new Color(0, 0, 0, 150)`


## Public Methods

### CreateLightTheme

```csharp
public static AppTheme CreateLightTheme()
```

Creates a light theme variant

**Returns:** `AppTheme`


### CreateHighContrastTheme

```csharp
public static AppTheme CreateHighContrastTheme()
```

Creates a high contrast theme variant

**Returns:** `AppTheme`


### BlendColors

```csharp
public static Color BlendColors(Color color1, Color color2, float factor)
```

Blends two colors by the specified factor

**Parameters:**

- `color1` (*Color*): First color
- `color2` (*Color*): Second color
- `factor` (*float*): Blend factor (0.0 = color1, 1.0 = color2)

**Returns:** `Color`

- Blended color

### LightenColor

```csharp
public static Color LightenColor(Color color, float factor)
```

Lightens a color by the specified factor

**Parameters:**

- `color` (*Color*): Color to lighten
- `factor` (*float*): Lightening factor (0.0 = no change, 1.0 = white)

**Returns:** `Color`

- Lightened color

### DarkenColor

```csharp
public static Color DarkenColor(Color color, float factor)
```

Darkens a color by the specified factor

**Parameters:**

- `color` (*Color*): Color to darken
- `factor` (*float*): Darkening factor (0.0 = no change, 1.0 = black)

**Returns:** `Color`

- Darkened color

### Clone

```csharp
public AppTheme Clone()
```

Creates a copy of the current theme

**Returns:** `AppTheme`

- Copy of the theme

