<p align="center">
  <img src="logo.svg" alt="Babel Gallery logo" width="120" height="120">
</p>

<h1 align="center">Babel Gallery</h1>

<p align="center">
  <em>Every possible tune. Every possible picture. One address away.</em>
</p>

<p align="center">
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
  <img alt="No dependencies" src="https://img.shields.io/badge/dependencies-none-brightgreen.svg">
  <img alt="No build step" src="https://img.shields.io/badge/build-none-blue.svg">
  <a href="https://sajadshahimn.github.io/Bable_gallery_music/"><img alt="Live demo" src="https://img.shields.io/badge/live-demo-6a5acd.svg"></a>
</p>

An infinite gallery of every possible tune and every possible picture, inspired by Borges’ *Library of Babel*. The home page lets you choose between **Music**, **Images**, **Pair**, **Finds** and **Statistics**.

Every piece has a unique address. The number encodes a complete piece: sound design, tempo, a drum pattern and a 32-step melody. Type any address and you get a piece. Edit a piece and you get its address. Nothing is stored on a server; the whole thing is a set of static HTML files.

## ✨ Features

### 🎵 Music
- **Compose:** a piano-roll grid with 24 notes (two octaves) over 32 steps, plus a three-row drum grid (hat, snare, kick). Steps can be notes, rests or *holds* that lengthen the previous note.
- **Sound:** 16 starting presets and 14 synthesizer parameters (waveform, harmonics, attack, sustain, decay, release, filter, filter sweep, vibrato, chorus, octave, reverb, drum kit, tempo). Every combination is part of the location number.
- **Address:** paste or copy a short base-62 address (digits and letters), and choose the scale used by the “Musical” generator.
- **Random:** one button for a fresh piece with random sound settings; “Musical” and “Noise” generate in the Number tab.
- **Visualizer:** a live audio visualizer (canvas) reacts to the playing piece.
- **Shareable:** the current location is kept in the URL hash, so a link opens the same piece.

### 🖼 Images
- **Paint or explore:** a pixel grid from 16 × 9 up to 80 × 45 cells. Paint an image to discover its address, or jump to any address and see what is there.
- **Color modes:** mono (2 colors), gray (4 levels), or 16 colors.
- **Cell size:** five cell sizes (120, 60, 40, 30, 24 px) change the grid resolution and address length.
- **Download:** save the current image as a PNG.

### 🔗 Pair
- **One address, two forms:** enter a single address and see the music piece and the image it encodes side by side.
- **Keyboard shortcuts:** Space (play/pause), R (random), ←/→ (previous/next), C (copy address).

### 🏆 Finds
- **Community discoveries:** browse tunes and pictures that people found in the gallery. Every find is reviewed before it appears.
- **Share a find:** submit a find as a GitHub issue; it appears on the Finds page after it is approved.
- **Preview:** a small play button lets you listen to a find without leaving the page.

### 📊 Statistics
- **Library size:** see how many pieces exist in the music and image libraries.
- **Parameter breakdown:** 14 sound parameters with their exact bases and the percentage of each option.
- **Image library explorer:** adjust the palette size to see how the number of possible images changes across grid sizes.
- **Fun facts:** comparisons with the age of the universe, the number of atoms, and more.

### 🎁 Piece of the Day
- **A shared daily piece:** the home page shows a deterministic piece for the current UTC date. Everyone who visits on the same day sees the same address, tune, and image.

### 🎨 Interface
- **Soft, raised-surface design** (neumorphic style) with automatic light and dark themes.
- **Responsive layout** that works on desktop and mobile.

## ⚙️ How it works

A location is mapped to a piece with a bijective scramble, so every number is one piece and every piece is one number.

1. The piece is a list of digits in a mixed radix: 14 sound parameters (each with its own base), 32 drum steps (base 8, one bit each for kick, snare and hat) and 32 melody steps (base 26: rest, 24 notes, or hold).
2. The product of all bases is the size of the library, about 10^84 pieces. The sound parameters alone give roughly 3.8 × 10^9 combinations.
3. Addresses are written in base 62 (0–9, A–Z, a–z), about 45% shorter than decimal and still exact.
4. The raw digits are scrambled with `y = (a·x + c) mod M`, where `a` is coprime to `M`. This spreads neighbouring numbers across very different pieces and can be inverted exactly, which is how editing a piece gives back its number.

Instruments are synthesized live with the Web Audio API (oscillators, filters, FM, convolution reverb and noise-based drums). There are no audio samples, so the sounds are simpler than recordings of real instruments.

## 🚀 Run locally

No build step and no dependencies. Open `index.html` in a browser and choose a section. In the music gallery, press **Play**. Browsers only start audio after a click or tap.

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
| `index.html` | Home page: choose Music, Images, Pair, Finds, or Statistics; shows Piece of the Day |
| `music.html` | Music gallery: compose, sound parameters, address, random generation, visualizer |
| `image.html` | Image gallery: paint, color modes, cell sizes, address, download |
| `pair.html` | One address, two forms: music and image side by side |
| `finds.html` | Community finds: browse approved posts and share new ones |
| `stats.html` | Library statistics: sizes, parameter breakdown, fun facts |
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

A current browser with `BigInt` and, for the music page, Web Audio.

## 📜 License

This project is released under the [MIT License](LICENSE).

Copyright (c) 2026 Mehrzad
