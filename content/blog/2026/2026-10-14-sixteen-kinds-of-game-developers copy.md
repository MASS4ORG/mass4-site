---
draft: true
title: "16 Kinds of Gamedevs DRAFT"
date: 2026-10-14
draft: true
tags:
  - gamedev
  - tools
  - game-engines
Params:
  summary: "Game design has a shared vocabulary for what players feel. Tool makers have none for who builds the game. Here are sixteen kinds of game developers in four houses, the one question each asks of a tool, what makes them leave, and a matrix of what they need."
  socialmedia: |
    Game design has a vocabulary for what players feel. We have none for who makes the game. Sixteen kinds of game developers in four houses, each defined by the one question they ask of a tool.
  
    #gamedev #gamedesign #dotnet
---

Game designers have a shared language for what players feel. "Challenge", "Fantasy" and "Discovery" let a team argue about a design in one word. There is no such language for the other side of the screen: the people who make the game and the tools they need. Every engine, editor and pipeline is designed for someone, and most of the time that someone is the author's mental picture of themselves.

This is an attempt at that missing vocabulary. It describes **sixteen kinds of game developers**, grouped into four houses of four. It is meant to be borrowed: to argue about a roadmap, to check a team for gaps, to explain why two sensible people want opposite things from the same tool.

## Ground rules

1. **A kind is a hat, not a person.** A solo developer wears three or four. Most studios contain all four houses.
2. **Each kind is defined by one question** they ask first of any tool. If the answer is no, they leave, however good the rest is.
3. **Kinds are not skill levels.** A Purist and an Apprentice may have the same experience; they want different things.
4. **A kind says nothing about demographics or taste in games.** It describes how someone relates to the tool.
5. **Kinds can be in tension.** That is a finding, not a flaw (see the table of tensions below).

## The four houses

| House | They are the people who | Success looks like |
|---|---|---|
| **Makers** | ship games, alone or in small teams | A finished game |
| **Crafters** | make the content: art, worlds, systems, story | Content that is right and survives the pipeline |
| **Builders** | make the pipelines, platforms and ecosystems | Output that is repeatable, extensible and shippable everywhere |
| **Stewards** | choose, teach, sustain and extend | A tool and a community that last |

## The sixteen kinds

| House | Kind | Nick | The question they ask first | What makes them leave |
|---|---|---|---|---|
| Makers | **Apprentice** | APR | "Can I finish something?" | A first session that ends without a running game |
| Makers | **Sprinter** | SPR | "Can I ship it by Sunday?" | Setup before the first pixel |
| Makers | **Purist** | PUR | "Can I drive all of it from my terminal and my own editor?" | A forced editor or forced project structure |
| Makers | **Generalist** | GEN | "Can my small team change things without stepping on each other?" | Per-seat licensing and online activation |
| Crafters | **Alchemist** | ALC | "Can I see my change right now?" | Opaque imports that fail silently |
| Crafters | **Worldbuilder** | WLD | "Will it ever lose my scene?" | Fixing editor bugs by editing config files |
| Crafters | **Economist** | ECO | "Can I change the numbers without asking a programmer?" | "Ask a programmer" for a balance change |
| Crafters | **Storyteller** | STO | "Can I write branching content and test it without code?" | Narrative locked inside code or a tool no one else can read |
| Builders | **Mechanic** | MEC | "Can I build it twice, headless, and get the same result?" | Builds that need an editor, or are nondeterministic |
| Builders | **Polyglot** | POL | "Can I ship another language without a programmer?" | Every string change needing a developer |
| Builders | **Toolsmith** | TOL | "Is the editor itself an API?" | "Just fork the editor" as the answer |
| Builders | **Merchant** | MER | "Will my package still work next version?" | Breaking changes every release |
| Stewards | **Director** | DIR | "Are my new hires productive in week one, and who has shipped with this?" | Wasting the team's existing muscle memory |
| Stewards | **Conductor** | CON | "Can ten teams deliver independently, and can I measure it?" | Anything unmeasurable |
| Stewards | **Teacher** | TEA | "Can thirty students install it and finish a game by Friday?" | An install that needs an account or a credit card |
| Stewards | **Curator** | CUR | "Can players extend the game without breaking it?" | No supported way to ship a mod |

