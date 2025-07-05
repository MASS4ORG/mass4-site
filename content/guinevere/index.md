---
Title: Guinevere
---

## Introduction

A cross-platform, language-agnostic UI library with a razor sharp focus on performance, simplicity and expressive power

### There's a problem in the software industry

Most modern applications - composed of barely more than a few images, buttons and lines of text - sit uneasily upon towering tech-stacks comprising millions of lines of code. The industry is plagued by overcomplicated, slow and buggy software that is painful both to use and develop.

PanGui is our attempt to help solve the problem, by massively reducing the complexity of the tech stack required to produce good, modern applications.

PanGui has no dependencies at all, is as small as we could make it, and is extremely portable. It is very easy and simple to use, and is capable of creating sophisticated user interfaces with complex layouts, shapes, effects and animations, all while running at thousands of frames per second and having a small memory footprint.

### PanGui in a nutshell

<div class="container">
<div class="row">

:::col
#### Fully self-contained

PanGui has zero dependencies. It does not require a particular runtime, environment or third party library. Memory management, layouting, font processing, input handling and so on is all handled by PanGui.
:::

:::col
#### Easy and fun to use

PanGui lets you solve actual problems with every line of code. There's no need to memorize a massive framework or wrangle tedious and restrictive boilerplate; basic programming skills is all you need.
:::

:::col
#### Immediate and retained-mode

PanGui is immediate-mode first, with an optional retained-mode layer on top that ultimately reduces to immediate-mode calls, bringing you the best of both worlds.
:::

</div>
<div class="row">


:::col
#### Data-oriented

PanGui doesn't have a single abstract class, virtual method or component factory. There's no trick, really. It's just data, and the code that operates on that data.
:::

:::col
#### Simple

PanGui is non-pessimized. Everything is as simple and straight-forward as possible; we have been merciless when deleting code and complexity that is not absolutely necessary.
:::

:::col
#### Fast

When you stop tangling up a modern processor with spaghetti, it can really go! PanGui processes and renders most interfaces in fractions of a millisecond.
:::

</div>
<div class="row">

:::col
#### Layout-capable

PanGui boasts an extremely capable and expressive layouting system, providing all the features you'd expect of a top-of-the-line modern UI solution, and then some.
:::

:::col
#### Stable in a single frame

Doing things the easy way is also doing things the right way. Idiomatic PanGui user code does not jitter and take multiple frames to "settle down"; it provides a correct and stable result in the first frame.
:::

:::col
#### Testable

The input-output relationship of PanGui is extremely clear and simple, and every system is exposed and fully controllable by code, making it straight-forward to simulate any setup for testing.
:::

</div>
<div class="row">

:::col
#### Code-centric

The programmer is a first-class citizen of PanGui; every feature is fully usable and controllable by code. No secondary resources, stylesheets or markup documents are necessary.
:::

:::col
#### Cross Platform

Since PanGui's only job is to turn input into a list of basic rendering commands, it is easily integrated into any potential environment and rendering pipeline.
:::

</div>
</div>

## Demos

>
> We're about to show you PanGui - in its current state!
>
> PanGui is still under active development and this website currently shows only a subset of features. Many core features like the retained-mode layer and input controls are still in their early stages and are not presented here. It should go without saying that everything here is subject to change.
>
> All these examples are written in C#, and are created using our Win32 platform integration. As such, they are using an API that is idiomatic to C# and made to feel nice to use in specifically C#.
>
> Keep in mind that PanGui is designed to be language-agnostic and will be transpiled to many languages, with C++ being the next target language. Where necessary, the user-facing API will always change to feel natural to use in the target language.
>
> Also note that the UI code itself does not care about the Win32 platform layer and will be identical when targeting other C# platforms.

<div class="container">
<div class="row">

:::col
## Hello, world

Where else to start, but with "hello world"?

These examples show just how little is needed to get a basic PanGui application up and running, and then to draw something simple on the screen. They contain the entire user application codebase; no more code is necessary to create a Win32 window and draw a UI until the window is closed.

As you can see, it is extremely simple to draw primitives such as rects, triangles and text. PanGui has many layers of API granularity, with no tools - however sharp! - hidden away from the user. From simple shapes to complicated layouts, PanGui lets you work at exactly the level of complexity you want.
:::

