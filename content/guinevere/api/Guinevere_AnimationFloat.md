---
Title: "AnimationFloat"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "AnimationFloat"
  namespace: "Guinevere"
  symbol: "class"
  source: "AnimationFloat.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [AnimationFloat.cs](https://github.com/brmassa/blob/main/AnimationFloat.cs)

Represents an animated floating-point value that can smoothly transition between states using easing functions over time.

## Properties

### **TargetValue**

(*float*): Gets the target value that the animation is moving towards.

### **IsAnimating**

(*bool*): Gets a value indicating whether the animation is currently running.


## Public Methods

### GetValue

```csharp
public float GetValue()
```

Gets the current animated value, automatically updating based on elapsed time.

**Returns:** `float`

- The current interpolated value based on the animation progress.

### AnimateTo

```csharp
public void AnimateTo(float targetValue, float duration, Func<float, float> easingFunction)
```

Starts an animation to the specified target value.

**Parameters:**

- `targetValue` (*float*): The target value to animate to.
- `duration` (*float*): The duration of the animation in seconds.
- `easingFunction` (*Func<float, float>*): The easing function to use for the animation.


### SetValue

```csharp
public void SetValue(float value)
```

Immediately sets the value without animation.

**Parameters:**

- `value` (*float*): The value to set.