Every kind below lists what matters most to them: **critical** capabilities, the ones whose absence makes them leave, and **important** ones, which they weigh but can work around.

## Makers

### Apprentice

*Learns by finishing.* Often young, working from tutorials, possibly not reading English well, with strong ambition. Wants to make something that "looks professional" and show it to friends. Tells everyone their engine is the best, with no technical basis for saying so, which is exactly why they are worth serving: they are the first mention of a tool.

| | |
|---|---|
| **Needs** | A one-click path from a new project to an exported game; templates; visual logic for the parts they cannot code; documentation in their own language |
| **Does not need** | Console support, profilers, networking |
| **Critical** | Editor, Visual logic, 2D, Docs |
| **Important** | Assets |
| **Sign you serve them** | The share of new projects that export successfully in the first session |

### Sprinter

*Builds to a deadline.* A game-jam participant with 48 hours, or an experimenter testing a one-day idea. Setup time is their enemy. They grab existing assets, they need the web or a one-click build to share the result, and they never read the manual past the first page.

| | |
|---|---|
| **Needs** | Install to running scene in minutes; a web or single-file export; ready-made assets and templates; examples they can edit |
| **Does not need** | Long-term version stability, localization, CI |
| **Critical** | Editor, Assets, Docs, Platforms |
| **Important** | Packaging, Code, Visual logic, 2D, 3D, Licensing |
| **Sign you serve them** | The share of jam entries built with the tool that were finished and uploaded |

### Purist

*Treats the engine as a library.* Comes from MonoGame, LÖVE or a similar code-first background. Lives in a terminal and an IDE, dislikes click-and-play tools, writes publicly about engines and is the most likely to review yours, for better or worse.

| | |
|---|---|
| **Needs** | The complete workflow headless; a real project in their own IDE; text formats that diff cleanly; test harnesses with CI exit codes; a first-class path for 2D |
| **Does not need** | A walled-garden asset manager |
| **Critical** | Automation, Code, 2D, Testing, Licensing |
| **Important** | Packaging, Extensibility, Docs, Platforms |
| **Sign you serve them** | The share of their projects where the editor is never opened |

### Generalist

*A bit artist, a bit coder, in a team of three to eight.* Has a defined role but crosses into others. Spends the project in long iterate-and-tweak cycles and cares about translations and balance. Moves a team of friends from "a hobby" to "a studio".

| | |
|---|---|
| **Needs** | Fast recompile and play-mode turnaround; data tables for tuning; modular projects so code and art split cleanly; re-import without restart |
| **Does not need** | Enterprise tiers |
| **Critical** | Data and L10n, Platforms |
| **Important** | Editor, Automation, Packaging, Code, Assets, 2D, 3D, Testing, Extensibility, Licensing, Docs |
| **Sign you serve them** | The number of projects with more than one contributor |

## Crafters

### Alchemist

*Works at the border of art and code.* A technical artist: shaders, effects, import pipelines. Their scripts break builds when wrong, so they want stable import paths and live reload of everything. The likeliest to build an internal editor tool.

| | |
|---|---|
| **Needs** | Standard interchange formats; live preview; an editor extension API open to users; a profiling view for draw calls |
| **Does not need** | Hand-holding |
| **Critical** | Editor, Assets, 3D, Extensibility |
| **Important** | Code, Docs |
| **Sign you serve them** | Plugins and editor extensions written by people outside the core team |

### Worldbuilder

*Assembles scenes from large libraries.* An environment or level artist who never opens a terminal and judges a tool entirely by the editor and the undo button. One lost scene costs the studio's trust for good.

| | |
|---|---|
| **Needs** | A stable editor with undo that never corrupts a scene; search and tags over huge asset libraries; instancing; fast preview |
| **Does not need** | Command-line access |
| **Critical** | Editor, Assets, 3D |
| **Important** | Docs |
| **Sign you serve them** | Crash-free session rate among people who never open a code file |

### Economist

*Designs systems, economies and balance.* Can script a little and refuses to be a programmer. In a project that mixes code with designer-driven data, the Economist is the designer-driven half, and the hybrid breaks when their work becomes a silo that programmers cannot read.

