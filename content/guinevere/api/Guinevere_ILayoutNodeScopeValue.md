---
Title: "ILayoutNodeScopeValue"
Type: api
Created: "2025-08-19 15:05:41"
Params:
  type: "ILayoutNodeScopeValue"
  namespace: "Guinevere"
  symbol: "interface"
  source: "ILayoutNodeScopeValue.cs"
  external_link: "https://github.com/MASS4ORG/Guinevere"
---

- **Namespace:** [Guinevere](/guinevere/api/guinevere)
- **Source File:** [ILayoutNodeScopeValue.cs](https://github.com/MASS4ORG/Guinevere/blob/main/Guinevere/ILayoutNodeScopeValue.cs)

Represents a value that can be associated with a layout node scope. Implementations of this interface provide a mechanism to define a default value and are used for cascading or overriding specific settings within a layout node hierarchy.

## Properties

### **Default**

(*T*) { get }: Gets the default instance of the implementing type. This property is used to provide a fallback value when a specific instance is not set or found in a layout node scope hierarchy.
