---
title: "16 Kinds of Gamedevs"
date: 2026-10-14
tags:
  - gamedev
  - tools
  - game-engines
draft: true
Params:
  summary: "Game design has a shared vocabulary for what players feel. Tool makers have none for who builds the game. Here are sixteen kinds of game developers in 4 houses, the one question each asks of a tool, what makes them leave, and a matrix of what they need."
  socialmedia: |
    Game design has a vocabulary for what players feel. We have none for who makes the game. Sixteen kinds of game developers in 4 houses, each defined by the one question they ask of a tool.
  
    #gamedev #gamedesign #dotnet
---

Game designers always tries to categorize the types of players. Now try the same trick for the other side of the screen. What do you call the person who builds the game? "Indie"? "Programmer"? "Management"? Poor description and no good vocabulary there; just vibes and stereotypes. Yet every game, engine and mod is designed for *someone*, and most of the time that someone is a mental picture the tool's author has of themselves.

This is an attempt at the missing half. It describes **sixteen kinds of game developers**, grouped into *four houses of four*. 

This is the **VERSION 1**, 2016-10-15.

## Ground rules

1. **A kind is a hat, not a person.** A solo developer wears three or four of them, sometimes within the same afternoon. Most studios contain all four houses.
2. **Each kind is defined by one question** they ask first of any tool. If the answer is no, they leave even if everything else is good.
3. **Kinds are not skill levels.** Within any kind there are newbies and others with decades of experience.
4. **A kind says nothing about age, country, or taste in games.** It only describes how a person relates to their tools.
5. **Kinds can be in tension** because they want to maximize different needs. That completely normal.

## The 4 houses

Everyone has one they call home, but everyone visits the others eventually.

| House | The people who | Success looks like |
|---|---|---|
| **Makers** | ship games, alone or in small teams | A finished game |
| **Crafters** | make the content: art, worlds, systems, story | Content that is right and survives the pipeline |
| **Builders** | make the pipelines, platforms and ecosystems | Output that is repeatable, extensible and shippable everywhere |
| **Stewards** | choose, teach, sustain and extend | A tool and a community that last |

## The sixteen kinds

The quick version. Every kind gets a fuller portrait below.

| House | Kind | The question they ask first | What makes them leave |
|---|---|---|---|---|
| Makers | **Apprentice** | "Can I finish something?" | A first session that ends without a running game |
| Makers | **Sprinter** | "Can I ship it by Sunday?" | Setup before the first pixel |
| Makers | **Purist** | "Can I drive all of it from my terminal and my own editor?" | A forced editor or forced project structure |
| Makers | **Generalist** | "Can my small team change things without stepping on each other?" | Per-seat licensing and online activation |
| Crafters | **Alchemist** | "Can I see my change right now?" | Opaque imports that fail silently |
| Crafters | **Worldbuilder** | "Will it ever lose my scene?" | Fixing editor bugs by editing config files |
| Crafters | **Economist** | "Can I change the numbers without asking a programmer?" | "Ask a programmer" for a balance change |
| Crafters | **Storyteller** | "Can I write branching content and test it without code?" | Narrative locked inside code or a tool no one else can read |
| Builders | **Mechanic** | "Can I build it twice, headless, and get the same result?" | Builds that need an editor, or are nondeterministic |
| Builders | **Polyglot** | "Can I ship another language without a programmer?" | Every string change needing a developer |
| Builders | **Toolsmith** | "Is the editor itself an API?" | "Just fork the editor" as the answer |
| Builders | **Merchant** | "Will my package still work next version?" | Breaking changes every release |
| Stewards | **Director** | "Are my new hires productive in week one, and who has shipped with this?" | Wasting the team's existing muscle memory |
| Stewards | **Conductor** | "Can ten teams deliver independently, and can I measure it?" | Anything unmeasurable |
| Stewards | **Teacher** | "Can thirty students install it and finish a game by Friday?" | An install that needs an account or a credit card |
| Stewards | **Curator** | "Can players extend the game without breaking it?" | No supported way to ship a mod |

