---
title: "Hero Section"
type: "homepage"
weight: 1
bg: "guinevere-hero"
text-color: "text-white"
params:
  section_type: "hero"
  logo: "G"
  tagline: "A blazing fast Immediate Mode GUI library for C# with razor-sharp focus on performance, simplicity, and expressive power."
  buttons:
    - text: "Get Started"
      class: "btn-lg guinevere-btn"
      link: "/guinevere/docs"
    - text: "View on GitHub"
      class: "btn-lg btn-outline-light"
      link: "https://github.com/mass4org/guinevere"
  code_example: |
    using Guinevere;

    class MyApp : GuiApplication
    {
        protected override void OnRender()
        {
            if (Gui.Button("Hello World!"))
            {
                Console.WriteLine("Button clicked!");
            }

            Gui.Text("Welcome to Guinevere");
            Gui.Slider("Volume", ref volume, 0, 100);
        }
    }
---

# Guinevere

The future of immediate mode GUI development in C#. Built for developers who demand speed, simplicity, and expressive power in their user interfaces.
