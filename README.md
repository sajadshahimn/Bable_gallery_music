<p align="center">
  <img src="logo.svg" alt="Babel Gallery logo" width="120" height="120">
</p>

<h1 align="center">Babel Gallery</h1>

<p align="center">
  <em>Every possible tune. Every possible picture. Every possible program. Every possible world. One address away.</em>
</p>

<p align="center">
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
  <img alt="No dependencies" src="https://img.shields.io/badge/dependencies-none-brightgreen.svg">
  <img alt="No build step" src="https://img.shields.io/badge/build-none-blue.svg">
  <a href="https://sajadshahimn.github.io/Bable_gallery_music/"><img alt="Live demo" src="https://img.shields.io/badge/live-demo-6a5acd.svg"></a>
</p>

An infinite gallery of every possible tune, every possible picture, every possible program, and every possible world, inspired by Borges' *Library of Babel*. The home page lets you choose between **Music**, **Images**, **Code**, **Ecosystem**, **Aquarium**, **Galaxy**, **Multi**, **Finds** and **Statistics**.

Every piece has a unique address. The number encodes a complete piece: sound design, tempo, a drum pattern and a melody; a pixel grid; a program in one of eight languages; a two-layer animation; an aquarium with fish and plants; or a spiral galaxy with nebulae and companions. Type any address and you get a piece. Edit a piece and you get its address. Nothing is stored on a server; the whole thing is a set of static HTML files.

## ✨ Features

### 🎵 Music
- **Compose:** a piano-roll grid with 24 notes (two octaves) over 32 steps, plus a three-row drum grid. Steps can be notes, rests, or *holds* that lengthen the previous note.
- **Sound:** 16 starting presets and 14 synthesizer parameters. Every combination is part of the location number.
- **Address:** paste or copy a short base-62 address, and choose the scale used by the "Musical" generator.
- **Visualizer:** a live audio visualizer (canvas) reacts to the playing piece.
- **Shareable:** the current location is kept in the URL hash, so a link opens the same piece.
- **Total:** about 10⁸⁴ possible pieces.

### 🖼 Images
- **Paint or explore:** a pixel grid from 16 × 9 up to 80 × 45 cells. Paint an image to discover its address, or jump to any address and see what is there.
- **Color modes:** mono (2 colors), gray (4 levels), or 16 colors.
- **Cell size:** five cell sizes change the grid resolution and address length.
- **Download:** save the current image as a PNG.

### 💻 Code
- **Languages:** 8 languages — Python, JavaScript, C, C++, Rust, Go, Java, Ruby.
- **Concepts:** 16 programming concepts — bubble sort, binary search, Fibonacci, factorial, FizzBuzz, prime check, string reverse, palindrome, GCD, array sum & max, count vowels, leap year, temperature conversion, Caesar cipher, linear search.
- **Styles:** 4 styles of writing — standard, commented, concise, idiomatic.
- **Variations:** variable names, numeric values, and output messages are all determined by the address.
- **Run live:** click ▶ Run to execute the program via the **Judge0 CE** API and see the output.
- **Download:** save the current program as a file with the correct extension.
- **Total:** about 10⁸ unique programs across all combinations.

### 🌱 Ecosystem
- **Two independent layers:** a keyframe background that smoothly morphs from pattern A to pattern B on a loop, and a cellular automaton living on top.
- **12 CA rules:** Conway, HighLife, Day&Night, Seeds, Maze, Coral, Diamoeba, Anneal, Replicator, 2x2, Assimilation, Coagulations.
- **8 grid sizes:** from 16×16 to 80×80 cells.
- **8 effects:** Solid, Glow, Multiply, Screen, Overlay, Hue, Difference, Bloom.
- **37 parameters across 4 layers** — 201 bits total.
- **Timeline:** a progress bar shows the current position within the animation cycle, the elapsed time, and the cycle number.
- **Export:** PNG (single frame), WebM (5 seconds, 60fps), GIF (3 seconds, 15fps).
- **Total:** about 3.2 × 10⁶⁰ possible ecosystems.