## Makers

The people the whole industry is secretly about: they ship games. Alone or in tiny teams, they live or die by whether a tool gets them from idea to finished thing.

### Apprentice

![Apprentice](01-Apprentice.jpg)

*Learns by finishing.* Watch an Apprentice work and you will see the whole philosophy: the tutorial is open in one window, the engine in another, and the goal is not to master rendering — it is to have something, *anything*, exported and running before bedtime, something they can push at a friend and say "I made this." Often young, working from tutorials, quite possibly not reading English well, and carrying more ambition than infrastructure. They want the result to look professional, and they will tell everyone that their engine is the best, on no evidence whatsoever.

That last part is not a bug. The Apprentice is the first mention of a tool most people will ever hear — evangelism with no budget, earned in a single evening.

| | |
|---|---|
| **Needs** | A one-click path from a new project to an exported game; templates; visual logic for the parts they cannot code; documentation in their own language |
| **Does not need** | Console support, profilers, networking |
| **Critical** | Editor, Visual logic, 2D, Docs |
| **Important** | Assets |
| **Sign you serve them** | The share of new projects that export successfully in the first session |

### Sprinter

![Sprinter](02-Sprinter.jpg)

*Builds to a deadline.* The Sprinter's relationship with your tool lasts exactly forty-eight hours, and that is all the time it will ever get to make an impression. A game-jam participant or a one-day experimenter, they treat setup time as the enemy it is. They grab whatever assets they can find, they need the web or a one-click build to show the result to anyone, and they have never read a manual past the first page — not because they can't, but because the clock is running.

| | |
|---|---|
| **Needs** | Install to running scene in minutes; a web or single-file export; ready-made assets and templates; examples they can edit |
| **Does not need** | Long-term version stability, localization, CI |
| **Critical** | Editor, Assets, Docs, Platforms |
| **Important** | Packaging, Code, Visual logic, 2D, 3D, Licensing |
| **Sign you serve them** | The share of jam entries built with the tool that were finished and uploaded |

### Purist

![Purist](03-Purist.jpg)

*Treats the engine as a library.* The Purist comes from MonoGame, LÖVE, or whatever code-first world raised them. They live in a terminal and an IDE, are allergic to click-and-play tools, and write publicly about engines — which means they are the most likely person to review yours, for better or for worse. Ask them how to run the thing headless and if the honest answer is a shrug, they are gone before you finish the sentence. And they will mention it. They mention everything.

| | |
|---|---|
| **Needs** | The complete workflow headless; a real project in their own IDE; text formats that diff cleanly; test harnesses with CI exit codes; a first-class path for 2D |
| **Does not need** | A walled-garden asset manager |
| **Critical** | Automation, Code, 2D, Testing, Licensing |
| **Important** | Packaging, Extensibility, Docs, Platforms |
| **Sign you serve them** | The share of their projects where the editor is never opened |

### Generalist

![Generalist](04-Generalist.jpg)

*A bit artist, a bit coder, in a team of three to eight.* The Generalist has a defined role and cheerfully ignores its borders several times a day. They spend the project in long iterate-and-tweak cycles where every second of recompile time is paid for out of their flow, and they care about translations and balance because their players care. This is the person who moves a group of friends from "a hobby" to "a studio" — usually without anyone announcing it.

| | |
|---|---|
| **Needs** | Fast recompile and play-mode turnaround; data tables for tuning; modular projects so code and art split cleanly; re-import without restart |
| **Does not need** | Enterprise tiers |
| **Critical** | Data and L10n, Platforms |
| **Important** | Editor, Automation, Packaging, Code, Assets, 2D, 3D, Testing, Extensibility, Licensing, Docs |
| **Sign you serve them** | The number of projects with more than one contributor |

## Crafters