:::col
```cs
using PanGui;
public class Program
{
    public static void Main()
    {
        var gui = new Gui();
        var win = new GuiWindow(gui);

        win.RunGui(() =>
        {
            gui.DrawRect(gui.ScreenRect, 0x292929FF);
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
using PanGui;
public class Program
{
    public static void Main()
    {
        var gui = new Gui();
        var win = new GuiWindow(gui);
        win.RunGui(() =>
        {
            gui.DrawRect(gui.ScreenRect, 0x2A2929FF);
            gui.DrawWindowTitlebar();
            using (gui.Node().Expand().Gap(40).Margin(40).AlignContent(0.5f).Enter())
            {
                gui.DrawBackgroundRect(0x00000088, radius: 20);
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
:::

</div>
</div>

## AirBnB slider demo

Next up, let's look at how straight-forward it is to create even very complicated UI widgets. This is a recreation of AirBnb's circular month slider as of February 2024, which you can (or could) find here (click on 'When', then select 'Months'). If it's not there any more when you're reading this, well, it looked like the demo here.

We'll be honest, we had a pretty hard time sorting out the precise mechanics of how AirBnb built that slider using HTML, CSS and JavaScript, as it is extremely complicated. We gave up after finding many dozens (if not hundreds) of layered and interweaving HTML elements and SVG paths seemingly managed by enormous amounts of JavaScript.

In the previous demo there are plenty of small implementation details that show how many things that are complicated in HTML and CSS are very simple in PanGui. But this example, we think, really brings it home. Making this in HTML and CSS would be a nightmare - and clearly was a nightmare for some poor developers working for AirBnb.

The fact that they managed to create this at all is extremely impressive! But despite their best efforts, it still has several bugs. For example, lots of jittering artifacts and the fact that it completely breaks when a scroll view appears in its containing box.

We're perfectly aware that this is an unfair comparison. HTML was not designed to be good at this sort of thing. It, like most other UI systems, is a very structured and abstracted way of creating a UI, forcing the developer to be far away from what is drawn on the screen. However, that is the point - HTML and CSS are just not good enough, and have force
<div class="container">
<div class="row">d millions of UI designers and developers into the box of only doing the limited sorts of things that are easily achievable in their working environment.

Note that the PanGui code for this will probably change a little bit once the input controls feature is introduced, as you would likely want to be able to interact with the widget using more than just a pointer device (for example, with keyboard navigation, etc).

```cs
void DrawAirBnBMonthSlider(ref int month)
{
    ref float t = ref gui.GetFloat(month / 12.0f);
    float innerRadius = 90;
    float outerRadius = 150;
    using (gui.Node(500, 500).AlignContent(0.5f).Gap(10).Enter())
    {
        gui.DrawText(month.ToString(), 100f);
        gui.DrawText(month == 1 ? "month" : "months", 20f);
        float halfThickness = (outerRadius - innerRadius) * 0.5f;
        Vector2 handlePos = gui.CurrentNode.Rect.Center + Angle.Turns(t - 0.25f).GetDirectionVector() * (innerRadius + halfThickness);
        Vector2 center = gui.CurrentNode.Rect.Center;
        SdShape arcLaneShape = SdShape.Circle(outerRadius) - SdShape.Circle(innerRadius);
        SdShape arcShape = SdShape.Arc(innerRadius + halfThickness, halfThickness, Angle.Turns(-0.25f), Angle.Turns(t)).Expand(-3);
        SdShape handleShape = SdShape.Circle(halfThickness - 10);
        InteractableElement handleElement = gui.GetInteractable(handlePos, handleShape);
        if (handleElement.OnHold())
        {
            Vector2 delta = center - gui.Input.MousePosition;
            t = 1 - 0.5f + MathF.Atan2(delta.X, -delta.Y) / MathF.Tau;
            t = Math.Clamp(t, 1 / 12f, 1);
            month = (int)Math.Round(t * 12);
        }
        else
        {
            t = ImMath.Lerp(t, month / 12.0f, gui.Time.DeltaTime * 10);
        }
        gui.DrawSdShape(center, arcLaneShape)
            .LinearGradientColor(0x00000022, 0x00000005, scale: 0.8f)
            .InnerShadow(0x00000066, new Vector2(0, 20), 50, -30)
            .OuterShadow(0x00000066, new Vector2(0, -5), 10, 5);
        for (int i = 0; i < 12; i++)
            gui.DrawCircle(center + Angle.Turns(i / 12.0f).GetDirectionVector() * (innerRadius + halfThickness), 2, 0x00000099);
        gui.SetClipArea(gui.CurrentNode, arcLaneShape); // Clips the shadow to the lane.
        gui.DrawSdShape(center, arcShape)
            .RadialGradientColor(0xBA0057FF, 0xF91E50FF, innerRadius, outerRadius)
            .RadialGradientColor(0xDC4682FF, 0xCF2D6C00, innerRadius - halfThickness, innerRadius + halfThickness, offsetY: halfThickness)
            .InnerShadow(0xFA144BFF, new Vector2(0, 5), 25, -8)
            .OuterShadow(0xEA1C5Acc, 90)
            .OuterShadow(0x000000822, new Vector2(0, 3), 10, 3)
            .OuterShadow(0x000000811, 5, 0)
            .OuterShadow(0x22222244, 2);
        gui.DrawSdShape(handlePos, handleShape.Expand(handleElement.On(Interactions.Hover | Interactions.Hold) ? 4 : 0))
            .LinearGradientColor(0xD4D1D5FF, 0xFFFCFFFF)
            .InnerShadow(0xffffffff, 1, 2)
            .OuterShadow(0x00000066, 4);
    }
}
```

## Features

### Layouting

We think we've managed to create one of the most powerful, flexible and expressive layout systems around,
and certainly by far the most capable IMGUI layouting system we've ever heard of.

<div class="container">
<div class="row">

:::col
#### Use layouting only where and how you want

PanGui's layouting system is a tool for you to use as and where you please, not a box you are forced to fit into. Layouting is not coupled to any other features. In the end, all the layouting system really does is give you rects to use for other things. As such, it is trivial to mix and match layouting with "manual" calculations, using layouting only for the parts of the interface where it actually helps you. Or if you want, you can even forgo it entirely, without losing access to any of PanGui's other features.
:::

:::col
#### Thousands of nodes in fractions of a millisecond

PanGui's layouting is blazingly fast, resolving thousands of layout nodes in fractions of a millisecond. And we haven't even really optimized it yet! We've merely non-pessimized it.

We've tried to run comparisons against for example Yoga, a popular C++ layouting library used by, for example, React Native and the Unity game engine. In very simple cases, PanGui typically outperformed Yoga by a factor of 10-30, and in more complicated situations, PanGui outperformed it by a factor of 100-5000. And note that this is the C# version of PanGui compared to a C++ library.

We realize these are loose numbers and not remotely a stringent benchmark, but they give some sense of the final expected performance. Once PanGui nears completion, we will provide more concrete performance comparisons with popular alternatives.
:::

</div>
<div class="row">

#### Retained-like mutability

Work with the immediate-mode layouting data with retained-like patterns

One convenient advantage of many retained mode systems is that you have a hierarchical data model of the UI that can be manipulated. One part of the code can affect parts of the interface created by another part of the code, adding to it, styling it, removing it, and so on.

PanGui's layouting boasts a similar feature, despite being purely immediate mode. Within a given frame, layout nodes can be referenced and passed around, and are fully mutable. They can be modified, moved, added or removed at will, enabling the sorts of modular usage patterns that you'd typically only find in retained mode systems.

</div>
<div class="row">

:::col

#### Powerful size primitives

PanGui provides a simple set of size primitives that can be specified for width and height and - this is key - can also be used as min and max constraints. This makes it easy to specify layouts that are very challenging in, for example, HTML and CSS.

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

#### Position and size anything relative to anything else

In PanGui, you're not limited to a fixed set of options like relative, absolute or fixed. You can position anything relative to anything else...

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
#### Advanced layout blending

Layout nodes can exist in a blended state between many different possible configurations. This makes transitions between different computed or derived values very easy to create, and is very handy for animations. Certain concepts, such as animating from fit content to a constrained expand, are extremely difficult or even impossible to express in, for example, HTML and CSS.

```cs
gui.Node().Width(
    Size.Lerp(Size.FitContent(), Size.Expand(), t)
);
```
:::

:::col
#### Alignment

In PanGui, alignment is not based on left, center, right, etc., but rather is just a float where 0 is "left", 1 is "right" and 0.5 is "center". You can even align < 0 and > 1.
float align = cos(time) * 0.5f + 0.5f;
gui.Node().AlignContent(x: align, y: align);
:::

</div>
<div class="row">

:::col
#### It's "just data"

The LayoutNode struct simply contains a pointer to the layout data, which you can access and modify at will, but we've made the most common layouting data easily accessible.
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
#### Flexible

Pick the method of using nodes that best fits your needs. You can assign nodes to variables, use the fluent API, or use the using statement.
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
#### Useful shortcuts for working with other PanGui systems

The layout system itself is very isolated from the rest of the codebase, but because of how frequently it is used, we've made some shortcuts to make it easier to work with other PanGui systems through the layouting nodes. Note that none of the following features are part of the layouting system itself, but are rather just convenient shortcuts.
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
#### And so much more

Covering all the features of PanGui's layouting system would take a lot of space, but here are a few we look forward to showing you in the future:

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

User interfaces are made out of various shapes, so easily being able to define, draw and use complex shapes is important.

<div class="container">
<div class="row">

### Signed distance field based shapes

PanGui has a capable Shapes API based on composing signed distance fields. It is very fast, it has a tiny memory footprint per shape, and, like vectors, it is analytical, meaning it scales perfectly to any resolution.

</div>
<div class="row">

:::col
#### Define a shape

Note that a shape is not tied to a specific position - it's just a shape. It can be drawn in any position, used and reused as many times as you like.
```cs
Vector2 position = gui.ScreenRect.Center;
SdShape shape = SdShape.Circle(300);
```
:::

:::col
### Shapes can also be used as input elements

Interactable elements are most often defined by a simple rectangle, but you can also define them as a shape, and then use the shape as the interactable area.
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

This will affect everything, including text. This is, for example, how you would make sure content in a rounded rectangle doesn't visually overflow:
```cs
gui.SetClipShape(position, shape);
``
:::