### 🐠 Aquarium
- **Fish:** 6 types (Simple, Angular, Round, Long, Puffer, Jellyfish) with configurable count, size, color, pattern, eyes, and tail.
- **Plants:** 4 types (Seaweed, Coral, Kelp, Grass) with configurable count, color, and height.
- **Water:** 8 water colors (Clear, Blue, Teal, Purple, Pink, Night, Sunset, Dark) with 4 depth levels and 4 light-ray intensities.
- **Environment:** 6 sand colors, 0–3 rocks, 3 bubble densities, 3 sparkle levels.
- **Mood:** 4 mood tints (Calm, Mysterious, Vibrant, Dark).
- **Interactive:** click anywhere to drop food and spawn bubbles; fish swim toward food.
- **Ambient sound:** toggle underwater drone and bubble sounds (Web Audio).
- **Export:** PNG.
- **Total:** 23 parameters, ~12-char addresses, about 3 × 10²² aquariums.

### 🌌 Galaxy
- **Type:** 5 galaxy types — Spiral (2–7 arms), Elliptical, Irregular, Ring, Lenticular.
- **Stars:** 5 star colors (blue/white/yellow/orange/red — from young to ancient) with 3 color-variation levels and 5 star-count levels (400–9,000).
- **Core:** 5 core sizes, 4 brightness levels, 6 core colors.
- **Nebulae:** 0–15 nebulae with 8 hue palettes and 3 opacity levels.
- **Dust lanes:** 3 levels of dark dust lanes across the galactic disk.
- **Companions:** 0–2 companion galaxies orbiting the main one.
- **Rotation:** 4 rotation speeds and 2 directions — the entire galaxy rotates around its core.
- **Tilt:** 3 viewing angles (face-on, tilted, edge-on).
- **Export:** PNG.
- **Total:** 19 parameters, ~10-char addresses, about 1.7 × 10²⁰ galaxies.

### ⚡ Multi (pair.html)
- **Pick any 2–6 galleries** from a selector: Music, Images, Code, Ecosystem, Aquarium, Galaxy.
- **One address, all panels** — changing the address updates every visible gallery at once.
- **Adaptive grid** — 1×2 for 2 panels, 2×2 for 3–4, 2×3 for 5–6.
- **Per-panel controls** — play/pause music inline, open any panel as a full page.
- **URL synced** — `pair.html#a=XXX` restores the same combination and address.
- **Keyboard shortcuts:** Space (music play/pause), R (random), ←/→ (prev/next), C (copy).

### 🏆 Finds
- **Community discoveries:** browse tunes and pictures that people found in the gallery. Every find is reviewed before it appears.
- **Share a find:** submit a find as a GitHub issue; it appears on the Finds page after it is approved.
- **Preview:** a small play button lets you listen to a find without leaving the page.

### 📊 Statistics
- **Library size:** see how many pieces exist in each gallery — Music, Images, Code, Ecosystem, Aquarium, Galaxy.
- **Full parameter breakdown:** every parameter of every gallery with its exact base and bit count.
- **Image explorer:** adjust the palette size to see how the number of possible images changes.
- **Ecosystem layers:** Base, CA, Effect, Global — with per-layer bit counts.
- **Fun facts:** comparisons with the age of the universe, the number of atoms, and more.

### 🎁 Piece of the Day
- **A shared daily piece:** the home page shows a deterministic piece for the current UTC date. Everyone who visits on the same day sees the same address.

### 🎨 Interface
- **Soft, raised-surface design** (neumorphic style) with automatic light and dark themes.
- **Responsive layout** that works on desktop and mobile.
- **Keyboard shortcuts** throughout.

## ⚙️ How it works

A location is mapped to a piece with a bijective scramble, so every number is one piece and every piece is one number.

1. **Music:** 14 sound parameters (each with its own base), 32 drum steps (base 8), 32 melody steps (base 26) — about 10⁸⁴ pieces.
2. **Images:** a grid of cells, each with a palette choice — from 16 × 9 to 80 × 45 cells.
3. **Code:** language (8), concept (16), style (4), variable names (32), numeric values (10⁸), message (16) — about 10⁸ unique programs.
4. **Ecosystem:** 37 parameters across 4 layers — 201 bits, about 3.2 × 10⁶⁰ pieces.
5. **Aquarium:** 23 parameters — water, fish, plants, sand, bubbles, mood — about 3 × 10²² pieces.
6. **Galaxy:** 19 parameters — type, arms, stars, core, nebulae, companions, rotation — about 1.7 × 10²⁰ pieces.
7. **Addresses** are written in base 62 (0–9, A–Z, a–z), about 45% shorter than decimal and still exact.
8. The raw digits are scrambled with `y = (a·x + c) mod M`, where `a` is coprime to `M`. This spreads neighbouring numbers across very different pieces and can be inverted exactly, which is how editing a piece gives back its number.

