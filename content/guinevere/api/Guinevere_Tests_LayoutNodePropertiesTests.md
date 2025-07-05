---
Title: "CLASS LayoutNodePropertiesTests"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Tests"
  type: "class"
---

- **Namespace:** [Guinevere.Tests](/guinevere/api/namespace-guinevere.tests)
- **Source File:** LayoutNodePropertiesTests.cs
## Public Methods

### MarginProperties_WithUniformMargin_ReturnCorrectValues

```csharp
public void MarginProperties_WithUniformMargin_ReturnCorrectValues(float margin)
```

**Parameters:**

- `margin` (*float*)


### MarginProperties_WithHorizontalVertical_ReturnCorrectValues

```csharp
public void MarginProperties_WithHorizontalVertical_ReturnCorrectValues(float horizontal, float vertical)
```

**Parameters:**

- `horizontal` (*float*)
- `vertical` (*float*)


### MarginProperties_WithIndividualValues_ReturnCorrectValues

```csharp
public void MarginProperties_WithIndividualValues_ReturnCorrectValues(float top, float right, float bottom, float left)
```

**Parameters:**

- `top` (*float*)
- `right` (*float*)
- `bottom` (*float*)
- `left` (*float*)


### MarginProperties_DefaultValues_ReturnZero

```csharp
public void MarginProperties_DefaultValues_ReturnZero()
```


### PaddingProperties_WithUniformPadding_ReturnCorrectValues

```csharp
public void PaddingProperties_WithUniformPadding_ReturnCorrectValues(float padding)
```

**Parameters:**

- `padding` (*float*)


### PaddingProperties_WithHorizontalVertical_ReturnCorrectValues

```csharp
public void PaddingProperties_WithHorizontalVertical_ReturnCorrectValues(float horizontal, float vertical)
```

**Parameters:**

- `horizontal` (*float*)
- `vertical` (*float*)


### PaddingProperties_WithIndividualValues_ReturnCorrectValues

```csharp
public void PaddingProperties_WithIndividualValues_ReturnCorrectValues(float top, float right, float bottom, float left)
```

**Parameters:**

- `top` (*float*)
- `right` (*float*)
- `bottom` (*float*)
- `left` (*float*)


### PaddingProperties_DefaultValues_ReturnZero

```csharp
public void PaddingProperties_DefaultValues_ReturnZero()
```


### InnerRect_WithUniformPadding_CalculatesCorrectly

```csharp
public void InnerRect_WithUniformPadding_CalculatesCorrectly(float x, float y, float w, float h, float padding)
```

**Parameters:**

- `x` (*float*)
- `y` (*float*)
- `w` (*float*)
- `h` (*float*)
- `padding` (*float*)


### InnerRect_WithAsymmetricPadding_CalculatesCorrectly

```csharp
public void InnerRect_WithAsymmetricPadding_CalculatesCorrectly(float x, float y, float w, float h, float paddingTop, float paddingRight, float paddingBottom, float paddingLeft)
```

**Parameters:**

- `x` (*float*)
- `y` (*float*)
- `w` (*float*)
- `h` (*float*)
- `paddingTop` (*float*)
- `paddingRight` (*float*)
- `paddingBottom` (*float*)
- `paddingLeft` (*float*)


### InnerRect_WithZeroPadding_EqualsOriginalRect

```csharp
public void InnerRect_WithZeroPadding_EqualsOriginalRect()
```


### OuterRect_WithUniformMargin_CalculatesCorrectly

```csharp
public void OuterRect_WithUniformMargin_CalculatesCorrectly(float x, float y, float w, float h, float margin)
```

**Parameters:**

- `x` (*float*)
- `y` (*float*)
- `w` (*float*)
- `h` (*float*)
- `margin` (*float*)


### OuterRect_WithAsymmetricMargin_CalculatesCorrectly

```csharp
public void OuterRect_WithAsymmetricMargin_CalculatesCorrectly(float x, float y, float w, float h, float marginTop, float marginRight, float marginBottom, float marginLeft)
```

**Parameters:**

- `x` (*float*)
- `y` (*float*)
- `w` (*float*)
- `h` (*float*)
- `marginTop` (*float*)
- `marginRight` (*float*)
- `marginBottom` (*float*)
- `marginLeft` (*float*)


### OuterRect_WithZeroMargin_EqualsOriginalRect

```csharp
public void OuterRect_WithZeroMargin_EqualsOriginalRect()
```


### Rect_ReturnsCorrectRect

```csharp
public void Rect_ReturnsCorrectRect(float x, float y, float w, float h)
```

**Parameters:**

- `x` (*float*)
- `y` (*float*)
- `w` (*float*)
- `h` (*float*)


### Center_CalculatesCorrectly

```csharp
public void Center_CalculatesCorrectly(float x, float y, float w, float h)
```

**Parameters:**

- `x` (*float*)
- `y` (*float*)
- `w` (*float*)
- `h` (*float*)


### Children_ReturnsReadOnlyList

```csharp
public void Children_ReturnsReadOnlyList()
```


### Parent_ReturnsCorrectParent

```csharp
public void Parent_ReturnsCorrectParent()
```


### SetZIndex_SetsAndReturnsCorrectValue

```csharp
public void SetZIndex_SetsAndReturnsCorrectValue(int zIndex)
```

**Parameters:**

- `zIndex` (*int*)


### ZIndex_DefaultValue_IsZero

```csharp
public void ZIndex_DefaultValue_IsZero()
```


### ZIndex_InheritsFromParent

```csharp
public void ZIndex_InheritsFromParent()
```


### ZIndex_ChildOverridesParent

```csharp
public void ZIndex_ChildOverridesParent()
```


### ZIndex_HierarchyIntegrationTest

```csharp
public void ZIndex_HierarchyIntegrationTest()
```


### DrawList_IsInitialized

```csharp
public void DrawList_IsInitialized()
```


### DrawList_CanBeSetAndRetrieved

```csharp
public void DrawList_CanBeSetAndRetrieved()
```


### MarginAndPadding_DoNotAffectEachOther

```csharp
public void MarginAndPadding_DoNotAffectEachOther()
```


### NegativeMarginAndPadding_ProduceValidRects

```csharp
public void NegativeMarginAndPadding_ProduceValidRects()
```


