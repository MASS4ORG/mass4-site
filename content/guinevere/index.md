---
Title: Guinevere
---

![](/guinevere-badge.png)

## Introduction

A cross-platform, language-agnostic UI framework with an uncompromising focus on performance, simplicity and expressive capabilities

### There's a challenge in the software development world

Contemporary applications - containing little more than a handful of images, buttons and text elements - rest precariously on massive technology stacks consisting of millions of lines of code. The development landscape suffers from overcomplicated, sluggish and error-prone software that creates frustration for both users and developers.

Guinevere represents our solution to address this challenge, by dramatically simplifying the complexity of the technology stack needed to build excellent, modern applications.

Guinevere operates with zero dependencies, maintains minimal size, and offers exceptional portability. It provides an intuitive and straightforward development experience, while enabling the creation of sophisticated user interfaces featuring complex layouts, shapes, effects and animations, all operating at thousands of frames per second with minimal memory consumption.

### Design Pillars

<div class="container">
<div class="row">

:::col
#### Leverage existing technologies

Shapes and Font processing is done by Skia, while input handling rendering is done by the integration (OpenGL/Vulkan thru Raylib, OpenTK or SilkNET).
:::

:::col
#### Intuitive and enjoyable to use

Guinevere enables you to address real challenges with every line of code. There's no requirement to master extensive frameworks or wrestle with tedious and restrictive boilerplate; Basic C# knowledge is all that's needed.
:::

:::col
#### Immediate and retained modes

Guinevere prioritizes immediate-mode functionality, complemented by an optional retained-mode layer that ultimately resolves to immediate-mode calls, delivering the advantages of both approaches.
:::

</div>
<div class="row">


:::col
#### Evolving

Guinevere is designed to evolve with your needs. Whether you're building a simple application or a complex system, Guinevere provides the flexibility and power you need to create the best possible user experience.
:::

:::col
#### Straightforward

Guinevere is optimized for clarity. Everything is designed to be as simple and direct as possible; we have been ruthless in eliminating code and complexity that isn't absolutely essential.
:::

:::col
#### High-performance

When you eliminate the complexity that tangles modern processors, they can truly perform! Guinevere processes and renders most interfaces in fractions of a millisecond.
:::

</div>
<div class="row">

:::col
#### Layout-enabled

Guinevere features an exceptionally powerful and expressive layout system, delivering all the capabilities you'd expect from a premium modern UI solution, and more.
:::

:::col
#### Single-frame stability

Taking the straightforward approach is also the correct approach. Idiomatic Guinevere code doesn't flicker or require multiple frames to stabilize; it delivers accurate and stable results in the first frame.
:::

:::col
#### Test-friendly

The input-output relationship in Guinevere is exceptionally clear and simple, with every system exposed and fully controllable through code, making it straightforward to simulate any scenario for testing purposes.
:::

</div>
<div class="row">

:::col
#### Developer-focused

Programmers are first-class citizens in Guinevere; every feature is fully accessible and controllable through code. No auxiliary resources, stylesheets or markup documents are required.
:::

:::col
#### Platform-agnostic

Since Guinevere's sole responsibility is converting input into a series of basic rendering commands, it integrates seamlessly into any environment and rendering pipeline.
:::

</div>
</div>

## Demonstrations

>
> We're about to showcase Guinevere - in its current state!
>
> Guinevere is actively under development and this website currently displays only a subset of capabilities. Many core features like the retained-mode layer and input controls are still in early development stages and aren't presented here. It should be understood that everything shown here is subject to change.
>
> All these examples are implemented in C#, using our Win32 platform integration. They utilize an API that's idiomatic to C# and designed to feel natural in the C# environment.
>
> Remember that Guinevere is designed to be language-agnostic and will be transpiled to multiple languages, with C++ being the next target language. Where needed, the user-facing API will always adapt to feel natural in the target language.
>
> Also note that the UI code itself is independent of the Win32 platform layer and will be identical when targeting other C# platforms.

<div class="container">
<div class="row">

:::col
## Hello, world

Where better to begin than with "hello world"?

These examples demonstrate how minimal the requirements are to get a basic Guinevere application running, and then to render something simple on screen. They contain the complete user application codebase; no additional code is necessary to create a Win32 window and draw a UI until the window closes.

