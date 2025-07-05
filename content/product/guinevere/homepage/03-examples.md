---
title: "Code Examples"
type: "homepage"
weight: 3
bg: "bg-light"
text-color: "text-dark"
params:
  section_type: "examples"
  heading: "See It In Action"
  subheading: "Simple, powerful, and elegant"
  examples:
    - title: "Basic Controls"
      code: |
        // Buttons and Text
        if (Gui.Button("Save File"))
            SaveDocument();

        Gui.Text("Status: Ready");
        Gui.Separator();

        // Input Controls
        Gui.InputText("Name", ref playerName);
        Gui.Checkbox("Enable Debug", ref debugMode);
        Gui.Slider("Opacity", ref opacity, 0f, 1f);
    - title: "Layout & Styling"
      code: |
        // Flexible Layouts
        Gui.BeginHorizontal();
        {
            Gui.Button("Left");
            Gui.Button("Center");
            Gui.Button("Right");
        }
        Gui.EndHorizontal();

        // Custom Styling
        Gui.PushStyle(GuiStyle.Color, Color.Blue);
        Gui.Button("Styled Button");
        Gui.PopStyle();
    - title: "Advanced Features"
      code: |
        // Windows and Panels
        if (Gui.BeginWindow("Tool Panel"))
        {
            Gui.Text("Window Content");
            
            if (Gui.TreeNode("Expandable Section"))
            {
                Gui.Indent();
                Gui.Text("Nested content");
                Gui.Unindent();
                Gui.TreePop();
            }
        }
        Gui.EndWindow();
    - title: "Data Binding"
      code: |
        // Reactive data binding
        var model = new ViewModel();
        
        Gui.Bind(model, m => m.Name)
           .InputText("Player Name");
           
        Gui.Bind(model, m => m.Health)
           .ProgressBar(0, 100);
           
        Gui.Bind(model, m => m.Items)
           .ListView("Inventory");
---

## Code Examples

Guinevere's immediate mode API makes UI development intuitive and straightforward. Here are some examples of what you can build:

### Simple Application

```csharp
using Guinevere;

public class Calculator : GuiApplication
{
    private float result = 0;
    private float input = 0;
    
    protected override void OnRender()
    {
        Gui.Text($"Result: {result}");
        Gui.InputFloat("Number", ref input);
        
        if (Gui.Button("Add"))
            result += input;
            
        if (Gui.Button("Clear"))
            result = 0;
    }
}
```

### Real-time Data Visualization

```csharp
public class DataVisualizer : GuiApplication
{
    private List<float> data = new();
    
    protected override void OnRender()
    {
        // Update data
        data.Add(GetSensorReading());
        if (data.Count > 100) data.RemoveAt(0);
        
        // Render chart
        Gui.PlotLines("Sensor Data", data.ToArray());
        
        // Controls
        if (Gui.Button("Reset"))
            data.Clear();
    }
}
```

### Game Development Tools

```csharp
public class LevelEditor : GuiApplication
{
    private GameLevel level;
    
    protected override void OnRender()
    {
        // Toolbar
        Gui.BeginHorizontal();
        if (Gui.Button("New")) CreateLevel();
        if (Gui.Button("Save")) SaveLevel();
        if (Gui.Button("Load")) LoadLevel();
        Gui.EndHorizontal();
        
        // Properties panel
        if (Gui.BeginWindow("Properties"))
        {
            Gui.InputText("Level Name", ref level.Name);
            Gui.SliderInt("Width", ref level.Width, 10, 100);
            Gui.SliderInt("Height", ref level.Height, 10, 100);
        }
        Gui.EndWindow();
    }
}
```