:::col
#### Shapes can also be used as input elements

Interactable elements are most often defined by a simple rectangle, but you can also define them as a shape, and then use the shape as the interactable area.

```cs
var interactable = gui.GetInteractable(position, shape);
bool isHovering = interactable.OnHover();
bool isDragging = interactable.OnHold(out HoldArgs args);
```
:::

</div>
<div class="row">

:::col
#### Drawn with as many effects as you like

Shapes can be drawn with various effects, such as gradients, textures and shadows. All effects are easily animatable, and gradients look good and don't have the banding artifacts that are common in other systems.

Also note that all the effects will actually be drawn on top of each other in the given order, all in a single draw call. In fact, all shapes in a given z-index are included in the same single draw call that draws the rest of the geometry.
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

#### Pros and Cons, SVG and future plans

Signed distance shapes have a lot of upsides, but there are also some downsides to this approach:

First, GPU rendering performance scales poorly with complexity. It is as fast as rendering a texture for relatively simple shapes, but combining many shapes together can quickly become a performance problem when you're also stacking multiple effects on it, as some effects such as shadows (which include an offset) will re-compute the SDF shape once per shadow, per fragment, effectively multiplying the render cost of the shape.

It also scales poorly with very thin shapes whose bounding boxes cover a large area, since SDF drawing is bounding box based. Such shapes that cover a very small proportion of their total bounding box will have a lot of potentially expensive overdraw, as the cost of evaluating every pixel in the bounding box is the same whether it is in the shape or not. This is why we also intend to introduce a vector-based graphics API for loading and generating such shapes easily. This API would of course include .svg support.

