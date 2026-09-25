---
title: "Fanstatic: Welcome to Site Creators"
date: 2026-09-22
summary: "Fanstatic — formerly SuCoS — is now first-class MASS4 tooling, and every MASS4 site is migrating to it, starting with this one."
tags:
  - announcement
  - fanstatic
  - dotnet
socialmedia: |
  Fanstatic (formerly SuCoS) is now first-class MASS4 tooling — the same tier as Guinevere, Gaya, and Turian. This site is the first MASS4 site to migrate, with the rest following.

  #MASS4 #Fanstatic #dotnet #SSG

  https://mass4.org/blog/fanstatic-welcome-to-site-creators/
---

This site you're reading just moved to a new static site generator, and it's worth explaining why: **Fanstatic**
is no longer just a tool MASS4 happens to use. As of this week, it's a first-class citizen of the MASS4
ecosystem — the same tier as Guinevere, Gaya, and Turian — and every MASS4 site is migrating to it, starting
with this one.

## From side project to shared infrastructure

Fanstatic didn't start as a MASS4 project. It started life as **SuCoS**, a personal static site generator built
from scratch in C#, three years and nine major versions in the making: Liquid templates, full i18n with
per-language sections, Hugo-style `ref`/`relref` shortcodes, a `validate-links` command that knows the
difference between a local test run and production, and — most recently — a proper Windows installer and winget
package. Somewhere along the way it became the tool every other project reached for, including this one.
Renaming it to Fanstatic and moving it into [github.com/MASS4ORG](https://github.com/MASS4ORG/fanstatic) just
made that official.

If you followed the [180° turn](/blog/the-180-turn-why-turian-is-coming-home-to-c) back to C#, this is the
infrastructure equivalent: we don't just build engines and GUI toolkits, the site you're reading is built the
same way, in the open, with the same "dogfood what you ship" principle.

## Why site creators should care

Fanstatic is a genuinely small, fast, C# static site generator, and it's fully open source under the MIT
license — not a MASS4-only internal tool. If you're a .NET developer who wants a site generator that doesn't
require learning Go templates or a JavaScript build pipeline:

```sh
fanstatic new-site <YOUR_SITE_PATH>             # To create your site
fanstatic <YOUR_SITE_PATH>                      # To build your site
fanstatic serve <YOUR_SITE_PATH>                # To build and run locally
fanstatic validate-links <YOUR_SITE_PATH>       # To check all links
fanstatic api <YOUR_CODE_PATH> <YOUR_SITE_PATH> # To generate API reference
```

That last command is one we lean on directly: `fanstatic api` generates API reference pages straight from a C#
project's source, which is exactly how [Guinevere's API docs](/guinevere) get built. Markdown content, Liquid
templates, i18n, internal-link shortcodes, and link validation that understands local versus production URLs
all come out of the box.

## What's migrating, and what's next

This site (mass4.org) is the first to move — you're already looking at output built by Fanstatic. The rest of
the MASS4 sites follow as they're ready. If you want the full story on the rename itself, it's on Fanstatic's
own site: [Introducing Fanstatic 7.0.0](https://fanstatic.brunomassa.com/blog/introducing-fanstatic-7.0.0/).

Welcome, Fanstatic. Glad to have you as one of the family.