As you can observe, it's remarkably simple to draw primitives such as rectangles, triangles and text. Guinevere provides multiple layers of API granularity, with no tools - however advanced! - hidden from the user. From basic shapes to complex layouts, Guinevere allows you to work at precisely the level of complexity you need.
:::

:::col
```cs
using Guinevere.Vulkan.SilkNET;
public class Program
{
    public static void Main()
    {
        var gui = new Gui();
        var win = new GuiWindow(gui);

        win.RunGui(() =>
        {
            gui.DrawRect(gui.ScreenRect, Color.Blue);
            gui.DrawText("Hello, world!");
        });
    }
}
```
:::

</div>
<div class="row">

:::col
## Hello, Triangle

```cs
using Guinevere.OpenGL.Raylib;
public class Program
{
    public static void Main()
    {
        var gui = new Gui();
        var win = new GuiWindow(gui);
        win.RunGui(() =>
        {
            gui.DrawRect(gui.ScreenRect, Color.Gray);
            gui.DrawWindowTitlebar();
            using (gui.Node().Expand().Gap(40).Margin(40).AlignContent(0.5f).Enter())
            {
                gui.DrawBackgroundRect(Color.Black, radius: 20);
                float time = gui.Time.Elapsed * 2;
                Vector2 center = gui.Node(200, 200).Rect.Center;
                Vector2 p1 = center + new Vector2(-100 * Cos(time), -100 + Sin(time) * 10);
                Vector2 p2 = center + new Vector2(+100 * Cos(time), -100 - Sin(time) * 10);
                Vector2 p3 = center + new Vector2(0, 100);
                gui.DrawTriangle(p1, p2, p3, Color.Red, Color.Green, Color.Blue);
                gui.DrawText("Hello, Triangle!", color: Color.White, fontSize: 50);
            }
        });
    }
}
```
:::

:::col
![](Screencast_20250820_194657.avif)
:::

</div>
</div>

## AirBnB slider demonstration

Next, let's examine how straightforward it is to create even highly complex UI widgets. This is a recreation of AirBnb's circular month slider as of February 2024, which you can (or could) find here (click on 'When', then select 'Months'). If it's no longer available when you're reading this, it resembled the demonstration shown here.

To be frank, we had considerable difficulty understanding the exact mechanics of how AirBnb constructed that slider using HTML, CSS and JavaScript, as it proved extremely complex. We abandoned our analysis after discovering numerous dozens (if not hundreds) of layered and interconnected HTML elements and SVG paths apparently managed by substantial amounts of JavaScript.

While the previous demonstration contains numerous small implementation details that illustrate how many things that are complex in HTML and CSS are straightforward in Guinevere, this example really drives the point home. Creating this in HTML and CSS would be extremely challenging - and clearly was extremely challenging for some developers working at AirBnb.

The fact that they succeeded in creating this at all is remarkably impressive! However, despite their excellent efforts, it still contains several bugs. For instance, numerous jittering artifacts and the fact that it completely fails when a scroll view appears in its containing box.

We're fully aware that this is an unfair comparison. HTML wasn't designed to excel at this type of functionality. It, like most other UI systems, is a highly structured and abstracted approach to creating interfaces, forcing developers to work far removed from what actually appears on screen. However, that's precisely the point - HTML and CSS simply aren't adequate, and have forced millions of UI designers and developers into the constraint of only accomplishing the limited types of things that are easily achievable in their working environment.

Note that the Guinevere code for this will likely change slightly once the input controls feature is introduced, as you would probably want to be able to interact with the widget using more than just a pointer device (for example, with keyboard navigation, etc).

