# SAMI BETA v1 — Site Delivery Operating System

## Executive position

**Product:** SAMI  
**Tagline:** ASK SAMI  
**Category:** **Site Delivery Operating System (SDOS)**  
**Category promise:** Project teams should not have to assemble site truth from drawings, mapping portals, spreadsheets, emails, route notes, survey evidence and disconnected specialist tools before they can make a decision. SAMI is the live project-intelligence layer that connects those inputs to the work that must happen next.

**One-line explanation:** SAMI is the Site Delivery Operating System that turns site, access, constraints, routes, assets, field evidence and project decisions into one controlled project-intelligence layer.

**Elevator pitch:** Construction teams routinely lose time translating reality between site, office, CAD, planning and delivery. SAMI collapses that loop. The people closest to the work can identify conditions, plan access, understand constraints, place assets, calculate temporary access requirements, capture evidence, collaborate and issue a controlled project view from one project context. The drawing remains important, but it becomes an output of the intelligence system rather than the product itself.

**Mission:** Give every construction team a trusted, current understanding of the site and the next decision required to deliver it safely and efficiently.

**Vision:** Become the operating system through which infrastructure projects are understood, coordinated and delivered — until “send me the SAMI” means send the current, trusted project picture, not merely a drawing.

---

# 1. Category Strategy

## Category name
**Site Delivery Operating System.**

“Construction Intelligence Platform” remains a useful descriptive phrase, but SDOS is the category SAMI should own. It describes the job SAMI performs rather than the technologies used to perform it.

## Why existing categories fail
CAD optimises authored geometry. GIS organises geographic datasets. Survey software records measured reality. Mapping products answer where. Collaboration platforms organise communication. Project-management systems organise tasks and documents. AI chat products answer questions. Each is useful, but the site-delivery decision still spans several of them.

The category gap is the **operational project context**: what exists, what changed, what conflicts, what can reach the site, what is required, what is verified, what is uncertain and what should happen next.

## Why SAMI creates a new category
SAMI combines spatial context, project state, field evidence, constraints, access, temporary works planning, materials, source provenance and an assistance layer around a single project object. Its competitive frame therefore moves from “which drawing package?” to “which system does the delivery team open first?”

## Market narrative
The industry digitised documents before it digitised decisions. The next step is not another document repository or another drawing application. It is a continuously current project-intelligence layer that allows teams to act from the same site truth.

## Industry narrative
Historically: Site → Office → CAD/Planner → Review → Revision → Reissue.  
With SAMI: Identify → Plan → Update → Collaborate → Deploy.

The value is not removing professional disciplines. It is removing avoidable translation latency between them.

---

# 2. Product Strategy

SAMI should be perceived by each audience through the outcome they control:

- **Site Engineers:** the fastest route from field reality to a controlled project decision.
- **Planners:** a live source of spatial, access and constraint context rather than a late drawing request.
- **Project Managers:** an exception-led view of what changed, what is blocked and what requires action.
- **Utilities:** a source-aware coordination environment that distinguishes reference information from verified records.
- **Tier 1 Contractors:** a governed project-intelligence layer across teams and packages.
- **Infrastructure Contractors:** a field-to-office delivery system for access, logistics, temporary works context and project evidence.
- **Rail / Renewables / Civils / Transmission:** a spatial operating layer capable of handling distributed assets, access constraints, OHL/service risk and repeatable project workflows.
- **Enterprise Customers:** a portfolio intelligence system with governance, integrations, auditability and reusable organisational knowledge.

## Product principles
1. **Intelligence before canvas.** Open on project state, not an empty map.
2. **Exception before exploration.** Surface what changed and what needs attention.
3. **One project object.** Maps, plans, routes, assets, evidence and issues are views of the same project.
4. **Provenance everywhere.** Reference, community, imported, surveyed and operator-confirmed information must never look equivalent.
5. **Professional judgement remains explicit.** SAMI assists; it does not silently convert uncertain data into instruction.
6. **Field speed, enterprise control.** Capture must be simple; governance must be strong.
7. **Progressive depth.** A new user can orient in seconds; specialists can access deeper controls without cluttering the primary journey.

