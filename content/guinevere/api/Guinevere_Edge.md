---
Title: "Edge"
Type: api
Created: "2025-07-05 15:10:56"
Params:
  namespace: "Guinevere"
  type: "struct"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Edge.cs

Represents a structure that defines an edge or border with measurements for each side: top, right, bottom, and left.

## Properties

### **Left**

(*float*) { get } = `left`: Gets a value representing the measurement of the left edge.

### **Top**

(*float*) { get } = `top`: Gets a value representing the measurement of the top edge.

### **Right**

(*float*) { get } = `right`: Gets a value representing the measurement of the right edge.

### **Bottom**

(*float*) { get } = `bottom`: Gets a value representing the measurement of the bottom edge.

### **X**

(*float*): Gets a value representing the combined measurement of the left and right edges.

### **Y**

(*float*): Gets a value representing the combination of the top and bottom edge measurements.

### **TopLeft**

(*Vector2*): Gets a `Vector2` representing the combination of the top and left edge measurements.

### **BottomRight**

(*Vector2*): Gets a `Vector2` representing the combination of the bottom and right edge measurements.