```cs
private void DrawAirBnBMonthSlider(ref int month)
    {
        float t = month / 12.0f;

        float innerRadius = 90;
        float outerRadius = 150;

        using (_gui.Node(500, 500).AlignContent(0.5f).Gap(10).Enter())
        {
            _gui.DrawText(month.ToString(), 100f);
            _gui.DrawText(month == 1 ? "month" : "months", 20f);

            float halfThickness = (outerRadius - innerRadius) * 0.5f;
            Vector2 handlePos = _gui.CurrentNode.Rect.Center +
                                Angle.Turns(t - 0.25f).GetDirectionVector() * (innerRadius + halfThickness);
            Vector2 center = _gui.CurrentNode.Rect.Center;

            Shape arcLaneShape = Shape.Circle(outerRadius) - Shape.Circle(innerRadius);
            Shape arcShape = Shape.Arc(innerRadius + halfThickness, halfThickness, Angle.Turns(-0.25f), Angle.Turns(t))
                .Expand(-3);
            Shape handleShape = Shape.Circle(halfThickness - 10);

            InteractableElement handleElement = _gui.GetInteractable(handlePos, handleShape);

            if (handleElement.OnHold())
            {
                Vector2 delta = center - _gui.Input.MousePosition;
                t = 1 - 0.5f + MathF.Atan2(delta.X, -delta.Y) / MathF.Tau;
                t = Math.Clamp(t, 1 / 12f, 1);
                month = (int)Math.Round(t * 12);
            }
            else
            {
                t = ImMath.Lerp(t, month / 12.0f, _gui.Time.DeltaTime * 10);
            }

            _gui.DrawShape(center, arcLaneShape)
                .LinearGradientColor(0x00000022, 0x00000005, scale: 0.8f)
                .InnerShadow(0x00000066, new Vector2(0, 20), 50, -30)
                .OuterShadow(0x00000066, new Vector2(0, -5), 10, 5);

            for (int i = 0; i < 12; i++)
                _gui.DrawCircle(center + Angle.Turns(i / 12.0f).GetDirectionVector() * (innerRadius + halfThickness), 2,
                    0x00000099);

            _gui.DrawShape(center, arcShape)
                .RadialGradientColor(0xBA0057FF, 0xF91E50FF, innerRadius, outerRadius)
                .RadialGradientColor(0xDC4682FF, 0xCF2D6C00, innerRadius - halfThickness,
                    innerRadius + halfThickness, offsetY: halfThickness)
                .InnerShadow(0xFA144BFF, new Vector2(0, 5), 25, -8)
                .OuterShadow(0xEA1C5Acc, 90)
                .OuterShadow(0x000000822, new Vector2(0, 3), 10, 3)
                .OuterShadow(0x000000811, 5, 0)
                .OuterShadow(0x22222244, 2);

            _gui.DrawShape(handlePos,
                    handleShape.Expand(handleElement.On(Interactions.Hover | Interactions.Hold) ? 4 : 0))
                .SolidColor(0x00000088)
                .LinearGradientColor(0xD4D1D5FF, 0xFFFCFFFF)
                .InnerShadow(0xffffffff, 1, 2)
                .OuterShadow(0x00000066, 4);

            _gui.SetClipArea(_gui.CurrentNode, arcLaneShape);
        }
    }
```

![](Screencast_20250820_203828.avif)

## Capabilities

### Layout System

We believe we've created one of the most powerful, flexible and expressive layout systems available,
and certainly the most capable IMGUI layout system we've encountered.

<div class="container">
<div class="row">

:::col
#### Apply layout functionality selectively

Guinevere's layout system serves as a tool for you to utilize wherever and however you choose, not a constraint you're forced to work within. Layout functionality is decoupled from all other features. Ultimately, the layout system simply provides you with rectangles to use for other purposes. This makes it trivial to combine layout with "manual" calculations, using layout only for interface portions where it actually benefits you. Or if you prefer, you can bypass it entirely, without losing access to any of Guinevere's other capabilities.
:::

:::col
#### Thousands of nodes processed in milliseconds

Guinevere's layout system is extraordinarily fast, resolving thousands of layout nodes in fractions of a millisecond. And we haven't even focused on optimization yet! We've simply avoided pessimization.

We've attempted to run comparisons against Yoga, for example, a popular C++ layout library used by React Native and the Unity game engine. In basic scenarios, Guinevere typically outperformed Yoga by a factor of 10-30, and in more complex situations, Guinevere outperformed it by a factor of 100-5000. Note that this is the C# version of Guinevere compared to a C++ library.

We understand these are approximate numbers and not a rigorous benchmark, but they provide some indication of the expected final performance. Once Guinevere approaches completion, we will provide more concrete performance comparisons with popular alternatives.
:::

</div>
<div class="row">

#### Retained-style mutability

Work with immediate-mode layout data using retained-style patterns

One useful advantage of many retained mode systems is having a hierarchical data model of the UI that can be manipulated. One section of code can affect interface parts created by another section, adding to it, styling it, removing it, and so on.