## Ecosystem
The long-term product is eight connected modules sharing one project graph:

**Site Intelligence** supplies physical context and evidence.  
**Access Planning** links routes, entrances, restrictions and vehicle assumptions.  
**Asset Management** controls temporary/permanent objects and their properties.  
**Utility Intelligence** consolidates utility and OHL references with provenance.  
**Community Intelligence** adds verified cross-project observations.  
**Risk Management** turns constraints and uncertainty into review items.  
**Project Delivery** controls revisions, outputs, collaboration and issue state.  
**Ask SAMI** interprets that shared context and helps users find the next relevant action.

No module should become a silo; every module writes to and reads from the same project intelligence model.

---

# 3. UX Strategy

## First ten seconds
The opening project surface must answer four questions before the user touches the map:

1. **What matters?** Project health, major constraints and current decision state.
2. **What changed?** Latest project/revision/team changes.
3. **What needs attention?** Exceptions, missing information and unverified references.
4. **What should happen next?** A single contextual recommendation with a direct action.

BETA v1 implements this as the new **Intelligence** home surface. The map is reached through Explore and Site Plan rather than serving as the product homepage.

## Information architecture
**Intelligence → Explore → Route → Site Plan → Create/Assets → Review/Issue.**

Project details, source catalogue, history, settings and appearance are system functions rather than competing primary workflows.

## Desktop / tablet
Use a stable command layer, high information density and inspector-style contextual controls. Side panels should behave like professional design software: predictable location, no overlapping controls, persistent project context, direct manipulation on canvas.

## Mobile
Do not attempt to reproduce desktop density. Preserve the same project model while switching to prioritised cards, bottom/edge actions and single-purpose drawers. Field capture, route/access review, notes, photos and Ask SAMI should be first-class. Complex editing remains possible but progressive.

## Collaboration
Every meaningful change should ultimately have actor, time, source and revision context. “Live collaboration” is not cursor theatre; the useful product is confidence that everyone is looking at the current project state and can see what changed.

---

# 4. Visual Design Strategy

## Brand personality
Calm authority, technical confidence, restraint, precision and momentum. It should look expensive because it is organised, not because it is ornamental.

## Design language
Professional dark/light work surfaces, restrained depth, fine borders, compact metadata, strong typographic hierarchy and a controlled green intelligence accent. Safety/constraint colours remain semantically reserved; they are not decorative brand colours.

## Palette
- Graphite / near-black: primary working environment.
- Warm neutral/light canvas: optional daylight mode.
- SAMI green: action, intelligence and active state.
- Cyan: information / connected state.
- Amber: attention / verification required.
- Red: blocking condition only.
- Magenta/purple: OHL reference identity where already established in the mapping system.

## Typography
Use a modern system sans stack for reliability and PWA portability. Display hierarchy should rely on weight, tracking and scale rather than multiple font families. Numerical/project metadata should remain highly legible at compact sizes.

## Grid and spacing
Base spacing rhythm: 4 px with primary increments of 8/12/16/24/32. Dashboard content follows responsive 12-column logic on desktop, collapsing to 6/4/1 logical columns according to available width. Controls must retain minimum touch sizes on tablets/phones.

## Iconography
Simple geometric system icons are appropriate for controls; **project imagery itself should remain rendered/meaningful**, not decorative geometry. Icons should represent actions consistently across map, plan and intelligence surfaces.

## Motion
Motion communicates state change, hierarchy and causality. Use acceleration/deceleration, avoid cheap constant-speed transitions, and respect reduced-motion settings. Cinematic branding may be expressive; production workflows should be fast and restrained.

## Accessibility
Keyboard access where applicable, visible focus state, semantic contrast, non-colour status cues, readable minimum sizing, reduced-motion support and labels for compact icon controls. Safety-critical state must never be encoded by colour alone.

---

# 5. Dashboard Strategy

BETA v1's Project Intelligence dashboard contains:

