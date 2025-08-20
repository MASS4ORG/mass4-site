---
Title: "Easing"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "Easing"
  namespace: "Guinevere"
  symbol: "class"
  source: "Easing.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [Easing.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/Easing.cs)

Provides a collection of static methods to compute easing functions commonly used in animation and interpolation. Easing functions modify the progression of a value over time to achieve various motion effects such as acceleration, deceleration, and elastic behaviors.

## Public Methods

### Linear

```csharp
public static float Linear(float t)
```

Linear interpolation with no easing.

**Parameters:**

- `t` (*float*): Normalized time (0 to 1)

**Returns:** `float`

- Linear interpolated value

### EaseIn

```csharp
public static float EaseIn(float t)
```

Quadratic ease-in: Accelerates from zero velocity.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### EaseOut

```csharp
public static float EaseOut(float t)
```

Quadratic ease-out: Decelerates to zero velocity.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### EaseInOut

```csharp
public static float EaseInOut(float t)
```

Quadratic ease-in-out: Accelerates until halfway, then decelerates.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### CubicIn

```csharp
public static float CubicIn(float t)
```

Cubic ease-in: More pronounced acceleration from zero velocity.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### CubicOut

```csharp
public static float CubicOut(float t)
```

Cubic ease-out: More pronounced deceleration to zero velocity.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### CubicInOut

```csharp
public static float CubicInOut(float t)
```

Cubic ease-in-out: Stronger acceleration until halfway, then stronger deceleration.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### QuartIn

```csharp
public static float QuartIn(float t)
```

Quartic ease-in: Very pronounced acceleration from zero velocity.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### QuartOut

```csharp
public static float QuartOut(float t)
```

Quartic ease-out: Very pronounced deceleration to zero velocity.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### QuartInOut

```csharp
public static float QuartInOut(float t)
```

Quartic ease-in-out: Dramatic acceleration until halfway, then dramatic deceleration.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### QuintIn

```csharp
public static float QuintIn(float t)
```

Quintic ease-in: Extremely pronounced acceleration from zero velocity.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### QuintOut

```csharp
public static float QuintOut(float t)
```

Quintic ease-out: Extremely pronounced deceleration to zero velocity.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### QuintInOut

```csharp
public static float QuintInOut(float t)
```

Quintic ease-in-out: Extreme acceleration until halfway, then extreme deceleration.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### SineIn

```csharp
public static float SineIn(float t)
```

Sinusoidal ease-in: Gradual acceleration using a sine curve.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### SineOut

```csharp
public static float SineOut(float t)
```

Sinusoidal ease-out: Gradual deceleration using a sine curve.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### SineInOut

```csharp
public static float SineInOut(float t)
```

Sinusoidal ease-in-out: Gentle acceleration and deceleration based on a sine curve.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### ExpoIn

```csharp
public static float ExpoIn(float t)
```

Exponential ease-in: Acceleration with an exponential growth curve.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### ExpoOut

```csharp
public static float ExpoOut(float t)
```

Exponential ease-out: Deceleration with an exponential decay curve.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### ExpoInOut

```csharp
public static float ExpoInOut(float t)
```

Exponential ease-in-out: Exponential acceleration until halfway, then exponential deceleration.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### CircIn

```csharp
public static float CircIn(float t)
```

Circular ease-in: Acceleration following a quarter-circle curve.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### CircOut

```csharp
public static float CircOut(float t)
```

Circular ease-out: Deceleration following a quarter-circle curve.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### CircInOut

```csharp
public static float CircInOut(float t)
```

Circular ease-in-out: Acceleration and deceleration following a semicircle curve.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### BackIn

```csharp
public static float BackIn(float t)
```

Back ease-in: Slight overshoot backward before accelerating forward.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### BackOut

```csharp
public static float BackOut(float t)
```

Back ease-out: Acceleration followed by a slight overshoot beyond the final position.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### BackInOut

```csharp
public static float BackInOut(float t)
```

Back ease-in-out: Slight overshoot in both directions.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### ElasticIn

```csharp
public static float ElasticIn(float t)
```

Elastic ease-in: Begins slowly and then accelerates with a spring-like effect.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### ElasticOut

```csharp
public static float ElasticOut(float t)
```

Elastic ease-out: Overshoots the destination and then oscillates to the final position.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### ElasticInOut

```csharp
public static float ElasticInOut(float t)
```

Elastic ease-in-out: Oscillating effect at both the beginning and the end.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### BounceOut

```csharp
public static float BounceOut(float t)
```

Bounce ease-out: Bounces multiple times near the destination before settling.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### BounceIn

```csharp
public static float BounceIn(float t)
```

Bounce ease-in: Bounces multiple times at the start before accelerating.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### BounceInOut

```csharp
public static float BounceInOut(float t)
```

Bounce ease-in-out: Bounces at both the beginning and end of the animation.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### Step

```csharp
public static float Step(float t)
```

Steps instantly from 0 to 1 at the midpoint. Useful for binary state transitions.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### SmoothStep

```csharp
public static float SmoothStep(float t)
```

Smoothstep: Smooth Hermite interpolation. Provides a smoother transition than EaseInOut with minimal computation.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### SmootherStep

```csharp
public static float SmootherStep(float t)
```

SmootherStep: Even smoother Hermite interpolation. Higher degree polynomial for more continuous derivatives.

**Parameters:**

- `t` (*float*)

**Returns:** `float`


### Spring

```csharp
public static float Spring(float t, float dampingRatio = 0.5f, float angularFrequency = 20.0f)
```

Spring function with configurable elasticity. Returns values that can exceed the 0-1 range during oscillation.

**Parameters:**

- `t` (*float*): Normalized time (0 to 1)
- `dampingRatio` (*float*): Controls oscillation damping (0.1 = lots of oscillation, 1.0 = no oscillation) (Default: `0.5f`)
- `angularFrequency` (*float*): Controls speed of oscillation (default = 20) (Default: `20.0f`)

**Returns:** `float`