Guinevere's layout system features a similar capability, despite being purely immediate mode. Within any given frame, layout nodes can be referenced and passed around, and are fully mutable. They can be modified, moved, added or removed at will, enabling the types of modular usage patterns typically found only in retained mode systems.

</div>
<div class="row">

:::col

#### Robust size primitives

Guinevere provides a simple set of size primitives that can be specified for width and height and - crucially - can also be used as minimum and maximum constraints. This makes it easy to specify layouts that are very challenging in, for example, HTML and CSS.

```cs
Size.FitContent(percentageOfContent) // 1 by default
Size.Expand(weight) // 1 by default
Size.Ratio(ratio) // Other axis multiplied by ratio
Size.Percentage(percentage) // 1 is 100%
Size.Pixels(pixels)
10f // In C# floats and ints implicitly convert to Size.
```
:::

:::col

#### Position and size elements relative to any other element

In Guinevere, you're not restricted to a fixed set of options like relative, absolute or fixed. You can position any element relative to any other element...

```cs
gui.Node()
    .PositionRelativeTo(otherNode,
        x: 0.5f,
        y: Offset.PercentageOfSelf(0.5f))
    .SizeRelativeTo(otherNode);

...or even completely move a node to another node.
gui.Node().SetNewParent(otherNode);
```
:::

</div>
<div class="row">

:::col
#### Sophisticated layout blending

Layout nodes can exist in a blended state between multiple different possible configurations. This makes transitions between different computed or derived values very straightforward to create, and is extremely useful for animations. Certain concepts, such as animating from fit content to a constrained expand, are extremely difficult or even impossible to express in, for example, HTML and CSS.

```cs
gui.Node().Width(
    Size.Lerp(Size.FitContent(), Size.Expand(), t)
);
```
:::

:::col
#### Alignment

In Guinevere, alignment is not based on left, center, right, etc., but rather is simply a float where 0 is "left", 1 is "right" and 0.5 is "center". You can even align < 0 and > 1.
float align = cos(time) * 0.5f + 0.5f;
gui.Node().AlignContent(x: align, y: align);
:::

</div>
<div class="row">

:::col
#### It's "pure data"

The LayoutNode struct simply contains a pointer to the layout data, which you can access and modify at will, but we've made the most common layout data easily accessible.
```cs
LayoutNode node = gui.Node();
DrawRect(node.Rect, col);        // With padding
DrawRect(node.OuterRect, col);   // With padding and margin
DrawRect(node.InnerRect, col);   // Without padding and margin
DrawRect(node.ContentRect, col); // Bounds of the content
DrawRect(node.Parent.Rect, col); // Parent rect
```

You can easily traverse the entire layout tree:
```cs
int i = 0;
LayoutNode someNode = gui.CurrentNode;
foreach (LayoutNode node in someNode.ChildNodes)
{
    Color color = i % 2 == 0 ? Color.Red : Color.Green;
    gui.DrawRect(node.Rect, color);
}
```

All of the layout specification methods such as `.MaxWidth()`, `.AlignContent()`, `.Gap()`, etc., are in fact just extremely small, inlinable functions updating a tiny amount of data. For example, setting the max width of a layout node to 100 pixels is just:

```cs
// Specify that we're using pixels
node.Properties.MaxWidth.Type = SizeMode.Pixels;
// Give the value in pixels
node.Properties.MaxWidth.Value = 100;
// Register that the node now has a max value
node.Properties.PropertyFlags |= PropertyFlags.MaxWidth;
```
:::

:::col
#### Adaptable

Choose the method of using nodes that best suits your requirements. You can assign nodes to variables, use the fluent API, or use the using statement.
var node = gui.Node();
node.Position(100, 100);
node.Size(200, 200);
SomeOtherFunction(node);

You can enter and exit nodes with the using statement.

```cs
using (gui.Node().Size(200, 200).Enter())
{
    // Do stuff
}
```

This is essentially equivalent to:

```cs
LayoutNodeScope scope = gui.Node().Size(200, 200).Enter();
// Do stuff
scope.Exit();
```
:::

</div>
<div class="row">

:::col
#### Convenient shortcuts for working with other Guinevere systems

The layout system itself is very isolated from the rest of the codebase, but because of how frequently it's used, we've created some shortcuts to make it easier to work with other Guinevere systems through the layout nodes. Note that none of the following features are part of the layout system itself, but are rather just convenient shortcuts.
Entering nodes helps you manage state