Another con is that using the signed distance field as a way of rendering shadows often leads to undesirable sharp edges in the shadows for certain shapes or combinations of shapes, due to the way the math works out. It is possible to improve the shadows, but only by sampling the SDF function to a cost-prohibitive degree. This is something we may be able to improve in the future, though; we have some ideas...

</div>
<div class="row">


## Graphics

In the end, all PanGui really does is produce a list of graphics commands. So, of course, it should be good at it. PanGui's drawing is very fast and efficient, without sacrificing ease of use, expressive power or user control.

<div class="container">
<div class="row">

#### Graphics Drawing and Manipulation

Often, in UI libraries, it is very hard and tedious to just draw a simple rectangle to the screen. We've done our best to make sure PanGui never gets in your way when you just want to put pixels on the screen:

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

#### Inegrating it into your own pipeline

PanGui's only job is to turn input into a set of optimized GPU buffers and simple rendering commands, to be injected anywhere in any arbitrary rendering pipeline. As such, PanGui integrates easily into any potential environment.

The graphics commands themselves are very simple and efficient, the vertex structure is straight-forward, and all you really need to implement the rendering spec is one shader file which, as of the time of writing, is less than 1000 lines of code, making PanGui very easy to introduce into any potential rendering pipeline.

```cs
using System;
using PanGui;
Gui gui = new Gui();
Rect rect = new Rect(0, 0, 500, 500);
Action guiFunction = (gui) =>
{
    gui.DrawRect(gui.ScreenRect, 0xFF0000FF);
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

PanGui's input handling is written to make it easy to handle input exactly in the way most useful to solve a given problem, providing the user with an array of options at different levels of abstraction: raw input handling, interactables, and controls.

<div class="container">
<div class="row">

#### Raw input handling

Raw input handling is just that: it's asking direct questions about the current input state: where are the cursors, which keys are currently down, what is the axis value of a joystick, and so on.

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

Controls are fully fledged "input elements": they can have focus, support very stateful interactions (such as being a text field with one or more inner cursors and selections), they can provide contextual/spatial navigation with keyboard or joysticks, and so on. Controls are an in progress feature, so we will not go into them in detail yet.

#### Straight-forward event propagation

Since PanGui fully supports z-indices, all input elements (whether interactables or controls) have a clear order of priority. Additionally, event propagation can be controlled very precisely: each input element can decide which events to "eat" or pass on, and elements can even decide whether to respect propagation or not in order to receive events regardless of their propagation state.

#### Controllable, testable and low-latency input

PanGui does not read input by itself, but is fed input events from the platform integration. This approach also makes it extremely easy to simulate input for testing or other purposes. Great effort has been invested in ensuring that input latency (the time between a user pressing a key and pixels changing on the screen) is as close to instant as possible on all platforms.

## Straight-forward state management

The IMGUI pattern overall greatly reduces the amount of UI-related state you need to manage, as the UI code is typically directly tied to the data it represents. PanGui even further simplifies managing the little amount of state that is left - things like the current color, transform matrix, blend mode, text font, etc.

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

#### Working with layout node

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

#### "Jump" to anywhere in the layout from anywhere else

When a layout node is exited, it takes a second state snapshot, such that when you re-enter a layout node, the state will be reset to what it was when you left it.

One of the super awesome features this gives us, as a sort of side-effect, is the ability to go back and revisit, modify and add to previously created UI elements. One such example is the popup in the audio app demo: the popup layout node is created, then passed back out of the method to be filled out by the code that called the GetPopup function.

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

PanGui has a lot of features that we haven't talked about yet, many of which are still in development.

#### Controls

Stateful input elements that can handle focus and selection, accommodate selection navigation, and so on. Controls will make it trivial to have proper cross-platform user experiences that adapt well to available input devices.

#### Retained workflow

Declare and bind a hierarchy of styled UI nodes, or load them from specification files. Retained nodes ultimately resolve to immediate mode calls and as such fully interoperate with pure immediate mode code.

#### Render Effects

It should be trivial to apply render effects such as blurring everything behind a popup, or adding a frosted glass filter, or bloom, or anything else like it. This will be a pre-built library of out-of-the-box supported effects, as well as a method of easily adding your own without needing to modify the platform layer too much.

#### Vector Graphics API

SDF shapes are amazing for many things, but for some shapes, generating meshes from vector definitions is a more appropriate solution. PanGui will include a comprehensive vector graphics API for loading and generating vector shapes, including support for loading .svg files and the like.

#### Animations

A simple and powerful animation system for animating any arbitrary value over time using a variety of behaviours, transitions and easing functions.

#### Platform layers

As development progresses towards beta and release, we will continually be adding more platform layers to PanGui, and further build out our tooling for this process.
