# SAMI BETA v1 — implementation notes

## Baseline
Forked from the supplied `SAMI_v2_4_0_REFINED` package. The supplied archive remains unchanged.

## OHL intelligence correction
- Expanded mapped OHL search from the former site + 0.25 mile area to **site + 0.5 mile**.
- Retained `power=line` and `power=minor_line` acquisition.
- Added explicitly overhead `power=cable` records (`location=overhead`).
- Added mapped support recognition for **pole, tower, portal and terminal**.
- Preserved mapped support metadata including reference/operator/material/design/height when present.
- Mapped support type is now rendered immediately as a reference symbol rather than collapsing to a generic `+` marker.
- User-confirmed support classifications remain distinct from mapped reference classifications.
- Increased OHL query timeout/result allowance and marker ceiling to support larger search coverage.
- Existing user-edited support metadata is retained when the OHL snapshot is refreshed.
- OHL snapshot records coverage/freshness metadata in the project.
- Safety boundary retained: mapped OHL information is a planning reference and must be verified before safety-critical use.

## Beta product transformation
- Primary `Project` mode renamed **Intelligence**.
- New intelligence-first project home replaces the map-first opening perception.
- Dashboard communicates: **what matters, what changed, what needs attention, what should happen next**.
- Project intelligence cards cover project health, constraints, utilities, OHL, access, materials, field evidence, activity, community intelligence and Ask SAMI.
- Ask SAMI presented as **Digital Site Engineer** with project-aware high-confidence summaries for attention, OHL and materials questions.
- Community Intelligence beta framework added with contribution categories and explicit verification states.
- Existing Explore, Route, Site Plan, Create/assets, review/export and detailed editing capabilities remain available beneath the new shell.
- New responsive design layer for desktop, tablet and phone intelligence views.

## Strategy deliverable
`SAMI_BETA_V1_STRATEGY.md` contains the complete 13-part category, product, UX, visual, dashboard, Ask SAMI, community, moat, marketing, growth, investment, critique and ten-year strategy requested for the side-design beta.
