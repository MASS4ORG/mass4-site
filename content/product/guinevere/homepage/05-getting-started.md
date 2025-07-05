---
title: "Getting Started"
weight: 5
bg: "bg-primary"
text-color: "text-white"
params:
  section_type: "getting_started"
  heading: "Get Started"
  subheading: "Ready to build amazing interfaces?"
  installation:
    nuget: "Install-Package Guinevere"
    dotnet_cli: "dotnet add package Guinevere"
    package_reference: '<PackageReference Include="Guinevere" Version="1.0.0" />'
  quick_start: |
    using Guinevere;
    using System;

    class Program
    {
        static void Main()
        {
            var app = new MyGuiApp();
            app.Run();
        }
    }

    class MyGuiApp : GuiApplication
    {
        private string name = "";
        private float slider = 0.5f;
        private bool checkbox = false;

        protected override void OnRender()
        {
            Gui.Text("Welcome to Guinevere!");
            
            Gui.InputText("Your Name", ref name);
            Gui.Slider("Value", ref slider, 0f, 1f);
            Gui.Checkbox("Enable Feature", ref checkbox);
            
            if (Gui.Button("Say Hello"))
            {
                Console.WriteLine($"Hello, {name}!");
            }
        }
    }
  buttons:
    - text: "View Documentation"
      class: "btn-light btn-lg"
      link: "/guinevere/api"
    - text: "Download Examples"
      class: "btn-outline-light btn-lg"
      link: "/guinevere/examples"
---

## Getting Started with Guinevere

Ready to experience the power of immediate mode GUI development? Get up and running with Guinevere in minutes.

### Installation

Choose your preferred installation method:

#### NuGet Package Manager
```
Install-Package Guinevere
```

#### .NET CLI  
```
dotnet add package Guinevere
```

#### PackageReference
```xml
<PackageReference Include="Guinevere" Version="1.0.0" />
```

### System Requirements

- .NET 6.0 or later
- Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- OpenGL 3.3 or DirectX 11 support

### Your First Application

Create a new console application and add this code:

```csharp
using Guinevere;
using System;

class Program
{
    static void Main()
    {
        var app = new HelloGuinevere();
        app.Run();
    }
}

class HelloGuinevere : GuiApplication
{
    private string message = "Hello, World!";
    private float opacity = 1.0f;
    private bool showMessage = true;

    protected override void OnRender()
    {
        Gui.Text("My First Guinevere App");
        Gui.Separator();
        
        Gui.InputText("Message", ref message);
        Gui.Slider("Opacity", ref opacity, 0f, 1f);
        Gui.Checkbox("Show Message", ref showMessage);
        
        if (showMessage)
        {
            Gui.PushStyle(GuiStyle.Alpha, opacity);
            Gui.Text(message);
            Gui.PopStyle();
        }
        
        if (Gui.Button("Click Me!"))
        {
            Console.WriteLine($"Button clicked! Message: {message}");
        }
    }
}
```

### Next Steps

1. **Explore the API**: Check out our comprehensive [API documentation](/guinevere/api)
2. **Try Examples**: Download and run our [example projects](/guinevere/examples)
3. **Join the Community**: Connect with other developers on our [Discord server](https://discord.gg/guinevere)
4. **Read the Guide**: Follow our step-by-step [tutorial series](/guinevere/tutorials)

### Learning Resources

- **Quick Reference**: Essential functions and patterns
- **Best Practices**: Performance tips and coding conventions
- **Advanced Topics**: Custom controls, themes, and plugins
- **Troubleshooting**: Common issues and solutions

### Need Help?

- 📚 [Documentation](/guinevere/docs)
- 💬 [Community Forum](https://forum.mass4.dev)
- 🐛 [Issue Tracker](https://github.com/mass4/guinevere/issues)
- 📧 [Support Email](mailto:support@mass4.dev)

Start building beautiful, fast, and responsive user interfaces today with Guinevere!