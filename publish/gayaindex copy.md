---
Title: Gaya
Description: Clean, fast, and endlessly customizable text editor crafted for developers who demand precision in every detail.
---

# Gaya

**The ultimate text editor for developers**

Gaya represents the pinnacle of text editing excellence. Built from the ground up with a focus on performance, precision, and customization, Gaya delivers an uncompromising editing experience that adapts to your workflow, not the other way around.

## Philosophy

In a world of bloated editors and resource-hungry IDEs, Gaya stands apart with its commitment to:

- **Clarity**: Clean, distraction-free interface that puts your code first
- **Speed**: Native performance with instant startup and responsive interaction
- **Precision**: Every feature crafted with meticulous attention to detail
- **Customization**: Infinitely adaptable to your unique workflow

## Core Features

### ⚡ Lightning Performance
- **Instant startup**: Ready to code in milliseconds
- **Massive file support**: Handle gigabyte-sized files without breaking a sweat
- **Smooth scrolling**: Buttery-smooth navigation through any codebase
- **Memory efficient**: Minimal resource footprint

### 🎨 Infinite Customization
- **Themes**: Hundreds of built-in themes plus custom theme support
- **Keybindings**: Vim, Emacs, or create your own binding schemes
- **UI customization**: Every element can be moved, hidden, or restyled
- **Workspace layouts**: Save and restore your perfect setup

### 🧠 Intelligent Editing
- **Smart autocomplete**: Context-aware suggestions powered by language servers
- **Code analysis**: Real-time linting and error detection
- **Refactoring tools**: Rename, extract, and restructure with confidence
- **AI assistance**: Optional AI-powered code suggestions and explanations

### 🔧 Developer Tools
- **Integrated terminal**: Full-featured terminal with shell integration
- **Git integration**: Visual diff, staging, and commit workflow
- **Project management**: File explorer, search, and project-wide operations
- **Build system**: Task runner with customizable build configurations

## Language Support

Gaya provides first-class support for modern development languages:

### Tier 1 Languages (Full IDE Features)
- **C#** - Complete IntelliSense, debugging, project management
- **TypeScript/JavaScript** - Advanced refactoring and npm integration
- **Python** - Interactive REPL, package management, Jupyter support
- **Rust** - Cargo integration, macro expansion, advanced diagnostics
- **Go** - Module support, integrated testing, benchmark tools

### Tier 2 Languages (Syntax + LSP)
- C/C++, Java, Kotlin, Swift, Ruby, PHP, HTML/CSS
- JSON, YAML, TOML, XML, Markdown
- Shell scripts (Bash, PowerShell, Fish)

### Extensible Language System
- 200+ syntax definitions included
- Language Server Protocol (LSP) support
- Tree-sitter for accurate syntax highlighting
- Custom language definition system

## Advanced Features

### Multi-Cursor Editing
- Edit multiple locations simultaneously
- Column selection mode
- Smart selection expansion
- Regex-based multi-cursor creation

### Search & Replace
- Fuzzy file search
- Project-wide search with filters
- Regular expression support
- Preview mode for complex replacements

### Plugin Ecosystem
- **Turian Integration**: Seamless game development workflow
- **Live Preview**: Real-time web development preview
- **Database Tools**: Query and manage databases directly
- **API Testing**: HTTP client with request collection

## Installation

### Desktop Applications
Download native applications for your platform:

- **Windows**: MSI installer or portable executable
- **macOS**: DMG package or Homebrew (`brew install gaya`)
- **Linux**: AppImage, Snap, or distribution packages

### Command Line
Install the Gaya CLI for terminal-based editing:

```bash
# Via package managers
npm install -g @mass4/gaya-cli
cargo install gaya-cli
pip install gaya-editor

# Direct download
curl -sf https://get.gaya.dev | sh
```

## Configuration

Gaya uses a simple TOML configuration system:

```toml
[editor]
font_family = "JetBrains Mono"
font_size = 14
theme = "gaya-dark"
tab_size = 4
word_wrap = false

[keybindings]
mode = "default"  # or "vim", "emacs"

[features]
ai_assistance = true
git_integration = true
minimap = true
line_numbers = true

[languages.rust]
formatter = "rustfmt"
linter = "clippy"
```

## System Requirements

### Minimum Requirements
- **OS**: Windows 10, macOS 10.15, or Linux (glibc 2.27+)
- **RAM**: 512MB available memory
- **Storage**: 100MB for installation
- **Display**: 1024x768 resolution

### Recommended Requirements
- **RAM**: 2GB+ for large projects
- **Storage**: 1GB+ for plugins and language servers
- **Display**: 1920x1080+ for optimal multi-pane layouts

## Documentation

- **[User Guide](/gaya/docs/guide)** - Complete user documentation
- **[Plugin Development](/gaya/docs/plugins)** - Create custom extensions
- **[Keybinding Reference](/gaya/docs/keybindings)** - All keyboard shortcuts
- **[Configuration Manual](/gaya/docs/config)** - Detailed configuration options

## Community

- 💬 [Discord Server](https://discord.gg/gaya)
- 🐛 [Issue Tracker](https://github.com/mass4/gaya/issues)
- 📖 [Community Forum](https://forum.mass4.dev/gaya)
- 📚 [Plugin Registry](https://plugins.gaya.dev)

## License

Gaya is released under the MIT License. See [LICENSE](https://github.com/mass4/gaya/blob/main/LICENSE) for details.

---

*Gaya is part of the [MEGA4 Initiative](/mega4) by [MASS4](/mass4) - four revolutionary tools for modern development.*