| | |
|---|---|
| **Needs** | Typed data tables with spreadsheet round-trip; visual logic that compiles to readable code; a live tweaking loop in play mode; examples written for non-programmers |
| **Does not need** | A scripting language of their own |
| **Critical** | Visual logic, Data and L10n, Docs |
| **Important** | Editor, 3D, Platforms |
| **Sign you serve them** | The share of shipped gameplay behavior authored as data or graphs rather than hand-written code |

### Storyteller

*Writes branching content.* A narrative designer: dialogue trees, quests, barks, lore. Works in tools built for writing, and needs them to meet the game halfway. Cares about who can read the story files afterwards.

| | |
|---|---|
| **Needs** | A dialogue and branching format that writers can edit and programmers can test; import from existing narrative tools; string tables with context; playtesting of branches without a full build |
| **Does not need** | Rendering features |
| **Critical** | Editor, Visual logic, Data and L10n |
| **Important** | Extensibility, Docs |
| **Sign you serve them** | The share of dialogue changes made without a programmer |

## Builders

### Mechanic

*Owns the build and its health.* Judges a tool by whether it builds headless, in a container, deterministically, and whether two builds can be diffed. Lives in YAML and Linux. Blocks or blesses a studio's adoption, and the Director listens to them.

| | |
|---|---|
| **Needs** | Headless everything; machine-readable test reports; checksummed, reproducible packaging; fast cold builds; stable asset IDs |
| **Does not need** | A graphical interface |
| **Critical** | Automation, Packaging, Code, Testing, Platforms |
| **Important** | Assets, 3D, Extensibility, Licensing, Docs |
| **Sign you serve them** | The number of distinct organizations running the tool's CLI in CI |

### Polyglot

*Ships the game in a dozen languages.* A localization and content operations lead. Not a programmer; works in spreadsheets, with contractors and with certification checklists. Cheap to serve and hugely visible to players.

| | |
|---|---|
| **Needs** | String tables with context comments; pseudo-localization preview; non-destructive round-trip with translators' XLIFF and CSV tools; per-language content bundles |
| **Does not need** | Source-code access |
| **Critical** | Packaging, Data and L10n, Platforms |
| **Important** | Assets, Docs |
| **Sign you serve them** | Games shipped in more than one language where translation never required a programmer |

### Toolsmith

*Builds tools, not games.* A pixel editor, a modelling tool, a dialogue editor, shipped as standalone applications. Historically repurposes a game engine as an application platform. The kind that turns an engine into an ecosystem.

| | |
|---|---|
| **Needs** | A documented, versioned plugin and host architecture; reusable docking, panels and editor controls; examples instead of source-reading; packaging for their own tool |
| **Does not need** | Game-specific features |
| **Critical** | Editor, Code, Extensibility, Docs |
| **Important** | Automation, Packaging, Assets, Testing, Licensing |
| **Sign you serve them** | The number of non-game applications shipped on the platform |

### Merchant

*Sells or shares the ecosystem.* Models, packs, templates, plugins, starter kits. Their product is the package, and where Merchants thrive, ecosystems form. Their presence predicts whether a store can exist at all.

| | |
|---|---|
| **Needs** | Clean manifests, versions and dependency ranges; the same ease for plugins as for assets; formats that survive engine versions; clear terms on what buyers may do |
| **Does not need** | A walled garden |
| **Critical** | Packaging, Assets, Extensibility |
| **Important** | Editor, 2D, 3D, Licensing, Docs, Platforms |
| **Sign you serve them** | The number of third-party packages published and how often they are downloaded |

## Stewards

### Director

*Chooses tools for a team.* The technical director of a mid-sized studio: one decision-maker whose staff will use what they choose. Hires from the usual pools. Will not bet forty jobs on a tool that makes their team's experience worthless.

| | |
|---|---|
| **Needs** | A workflow that existing hires recognize; CI discipline; modular projects that teams own independently; standard interchange in and out; build times as a published number |
| **Does not need** | Marketing |
| **Critical** | Automation, Packaging, Code, Assets, 3D, Testing, Platforms |
| **Important** | Editor, Visual logic, Data and L10n, Extensibility, Licensing, Docs |
| **Sign you serve them** | A commercial game credited as made with the tool. One reference title outweighs all documentation |

