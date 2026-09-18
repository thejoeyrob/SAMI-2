# SAMI v2.2.0 — Release verification

## Result
**87 / 87 automated/static regression checks passed.**

## Interaction
- Object selection: PASS — explicit Select mode, rendered-layer click selection and geometry hit-testing are all present.
- Repeated placement Finish workflow: PASS.
- Draw / Place consolidation: PASS.
- Legacy left/floating tool rails hidden: PASS.
- Site Area and map/view controls housed in the collapsible header pane: PASS.
- Obsolete down-arrow control removed at runtime: PASS.

## Map, bearing and Site Plan
- Rotation lock is independent from the map pan/zoom lock: PASS.
- Explore and Site Plan retain separate view state: PASS.
- Site Plan frame stores viewport orientation/bearing: PASS.
- Unlocked Site Plan updates its own frame only: PASS.
- Service/public-reference work is gated by a defined site area: PASS.

## Drawing and measurement
- Freehand Trakway line and area: PASS.
- Freehand pointer-lift auto-finish and area auto-close: PASS.
- Multi-point measurement: PASS.
- Geometry-first then grid snapping: PASS.
- On-map segment labels and total length: PASS.
- PDF segment labels and total length through `drawMeasurementAnnotations`: PASS.

## Trakway geometry
For Lion, Hybrid and TuffTrak:
- 90° corner → 4/4 inside-corner rule: PASS.
- Acute internal corner → 90° 4/4 treatment plus residual 15–60° bend: PASS.
- Obtuse internal corner → 15–60° overlap bend treatment: PASS.
- Routine corner notifications/warnings: none generated: PASS.

## Appearance / PWA
- Ten themes and independent accent colour: PASS.
- Manifest is standalone with root-relative start/scope: PASS.
- 192 px and 512 px icon dimensions: PASS.
- Main icon safe artwork margin: 110 px at 512 px: PASS.
- Service-worker cache version: `sami-production-v2.2.0`: PASS.
- All service-worker shell files exist: PASS.
- `.nojekyll` exists for deployment but is not cached as a shell dependency: PASS.

## Cinema
- Intro film: H.264 / yuv420p / 1024×576 / 13.50 s: PASS.
- Why SAMI film: H.264 / yuv420p / 1024×576 / 34.25 s: PASS.
- Full-screen film element has no native playback controls: PASS.
- Why SAMI narration playback hook: PASS.

## Code integrity
- All root runtime `.js` files pass `node --check`: PASS.
- HTML duplicate IDs: PASS.
- HTML local references: PASS.

## Environment note
A managed graphical browser smoke test is not claimed because the execution environment blocks local/file application URLs. The release instead uses static/runtime parsing, reference validation, media inspection and direct geometry regression checks. The physical-phone map smoothness should still be confirmed after deployment because that symptom was originally device-specific.