The content people. If the Makers ask "can I finish?", the Crafters ask "can I make the thing that goes *inside*?" — and the answer determines whether the game has anything in it worth playing.

### Alchemist

![Alchemist](05-Alchemist.jpg)

*Works at the border of art and code.* The technical artist: shaders, effects, import pipelines. The Alchemist speaks both languages with an accent, and when their scripts are wrong they break the build for everyone — which is why they want stable import paths and live reload of everything. They are also the likeliest person on any team to quietly build an internal editor tool that the whole studio ends up depending on.

| | |
|---|---|
| **Needs** | Standard interchange formats; live preview; an editor extension API open to users; a profiling view for draw calls |
| **Does not need** | Hand-holding |
| **Critical** | Editor, Assets, 3D, Extensibility |
| **Important** | Code, Docs |
| **Sign you serve them** | Plugins and editor extensions written by people outside the core team |

### Worldbuilder

![Worldbuilder](06-Worldbuilder.jpg)

*Assembles scenes from large libraries.* The environment or level artist never opens a terminal, and judges your tool by exactly two things: the undo button, and whether the scene is still there when they come back. Both are non-negotiable. The Worldbuilder's trust is a one-time offer — a single lost scene costs the studio's confidence in the tool for good, no matter what fixed it afterwards.

| | |
|---|---|
| **Needs** | A stable editor with undo that never corrupts a scene; search and tags over huge asset libraries; instancing; fast preview |
| **Does not need** | Command-line access |
| **Critical** | Editor, Assets, 3D |
| **Important** | Docs |
| **Sign you serve them** | Crash-free session rate among people who never open a code file |

### Economist

![Economist](07-Economist.jpg)

*Designs systems, economies and balance.* The Economist can script a little and is proudly, loudly not a programmer. In any project that mixes code with designer-driven data, the Economist is the designer-driven half — and the hybrid breaks the day their work becomes a silo the programmers cannot read. "Can I change the numbers without asking a programmer?" is not laziness. It is a question about iteration speed and about who actually owns the game.

| | |
|---|---|
| **Needs** | Typed data tables with spreadsheet round-trip; visual logic that compiles to readable code; a live tweaking loop in play mode; examples written for non-programmers |
| **Does not need** | A scripting language of their own |
| **Critical** | Visual logic, Data and L10n, Docs |
| **Important** | Editor, 3D, Platforms |
| **Sign you serve them** | The share of shipped gameplay behavior authored as data or graphs rather than hand-written code |

### Storyteller

![Storyteller](08-Storyteller.jpg)

*Writes branching content.* Dialogue trees, quests, barks, lore — the Storyteller writes the parts players actually remember. They work in tools built for writing, and they need those tools to meet the game halfway. And they care about something quietly farsighted: who can read the story files five years from now, when everyone who knew the pipeline has moved on.

| | |
|---|---|
| **Needs** | A dialogue and branching format that writers can edit and programmers can test; import from existing narrative tools; string tables with context; playtesting of branches without a full build |
| **Does not need** | Rendering features |
| **Critical** | Editor, Visual logic, Data and L10n |
| **Important** | Extensibility, Docs |
| **Sign you serve them** | The share of dialogue changes made without a programmer |

## Builders

Nobody in this house ships the first game. They make sure it ships the second time, in a dozen languages, on every platform, without anyone's weekend. Where Builders thrive, teams stop reinventing pipelines; where they don't, every release is a lottery.

### Mechanic

![Mechanic](09-Mechanic.jpg)

*Owns the build and its health.* The Mechanic asks one unforgiving question: can it build twice, headless, in a container, and produce the same bits? They live in YAML and Linux, they have never opened your editor and are a little bit proud of that, and their blessing or veto determines whether a studio adopts your tool at all. The Director — whoever that is this year — listens to them.

