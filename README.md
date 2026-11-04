# Babel Music Gallery

An infinite gallery of every possible tune, inspired by Borges’ *Library of Babel*.

Every piece has a unique location number. The number encodes a complete piece: sound design, tempo, a drum pattern and a 32-step melody. Type any number and you get a piece. Edit a piece and you get its number. Nothing is stored on a server; the whole thing is one static HTML file.

## Features

- **Compose:** a piano-roll grid with 24 notes (two octaves) over 32 steps, plus a three-row drum grid (hat, snare, kick). Steps can be notes, rests or *holds* that lengthen the previous note.
- **Sound:** 16 starting presets and 14 synthesizer parameters (waveform, harmonics, attack, sustain, decay, release, filter, filter sweep, vibrato, chorus, octave, reverb, drum kit, tempo). Every combination is part of the location number.
- **Number:** paste or copy a location number, and choose the scale used by the “Musical” generator.
- **Random:** one button for a fresh piece with random sound settings; “Musical” and “Noise” generate in the Number tab.
- **Shareable:** the current location is kept in the URL hash, so a link opens the same piece.
- **Liquid-glass interface** with automatic light and dark themes.

## How it works

A location is mapped to a piece with a bijective scramble, so every number is one piece and every piece is one number.

1. The piece is a list of digits in a mixed radix: 14 sound parameters (each with its own base), 32 drum steps (base 8, one bit each for kick, snare and hat) and 32 melody steps (base 26: rest, 24 notes, or hold).
2. The product of all bases is the size of the library, about 10<sup>84</sup> pieces. The sound parameters alone give roughly 3.8 × 10<sup>9</sup> combinations.
3. The raw digits are scrambled with `y = (a·x + c) mod M`, where `a` is coprime to `M`. This spreads neighbouring numbers across very different pieces and can be inverted exactly, which is how editing a piece gives back its number.

Instruments are synthesized live with the Web Audio API (oscillators, filters, FM, convolution reverb and noise-based drums). There are no audio samples, so the sounds are simpler than recordings of real instruments.

## Run locally

No build step and no dependencies. Open `index.html` in a browser, then press **Play**. Browsers only start audio after a click or tap.

## Deploy with GitHub Pages

1. Make the repository public and keep the page as `index.html` in the root.
2. Go to **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/ (root)`, and save.
3. After a minute or two the site is live at `https://USERNAME.github.io/REPO/`.

## Browser support

A current browser with `BigInt`, Web Audio and `backdrop-filter`. Without `backdrop-filter`, the glass panels are still translucent but not blurred.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app: markup, styles and script |
| `README.md` | This file |

## License

Add a license of your choice, for example MIT, before publishing.
