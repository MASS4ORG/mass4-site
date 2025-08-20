---
Title: "LayoutStyle"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "LayoutStyle"
  namespace: "Guinevere"
  symbol: "struct"
  source: "LayoutStyle.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [LayoutStyle.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/LayoutStyle.cs)

Contains all layout styling properties for a LayoutNode. This includes spacing, alignment, sizing, and layout direction.

## Properties

### **Width**

(*float*) { get; set }: Represents the width of the layout element. This property determines the horizontal size of the element, which can either be explicitly defined or dynamically calculated based on layout logic, constraints, or the size of its content within the parent container.

### **Height**

(*float*) { get; set }: Specifies the height of the layout element. This property determines the vertical size of the element, which can be explicitly set or dynamically calculated based on layout rules, expansion parameters, or content size within the parent container.

### **Gap**

(*float*) { get; set }: Specifies the spacing between adjacent child elements within a layout. This property determines the fixed amount of gap or separation to be applied between individual children, contributing to the overall structure and appearance of the layout.

### **MarginTop**

(*float*) { get; set }: Specifies the margin spacing at the top of the layout element. This property defines the space between the top edge of the element and its boundary or surrounding content, contributing to the overall spacing configuration within the layout.

### **MarginRight**

(*float*) { get; set }: Represents the margin on the right side of the layout element. This property defines the spacing between the right edge of the element and its adjacent content or container boundary. It can be explicitly set or influenced by overall layout rules and margin configuration.

### **MarginBottom**

(*float*) { get; set }: Represents the bottom margin of the layout element. This property defines the spacing between the bottom edge of the element and adjacent elements or its container. The value may be applied specifically or derived from a general margin setting depending on the layout configuration.

### **MarginLeft**

(*float*) { get; set }: Represents the left margin of the layout element. This property defines the space between the left edge of the element and its containing or neighboring elements, enabling fine-grained control over horizontal positioning and spacing within the layout.

### **PaddingTop**

(*float*) { get; set }: Represents the top padding of a layout element. This property defines the spacing between the content of the element and its top border, affecting how the content is positioned within the element.

### **PaddingRight**

(*float*) { get; set }: Represents the padding on the right side of a layout element. This property defines the spacing between the content of the element and its right boundary, allowing for precise adjustment of the element's internal layout.

### **PaddingBottom**

(*float*) { get; set }: Specifies the bottom padding of the layout element. This property defines the space between the content of the element and its bottom boundary, which can affect overall layout spacing and alignment within a container or parent element.

### **PaddingLeft**

(*float*) { get; set }: Specifies the padding on the left side of a layout element. This property determines the amount of space between the element's left edge and its content, adding spacing within the element's boundaries and affecting the overall layout behavior.

### **HasSpecificMargins**

(*bool*) { get; set }: Indicates whether the layout has specific margin values defined for each side. When set to true, values for MarginTop, MarginRight, MarginBottom, and MarginLeft are utilized individually. When set to false, the general Margin value is applied uniformly to all sides.

### **AlignContentHorizontal**

(*float*) { get; set }: Determines how content is aligned along the horizontal axis within the layout container. This property defines the horizontal positioning of child elements relative to the available horizontal space when the parent's layout rules are applied.

### **AlignContentVertical**

(*float*) { get; set }: Specifies the alignment of content along the vertical axis within the layout container. This property determines how child elements are positioned vertically within the available space when the parent's layout configuration is applied.

### **AlignSelf**

(*float*) { get; set }: Defines the alignment of the layout element along the cross-axis with respect to its parent. This property determines how the element positions itself within the available space when its parent's layout configuration is applied.

### **IsExpanded**

(*bool*) { get; set }: Determines whether the layout element is set to expand by adapting its size dynamically within its container. When enabled, the element's dimensions are proportionally adjusted based on the available space and its expand percentage settings.

### **ExpandWidth**

(*bool*) { get; set }: Specifies whether the width of a layout element should be expandable, allowing it to adapt dynamically based on the available horizontal space. When enabled, the width is scaled proportionally using the value defined by `ExpandWidthPercentage`, relative to other expandable elements within the same container.

### **ExpandHeight**

(*bool*) { get; set }: Determines whether the height of a layout element should be expandable, allowing it to adjust dynamically based on the available vertical space. When enabled, the height is scaled proportionally to the value specified by `ExpandHeightPercentage`, relative to other expandable elements within the container.

### **ExpandWidthPercentage**

(*float*) { get; set }: Represents the percentage of the available width that a layout element should occupy when its width is expandable. This value is utilized alongside `ExpandWidth` or `IsExpanded` to allocate horizontal space proportionally among elements within a container.

### **ExpandHeightPercentage**

(*float*) { get; set }: Represents the percentage of the available height that a layout element should occupy when its height is expandable. This value is used in conjunction with `ExpandHeight` or `IsExpanded` to proportionally allocate vertical space among elements within a container.

### **Direction**

(*Axis*) { get; set }: Specifies the primary axis along which child elements are laid out within a layout container. The direction can be set to horizontal or vertical, influencing the arrangement and flow of child elements.

### **Wrap**

(*bool*) { get; set }: Determines whether child elements are wrapped to the next row or column when they exceed the allocated space in the current layout.

### **Default**

(*LayoutStyle*): Creates a new LayoutStyle with default values


## Public Methods

### GetAlignContentForDirection

```csharp
public readonly float GetAlignContentForDirection(Axis direction)
```

Gets the alignment content value for the current direction

**Parameters:**

- `direction` (*Axis*): The layout direction

**Returns:** `float`

- The appropriate alignment value

### GetCrossAxisAlignContent

```csharp
public readonly float GetCrossAxisAlignContent(Axis direction)
```

Gets the cross-axis alignment content value for the current direction

**Parameters:**

- `direction` (*Axis*): The layout direction

**Returns:** `float`

- The appropriate cross-axis alignment value