### Conductor

*Coordinates many teams.* The platform lead of a large studio. Thinks in independent module delivery, versioning, build times and patch sizes. Never opens the editor; reads benchmarks and reference customers.

| | |
|---|---|
| **Needs** | Per-team build and delivery; deterministic output; content patching without re-shipping the binary; published benchmarks |
| **Does not need** | Full content-creation tools |
| **Critical** | Automation, Packaging, Code, Assets, 3D, Testing, Platforms |
| **Important** | Extensibility |
| **Sign you serve them** | Inbound inquiries that cite packaging and patching. If it happens, it is pull, not push |

### Teacher

*Puts a tool in front of thirty beginners.* A school or university instructor, or a bootcamp lead. Needs it to work on locked-down, modest machines, in a classroom, in a term. Their students are the Apprentices of the next decade.

| | |
|---|---|
| **Needs** | A free, offline-friendly install; curriculum-ready examples; stable behavior across a term; clear classroom licensing; works on low-spec and shared machines |
| **Does not need** | Cutting-edge rendering |
| **Critical** | Editor, Licensing, Docs |
| **Important** | Code, Visual logic, 2D, Platforms |
| **Sign you serve them** | The number of courses built around the tool |

### Curator

*Keeps a community making things.* The maintainer of a game's mod community, or a game designed to be extended. Cares about what players can add, what they can break, and who owns what they make.

| | |
|---|---|
| **Needs** | A supported way to load data and code mods; a stable mod API; mod packaging and dependency resolution; clear rights over what players make |
| **Does not need** | Editor features for the original developers |
| **Critical** | Packaging, Code, Data and L10n, Extensibility, Licensing, Docs |
| **Important** | Automation, Assets, Testing, Platforms |
| **Sign you serve them** | The number of mods shipped by people outside the original team |

## Overview: what each kind needs

Need levels: **●** critical, **◐** important, **○** nice to have, a blank means not relevant. Rows describe what a tool provides, in any engine.

| | APR | SPR | PUR | GEN | ALC | WLD | ECO | STO | MEC | POL | TOL | MER | DIR | CON | TEA | CUR |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Editor** | ● | ● | ○ | ◐ | ● | ● | ◐ | ● | | ○ | ● | ◐ | ◐ | | ● | ○ |
| **Automation** | | ○ | ● | ◐ | ○ | | | | ● | ○ | ◐ | ○ | ● | ● | ○ | ◐ |
| **Packaging** | | ◐ | ◐ | ◐ | ○ | ○ | ○ | ○ | ● | ● | ◐ | ● | ● | ● | ○ | ● |
| **Code** | ○ | ◐ | ● | ◐ | ◐ | | ○ | | ● | | ● | ○ | ● | ● | ◐ | ● |
| **Visual logic** | ● | ◐ | | ○ | | | ● | ● | | | ○ | ○ | ◐ | ○ | ◐ | |
| **Data and L10n** | ○ | | ○ | ● | | | ● | ● | ○ | ● | | ○ | ◐ | ○ | ○ | ● |
| **Assets** | ◐ | ● | ○ | ◐ | ● | ● | ○ | ○ | ◐ | ◐ | ◐ | ● | ● | ● | ○ | ◐ |
| **2D** | ● | ◐ | ● | ◐ | ○ | ○ | ○ | ○ | | ○ | ○ | ◐ | ○ | | ◐ | ○ |
| **3D** | | ◐ | ○ | ◐ | ● | ● | ◐ | ○ | ◐ | ○ | ○ | ◐ | ● | ● | ○ | ○ |
| **Testing** | | | ● | ◐ | ○ | | ○ | ○ | ● | | ◐ | ○ | ● | ● | ○ | ◐ |
| **Extensibility** | ○ | ○ | ◐ | ◐ | ● | ○ | ○ | ◐ | ◐ | ○ | ● | ● | ◐ | ◐ | ○ | ● |
| **Licensing** | ○ | ◐ | ● | ◐ | ○ | | | | ◐ | | ◐ | ◐ | ◐ | ○ | ● | ● |
| **Docs** | ● | ● | ◐ | ◐ | ◐ | ◐ | ● | ◐ | ◐ | ◐ | ● | ◐ | ◐ | ○ | ● | ● |
| **Platforms** | ○ | ● | ◐ | ● | ○ | ○ | ◐ | ○ | ● | ● | ○ | ◐ | ● | ● | ◐ | ◐ |

