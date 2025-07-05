---
Title: "CLASS ScrollState"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere"
  type: "class"
---

- **Namespace:** [Guinevere](/guinevere/api/namespace-guinevere)
- **Source File:** Gui.Scroll.cs

Represents the state of a scrollable container, including scroll position, content dimensions, and scrollbar state.

## Properties

### **ScrollOffset**

(*Vector2*) { get; set } = `Vector2.Zero`: Gets or sets the current scroll position in pixels.

### **ContentSize**

(*Vector2*) { get; set } = `Vector2.Zero`: Gets or sets the total size of the scrollable content.

### **ViewportSize**

(*Vector2*) { get; set } = `Vector2.Zero`: Gets or sets the visible viewport size.

### **IsScrollingX**

(*bool*) { get; set }: Gets or sets whether horizontal scrolling is enabled.

### **IsScrollingY**

(*bool*) { get; set }: Gets or sets whether vertical scrolling is enabled.

### **IsDraggingScrollbarX**

(*bool*) { get; set }: Gets or sets whether the horizontal scrollbar is being dragged.

### **IsDraggingScrollbarY**

(*bool*) { get; set }: Gets or sets whether the vertical scrollbar is being dragged.

### **ScrollbarThickness**

(*float*) { get; set } = `12f`: Gets or sets the thickness of the scrollbar in pixels.

### **ShowScrollbarX**

(*bool*) { get; set }: Gets or sets whether the horizontal scrollbar should be shown.

### **ShowScrollbarY**

(*bool*) { get; set }: Gets or sets whether the vertical scrollbar should be shown.

### **DragStartMousePos**

(*Vector2*) { get; set } = `Vector2.Zero`: Gets or sets the mouse position when scrollbar dragging started.

### **DragStartScrollOffset**

(*Vector2*) { get; set } = `Vector2.Zero`: Gets or sets the scroll offset when scrollbar dragging started.

### **MaxScroll**

(*Vector2*): Gets the maximum scroll position.

### **NeedsHorizontalScroll**

(*bool*): Determines if horizontal scrolling is needed.

### **NeedsVerticalScroll**

(*bool*): Determines if vertical scrolling is needed.


## Public Methods

### ClampScrollPosition

```csharp
public void ClampScrollPosition()
```

Clamps the scroll position to valid values.


