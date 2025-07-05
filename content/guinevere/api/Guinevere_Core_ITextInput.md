---
Title: "INTERFACE ITextInput"
Type: api
Created: "2025-06-18 16:32:58"
Params:
  namespace: "Guinevere.Core"
  type: "interface"
---

- **Namespace:** [Guinevere.Core](/guinevere/api/namespace-guinevere.core)
- **Source File:** IGuiComponent.cs

Interface for components that can handle text input

## Properties

### **Content**

(*string*) { get; set }: The current text content

### **IsReadOnly**

(*bool*) { get; set }: Whether the content is read-only


## Public Methods

### InsertText

```csharp
 void InsertText(string text)
```

Inserts text at the current position

**Parameters:**

- `text` (*string*): Text to insert


### SelectAll

```csharp
 void SelectAll()
```

Selects all text


### GetSelectedText

```csharp
 string GetSelectedText()
```

Gets the currently selected text

**Returns:** `string`

- Selected text or empty string if no selection