| | |
|---|---|
| **Needs** | Headless everything; machine-readable test reports; checksummed, reproducible packaging; fast cold builds; stable asset IDs |
| **Does not need** | A graphical interface |
| **Critical** | Automation, Packaging, Code, Testing, Platforms |
| **Important** | Assets, 3D, Extensibility, Licensing, Docs |
| **Sign you serve them** | The number of distinct organizations running the tool's CLI in CI |

### Polyglot

![Polyglot](10-Polyglot.jpg)

*Ships the game in a dozen languages.* The localization and content-operations lead is not a programmer; they work in spreadsheets, with contractors, and with certification checklists the size of small novels. Cheap to serve, chronically underserved, and hugely visible to players — a missing accent in a subtitle gets screenshotted more reliably than any feature you ship.

| | |
|---|---|
| **Needs** | String tables with context comments; pseudo-localization preview; non-destructive round-trip with translators' XLIFF and CSV tools; per-language content bundles |
| **Does not need** | Source-code access |
| **Critical** | Packaging, Data and L10n, Platforms |
| **Important** | Assets, Docs |
| **Sign you serve them** | Games shipped in more than one language where translation never required a programmer |

### Toolsmith

![Toolsmith](01-Toolsmith.jpg)

*Builds tools, not games.* A pixel editor, a modelling tool, a dialogue editor, shipped as standalone applications. The Toolsmith looks at a game engine and sees an application platform — a thing to be repurposed, not obeyed. They are demanding, allergic to reading your source code as a substitute for documentation, and absolutely worth it: they are the kind that turns an engine into an ecosystem.

| | |
|---|---|
| **Needs** | A documented, versioned plugin and host architecture; reusable docking, panels and editor controls; examples instead of source-reading; packaging for their own tool |
| **Does not need** | Game-specific features |
| **Critical** | Editor, Code, Extensibility, Docs |
| **Important** | Automation, Packaging, Assets, Testing, Licensing |
| **Sign you serve them** | The number of non-game applications shipped on the platform |

### Merchant

![Merchant](12-Merchant.jpg)

*Sells or shares the ecosystem.* Models, packs, templates, plugins, starter kits: the Merchant's product is the package. Where Merchants thrive, ecosystems form around a tool; where they can't make a living, no store can exist at all. Every breaking change you ship is, from their side of the table, a rent increase.

| | |
|---|---|
| **Needs** | Clean manifests, versions and dependency ranges; the same ease for plugins as for assets; formats that survive engine versions; clear terms on what buyers may do |
| **Does not need** | A walled garden |
| **Critical** | Packaging, Assets, Extensibility |
| **Important** | Editor, 2D, 3D, Licensing, Docs, Platforms |
| **Sign you serve them** | The number of third-party packages published and how often they are downloaded |

## Stewards

The Stewards rarely make content themselves. They decide what everyone else will use, teach it, and keep it alive — and their judgment extends years past the current release.

### Director

![Director](13-Director.jpg)

*Chooses tools for a team.* The technical director of a mid-sized studio: one decision-maker, whose staff will live inside whatever they choose. They hire from the usual pools and will not bet forty jobs on a tool that makes their team's hard-won experience worthless. Marketing does not move them; a commercial game credited to your tool does. One reference title outweighs your entire documentation site.

| | |
|---|---|
| **Needs** | A workflow that existing hires recognize; CI discipline; modular projects that teams own independently; standard interchange in and out; build times as a published number |
| **Does not need** | Marketing |
| **Critical** | Automation, Packaging, Code, Assets, 3D, Testing, Platforms |
| **Important** | Editor, Visual logic, Data and L10n, Extensibility, Licensing, Docs |
| **Sign you serve them** | A commercial game credited as made with the tool. One reference title outweighs all documentation |

### Conductor

![Conductor](14-Conductor.jpg)

*Coordinates many teams.* The platform lead of a large studio thinks in independent module delivery, versioning, build times and patch sizes. The Conductor never opens the editor — the editor is somebody else's problem — and reads benchmarks and reference customers the way other people read reviews. If they contact you, they found you themselves, and that is worth more than any sales call.