Reading the matrix:

- **The editor is the most common critical need: seven kinds.** Documentation, code workflow and packaging follow with six each.
- **Documentation is critical to the people who start and to the people who extend:** Apprentice, Sprinter, Economist, Toolsmith, Teacher and Curator.
- **Packaging is critical to six kinds in three different houses:** Polyglot, Mechanic, Merchant, Director, Conductor and Curator. Few of them ship the first game, and all of them depend on how it is delivered.
- **Four kinds mark automation as critical and none of them marks the editor critical:** Purist, Mechanic, Director and Conductor. A tool that cannot be driven headless loses all four.
- **Visual logic is critical to only three kinds** (Apprentice, Economist, Storyteller). If those are your audience, it is a pillar, not an extra.

## Who brings whom

A kind can use a tool, choose it, block or bless it, pay for it, or multiply it, that is, bring others or extend it. The roles differ, and a tool that serves only users has no growth.

| Role | What it means | Kinds |
|---|---|---|
| **User** | Works in the tool every day | Worldbuilder, Economist, Storyteller, Polyglot |
| **Chooser** | Picks the tool for their own work | Purist, Generalist, Sprinter |
| **Gatekeeper** | Blocks or blesses adoption by a team | Mechanic |
| **Buyer** | Decides for others, rarely opens the tool | Director, Conductor |
| **Multiplier** | Brings others in, or extends the tool | Apprentice, Alchemist, Toolsmith, Merchant, Teacher, Curator |

Two observations. The Buyers decide on reference titles and benchmarks, not on features, so features alone never convert them. The Multipliers are mostly the people who need the most help to start, so ignoring the early kinds starves the later ones.

## Where they pull against each other

| Tension | The pull | What usually resolves it |
|---|---|---|
| Apprentice vs Purist | One-click flow against everything in text files | Same project format underneath, two ways in |
| Worldbuilder vs Mechanic | The editor is the product against the editor must never be required | The editor writes the same files the CLI reads |
| Economist vs Purist | Data and graphs against code | Graphs that compile to readable code; data that is typed |
| Merchant vs Curator | Breaking changes for progress against stable APIs for others | A written compatibility contract per release |
| Director vs Sprinter | Process and CI against zero setup | Defaults that work with no configuration, and switches that add discipline |
| Conductor vs everyone | Per-team independence against a simple project | Modules that are optional, not mandatory |

## Hats in real teams

Nobody is one kind. Typical combinations:

| Situation | Kinds in the room |
|---|---|
| Solo developer | Purist, Alchemist, Economist, Polyglot (outsourced) |
| Game jam team of four | Sprinter, Apprentice, Alchemist, Storyteller |
| Classroom | Teacher, many Apprentices |
| Indie studio of six | Generalist, Worldbuilder, Economist, Storyteller, Mechanic |
| Mid-sized studio | Director, Mechanic, Alchemist, Worldbuilder, Economist, Polyglot |
| Large studio | Conductor, Director, many of the rest |
| Tool or middleware company | Toolsmith, Merchant, Mechanic |
| Game with a modding scene | Curator, Merchant, Purist |

## Using it

A five-minute exercise with a team or a roadmap:

1. **Place your team.** Mark each person's main and second kind. Gaps in a house are risks: a team with no Builder will discover it at the first release.
2. **Place your backlog.** For each open item, write the kind it serves. An item that serves none is either housekeeping or a mistake.
3. **Count.** The distribution of open work per kind is the cheapest balance check there is. If one house gets all of it, that is a decision, and should be made on purpose.
4. **Pick a signal per kind.** Each entry above names one observable that tells you whether you are winning them. If you cannot measure it, you cannot claim to serve them.
5. **Re-check when reality disagrees.** The kinds are vocabulary for discussion, not data.
