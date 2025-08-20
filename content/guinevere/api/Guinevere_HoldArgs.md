---
Title: "HoldArgs"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "HoldArgs"
  namespace: "Guinevere"
  symbol: "struct"
  source: "HoldArgs.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [HoldArgs.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/HoldArgs.cs)

Represents the necessary input information for handling a hold interaction. This structure contains data about the initial and current positions of the pointer during a hold gesture, including the difference between these positions.

## Properties

### **StartPosition**

(*Vector2*) { get }: Gets the initial position of the object or pointer at the start of an interaction. Represents the location where the interaction originated, before any movement.

### **CurrentPosition**

(*Vector2*) { get }: Gets the current position of the object or pointer during an interaction. Represents the updated location relative to the starting position.

### **DeltaPosition**

(*Vector2*): Gets the difference between the current position and the starting position. Represents the positional offset of an object or input from its initial point.