- Project Health
- Constraints
- Utility References / Conflicts
- OHL Intelligence
- Access Status
- Project Updates / saved state
- Team Activity
- Community Intelligence
- Materials Status
- Site Intelligence / evidence
- Ask SAMI Insight

The dashboard is not a passive KPI wall. Each card should resolve to evidence or an action. The command strip is deliberately phrased as **What matters / What changed / What needs attention / What should happen next**.

Future enterprise dashboards add portfolio roll-ups, package ownership, unresolved change counts, source freshness, verification debt, delivery readiness and cross-project recurring constraints.

---

# 6. Ask SAMI Strategy — Digital Site Engineer

Ask SAMI must not behave like a generic chatbot pasted onto a map.

## Role
A project-aware planning assistant that can interpret the current project, identify missing context, explain constraints, navigate users to relevant workflows and summarise controlled project information.

## Personality
Concise, technically literate, calm and transparent about uncertainty. It should use construction language naturally without pretending to be the responsible engineer.

## Trust framework
Every response should be capable of expressing:
- what project evidence it used;
- whether information is mapped reference, community report, imported utility record, survey evidence or user-entered data;
- freshness/date where available;
- uncertainty or missing information;
- which professional verification is still required.

It provides **guidance, not instruction**, and must not fabricate site conditions or imply that public/reference data replaces survey, operator information or professional judgement.

## Interaction model
Recommended project prompts are generated from project state rather than generic suggestions: “What needs attention?”, “What changed?”, “Summarise OHL references”, “What is missing before issue?”, “Summarise panel quantities”, “What access information is incomplete?”

BETA v1 adds deterministic project-aware answers for these high-confidence project questions before falling back to the existing AI path.

---

# 7. Community Intelligence Strategy — The Waze of Construction

## Contribution model
Users may contribute ground conditions, hazards, utility discoveries, access restrictions, bridge/height/weight limits, temporary restrictions, delivery issues, lessons learned, preferred routes and site observations.

## Trust states
**Unverified → corroborated → project-confirmed → operator/survey-confirmed.**

Every observation retains contributor context appropriate to the organisation, timestamp, location, category, evidence, expiry/freshness and verification state. Conflicting observations are not silently overwritten.

## Growth loop
More projects create more observations → more observations improve pre-planning → better pre-planning creates user value earlier → more teams adopt SAMI → more verified observations enter the network.

## Incentives
The strongest incentive is operational reciprocity, not gamification: contribute once, avoid rediscovering the same restriction repeatedly. Enterprise teams also benefit from organisational lessons learned and recurring route/site intelligence.

## Governance
Organisation-private, project-shared and network-shared scopes must be distinct. Sensitive infrastructure information requires role-based access, audit, retention rules and contractual/data-owner controls.

## Why it becomes difficult to copy
The interface can be copied. A trusted history of geospatial construction observations linked to project outcomes, sources, verification and recurring workflows cannot be recreated quickly. The moat is the accumulated **construction knowledge graph plus trust history**, not the reporting button.

BETA v1 exposes the contribution/trust framework and stores prototype observations locally until a governed connected service exists.

---

# 8. Economic Moat Analysis

Major moats, in increasing long-term importance:

1. **Workflow embedding:** project teams repeatedly perform site, access, OHL, temporary access, asset and review workflows in SAMI.
2. **Industry domain model:** construction-specific objects, relationships, rules and terminology reduce generic-tool substitutability.
3. **Historical project data:** every completed project improves organisational recall and benchmarking.
4. **Utility/OHL/source integration:** normalised provenance across fragmented sources saves repeated discovery and interpretation work.
5. **Project intelligence graph:** links location, constraint, asset, route, evidence, decision and revision.
6. **Community network:** trusted observations become more useful with scale.
7. **AI context advantage:** Ask SAMI can reason over structured project context rather than generic text alone.
8. **Proprietary derived datasets:** recurring restrictions, delivery patterns, access outcomes and validated site knowledge.

The strongest eventual moat is the **verified site-intelligence network / construction knowledge graph** because it compounds across projects and organisations. It must, however, be earned through trust and governance rather than assumed from user volume.

