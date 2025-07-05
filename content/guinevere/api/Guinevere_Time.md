---
Title: "Time"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Time.cs

Provides time measurement and frame rate calculation utilities for game loops.

## Properties

### **DeltaTime**

(*float*) { get; set }: Gets the time in milliseconds that elapsed since the last frame update. This value is affected by `TimeScale`.

### **UnscaledElapsed**

(*float*) { get; set }: Gets the total time in seconds elapsed since the application's start. This is the real (unscaled) time and unaffected by `TimeScale`.

### **Elapsed**

(*float*) { get; set }: Gets the total scaled time in seconds since the Time instance was created. This value is affected by `TimeScale`.

### **TimeScale**

(*float*) { get; set } = `1f`: Gets or sets the scale at which time progresses. 1.0 is normal speed, 0.5 is half speed, 2.0 is double speed.

### **Frames**

(*ulong*) { get; set }: Gets the total number of frames that have been processed since creation.

### **Fps**

(*float*): Gets the instantaneous frames per second (FPS) based on the last frame's delta time. Returns 0 if delta time is 0 (to avoid division by zero).

### **SmoothFps**

(*float*) { get; set }: Gets the smoothed frames per second (FPS) value, updated every second. This provides a more stable FPS reading than the instantaneous `Fps` value.


## Public Methods

### Update

```csharp
public void Update()
```

Updates the time measurements. Called once per frame.


