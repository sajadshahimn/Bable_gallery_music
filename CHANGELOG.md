# Changelog

All notable changes to Babel Gallery will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `pair.html` — view the tune and image encoded by the same address side by side
- `stats.html` — library statistics for music and images with interactive palette
- `visualizer.js` — real-time audio visualizer for the music page
- `preview.html` — mini player for embedding in finds
- Piece of the Day on the home page (deterministic, same for all visitors in UTC)
- CI workflow: HTML validation and link checking on every push and PR
- `robots.txt` and `sitemap.xml` for search engine discovery
- `CHANGELOG.md` and version badges in README

### Changed
- `index.html` — 2×2 card grid, added Pair and Statistics cards, favicon and description
- `music.html` — added visualizer, embed mode, postMessage API, and BabelMusic global

## [1.0.0] - 2026-11-05

### Added
- Initial public release
- Music gallery (`music.html`) with 14 sound parameters, 32 drum steps, 32 melody steps
- Image gallery (`image.html`) with grids from 16×9 to 80×45
- Finds page (`finds.html`) driven by approved GitHub issues
- MIT license
- README with architecture, deployment and usage notes