---

# 9. Marketing Strategy

## Homepage hero
**ASK SAMI**  
**Know the site. Understand the constraints. Deliver the project.**  
One operating system for site intelligence, access, planning, project evidence and delivery decisions.

Secondary copy: “Your map, site plan, route, constraints and quantities are no longer separate files. SAMI keeps them inside one live project context — and shows your team what needs attention next.”

## Core value propositions
- One current project picture instead of disconnected tools and files.
- Faster field-to-office decisions.
- Source-aware visibility of constraints and uncertainty.
- Route, access, site planning and temporary access context in one workflow.
- Controlled project history and shareable outputs.
- Ask SAMI turns project data into useful next actions.

## Sales pitch
“Most teams can draw the site. The expensive part is everything around the drawing: finding information, checking access, understanding constraints, converting field knowledge into office outputs, revising it and making sure everyone has the latest picture. SAMI makes that whole loop the product.”

## Investor pitch
“SAMI is building the Site Delivery Operating System: a project intelligence layer that starts with spatial planning and expands into access, utility/OHL intelligence, field evidence, collaboration and a verified construction knowledge network. The wedge is immediate workflow utility; the compounding asset is the structured site-intelligence graph.”

## LinkedIn / industry message
Stop marketing screenshots of drawing tools. Demonstrate decisions: a changed entrance, an OHL reference, a vehicle restriction, a quantity change, a field observation — and show SAMI connecting each to the current project picture.

## Conference message
**From drawing production to live site intelligence.** Demonstrations should begin on the Intelligence dashboard, move into a real constraint or access issue, resolve it in the map/plan workflow and return to the changed project state.

## Video concepts
1. “The seven systems behind one site decision” → collapse into SAMI.
2. “What changed overnight?” → Intelligence dashboard surfaces exceptions.
3. “Send me the SAMI” → one project object contains route, site plan, constraints, evidence and current issue state.

## Customer success structure
Before: fragmented workflow and decision latency.  
Trigger: specific project problem.  
SAMI workflow: identify → plan → update → collaborate → deploy.  
Measured outcome: time-to-decision, revision cycle reduction, fewer information handoffs, improved planning completeness.  
Trust proof: source/verification state and professional review retained.

---

# 10. Growth Strategy

## Year 1 — Win the workflow
Make site planning, access, Trakway/ground protection, OHL/reference constraints, evidence and controlled outputs exceptionally reliable. Instrument product usage. Establish design partners and measurable workflow ROI. Enterprise identity, permissions and data governance become prerequisites for wider rollout.

## Year 3 — Become project intelligence
Connected collaboration, integrations, organisation standards, source connectors, structured project change feeds and Ask SAMI project reasoning. Build private organisational intelligence before pursuing broad public/community sharing.

## Year 5 — Build the network
Verified cross-project intelligence, governed community reporting, recurring access/ground/constraint knowledge, contractor/operator partnerships and portfolio analytics. “SAMI project” becomes a recognised deliverable object.

## Year 10 — Become infrastructure memory
A mature construction knowledge graph links sites, routes, conditions, constraints, delivery outcomes and verified lessons across the infrastructure ecosystem. Drawings remain outputs, but SAMI is the system teams consult to understand the project.

---

# 11. Investment Narrative

## Thesis
Construction has large software spend but persistent fragmentation at the point where field reality becomes a delivery decision. SAMI's wedge is a useful spatial/project workflow; its platform opportunity is to become the common operational context across project participants.

## TAM framework
A defensible TAM should be built bottom-up rather than quoted as an unsupported headline: target organisations × addressable operational/site users × realistic annual software value, plus enterprise data/integration modules. Adjacent spend pools include construction management, geospatial/site planning, field productivity, utility/location intelligence, logistics/access and AI-assisted knowledge workflows. A formal fundraising case should validate each segment with current third-party market data before publishing a numerical TAM.

## Revenue architecture
Per-user professional subscriptions; project/workspace plans; enterprise licences; private organisation intelligence; premium data/connectors; portfolio analytics; governance/API/integration tiers; and eventually network/data products where permissions and data rights allow.

