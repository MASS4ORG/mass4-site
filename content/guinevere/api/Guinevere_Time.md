---
Title: "Time"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "Time"
  namespace: "Guinevere"
  symbol: "class"
  source: "Time.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [Time.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/Time.cs)

Provides time measurement and frame rate calculation utilities for game loops.

## Properties

### **DeltaTime**

(*float*) { get; set }: Gets the time in seconds that elapsed since the last frame update.

### **Elapsed**

(*float*) { get; set }: Gets the total time in seconds since the Time instance was created.

### **Frames**

(*ulong*) { get; set }: Gets the total number of frames that have been processed since creation.

### **Fps**

(*float*): Gets the instantaneous frames per second (FPS) based on the last frame's delta time. Returns 0 if delta time is 0 (to avoid division by zero).

### **SmoothFps**

(*float*) { get; set }: Gets the smoothed frames per second (FPS) value, updated every second. This provides a more stable FPS reading than the instantaneous `Fps` value.


## Public Methods

### Update

```csharp
public void Update(double deltaTime)
```

Updates the time measurements. Called once per frame.

**Parameters:**

- `deltaTime` (*double*)
