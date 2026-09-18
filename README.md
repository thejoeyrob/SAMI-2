# SAMI v2.2.0 Production

Spatial Analysis Mapping Intelligence — field-first site planning, route-to-site, Trakway, services, constraints, measurement annotation and professional drawing output.

## Deploy
The production PWA is root-based. Upload the contents of `SAMI_v2.2.0_PRODUCTION_ROOT_FLAT_PWA.zip` directly to the publishing repository root. `.nojekyll` is included for GitHub Pages. The complete repository package also contains the GitHub Pages workflow and release documentation.

## v2.2 workspace
- Site Plan and Explore now retain separate map views. The Site Plan frame stores the viewed orientation/bearing at definition time and can be updated independently when Site Plan is unlocked.
- North rotation lock only prevents map rotation; the separate map lock controls pan/zoom.
- Draw and Place are consolidated into one `Draw / Place` workspace.
- Object selection uses explicit feature hit-testing and rendered-layer click selection.
- Repeated item placement remains active until `Finish` is pressed.
- Trakway supports point and freehand line/area workflows for Lion, Hybrid and TuffTrak.
- Trakway panels are totalled by product in Objects/Layers instead of listing every panel individually.
- Measurements support multi-point lines, segment labels, total length, corner/edge snapping and configurable grid snapping. The same annotations are rendered into the issued PDF.
- Map/site controls are housed in the collapsible header pane; redundant map-edge tool rails are hidden.
- Ten professional appearance themes are available, with a separately selectable highlight/accent colour.
- Intro and Why SAMI use full-screen rendered H.264 films rather than shape-generated geometry.
- Public services/reference queries are gated until a site area exists to reduce unnecessary startup work.

## Utility / service information
SAMI can store and display manually supplied survey/utility records and bounded public reference snapshots. OHL, gas, water, drainage, electricity and telecom public references are never safe-dig data. Verify service locations using current asset-owner records, surveys and safe-dig procedures before work.
