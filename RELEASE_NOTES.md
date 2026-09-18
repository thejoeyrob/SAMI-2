# SAMI v2.2.0 — Precision drawing, view isolation and cinematic refinement

## Interaction and workspace
- Repaired object selection at both the rendered-layer and geometry hit-test levels. Selecting an existing item cancels a stale drawing mode rather than allowing the drawing mode to swallow the tap.
- Added an explicit Select item action in Draw / Place.
- Consolidated Draw and Place into one Site Plan tab.
- Repeated placement now exposes a clear Finish action and remains active until the user finishes.
- Removed the obsolete down-arrow control and hid redundant left/floating legacy tool rails. Site Area, map style, bearing, location, fit, lock, zoom and history now live in the collapsible header map/view pane.

## Site Plan / map state
- Explore and Site Plan now keep independent view state.
- Defining the site area records the current viewport frame and bearing, rather than redefining it as a north-up geographic rectangle.
- Returning to Site Plan restores its previous centre, zoom and bearing.
- When Site Plan is unlocked and moved, the new view becomes the Site Plan frame without changing Explore.
- Rotation lock now locks rotation only. The dedicated map lock remains responsible for pan/zoom locking.

## Drawing, measurement and annotation
- Added multi-point measurement lines under Draw / Place.
- Measurement snapping prioritises object corners/edges, then applies the selected drawing-grid interval.
- Segment lengths and total length are displayed on the live drawing.
- Measurement segment/total annotations are also rendered in PDF output using a dedicated PDF measurement renderer.
- Text labels remain available in the same Measurements & labels section.
- Freehand Trakway line and area workflows are supported and auto-finish on pointer lift; freehand areas close automatically.

## Trakway
- Lion, Hybrid and TuffTrak use the same corner-rule family while retaining product dimensions.
- Straight sections remain aligned to the user-selected route points; corner logic does not relocate route vertices.
- 15–60° bend handling uses overlap placement.
- Acute internal turns that require a 90° landing use the 4/4 inside-corner rule plus residual 15–60° bend treatment.
- Obtuse internal bends retain the selected exit alignment using overlap bend placement.
- Routine corner notifications are suppressed.
- Objects/Layers total panels by product and expose logical Run / Area rows beneath the product total.

## Appearance and identity
- Expanded to ten professional themes: Graphite Pro, Obsidian, Carbon, Midnight, Titanium, Blackout, Deep Navy, Slate, Sandstone and Arctic Dark.
- Accent/highlight colour is selectable independently of the theme.
- The application icon uses the complete SAMI mark with a safe outer margin so the symbol is not cropped by installed-icon masks.

## Performance and services
- Public service/reference loading remains disabled until a site area exists.
- Reduced map churn by retaining the v2.1 bearing-resize optimisation and keeping site/reference work bounded to the defined area.

## Cinema
- Intro and Why SAMI are pre-rendered H.264/yuv420p films integrated full-screen into the app with no native video-player chrome.
- Intro sound design is local. The Why SAMI film uses the local sound bed plus the configured professional narration track; if that remote narration endpoint is unavailable, the film and local sound bed still play.

## Verification
- Release verification: 87/87 checks passed.
- All root runtime JavaScript parses successfully.
- HTML IDs and local references pass.
- Manifest icons are exact 192×192 and 512×512 assets and the main icon retains a 110 px content-safe outer margin at 512 px.
- Service-worker shell references resolve; `.nojekyll` remains a deployment marker and is intentionally not cached as an application shell dependency.
- Intro: H.264, yuv420p, 1024×576, 13.5 s.
- Why SAMI: H.264, yuv420p, 1024×576, 34.25 s.
- Lion, Hybrid and TuffTrak regression checks pass for 90°, acute-internal and obtuse-internal turn handling with no routine corner warnings.
