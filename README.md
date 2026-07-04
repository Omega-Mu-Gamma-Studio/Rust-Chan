# 🦀 Rust-chan
**An anime-guided Rust tutor for people who want the compiler to yell at them until they're right.**
*She doesn't comfort you. She corrects you. That's the respect.*
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vite.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-5-orange)](https://zustand-demo.pmnd.rs/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055ff)](https://www.framer.com/motion/)
[![License: PolyForm Noncommercial](https://img.shields.io/badge/License-PolyForm_Noncommercial-blue)](./LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-rust--chan.vercel.app-7c6fff?logo=vercel&logoColor=white)](https://rust-chan.vercel.app)

Built by [Omega Mu Gamma Studio](https://github.com/Omega-Mu-Gamma-Studio) · the team behind [SeeDS](https://see-ds.vercel.app), [KMapX](https://kmapx.vercel.app), [EG Suite](https://eg-suite.vercel.app), [GateLab](https://gatelab.vercel.app), [Java-chan](https://java-chan.vercel.app), and [PlusPlus-chan](https://plusplus-chan.vercel.app).

---

## What is Rust-chan?

Rust-chan is a browser-based Rust learning app where an intense, principled mascot character teaches you systems programming the way the borrow checker would, if the borrow checker had a face. She does not soften bad news. If your code doesn't compile, she tells you exactly why, and exactly what rule you broke — because in her view, that's the only kind of teaching that actually works.

The curriculum is built around **CLI tools** — every concept earns its place by being useful in something you'd actually ship from a terminal. Ownership isn't abstract; it's why your file-processing tool doesn't leak memory. Lifetimes aren't scary; they're why your string parser doesn't hand back garbage. By the end of all 75 lessons, you've built and packaged a real async CLI tool, ready for `crates.io`.

No hand-holding. No participation trophies. Just Rust, taught with discipline.

🔗 **[Try it live → rust-chan.vercel.app](https://rust-chan.vercel.app)**

---

## The Teaching Model

Every single lesson — all 75 of them — follows this exact structure:

| Phase | Name | What Happens |
| --- | --- | --- |
| **1** | See It Work | Rust-chan shows working code, the output, and explains what's happening line by line |
| **2** | See It Break | Same code, deliberately broken — she explains the compiler error, what caused it, and why the compiler is right |
| **3** | You Try | Student writes code or fills in blanks; pattern-based validation gives immediate feedback |

Validation is regex/pattern-based — no code execution in the browser. For full programs, students compile and run in their own environment.

---

## Curriculum — 75 Lessons Across 5 Units

All five units are complete, published, and available from day one.

| Unit | Topic | Lessons |
| --- | --- | --- |
| 1 | Rust Basics | 15 |
| 2 | Ownership and Borrowing | 15 |
| 3 | Types, Traits, and Patterns | 15 |
| 4 | Collections, Closures, and Concurrency | 15 |
| 5 | Async Rust and Final Project | 15 |

<details>
<summary>📖 View all 75 lessons</summary>

**Unit 1 — Rust Basics** `1.1` Why Rust Exists — Safety Without GC · `1.2` Setting Up Rust and Cargo · `1.3` Your First Rust Program · `1.4` How the Compiler Talks to You · `1.5` Variables and Mutability · `1.6` Scalar Types · `1.7` Compound Types — Tuples and Arrays · `1.8` Functions · `1.9` Control Flow — if, loop, while, for · `1.10` String vs &str · `1.11` Comments and Documentation · `1.12` Cargo — Build, Run, Test · `1.13` Crates and the Ecosystem · `1.14` Common Beginner Compiler Errors · `1.15` Mini Challenge — CLI Calculator

**Unit 2 — Ownership and Borrowing** `2.1` What is Ownership? · `2.2` Move Semantics · `2.3` Clone and Copy · `2.4` References and Borrowing · `2.5` The Borrow Checker · `2.6` Mutable References · `2.7` Dangling References · `2.8` Slices · `2.9` String Slices · `2.10` Ownership in Functions · `2.11` Ownership in Structs · `2.12` The Stack vs The Heap · `2.13` Lifetime Annotations · `2.14` Lifetime Elision · `2.15` Mini Challenge — String Processor

**Unit 3 — Types, Traits, and Patterns** `3.1` Defining Structs · `3.2` Methods and impl Blocks · `3.3` Tuple Structs · `3.4` Enums · `3.5` The Option Type · `3.6` The Result Type · `3.7` match Expressions · `3.8` if let and while let · `3.9` Defining Traits · `3.10` Implementing Traits · `3.11` Default Implementations · `3.12` Trait Bounds · `3.13` Generics · `3.14` Common Standard Traits · `3.15` Mini Challenge — Shape Calculator

**Unit 4 — Collections, Closures, and Concurrency** `4.1` Vectors · `4.2` HashMaps · `4.3` Iterators · `4.4` Iterator Adaptors — map, filter, collect · `4.5` Chaining Iterators · `4.6` Closures · `4.7` Capturing the Environment · `4.8` Fn, FnMut, FnOnce · `4.9` Threads in Rust · `4.10` Message Passing with Channels · `4.11` Shared State with Mutex · `4.12` Arc and Send/Sync · `4.13` The ? Operator · `4.14` Custom Error Types · `4.15` Mini Challenge — Multi-Threaded Word Counter

**Unit 5 — Async Rust and Final Project** `5.1` What is Async? · `5.2` async/await Syntax · `5.3` Tokio Runtime · `5.4` Async File I/O · `5.5` Async Network I/O · `5.6` Building an Async HTTP Client · `5.7` Parsing CLI Arguments · `5.8` Reading and Writing Files in a Real App · `5.9` Error Handling in Production Code · `5.10` Writing Tests in Rust · `5.11` Benchmarks · `5.12` Publishing to Crates.io · `5.13` Project — Scope Your CLI Tool · `5.14` Project — Implement and Test · `5.15` Project — Package and Ship

</details>

---

## Features

### 🎓 Learning System

- **Three-phase lesson structure** — See It Work → See It Break → You Try, on every lesson, no exceptions
- **CLI-tool context throughout** — every code example builds toward a real, shippable command-line tool
- **Contextual hint escalation** — hint appears at 2 wrong attempts, solution unlocks at 5 (she makes you earn it)
- **Pattern-based validation** — instant feedback without a server or code execution engine
- **Full lesson navigation** — collapsible sidebar with per-lesson completion tracking

### 🎮 Progression & Rewards

- **XP system** — earn XP on lesson completion; bonus XP for first-attempt success and hint-free runs
- **10 levels** — clear thresholds (100 XP per level) with a persistent progress bar
- **Level-gated cosmetics** — new rewards unlock as you level up, alternating themes and outfits
- **localStorage persistence** — no account needed, progress is saved in the browser

### 🎨 The Shop

**App Themes** (equippable backgrounds):

| Level | Item | Style |
| --- | --- | --- |
| 1 | Forge & Rust 🔥 | Burnt orange and iron — heat-treated metal, the default |
| 3 | Compiler's Bunker ⚙️ | Concrete and copper pipe, the room where the borrow checker lives |
| 5 | Blueprint Black 📐 | Technical drafting paper, white ink, zero tolerance for ambiguity |
| 7 | Molten Core 🌋 | Deep red-orange, the heat of a build that finally passed `cargo test` |
| 9 | Midnight Refinery 🏭 | Cold blue-black industrial skyline, the night shift |

**Character Outfits** (equippable; all with full 6-expression sprite art):

| Level | Outfit | Vibe |
| --- | --- | --- |
| 1 | Blacksmith's Apron 🔨 | Leather and soot. Her signature look, always equipped |
| 2 | Foundry Coveralls 🦾 | Systems Mode — ON. Steel-toed and unimpressed |
| 4 | Field Engineer's Jacket 🧰 | Tool belt loaded. The borrow checker travels with her |
| 5 | Off-Duty Flannel 🪵 | The build finally compiled. She allows herself a coffee |
| 6 | Iron Knight's Plate ⚔️ | Memory safety isn't a suggestion, it's armor |
| 7 | Crimson Architect 🏗️ | Concurrency Mode — ON. She designed this thread pool herself |
| 7 | Idol — Zero-Cost Abstraction ✨ | She already performs a Celebration. Might as well dress for it |
| 8 | Async Operative 🕶️ | Cold logic. Non-blocking. Every await is intentional |
| 8 | Master Smith 🔥👘 | She forged the language. Or close enough |
| 10 | Crate Maintainer's Crown 👑 | You shipped to crates.io. Wear the crown |
| 10 | Off the Clock 🏖️ | `cargo test` passed. So has she earned a beach day. Don't push it |

**Downloadable Wallpapers** (phone/desktop art, save to your device):

| Level | Wallpaper | Vibe |
| --- | --- | --- |
| 3 | Compile Time, No Warnings 🌆 | The longest wait ends with zero errors and zero excuses |
| 3 | Iron Foundry Sunrise 🌅 | Sparks rising off the forge, dawn breaking through the smoke |
| 5 | The Borrow Checker's Throne 🏰 | She rules here. Every reference answers to her |
| 5 | Mountain Summit — No Segfaults 🏔️ | She made it to the top without a single unsafe block |
| 5 | Steel Library 📚 | Cold light, technical manuals, the Rust Book dog-eared to chapter 10 |
| 7 | Rainy Foundry Window 🌧️ | Even in the rain, the forge stays lit |
| 7 | Rooftop Watchpoint 🌃 | City skyline, the sign reads `// no unsafe here` |
| 7 | Neon Refinery 🕹️ | Hot orange, cold blue, one cabinet running an async benchmark |
| 9 | Shrine Steps — Memory Safe 🏮 | Stone steps, dawn mist, no dangling references in sight |
| 9 | Forge at Dusk 🌆 | Even the longest debug sessions end with the fire dying down |

### ✨ Character & Expressions

Rust-chan has 6 distinct expressions that fire contextually throughout lessons:

| State | Trigger |
| --- | --- |
| `idle` | Phase 1 — explaining working code |
| `thinking` | Hint mode; waiting for input |
| `surprised` | Correct answer |
| `happy` | Phase transitions and encouragement |
| `sad` | Wrong answer (first few times) |
| `idle-sleep` | Idle between interactions |

Each equipped outfit has its own full set of 6 expression sprites — swapping outfits changes Rust-chan's entire look, not just a filter.

**Domain Expansion** — a fullscreen celebration effect fires on milestone level-ups, complete with confetti (and, unusually for her, a smile).

---

## Tech Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Frontend | React 19 + Vite 8 | Fast HMR, ES modules, modern JSX transform |
| Styling | Plain CSS + Framer Motion 12 | No CSS framework overhead; animations via Motion |
| State | Zustand 5 | Minimal boilerplate, works with `persist` middleware out of the box |
| Data | JSON files + localStorage | Zero backend for Phase 1; data adapter ready for Phase 2 |
| Routing | React Router v7 | File-level page components |
| Hosting | Vercel | Zero-config deployment |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Running Locally

```bash
# Clone the repo
git clone https://github.com/Omega-Mu-Gamma-Studio/Rust-Chan.git
cd Rust-Chan

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at `http://localhost:5173` by default.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Deploying to Vercel

This repo is Vercel-ready with no configuration needed. Connect the repo in the Vercel dashboard and it'll detect the Vite setup automatically. No environment variables required for Phase 1.

---

## Project Structure

```
Rust-Chan/
├── public/
│   ├── sprites/                      # Character expressions (Blacksmith's Apron — base outfit)
│   │   ├── teaching.png
│   │   ├── excited.png
│   │   ├── frustrated.png
│   │   ├── thinking.png
│   │   ├── oops.png
│   │   ├── idle.png
│   │   └── uniforms/                 # Outfit-specific sprite sets (6 expressions each)
│   │       ├── foundry-coveralls/
│   │       ├── field-jacket/
│   │       ├── flannel/
│   │       ├── iron-plate/
│   │       ├── crimson-architect/
│   │       ├── idol/
│   │       ├── async-operative/
│   │       ├── master-smith/
│   │       ├── maintainer-crown/
│   │       └── off-the-clock/
│   └── wallpapers/                   # Downloadable device wallpapers (10 total)
│       ├── rustchan-compile-clean.png
│       ├── rustchan-foundry-sunrise.png
│       ├── rustchan-borrow-throne.png
│       ├── rustchan-no-segfault-summit.png
│       ├── rustchan-steel-library.png
│       ├── rustchan-rainy-foundry.png
│       ├── rustchan-rooftop-watchpoint.png
│       ├── rustchan-neon-refinery.png
│       ├── rustchan-shrine-memsafe.png
│       └── rustchan-forge-dusk.png
│
├── src/
│   ├── components/
│   │   ├── character/RustChan.jsx      # Sprite renderer; reads spriteOverrides from equipped outfit
│   │   ├── layout/AppLayout.jsx        # Root layout; applies theme + background
│   │   ├── lesson/                     # LessonCanvas, CodeBlock, PhaseIndicator
│   │   └── ui/                         # Sidebar, BottomBar, XPDisplay, ProgressBar
│   │
│   ├── data/
│   │   ├── lessons/                  # 75 JSON lesson files (unit1–5, lessons 1–15)
│   │   ├── units/                    # 5 unit JSON files (id, title, lesson list)
│   │   └── shopItems.js              # All cosmetic definitions (outfits, themes, downloadables)
│   │
│   ├── hooks/
│   │   ├── useLesson.js              # Lesson phase state machine
│   │   ├── useProgress.js            # Progress store bindings
│   │   └── useSound.js               # Sound effect hooks
│   │
│   ├── pages/
│   │   ├── Home.jsx                  # Dashboard / unit selection
│   │   ├── UnitPage.jsx              # Lesson list for a unit
│   │   ├── LessonPage.jsx            # The actual lesson experience
│   │   └── Shop.jsx                  # Cosmetics shop
│   │
│   ├── services/
│   │   ├── lessonService.js          # JSON loader + lesson data access
│   │   └── storageService.js         # localStorage adapter (Phase 2: swap for API)
│   │
│   ├── store/
│   │   ├── progressStore.js          # Zustand store: XP, level, outfits, progress
│   │   └── lessonStore.js            # Zustand store: active lesson state
│   │
│   └── utils/
│       ├── xpCalculator.js           # XP thresholds, level math, earned XP calculation
│       ├── patternMatcher.js         # Regex-based answer validation engine
│       └── rustHighlighter.js        # Rust syntax highlighting for code blocks
```

---

## Adding Content

### Adding a New Lesson

Lesson JSON files live at `src/data/lessons/unit{N}/{N}.{M}.json`. Each file follows this structure:

```json
{
  "id": "1.1",
  "title": "Why Rust Exists",
  "xp": 10,
  "phases": [
    {
      "phase": 1,
      "title": "See It Work",
      "dialogue": "Rust-chan's explanation text here",
      "code": "fn main() {\n    println!(\"Hello, Player!\");\n}",
      "output": "Hello, Player!"
    },
    {
      "phase": 2,
      "title": "See It Break",
      "dialogue": "Here's what happens when...",
      "code": "fn main() {\n    println!(\"Hello, Player!\")\n}",
      "error": "error: expected `;`, found `}`"
    },
    {
      "phase": 3,
      "title": "You Try",
      "dialogue": "Your turn. Don't make me explain `cargo run` again.",
      "prompt": "What macro prints to standard output in Rust, with a newline?",
      "answer": "println!()",
      "hint": "It ends with a bang.",
      "solution": "println!()"
    }
  ]
}
```

### Adding a New Outfit

1. Create a folder under `public/sprites/uniforms/<outfit-name>/`
2. Drop in 6 PNGs named: `teaching.png`, `idle.png`, `oops.png`, `thinking.png`, `frustrated.png`, `excited.png`
3. Add an entry to `src/data/shopItems.js` with `spriteOverrides` mapping each expression state to the correct file path
4. That's it — `RustChan.jsx` and `Shop.jsx` both read `spriteOverrides` automatically

### Developer Cheat Mode

In the Shop page, **triple-click the Shop title** to toggle the dev cheat:

- First triple-click → instantly sets XP to 9999 and level to 10 (unlocks everything)
- Second triple-click → resets XP and level back to 0 / 1

---

## Roadmap

### Phase 1 (Current) ✅

- All 75 lessons authored and published
- Full cosmetics system (11 outfits, 5 themes, 10 downloadable wallpapers)
- XP/leveling, shop, expressions, domain expansion
- localStorage persistence, no account required

### Phase 2 (Planned)

- PostgreSQL + Express API backend
- User accounts and cross-device sync
- Progress stored server-side (the store already has a `_resetForMigration` hook and storage adapter pattern ready for this)
- Instructor view: class-wide completion dashboards
- No frontend rewrite required — only the storage layer changes

---

## Credits & Assets

**Character Art**: Rust-chan's sprites were generated using AI tools and hand-curated for expression consistency by the Omega Mu Gamma Studio team. All character designs are proprietary to Omega Mu Gamma Studio.

**Note**: As a free, open-source educational tool, we prioritized shipping a complete learning experience over commissioning custom art. If you're an artist interested in contributing official character designs, reach out — we'd love to collaborate.

---

## Part of Omega Mu Gamma Studio

Rust-chan is part of a student-built suite of open-source engineering and CS education tools from Omega Mu Gamma Studio.

| Tool | What it does |
| --- | --- |
| [SeeDS](https://see-ds.vercel.app) | 3D data structure visualizer with drag-and-drop Playground mode |
| [KMapX](https://kmapx.vercel.app) | Karnaugh map simplifier with don't-care support |
| [EG Suite](https://eg-suite.vercel.app) | 3D Engineering Graphics simulator for ME22201 |
| [GateLab](https://gatelab.vercel.app) | 2D digital logic schematic playground (CS22303) |
| [Java-chan](https://java-chan.vercel.app) | Anime-guided Java tutor for CS22301 |
| [PlusPlus-chan](https://plusplus-chan.vercel.app) | Anime-guided C++ tutor for aspiring game developers |
| **Rust-chan** | Anime-guided Rust tutor for systems programming and CLI tools — *this repo* |

---

## License

This project is licensed under the **[PolyForm Noncommercial License 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/)**.

You may use, modify, and share this software for **noncommercial purposes** only. This includes:
- Personal study and hobby projects
- Educational and research use
- Use by noncommercial organizations (charities, educational institutions, government bodies)

**Commercial use is prohibited** without a separate commercial license from Omega Mu Gamma Studio.

**The character art, sprites, and visual assets for this project are also proprietary.** They may not be reproduced, redistributed, or used outside this project without explicit permission.

For commercial licensing inquiries, contact Omega Mu Gamma Studio.

© 2026 Omega Mu Gamma Studio
