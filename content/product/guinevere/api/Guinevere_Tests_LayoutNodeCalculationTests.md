---
Title: "CLASS LayoutNodeCalculationTests"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Tests"
  type: "class"
---

- **Namespace:** [Guinevere.Tests](/guinevere/api/namespace-guinevere.tests)
- **Source File:** LayoutNodeCalculationTests.cs
## Public Methods

### RootNode_CalculateLayout_UsesScreenRect

```csharp
public void RootNode_CalculateLayout_UsesScreenRect(float screenWidth, float screenHeight)
```

**Parameters:**

- `screenWidth` (*float*)
- `screenHeight` (*float*)


### SingleChildNode_WithExplicitSize_CalculatesCorrectly

```csharp
public void SingleChildNode_WithExplicitSize_CalculatesCorrectly(float width, float height)
```

**Parameters:**

- `width` (*float*)
- `height` (*float*)


### SingleChildNode_WithExpansion_FillsParent

```csharp
public void SingleChildNode_WithExpansion_FillsParent()
```


### SingleChildNode_WithPartialExpansion_CalculatesCorrectly

```csharp
public void SingleChildNode_WithPartialExpansion_CalculatesCorrectly(float widthPercent, float heightPercent)
```

**Parameters:**

- `widthPercent` (*float*)
- `heightPercent` (*float*)


### SingleChildNode_WithUniformMargin_CalculatesCorrectLayout

```csharp
public void SingleChildNode_WithUniformMargin_CalculatesCorrectLayout(float margin)
```

**Parameters:**

- `margin` (*float*)


### SingleChildNode_WithAsymmetricMargin_CalculatesCorrectLayout

```csharp
public void SingleChildNode_WithAsymmetricMargin_CalculatesCorrectLayout(float top, float right, float bottom, float left)
```

**Parameters:**

- `top` (*float*)
- `right` (*float*)
- `bottom` (*float*)
- `left` (*float*)


### ParentWithPadding_AffectsChildLayout

```csharp
public void ParentWithPadding_AffectsChildLayout(float padding)
```

**Parameters:**

- `padding` (*float*)


### VerticalLayout_WithTwoEqualChildren_DividesSpaceEvenly

```csharp
public void VerticalLayout_WithTwoEqualChildren_DividesSpaceEvenly()
```


### VerticalLayout_WithFixedAndExpandingChild_CalculatesCorrectly

```csharp
public void VerticalLayout_WithFixedAndExpandingChild_CalculatesCorrectly()
```


### VerticalLayout_WithGap_AddsSpaceBetweenChildren

```csharp
public void VerticalLayout_WithGap_AddsSpaceBetweenChildren(float gap)
```

**Parameters:**

- `gap` (*float*)


### VerticalLayout_WithChildMargins_CalculatesCorrectly

```csharp
public void VerticalLayout_WithChildMargins_CalculatesCorrectly()
```


### VerticalLayout_WithThreeChildren_DifferentExpansionRatios

```csharp
public void VerticalLayout_WithThreeChildren_DifferentExpansionRatios()
```


### HorizontalLayout_WithTwoEqualChildren_DividesSpaceEvenly

```csharp
public void HorizontalLayout_WithTwoEqualChildren_DividesSpaceEvenly()
```


### HorizontalLayout_WithFixedAndExpandingChild_CalculatesCorrectly

```csharp
public void HorizontalLayout_WithFixedAndExpandingChild_CalculatesCorrectly()
```


### HorizontalLayout_WithGap_AddsSpaceBetweenChildren

```csharp
public void HorizontalLayout_WithGap_AddsSpaceBetweenChildren(float gap)
```

**Parameters:**

- `gap` (*float*)


### HorizontalLayout_WithChildMargins_CalculatesCorrectly

```csharp
public void HorizontalLayout_WithChildMargins_CalculatesCorrectly()
```


### NestedLayout_VerticalInHorizontal_CalculatesCorrectly

```csharp
public void NestedLayout_VerticalInHorizontal_CalculatesCorrectly()
```


### NestedLayout_WithMarginsAndPadding_CalculatesCorrectly

```csharp
public void NestedLayout_WithMarginsAndPadding_CalculatesCorrectly()
```


### NestedLayout_ThreeLevelsDeep_CalculatesCorrectly

```csharp
public void NestedLayout_ThreeLevelsDeep_CalculatesCorrectly()
```


### Layout_WithZeroSizedParent_HandlesGracefully

```csharp
public void Layout_WithZeroSizedParent_HandlesGracefully()
```


### Layout_WithNegativeMargins_CalculatesCorrectly

```csharp
public void Layout_WithNegativeMargins_CalculatesCorrectly()
```


### Layout_WithExcessiveMargins_ClampsToMinimumSize

```csharp
public void Layout_WithExcessiveMargins_ClampsToMinimumSize()
```


### Layout_MixedFixedAndExpandingChildren_DistributesSpaceCorrectly

```csharp
public void Layout_MixedFixedAndExpandingChildren_DistributesSpaceCorrectly()
```