Instruments are synthesized live with the Web Audio API. Code is executed remotely via the **Judge0 CE** API (free, no authentication required). Ecosystems, aquariums, and galaxies are rendered entirely in the browser using Canvas 2D.

## 🚀 Run locally

No build step and no dependencies. Open `index.html` in a browser and choose a section. In the music gallery, press **Play**. In the code gallery, press **Run** to execute the current program (requires an internet connection). In the aquarium or ecosystem gallery, press Pause or Reset to control playback. In the galaxy gallery, press Pause to stop the rotation.

## 🌐 Deploy with GitHub Pages

1. Make the repository public and keep the page as `index.html` in the root.
2. Go to **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/ (root)`, and save.
3. After a minute or two the site is live at `https://USERNAME.github.io/REPO/`.

## 🏷️ Finds page setup

The Finds page needs no server. People submit a find as a GitHub issue, and the page shows only the issues you approve.

1. In the repository, make sure **Issues** are enabled (Settings → General → Features).
2. Create a label named `approved` (Issues → Labels → New label).
3. When someone submits a find, open the issue, check it, and add the `approved` label. It then appears on the Finds page.

The repository name is set at the top of the script in `finds.html` (`REPO`). Visitors need a free GitHub account to submit. Notes and titles are shown as plain text, and links open only to the gallery pages built from the validated address.

## 📁 Files

| File | Purpose |
| --- | --- |
| `index.html` | Home page: choose Music, Images, Code, Ecosystem, Aquarium, Galaxy, Multi, Finds, or Statistics; shows Piece of the Day |
| `music.html` | Music gallery: compose, sound parameters, address, visualizer |
| `image.html` | Image gallery: paint, color modes, cell sizes, download |
| `code.html` | Code gallery: 8 languages × 16 concepts × 4 styles, run live |
| `ecosystem.html` | Ecosystem gallery: keyframe + cellular automata, timeline, export |
| `aquarium.html` | Aquarium gallery: 23 params, interactive fish, ambient sound, PNG export |
| `galaxy.html` | Galaxy gallery: 19 params, 5 galaxy types, nebulae, rotation, PNG export |
| `pair.html` | Multi-panel view: 2–6 galleries side by side with a shared address |
| `finds.html` | Community finds: browse approved posts and share new ones |
| `stats.html` | Library statistics: all galleries, all parameters, fun facts |
| `visualizer.js` | Real-time audio visualizer for the music page |
| `logo.svg` | Project logo and favicon |
| `LICENSE` | MIT license |
| `CHANGELOG.md` | Version history |
| `robots.txt` | Crawler instructions |
| `sitemap.xml` | Sitemap for search engines |
| `.htmlvalidate.json` | HTML validation configuration (CI) |
| `.github/workflows/ci.yml` | CI: validate HTML and check links |

Each page is a single self-contained file with no dependencies. Keep all file names lowercase, because GitHub Pages is case-sensitive.

## 🧭 Browser support

A current browser with `BigInt`, and for the music and aquarium pages, Web Audio. The code page uses `fetch` and requires an internet connection. The ecosystem, aquarium, and galaxy pages use Canvas 2D and, for export, `gif.js` from a CDN.

## 🔒 Privacy

Nothing is stored on a server. Music, images, ecosystems, aquariums, and galaxies are generated entirely in the browser. The only outbound requests are:
- The GitHub API, to load approved finds.
- The Judge0 CE API, to execute code (only when you press Run).
- CDN resources: `highlight.js` for code highlighting, `gif.js` for GIF export.

## 📜 License

This project is released under the [MIT License](LICENSE).

Copyright (c) 2026 Mehrzad