| | |
|---|---|
| **Needs** | Per-team build and delivery; deterministic output; content patching without re-shipping the binary; published benchmarks |
| **Does not need** | Full content-creation tools |
| **Critical** | Automation, Packaging, Code, Assets, 3D, Testing, Platforms |
| **Important** | Extensibility |
| **Sign you serve them** | Inbound inquiries that cite packaging and patching. If it happens, it is pull, not push |

### Teacher

![Teacher](15-Teacher.jpg)

*Puts a tool in front of thirty beginners.* A school or university instructor, or a bootcamp lead, the Teacher needs your tool to work on locked-down, modest machines, in a room where the network is always down, across a term of stable behavior. Their students are the Apprentices of the next decade — and the Directors of the decade after that. An install that demands an account or a credit card has just failed a room full of people at once.

| | |
|---|---|
| **Needs** | A free, offline-friendly install; curriculum-ready examples; stable behavior across a term; clear classroom licensing; works on low-spec and shared machines |
| **Does not need** | Cutting-edge rendering |
| **Critical** | Editor, Licensing, Docs |
| **Important** | Code, Visual logic, 2D, Platforms |
| **Sign you serve them** | The number of courses built around the tool |

### Curator

![Curator](16-Curator.jpg)

*Keeps a community making things.* The maintainer of a game's mod scene — or of a game designed to be extended — the Curator cares about what players can add, what they can break, and who owns what they make. A mod community is a garden, not a landfill: it needs a supported way in, a stable API to grow against, and clear rules about what belongs to whom.

| | |
|---|---|
| **Needs** | A supported way to load data and code mods; a stable mod API; mod packaging and dependency resolution; clear rights over what players make |
| **Does not need** | Editor features for the original developers |
| **Critical** | Packaging, Code, Data and L10n, Extensibility, Licensing, Docs |
| **Important** | Automation, Assets, Testing, Platforms |
| **Sign you serve them** | The number of mods shipped by people outside the original team |

## Overview: what each kind needs

Need levels: **●** critical, **◐** important, **○** nice to have, a blank means not relevant. Rows describe what a tool provides, in any engine.

{.big-table}
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

- **The editor is the most common critical need: seven kinds.** Documentation, code workflow, packaging and platforms follow with six each.
- **Documentation is critical to the people who start and to the people who extend:** Apprentice, Sprinter, Economist, Toolsmith, Teacher and Curator. Nobody in the middle of that range — the people already comfortable — needs it as badly.
- **Packaging is critical to six kinds across three different houses:** Polyglot, Mechanic, Merchant, Director, Conductor and Curator. Few of them ship the first game, and all of them depend on how it is delivered.
- **Four kinds mark automation as critical, and none of them marks the editor critical:** Purist, Mechanic, Director and Conductor. A tool that cannot be driven headless loses all four in one stroke.
- **Visual logic is critical to only three kinds** (Apprentice, Economist, Storyteller). If those are your audience, it is a pillar, not an extra; if they are not, it is expensive furniture.
- **The hungriest kinds are the ones who touch the tool least.** Director and Conductor each list seven critical needs — more than anyone who opens the editor daily. The people deciding for forty others want to know the whole machine works, not the part they'd personally use.

## Who brings whom

A kind can use a tool, choose it, block or bless it, pay for it, or multiply it — bring others in or extend it. The roles differ, and a tool that serves only its daily users has no growth story.

| Role | What it means | Kinds |
|---|---|---|
| **User** | Works in the tool every day | Worldbuilder, Economist, Storyteller, Polyglot |
| **Chooser** | Picks the tool for their own work | Purist, Generalist, Sprinter |
| **Gatekeeper** | Blocks or blesses adoption by a team | Mechanic |
| **Buyer** | Decides for others, rarely opens the tool | Director, Conductor |
| **Multiplier** | Brings others in, or extends the tool | Apprentice, Alchemist, Toolsmith, Merchant, Teacher, Curator |

