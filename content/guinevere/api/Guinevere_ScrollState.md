---
Title: "ScrollState"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "ScrollState"
  namespace: "Guinevere"
  symbol: "class"
  source: "ScrollState.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [ScrollState.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/ScrollState.cs)

Represents the state of a scrollable container, including scroll position, content dimensions, and scrollbar state.

## Fields

### **ScrollbarMinThumbSize** (*float*) = `20f`: Minimum size for scrollbar thumbs in pixels.
### **ScrollbarPadding** (*float*) = `2f`: Padding around scrollbar tracks in pixels.

## Properties

### **ScrollOffset**

(*Vector2*) { get; set } = `Vector2.Zero`: Gets or sets the current scroll position in pixels.

### **ContentSize**

(*Vector2*) { get; set } = `Vector2.Zero`: Gets or sets the total size of the scrollable content.

### **ViewportSize**

(*Vector2*) { get; set } = `Vector2.Zero`: Gets or sets the size of the viewport (the visible area).

### **IsScrollingX**

(*bool*) { get; set }: Gets or sets whether horizontal scrolling is enabled.

### **IsScrollingY**

(*bool*) { get; set }: Gets or sets whether vertical scrolling is enabled.

### **IsDraggingScrollbarX**

(*bool*) { get; set }: Gets or sets whether the horizontal scrollbar is being dragged.

### **IsDraggingScrollbarY**

(*bool*) { get; set }: Gets or sets whether the vertical scrollbar is being dragged.

### **IsVerticalScrollbarHovered**

(*bool*) { get; set }: Gets or sets whether the vertical scrollbar is currently hovered.

### **IsHorizontalScrollbarHovered**

(*bool*) { get; set }: Gets or sets whether the horizontal scrollbar is currently hovered.

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


### CalculateVerticalScrollbar

```csharp
public (Rect track, Rect thumb) CalculateVerticalScrollbar(Rect containerRect)
```

Calculates the vertical scrollbar dimensions and thumb position.

**Parameters:**

- `containerRect` (*Rect*)

**Returns:** `(Rect track, Rect thumb)`


### CalculateHorizontalScrollbar

```csharp
public (Rect track, Rect thumb) CalculateHorizontalScrollbar(Rect containerRect)
```

Calculates the horizontal scrollbar dimensions and thumb position.

**Parameters:**

- `containerRect` (*Rect*)

**Returns:** `(Rect track, Rect thumb)`


### IsPointOverVerticalThumb

```csharp
public bool IsPointOverVerticalThumb(Vector2 point, Rect containerRect)
```

Checks if a point is over the vertical scrollbar thumb.

**Parameters:**

- `point` (*Vector2*)
- `containerRect` (*Rect*)

**Returns:** `bool`


### IsPointOverHorizontalThumb

```csharp
public bool IsPointOverHorizontalThumb(Vector2 point, Rect containerRect)
```

Checks if a point is over the horizontal scrollbar thumb.

**Parameters:**

- `point` (*Vector2*)
- `containerRect` (*Rect*)

**Returns:** `bool`


### HandleVerticalScrollbarDrag

```csharp
public void HandleVerticalScrollbarDrag(Vector2 mousePos, Rect containerRect)
```

Handles vertical scrollbar drag operations.

**Parameters:**

- `mousePos` (*Vector2*)
- `containerRect` (*Rect*)


### HandleHorizontalScrollbarDrag

```csharp
public void HandleHorizontalScrollbarDrag(Vector2 mousePos, Rect containerRect)
```

Handles horizontal scrollbar drag operations.

**Parameters:**

- `mousePos` (*Vector2*)
- `containerRect` (*Rect*)
