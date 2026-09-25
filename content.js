export const projects = [
  { slug: 'bimpulseai', kind: 'Web platform', num: '00', tag: 'AI FOR AEC · MSc THESIS', cat: 'AI for AEC', flagship: true, thesis: true, title: 'BIMPulseAI',
    short: 'An agentic BIM platform: Autodesk Platform Services viewer, Primavera P6 schedules, 4D/5D status, earned value and an AI Copilot that acts on the model — with a human confirming every change.',
    demoVideo: '', thumb: 'assets/bimpulse-card.png', hero: 'assets/bimpulse-copilot-result.png', gallery: [['assets/bimpulse-copilot-prompt.png', 'Natural-language command to the Copilot'], ['assets/bimpulse-copilot-confirm.png', 'Tool run pauses: affected elements are highlighted, user confirms'], ['assets/bimpulse-copilot-result.png', 'Result applied in the APS viewer with a cited summary'], ['assets/bimpulse-dashboard.png', 'Progress dashboard: status breakdown, PV / EV / AC, SPI and CPI']],
    role: 'Researcher, architect & lead developer', stack: ['Blazor', 'ASP.NET Core', 'APS Viewer', 'Semantic Kernel', 'MCP', 'Qdrant', 'SQL Server', 'LangSmith'], year: '2025', client: "Master's thesis · applied research prototype",
    metrics: [['APS + P6', 'model linked to schedule'], ['SPI · CPI', 'earned value, live'], ['Human-in-loop', 'agent actions confirmed']],
    problem: 'Project data lives in silos — the federated model in one viewer, the Primavera schedule in another tool, cost and progress in spreadsheets. Analysis is manual, late and rarely traceable back to the model.',
    approach: 'Two surfaces. The Workspace pairs the APS viewer with Primavera P6 schedule data — activities coloured by status, critical path isolated, SPI in the toolbar — and an AI Copilot that takes voice or text. The Dashboard reports status breakdown, PV / EV / AC, SPI and CPI per project. Copilot agents run on Semantic Kernel with MCP tools over the model (query, theme, isolate, update progress) and a Qdrant retrieval layer over specs and reports; every mutating tool pauses, highlights the affected elements in the viewer and asks for confirmation before applying. Blazor and ASP.NET Core serve the app, SQL Server holds the linked model–schedule graph, LangSmith traces every run.',
    outcome: 'Site teams update progress by speaking to the model; planners see 4D status and earned value without leaving the viewer; every agent action is visible, confirmable and traced. Currently in beta.' },
  { slug: 'analytical-bridge', kind: 'Revit add-in', num: '01', tag: 'STRUCTURAL ANALYSIS INTEGRATION', cat: 'Structural Analysis Integration', title: 'Analytical Bridge',
    short: 'Bi-directional sync of analytical models, sections and loads — replacing a two-week manual rebuild with a 4-minute run.',
    role: 'Lead developer', stack: ['Revit API / C#', 'CSI API', 'Python'], year: '2024', client: 'High-rise residential, 42 storeys',
    metrics: [['4 min', 'full model sync'], ['1,240', 'members mapped'], ['0', 'manual re-entry']],
    problem: 'Structural teams rebuilt the analytical model by hand every time architecture moved a column. Each cycle cost 8–10 engineer-days and introduced transcription errors that surfaced late in coordination.',
    approach: 'A C# add-in extracts Revit analytical members, resolves section families to ETABS frame properties through a versioned mapping table, and pushes geometry, releases and load cases over the ETABS API. Results flow back as shared parameters for tagging and QA.',
    outcome: 'Design iterations dropped from weeks to hours. The mapping table became the office standard and the pipeline now runs nightly on three active towers.' },
  { slug: 'rebar-grasshopper', kind: 'Grasshopper definition', num: '02', tag: 'COMPUTATIONAL DESIGN', cat: 'Computational Design', title: 'Parametric rebar detailing for cores',
    short: 'Grasshopper + Python definition generating code-compliant reinforcement for shear walls from analysis output.',
    role: 'Computational designer', stack: ['Grasshopper', 'Rhino', 'Python', 'Dynamo'], year: '2023', client: 'Mixed-use tower, RC core',
    metrics: [['92%', 'detailing automated'], ['3 d → 3 h', 'per core level'], ['ACI 318', 'checks embedded']],
    problem: 'Core wall reinforcement was detailed floor by floor from spreadsheets, then redrawn in Revit. Any change in wall thickness or demand restarted the loop.',
    approach: 'The definition reads ETABS pier forces, sizes vertical and horizontal bars against ACI 318 limits, resolves laps and boundary elements, and writes native Revit rebar through Dynamo with schedules already populated.',
    outcome: 'Detailers review instead of draw. Quantities are exact at concept stage, which changed how the practice prices RC packages.' },
  { slug: 'shear-wall-wizard', kind: 'Revit add-in', num: '04', tag: 'STRUCTURAL ANALYSIS INTEGRATION', cat: 'Structural Analysis Integration', title: 'Shear Wall Design Wizard',
    short: 'Revit add-in dedicated to shear wall design, integrated with CSi ETABS — pier forces in, designed and detailed walls out, without leaving the model.',
    role: 'Lead developer', stack: ['Revit API / C#', 'CSI API', 'C#'], year: '2024', client: 'RC high-rise · structural teams',
    metrics: [['Revit ⇄ ETABS', 'one workflow'], ['Pier forces', 'read directly from CSi'], ['C#', 'Revit + CSi APIs']],
    problem: 'Shear wall design ran in three places: forces in ETABS, calculations in spreadsheets, reinforcement redrawn in Revit. Every analysis update meant re-exporting, re-checking and re-drawing by hand.',
    approach: 'The add-in maps Revit walls to ETABS piers, pulls pier forces over the CSi API, runs the wall design (axial-flexure interaction, shear, boundary elements) inside a guided wizard, and writes the resulting reinforcement and design parameters back to the Revit elements.',
    outcome: 'A single, repeatable Revit-native workflow from analysis to designed wall — with traceable forces per pier and no manual transcription.' },
  { slug: 'formwork-suite', kind: 'Revit add-in', num: '05', tag: 'BIM AUTOMATION', cat: 'BIM Automation', title: 'Formwork Automation Suite', thumb: 'assets/formwork-iso.png', hero: 'assets/formwork-iso.png',
    short: 'Revit add-in that generates formwork as native DirectShapes, resolves clashes between panels and concrete, and exports full quantities to CSV by category, level and type.',
    role: 'Lead developer', stack: ['Revit API / C#'], year: '2024', client: 'RC construction · contractor teams',
    metrics: [['DirectShapes', 'native Revit geometry'], ['Auto-resolved', 'panel ⇄ concrete clashes'], ['CSV', 'quantities per category · level · type']],
    problem: 'Formwork was planned outside the model — 2D drawings redrawn per pour, quantities counted by hand, and every structural revision restarted the cycle.',
    approach: 'The add-in reads the structural model and generates formwork for each element as Revit DirectShapes. A clash-resolution pass trims and re-fits panels where they intersect each other or the concrete, so the result is a clean, buildable set. It then exports a CSV with the complete formwork quantities broken down by category, level, type and other model parameters.',
    outcome: 'Formwork lives in the model as geometry, not as a separate drawing set — visible in views, clash-free, and quantified in one export that updates whenever the structure changes.' },
  { slug: 'view-manager', kind: 'Revit add-in', num: '06', tag: 'BIM AUTOMATION', cat: 'BIM Automation', title: 'View Manager', thumb: 'assets/view-manager.png', hero: 'assets/view-manager.png',
    short: 'Rule-based creation, naming and sheeting of Revit views — templates, scope boxes, filters and browser organisation applied in one pass.',
    role: 'Developer', stack: ['Revit API / C#'], year: '2023', client: 'Practice-wide standard',
    metrics: [['1 pass', 'views + sheets + templates'], ['Zero', 'naming deviations'], ['All', 'active projects']],
    problem: 'View setup on every new project consumed days of BIM-coordinator time and still drifted from the naming standard.',
    approach: 'A rule set (level × discipline × scale × template) drives view creation, applies templates and filters, assigns scope boxes, and places views on sheets with title-block parameters filled. A re-run audits and repairs existing views.',
    outcome: 'Project setup dropped to under an hour and the standard is enforced by code, not by review.' },
  { slug: 'warning-solver', kind: 'Revit add-in', num: '07', tag: 'BIM AUTOMATION', cat: 'BIM Automation', title: 'Warning Solver', hero: 'assets/warning-solver.png', thumb: 'assets/warning-solver.png',
    short: 'C# Revit add-in for QA/QC — surfaces every modelling warning, highlights the offending elements in the view and resolves common cases automatically.',
    role: 'Developer', stack: ['Revit API / C#'], year: '2024', client: 'Practice-wide QA/QC',
    metrics: [['All', 'warning types catalogued'], ['1-click', 'isolate & highlight'], ['Auto-fix', 'for recurring cases']],
    problem: "Revit's warning dialog lists problems but not where they are or how to fix them. Models accumulated hundreds of warnings that slowed files, broke schedules and were only tackled before deadlines.",
    approach: 'The add-in reads the model warning set, groups it by type and severity, and lets the user select, isolate and zoom to the elements behind each warning. Recurring cases — duplicate instances, slightly-off-axis walls, overlapping room separators, unjoined elements — get scripted fixes with a preview and a transaction the user can undo.',
    outcome: 'Warning counts dropped to a handful on active projects and model audits became a routine, not a crisis.' },
];
export const categories = ['BIM Automation', 'Structural Analysis Integration', 'Computational Design', 'AI for AEC'];
export const tools = [
  { cat: 'BIM Automation', name: 'rvt-batch', desc: 'Headless Revit task runner. YAML in, audited models out.', lang: 'C#', stars: '214' },
  { cat: 'Structural Analysis Integration', name: 'etabs-py', desc: 'Pythonic wrapper for the ETABS API with pandas result frames.', lang: 'Python', stars: '168' },
  { cat: 'Computational Design', name: 'gh-structural', desc: 'Grasshopper components for section design and code checks.', lang: 'C# / GH', stars: '97' },
  { cat: 'AI for AEC', name: 'aec-rag', desc: 'Structure-aware chunking and retrieval for specs and codes.', lang: 'Python', stars: '142' },
  { cat: 'Computational Design', name: 'dyn-rebar', desc: 'Dynamo package for native Revit rebar from analysis data.', lang: 'Dynamo / Python', stars: '81' },
  { cat: 'BIM Automation', name: 'bim-telemetry', desc: 'Exporters and schema for model-health warehousing.', lang: 'C# / SQL', stars: '53' }
];
export const experience = [
  { from: 'Feb 2024', to: 'Present', role: 'Computational Design Engineer | BIM Developer', org: 'Dar Al-Handasah · Cairo, Egypt', text: 'Develop Revit add-ins, analysis integrations and computational workflows for structural and BIM teams across the practice.' },
  { from: 'Dec 2023', to: 'Present', role: 'Teaching Assistant', org: 'Cairo University, Faculty of Engineering · Cairo, Egypt', text: 'Structural Engineering Department — Construction Management specialization.' }
];
export const education = [
  { from: 'Oct 2024', to: 'Present', role: "Master's Degree, Construction Management", org: 'Cairo University, Faculty of Engineering · Cairo, Egypt', text: 'Thesis: BIMPulseAI — agentic AI for BIM-based project control.' },
  { from: 'Sep 2017', to: 'Jun 2022', role: 'Bachelor of Science, Construction Management', org: 'Cairo University, Faculty of Engineering · Cairo, Egypt', text: 'Structural Engineering Department.' }
];
export const skills = [
  { group: 'BIM', items: ['Revit API / C#', 'Dynamo', 'Navisworks', 'IFC'] },
  { group: 'Computational', items: ['Grasshopper', 'Rhino', 'Python', 'Geometry kernels'] },
  { group: 'Analysis', items: ['ETABS', 'SAP2000', 'API automation', 'Code checks'] },
  { group: 'AI & data', items: ['LLMs / RAG', 'Agents', 'Power BI', 'SQL'] }
];
export const writing = [
  { date: 'Jun 2025', title: 'LLM agents for structural QA: what actually works', venue: 'Research note · 14 min' },
  { date: 'Feb 2025', title: 'A versioned section-mapping table is the whole interop problem', venue: 'Essay · 8 min' },
  { date: 'Oct 2024', title: 'Headless Revit at scale: lessons from 14 projects', venue: 'Case study · 11 min' },
  { date: 'Apr 2024', title: 'Parametric reinforcement without fighting the detailer', venue: 'Essay · 9 min' }
];
export const talks = [
  { date: '2025', title: 'Agents in the model: AI-assisted review for AEC', venue: 'Autodesk University' },
  { date: '2024', title: 'Revit ⇄ ETABS: closing the analytical loop', venue: 'BILT Europe' },
  { date: '2023–', title: 'Computational Design for Engineers — 8-week course', venue: 'Guest lecturer, university programme' }
];