```cs
gui.SetZIndex(1);
gui.SetFontSize(13);
using (gui.Node().Enter())
{
   gui.SetZIndex(30);
   gui.SetFontSize(40);
}
// Font size is back to 13, and z-index is back to 1.
```

Shortcuts to the interactable system

```cs
LayoutNode node = gui.CurrentNode;
if (node.OnHold(out HoldArgs args))
   node.SelfOffset(args.DeltaPosition);
if (node.OnHover())
   DrawRect(node.Rect, Color.Red);
// Same as:
if (gui.GetInteractable(node.Rect).OnHover())
   DrawRect(node.Rect, Color.Red);
```
:::

</div>
<div class="row">

:::col
#### And much more

Covering all the features of Guinevere's layout system would require significant space, but here are a few we look forward to demonstrating in the future:

- Tables
- Wrapping of flowing elements
- Pivoting
- Margins and Paddings
- Self Offset
- Content Offset
- Flow direction
:::

</div>
</div>

## Shapes

User interfaces are composed of various shapes, so having the ability to easily define, draw and use complex shapes is crucial.

<div class="container">
<div class="row">

### Signed distance field based shapes

Guinevere features a capable Shapes API based on composing signed distance fields. It delivers excellent performance, has a minimal memory footprint per shape, and, like vectors, it is analytical, meaning it scales perfectly to any resolution.

</div>
<div class="row">

:::col
#### Define a shape

Note that a shape is not bound to a specific position - it's just a shape. It can be drawn in any position, used and reused as many times as you need.
```cs
Vector2 position = gui.ScreenRect.Center;
SdShape shape = SdShape.Circle(300);
```
:::

:::col
### Shapes can also be used as input elements

Interactable elements are most commonly defined by a simple rectangle, but you can also define them as a shape, and then use the shape as the interactable area.
```cs
var interactable = gui.GetInteractable(position, shape);
bool isHovering = interactable.OnHover();
bool isDragging = interactable.OnHold(out HoldArgs args);
```
:::

</div>
<div class="row">

:::col
#### Use shapes as clipping masks

This will affect everything, including text. This is, for example, how you would ensure content in a rounded rectangle doesn't visually overflow:
```cs
gui.SetClipShape(position, shape);
``
:::

:::col
#### Shapes can also be used as input elements

Interactable elements are most commonly defined by a simple rectangle, but you can also define them as a shape, and then use the shape as the interactable area.

```cs
var interactable = gui.GetInteractable(position, shape);
bool isHovering = interactable.OnHover();
bool isDragging = interactable.OnHold(out HoldArgs args);
```
:::

</div>
<div class="row">

:::col
#### Drawn with unlimited effects

Shapes can be drawn with various effects, such as gradients, textures and shadows. All effects are easily animatable, and gradients look excellent without the banding artifacts that are common in other systems.

Also note that all the effects will actually be drawn on top of each other in the specified order, all in a single draw call. In fact, all shapes in a given z-index are included in the same single draw call that draws the rest of the geometry.
```cs
gui.DrawShape(position, shape)
    .SolidColor(Color.HSVLerp(a, b, tHover))
    .VariousTypesOfGradients(...)
    .BackgroundTextures(...)
    .OuterShadow(...)
    .OuterShadow(...)
    .InnerShadow(...)
    .AndSoOn(...);
