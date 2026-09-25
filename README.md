# Youssef Abdelbaky — Portfolio

Premium personal portfolio for a Digital Automation Engineer (BIM · computational design · AI for AEC).

## Structure
- `Home.dc.html` — landing page (hero, selected work by category, tools, experience & education, stack, contact). Dark/light theme toggle persisted in localStorage.
- `Project.dc.html` — case-study template driven by `?p=<slug>` (e.g. `Project.dc.html?p=bimpulseai`). Includes lightbox gallery, demo-video slot and the BIMPulseAI architecture diagram.
- `content.js` — all copy and data: projects, categories, tools, experience, education, skills.
- `support.js` — runtime required by the `.dc.html` pages.
- `assets/` — screenshots and images referenced from `content.js`.

## Run locally
Serve the folder over HTTP (ES modules won't load from `file://`):

```
npx serve .
# or
python -m http.server 8080
```

Open `http://localhost:8080/Home.dc.html`.

## Editing content
Edit `content.js`. To add a project: append an object to `projects` with `slug`, `kind`, `cat` (one of `categories`), `title`, `short`, `stack`, `metrics`, `problem`, `approach`, `outcome`, and optional `thumb`/`hero`/`gallery`/`demoVideo`.
