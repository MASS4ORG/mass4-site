---
Title: "Pass"
Type: api
Created: "2025-07-06 23:20:28"
Params:
  type: "Pass"
  namespace: "Guinevere"
  symbol: "enum"
  source: "Pass.cs"
  external_link: "github.com/brmassa/"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [Pass.cs](https://github.com/brmassa/blob/main/Pass.cs)

Represents the stages of a rendering process in the GUI framework. The rendering process consists of multiple distinct phases that are executed sequentially.

## Enum Values

- **Pass1Build**: The first pass where the layout tree is built and elements are measured and positioned. During this phase, UI elements calculate their required dimensions and establish their positions within the layout hierarchy without performing actual rendering.
- **Pass2Render**: The second pass where the actual rendering of elements occurs. During this phase, the previously calculated layout information is used to draw elements to the canvas in their final positions and sizes.

