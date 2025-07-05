---
Title: "AnimationManager"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** AnimationManager.cs

Manages animation instances and provides automatic ID generation for boolean animations based on caller location to enable seamless immediate-mode GUI animation usage.

## Properties

### **ActiveAnimationCount**

(*int*): Gets the total number of active boolean animations being managed.

### **RunningAnimationCount**

(*int*): Gets the number of currently running boolean animations.


## Public Methods

### AnimateBool01

```csharp
public float AnimateBool01(bool targetState, float duration, Func<float, float> easingFunction, string callerFilePath = "", int callerLineNumber = 0)
```

Animates a boolean value to a float between 0.0 and 1.0 with automatic ID generation based on the caller's file path and line number.

**Parameters:**

- `targetState` (*bool*): The target boolean state to animate towards.
- `duration` (*float*): The duration of the animation in seconds.
- `easingFunction` (*Func<float, float>*): The easing function to use for the animation.
- `callerFilePath` (*string*): Automatically provided caller file path. (Default: `""`)
- `callerLineNumber` (*int*): Automatically provided caller line number. (Default: `0`)

**Returns:** `float`

- The current animated value between 0.0 and 1.0.

### Clear

```csharp
public void Clear()
```

Clears all animation instances. This should typically be called when resetting the GUI state or when cleaning up.