```
:::

#### Advantages and limitations, SVG and future plans

Signed distance shapes have many benefits, but there are also some limitations to this approach:

First, GPU rendering performance scales poorly with complexity. It performs as well as rendering a texture for relatively simple shapes, but combining many shapes together can quickly become a performance issue when you're also stacking multiple effects on it, as some effects such as shadows (which include an offset) will re-compute the SDF shape once per shadow, per fragment, effectively multiplying the render cost of the shape.

It also scales poorly with very thin shapes whose bounding boxes cover a large area, since SDF drawing is bounding box based. Such shapes that cover a very small proportion of their total bounding box will have a lot of potentially expensive overdraw, as the cost of evaluating every pixel in the bounding box is the same whether it is in the shape or not. This is why we also intend to introduce a vector-based graphics API for loading and generating such shapes easily. This API would of course include .svg support.

Another limitation is that using the signed distance field as a way of rendering shadows often leads to undesirable sharp edges in the shadows for certain shapes or combinations of shapes, due to the way the math works out. It is possible to improve the shadows, but only by sampling the SDF function to a cost-prohibitive degree. This is something we may be able to improve in the future, though; we have some ideas...

</div>
<div class="row">


## Graphics

Ultimately, all Guinevere really does is produce a list of graphics commands. So, naturally, it should excel at this. Guinevere's drawing is extremely fast and efficient, without sacrificing ease of use, expressive power or user control.

<div class="container">
<div class="row">

#### Graphics Drawing and Manipulation

Often, in UI libraries, it is very difficult and tedious to simply draw a basic rectangle to the screen. We've done our best to ensure Guinevere never gets in your way when you just want to put pixels on the screen:

```cs
// Specify how graphics should be drawn.
// (Note that our state system makes it so you don't have
//  to undo all of your state changes manually.)
gui.SetTransform(matrix);
gui.SetBlendMode(BlendMode.Additive);
gui.SetBlendColor(color);
gui.SetTexture(texture);
gui.SetZIndex(30);
// Draw a rect the easy way
gui.DrawRect(new Rect(0, 0, 100, 100), Color.Red);
// Or simply draw a quad
ImQuad quad = gui.DrawList.AddTriangulatedQuad();
quad.V1.Position = new Vector2(0, 0);
quad.V2.Position = new Vector2(100, 0);
quad.SetRect(rect);
// Or manually mutate the vertex and index buffers.
gui.DrawList.Indices;
gui.DrawList.Vertices;
```

#### Integrating it into your own pipeline

Guinevere's sole responsibility is converting input into a set of optimized GPU buffers and simple rendering commands, to be injected anywhere in any arbitrary rendering pipeline. As such, Guinevere integrates seamlessly into any potential environment.

The graphics commands themselves are very simple and efficient, the vertex structure is straightforward, and all you really need to implement the rendering specification is one shader file which, as of the time of writing, is less than 1000 lines of code, making Guinevere very easy to introduce into any potential rendering pipeline.

```cs
using System;
using Guinevere.OpenGL.SilkNET;
Gui gui = new Gui();
Rect rect = new Rect(0, 0, 500, 500);
Action guiFunction = (gui) =>
{
    gui.DrawRect(gui.ScreenRect, Color.Red);
};
CommandList commands = gui.ProcessFrame(rect, guiFunction);
foreach (Command command in commands)
{
    // Issue command to rendering pipeline
}
```

</div>
<div class="row">

## Input

Guinevere's input handling is designed to make it easy to handle input exactly in the way most useful to solve a given problem, providing users with an array of options at different levels of abstraction: raw input handling, interactables, and controls.

<div class="container">
<div class="row">

#### Raw input handling

Raw input handling is exactly that: it's asking direct questions about the current input state: where are the cursors, which keys are currently down, what is the axis value of a joystick, and so on.

```cs
// Do something if the user presses space
if (gui.Input.OnKeyDown(Key.Space))
{
    DoSomething();
}
```

#### Interactables

Interactables are elements that can be interacted with: they can have shapes, and provide a more comprehensive and easy way of handling common device-agnostic input operations, such as clicking things, dragging things, respecting z-indices and draw ordering (IE, being capable of blocking each other's input), and so on.

```cs
// Make a clickable circle in the center of the screen
Interactable e = gui.GetInteractable(gui.ScreenRect.Center, SdShape.Circle(100));
if (e.OnClick())
{
    DoSomething();
}
```

</div>
<div class="row">

#### Controls

Controls are fully developed "input elements": they can have focus, support very stateful interactions (such as being a text field with one or more inner cursors and selections), they can provide contextual/spatial navigation with keyboard or joysticks, and so on. Controls are a work-in-progress feature, so we will not go into them in detail yet.

#### Clear event propagation

Since Guinevere fully supports z-indices, all input elements (whether interactables or controls) have a clear order of priority. Additionally, event propagation can be controlled very precisely: each input element can decide which events to "consume" or pass on, and elements can even decide whether to respect propagation or not in order to receive events regardless of their propagation state.

#### Controllable, testable and low-latency input

Guinevere does not read input by itself, but is fed input events from the platform integration. This approach also makes it extremely easy to simulate input for testing or other purposes. Great effort has been invested in ensuring that input latency (the time between a user pressing a key and pixels changing on the screen) is as close to instant as possible on all platforms.

## Straightforward state management

The IMGUI pattern overall greatly reduces the amount of UI-related state you need to manage, as the UI code is typically directly tied to the data it represents. Guinevere further simplifies managing the small amount of state that remains - things like the current color, transform matrix, blend mode, text font, etc.

#### State snapshots

This is achieved with a highly-optimized, low-overhead, delta-based state snapshot system. At any time, a state snapshot can be requested, and then later used to restore the state back to what it was at the time of the snapshot.

```cs
gui.SetZIndex(1);
gui.SetFontSize(13);
int state = gui.State.GetState(); // Get state snapshot
gui.SetZIndex(30);
gui.SetFontSize(40);
// UI code here draws with a large font and goes on top
gui.State.SetState(state); // Restore state snapshot
```

#### Working with layout nodes

Taking a snapshot is very cheap and fast: so cheap and fast that when you enter a layout node, it always takes a state snapshot, such that it can restore the prior state when it later exits.

```cs
gui.SetZIndex(1);
gui.SetFontSize(13);
using (gui.Node().Enter())
{
    gui.SetZIndex(30);
    gui.SetFontSize(40);
    // UI code here draws with a large font and goes on top
}
// Font size is back to 13, and z-index is back to 1.
// This works at any level of scope nesting.
```

#### "Navigate" to anywhere in the layout from anywhere else

When a layout node is exited, it takes a second state snapshot, such that when you re-enter a layout node, the state will be reset to what it was when you left it.

One of the remarkable features this gives us, as a sort of side-effect, is the ability to go back and revisit, modify and add to previously created UI elements. One such example is the popup in the audio app demo: the popup layout node is created, then passed back out of the method to be filled out by the code that called the GetPopup function.

There is no need to resort to solutions such as splitting functions up into tedious begin and end calls with complicated ways of passing state between them, and no need to clutter your code with push and pop calls. (Though, of course, if you want to, you still can.)

#### Popup example

```cs
LayoutNodeScope GetPopup()
{
    LayoutNodeScope popupContainer;

    // Potential UI code for popup graphics.

    using (gui.Node().Padding(30).Enter())
    {
        gui.SetTransform(matrix);
        gui.SetFont(font);
        gui.SetFontSize(16);
        gui.SetZIndex(1000);
        // Create a container for the calling code
        // to fill out with whatever it wants.
        popupContainer = gui.Node().ExpandWidth().ToScope();
    }
    // More potential UI code for popup graphics.

    return popupContainer;
}
```

#### Use case, somewhere else:

```cs
LayoutNodeScope popup = GetPopup();
using (popup.Enter())
{
    // Fill out the popup with whatever you want - it will be on top, it will animate in nicely,
    // and so on; the popup part has been completely handled for you.
    //
    // The GUI state here is now set to what it was when the popup's scope was created:
    // the font size is 16, the transform matrix is the same, we will be drawing into the correct
    // z-index, etc.

    // Oh, and this is possible, too:
    popup.Width(700); // Modify the originally declared popup
}
```


And much more

Guinevere has many features that we haven't discussed yet, many of which are still in development.

#### Controls

Stateful input elements that can handle focus and selection, accommodate selection navigation, and so on. Controls will make it trivial to have proper cross-platform user experiences that adapt well to available input devices.

#### Retained workflow

Declare and bind a hierarchy of styled UI nodes, or load them from specification files. Retained nodes ultimately resolve to immediate mode calls and as such fully interoperate with pure immediate mode code.

#### Render Effects

It should be trivial to apply render effects such as blurring everything behind a popup, or adding a frosted glass filter, or bloom, or anything else like it. This will be a pre-built library of out-of-the-box supported effects, as well as a method of easily adding your own without needing to modify the platform layer too much.

#### Vector Graphics API

SDF shapes are amazing for many things, but for some shapes, generating meshes from vector definitions is a more appropriate solution. Guinevere will include a comprehensive vector graphics API for loading and generating vector shapes, including support for loading .svg files and the like.

#### Animations

A simple and powerful animation system for animating any arbitrary value over time using a variety of behaviours, transitions and easing functions.

#### Platform layers

As development progresses towards beta and release, we will continually be adding more platform layers to Guinevere, and further build out our tooling for this process.

---

*Guinevere is part of the [MEGA4 Initiative](/mega4) by [MASS4](/) - four revolutionary tools for modern development.*
