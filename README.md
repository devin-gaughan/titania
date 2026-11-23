# Titania

**An interactive 3D crystal lattice simulator.** Formerly Auraeon Crystal Lattice Simulator.

Titania runs in the browser and is built with React and Three.js. Explore the crystal structures used in materials science and semiconductor research, slice them along lattice planes, and compute their powder diffraction patterns.

**Live app:** https://devingaughan.com/auraeon/

![React](https://img.shields.io/badge/React-19-blue) ![Three.js](https://img.shields.io/badge/Three.js-r182-green) ![License](https://img.shields.io/badge/License-PolyForm--NC-orange)

## Features

- **11 crystal structures**: five elemental (Simple Cubic, BCC, FCC, Diamond Cubic, HCP) and six compound (Rock Salt, Cesium Chloride, Zinc Blende, Perovskite, Fluorite, Wurtzite)
- **Interactive 3D visualization**: orbit, zoom, and pan with mouse controls
- **Real-time parameter tuning**: adjust lattice constant, atom size, and unit cell repetitions
- **Bond visualization**: toggle nearest-neighbor bonds calculated from structure geometry
- **Unit cell wireframe**: overlay the fundamental unit cell for reference
- **Lattice planes**: slice any structure along a Miller index (hkl) plane, with d-spacing computed from the reciprocal lattice
- **Powder XRD (X-ray diffraction) pattern**: structure factors, multiplicity, Lorentz-polarization correction, and a Debye-Waller temperature control
- **Scientific data**: coordination numbers, packing fractions, and real material examples
- **Lattice path counting**: a 3D dynamic programming visualization (Project Euler #15 generalized)

## Tech stack

- **React 19** + Vite
- **Three.js** via React Three Fiber + Drei
- **Custom CSS** with CSS variables

## Getting started

```bash
git clone https://github.com/devin-gaughan/titania.git
cd titania
npm install
npm run dev
```

Open <http://localhost:5173/auraeon/> in your browser.

## Crystal structures

| Structure | Coordination | Packing | Example materials |
|-----------|--------------|---------|-------------------|
| Simple Cubic | 6 | 52.4% | Polonium |
| Body-Centered Cubic | 8 | 68.0% | Iron, Tungsten, Chromium |
| Face-Centered Cubic | 12 | 74.0% | Copper, Aluminum, Gold |
| Diamond Cubic | 4 | 34.0% | Silicon, Germanium, Diamond |
| Hexagonal Close-Packed | 12 | 74.0% | Titanium, Magnesium, Zinc |
| Rock Salt (NaCl) | 6 | 67.3% | NaCl, MgO, LiF |
| Cesium Chloride (CsCl) | 8 | 72.9% | CsCl, CsBr, CsI |
| Zinc Blende (ZnS) | 4 | 34.0% | ZnS, GaAs, InP |
| Perovskite (ABO₃) | 6 | 52.4% | BaTiO₃, SrTiO₃, CaTiO₃ |
| Fluorite (CaF₂) | 8 | 62.4% | CaF₂, UO₂, ThO₂ |
| Wurtzite (ZnS) | 4 | 34.0% | GaN, AlN, ZnO |

## How it works

Every structure is described by two small pieces of data in `src/data/lattices.js`: a set of lattice vectors and a basis of fractional atom coordinates. `src/data/latticeGenerator.js` repeats that basis across the requested number of unit cells and converts the fractional coordinates to Cartesian positions. Bonds, planes, and diffraction peaks are all derived from that same description, so adding a structure means adding one entry to the data file.

## About the name

Titania is the queen of the faeries, and titania is also the common name for titanium dioxide, a crystal known for its rutile and anatase lattice structures.

## Background

This project draws on experience from semiconductor materials research, where understanding crystal lattice geometry is fundamental to analyzing material properties, defect structures, and device performance.

## License

Source-available under the [PolyForm Noncommercial License 1.0.0](LICENSE.md). Free for personal, educational, research, and other noncommercial use. Commercial use requires a separate commercial license. Contact devin@devingaughan.com.

> Note: Earlier revisions of this repository's README declared the MIT license without an accompanying LICENSE file. As of the license change commit, this project is governed exclusively by the PolyForm Noncommercial License 1.0.0 for all purposes going forward.