## Defensibility
Workflow depth + project graph + verified historical intelligence + enterprise governance + community network effects. AI alone is not the moat.

## Expansion
Temporary access and site planning → project intelligence → enterprise standards and integrations → verified cross-project intelligence → sector-specific modules for rail, transmission, renewables and civils.

## Acquisition potential
Strategic relevance could exist for construction software, geospatial, engineering design, equipment/rental, infrastructure data and enterprise collaboration companies. The stronger objective is to build a standalone category leader; acquisition is an option, not the product strategy.

## Long-term valuation logic
Value increases if SAMI shifts from a replaceable project tool to a system of record/context with recurring enterprise revenue, high workflow retention, proprietary structured data and network effects. Valuation claims should be tied to achieved ARR, retention, gross margin, adoption breadth and data/network defensibility rather than aspirational multiples.

---

# 12. Brutal Product Critique

## 1. The proposition can become too broad
“Operating system for construction” is meaningless if the core workflows are not best-in-class. **Response:** earn the category through a narrow set of extremely reliable site-delivery jobs before adding modules.

## 2. Public OHL/utility data creates trust and liability risk
Mapped data is incomplete and not suitable as sole safety-critical evidence. **Response:** provenance, verification state, freshness, source caveats, imports from authoritative/operator datasets and explicit professional verification. Never visually imply completeness.

## 3. AI can damage trust faster than it creates value
A fluent but unsupported site answer is unacceptable. **Response:** project-grounded responses, source visibility, confidence/unknown states, safe refusal to infer missing site conditions and auditable recommendation logic.

## 4. Community data can become noise
Unverified reports, stale restrictions and duplicated hazards can make the product worse. **Response:** verification states, expiry, corroboration, reputation, conflict handling and scoped sharing.

## 5. Feature density can recreate the CAD-tool perception
Adding more map buttons undermines the repositioning. **Response:** intelligence-first IA, task-based workflows and progressive disclosure. The canvas remains powerful but no longer defines the homepage.

## 6. Enterprise adoption requires governance
A PWA prototype can prove value but enterprise deployment needs identity, role permissions, backups, retention, audit, security review, data residency decisions, APIs and support. **Response:** design the enterprise control plane before large deployments.

## 7. Offline/poor-connectivity sites expose architecture weaknesses
Reference lookups and collaboration may fail exactly where field teams need them. **Response:** explicit offline state, cached project context, resilient queues and reconciliation on reconnect.

## 8. Cross-device collaboration changes the technical problem
Local project storage is excellent for prototyping but not sufficient for a shared operating system. **Response:** transactional backend, conflict/version model, presence only where useful, immutable audit events and controlled issue/revision states.

## 9. “Waze for construction” has a cold-start problem
The network has little value without contributors. **Response:** make private project/organisation intelligence valuable before network effects; sharing is an incremental benefit rather than the initial reason to buy.

## 10. Commercial proof must be measured
Design quality and vision do not prove ROI. **Response:** instrument time-to-plan, revision cycles, field-to-office handoff time, information retrieval, avoided duplicate surveys/visits where legitimately attributable, and user retention.

---

# 13. Ten-Year Vision

A project starts as a SAMI record before anyone produces the first formal drawing. Site boundaries, access, known services, OHL references, routes, evidence and constraints establish the first intelligence state. Field teams improve it. Planners and engineers refine it. Controlled documents and drawings are issued from it. Changes return to the same context. Verified observations contribute to organisational and, where permitted, industry intelligence.

Ask SAMI is no longer a chat window. It is the interface to that project memory: “What changed?”, “What stops this delivery?”, “Which constraints are unverified?”, “What did we learn on similar sites?”, “Which drawing reflects the current project state?”

The destination is a simple industry habit:

> **Send me the SAMI.**

That request means: send me the current project truth — context, evidence, route, plan, constraints, quantities, changes, source provenance and the controlled outputs derived from it.

The drawing does not disappear. It becomes one component of a substantially more valuable intelligence system.
