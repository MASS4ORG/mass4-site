---
Title: "CLASS LayoutNodeCommandsIntegrationTests"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Tests"
  type: "class"
---

- **Namespace:** [Guinevere.Tests](/guinevere/api/namespace-guinevere.tests)
- **Source File:** LayoutNodeCommandsIntegrationTests.cs
## Public Methods

### MarginAndPadding_Together_ProduceCorrectRects

```csharp
public void MarginAndPadding_Together_ProduceCorrectRects(float margin, float padding, float width, float height)
```

**Parameters:**

- `margin` (*float*)
- `padding` (*float*)
- `width` (*float*)
- `height` (*float*)


### SpecificMarginAndPadding_ProduceAsymmetricRects

```csharp
public void SpecificMarginAndPadding_ProduceAsymmetricRects()
```


### ExpandWithExplicitSize_ExplicitSizeTakesPrecedence

```csharp
public void ExpandWithExplicitSize_ExplicitSizeTakesPrecedence(float expandW, float expandH, float explicitW, float explicitH)
```

**Parameters:**

- `expandW` (*float*)
- `expandH` (*float*)
- `explicitW` (*float*)
- `explicitH` (*float*)


### SizeCommand_SetsBothDimensions

```csharp
public void SizeCommand_SetsBothDimensions()
```


### ExpandWidth_DoesNotAffectHeight

```csharp
public void ExpandWidth_DoesNotAffectHeight()
```


### ExpandHeight_DoesNotAffectWidth

```csharp
public void ExpandHeight_DoesNotAffectWidth()
```


### DirectionWithAlignment_SetsCorrectCombination

```csharp
public void DirectionWithAlignment_SetsCorrectCombination(Axis direction, float alignContent, float alignSelf)
```

**Parameters:**

- `direction` (*Axis*)
- `alignContent` (*float*)
- `alignSelf` (*float*)


### DirectionWithGap_WorksCorrectly

```csharp
public void DirectionWithGap_WorksCorrectly(Axis direction, float gap)
```

**Parameters:**

- `direction` (*Axis*)
- `gap` (*float*)


### PositionWithMargin_AffectsOuterRect

```csharp
public void PositionWithMargin_AffectsOuterRect(float left, float top, float margin)
```

**Parameters:**

- `left` (*float*)
- `top` (*float*)
- `margin` (*float*)


### PositionWithPadding_AffectsInnerRect

```csharp
public void PositionWithPadding_AffectsInnerRect(float left, float top, float padding)
```

**Parameters:**

- `left` (*float*)
- `top` (*float*)
- `padding` (*float*)


### ComplexLayoutChain_AllCommandsWork

```csharp
public void ComplexLayoutChain_AllCommandsWork()
```


### OverridingCommands_LastCallWins

```csharp
public void OverridingCommands_LastCallWins()
```


### NegativeValues_AreAccepted

```csharp
public void NegativeValues_AreAccepted()
```


### ZeroValues_AreAccepted

```csharp
public void ZeroValues_AreAccepted()
```


### ExtremeValues_AreAccepted

```csharp
public void ExtremeValues_AreAccepted()
```


### StageTransition_BuildToRender_StopsAcceptingCommands

```csharp
public void StageTransition_BuildToRender_StopsAcceptingCommands()
```


### StageTransition_RenderToBuild_StartsAcceptingCommands

```csharp
public void StageTransition_RenderToBuild_StartsAcceptingCommands()
```