Two observations worth losing sleep over. The Buyers decide on reference titles and benchmarks, never on features — so a roadmap of features alone will not convert them, ever. And the Multipliers are mostly the people who need the most help getting started: ignore the Apprentice and the Teacher today, and you starve your own future.

## Where they pull against each other

Hat combinations are where a team gets interesting. Hat conflicts are where it gets expensive. These are the four-way tug-of-wars worth naming in a meeting:

| Tension | The pull | What usually resolves it |
|---|---|---|
| Apprentice vs Purist | One-click flow against everything in text files | Same project format underneath, two ways in |
| Worldbuilder vs Mechanic | The editor is the product against the editor must never be required | The editor writes the same files the CLI reads |
| Economist vs Purist | Data and graphs against code | Graphs that compile to readable code; data that is typed |
| Merchant vs Curator | Breaking changes for progress against stable APIs for others | A written compatibility contract per release |
| Director vs Sprinter | Process and CI against zero setup | Defaults that work with no configuration, and switches that add discipline |
| Conductor vs everyone | Per-team independence against a simple project | Modules that are optional, not mandatory |

## Hats in real teams

Nobody is one kind. Real teams are mixtures, and the mixture tells you what the team can and cannot do:

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

A five-minute exercise for a team or a roadmap. It works best out loud, with the matrix printed on one page:

1. **Place your team.** Mark each person's main and second kind. Gaps in a house are risks wearing disguise: a team with no Builder finds out precisely at the first release.
2. **Place your backlog.** For each open item, write the kind it serves. An item that serves no kind is either housekeeping or a mistake — both are fine, but they should say so out loud.
3. **Count.** The distribution of open work per kind is the cheapest balance check there is. If one house gets all of it, that may well be the right call — but it should be a decision, not an accident.
4. **Pick a signal per kind.** Every portrait above names one observable that tells you whether you are winning that kind. If you cannot measure it, you cannot claim to serve it.
5. **Re-check when reality disagrees.** The kinds are vocabulary for discussion, not data. The moment the two diverge, trust reality and update the vocabulary.

If the taxonomy earns its keep, borrow it, bend it, and argue with it. A vocabulary is only shared once someone disagrees with it in writing.
Done — the livelier draft is in the canvas. What changed and what stayed:

**Kept intact:** all structure and data — the frontmatter (parked as a YAML block at the top), both big tables, the need matrix, tensions, team combos, and every Critical/Important list. The taxonomy itself wasn't touched.

**Where the life went in:**
- **Intro** — opened with the "say it in a design review" beat before pivoting to the missing half.
- **Portraits** — each kind now has a small scene instead of only a tagline: the Apprentice's bedtime-export, the Mechanic's unopened editor, the Worldbuilder's one-time trust offer, the Curator's garden-not-landfill. The wit stays dry and professional — no memes, no exclamation marks.
- **House intros** — a line of framing before each ("Nobody in this house ships the first game…").
- **New observation** in the matrix section: Director and Conductor, the two kinds who touch the tool least, have the longest critical lists (7 each). That's a genuinely interesting finding hiding in your own data.
- **Closing line** — the piece previously ended abruptly at step 5; it now lands on "a vocabulary is only shared once someone disagrees with it in writing."

**Image plan:** every figure spot is marked with a searchable `*[Figure — …]*` note containing art direction — 16 doodle briefs (one per kind: the cauldron Alchemist, the matryoshka Toolsmith, the tug-of-war rope…), the four-houses street, plus two charts:
1. A horizontal bar chart of critical-need counts per capability (data listed in the note, ready to draw), optionally paired with the per-kind chart where DIR/CON top out at 7.
2. The "who brings whom" loop sketch.

The figure notes are invisible-safe — just delete them (or search for `[Figure`) as you drop in the real art. Want me to push the voice further in any section, or tone any of it back down?
