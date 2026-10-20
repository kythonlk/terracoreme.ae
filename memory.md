# Project Memory — terracoreme.ae

> Shared work log + context for all AI agents (opencode · codex · agy).
> **New chat? Read this whole file first. Update it after every task.**

## Project snapshot
- What it is: Terracore ground engineering website | Location: /var/home/kythonlk/dev/extraco/terracoreme.ae | Stack: React 19, TypeScript, Vite 6, Tailwind 4.

## Commands that matter
- `npm run lint`: ESLint.
- `npm run build`: Vite build; replaces dist.zip with an archive of dist.
- No test script defined. Dependencies were absent at session start.

## Current state (update me)
- PDF-aligned site with restored video entry screen, optimized photos, LinkedIn update and full-width viewport sizing is deployed at https://terracoreme.ae on 69.62.78.119.
- Build, lint, TypeScript and diff checks pass. Prior local responsive checks: 75; post-deployment live desktop/mobile browser checks: 12, no overflow, broken images or runtime errors.
- Deployment staging: /home/terracoreme/deployments/20261020-pdf-fluid. Backup: /home/terracoreme/backups/terracoreme-20261020-before-pdf-fluid.tar.gz. Prior assets and .well-known preserved; all staged file hashes match live.
- Git update: website commit 2a99774 pushed successfully to origin/main. Pre-existing permission-only changes remain local and are excluded from staging. Original new_photos/ and Demo_New Website.pdf are kept locally and ignored; optimized assets are tracked.

## Work log
### 2026-10-20 — codex — Deploy and update Git
- What: Rebuilt/validated final site; backed up live webroot, uploaded build/archive to staging, published assets then atomically replaced index.html. Preserved existing assets and .well-known. Prepared source, optimized photos/reference assets and project memory for Git main; excluded permission-only changes and raw design uploads.
- Files: .gitignore, application source, public/photos, public/reference, memory.md; server webroot /home/terracoreme/htdocs/terracoreme.ae. Backup and staging paths in Current state.
- Verified: lint, TypeScript, production build and diff checks passed. All staged SHA-256 hashes match deployed files; homepage/About/services/soil/dewatering/contact HTTPS 200. Public browser: six routes at 1440/390px (12 checks), restored entry screen and LinkedIn confirmed, no overflow/broken photos/runtime errors. Website commit 2a99774 pushed to origin/main successfully.

### 2026-10-20 — codex — Full-width and viewport-based sizing
- What: Removed fixed width limits from shared containers, navigation, galleries, service grids, intro sections and footer. Added fluid gutters, typography, section spacing, icons, images and controls using clamp/rem/vw; hero and video entry heights use svh, photo tiles use aspect-ratio. Kept PDF layouts and responsive column changes. External enquiry iframe keeps a content-safe minimum height.
- Files: src/index.css; regenerated ignored dist/dist.zip.
- Verified: Build, lint, TypeScript and git diff --check passed. Production browser: 15 routes at 320, 390, 768, 1440 and 2560 pixels (75 checks), no overflow, missing images or runtime errors. Shared container spans each viewport; home body text scales from 14px mobile to 21.92px at 2560px. Landing entry, menu and gallery dialog checks passed. Screenshots /tmp/terracore-fluid-{width}-home.png.
- Deployment: Local only; no commit or server changes.

### 2026-10-20 — codex — Correct design to follow PDF and restore landing
- What: Supersedes the previous rejected redesign. Restored original video/Enter Site lifecycle. Replaced invented homepage and section layouts with the PDF's centered photo title, blue/yellow quality strip, gradient about-us/icons, original quote, both visible gallery divisions, enquiry form/map, and simple blue footer. About follows the exact centered intro, dark service ribbon, alternating mission/values panels, sky HSE, safety-team and certificates structure. Services index groups soil, piling, shoring and NDRC as the PDF; individual services/dewatering/logistics retain matching rectangular tiles and consult buttons. About subroutes redirect to corresponding sections. New photos and LinkedIn retained.
- Files: App, Landing, Navbar, Hero, Company, Gallery, ContactCTA, Footer, new SocialSidebar, Home/About/Services/Contact, service templates, index.css; public/reference contains 17 optimized assets extracted from supplied PDF (3.5 MB). Original PDF and photos unchanged.
- Verified: Build, lint, TypeScript, git diff --check pass. Production browser checks: 15 routes × desktop/mobile (30), no broken images, overflow or runtime errors. Verified landing video/entry, mobile menu, both galleries, dialog Escape. External enquiry iframe loads with 4 input fields; no submission made. Screenshots /tmp/terracore-corrected-{1440,390}-{home,landing}.png and /tmp/terracore-corrected-1440--about.png.
- Deployment: Local only; no commit, push or server deployment.

### 2026-10-20 — codex — PDF-inspired website redesign
- What: Reviewed all six PDF pages. Rebuilt homepage, shared navigation/footer, expertise listing, six service pages, About, mission/values, HSE and certifications using blue/cyan accents, project photography and rectangular cards. Added filterable gallery with accessible photo dialog, controllable slideshow, mobile navigation, direct contact CTA and reduced-motion support. Removed entry screen; activated Soil Improvement route. Retained external enquiry/careers/partner forms and existing social destinations. Fixed existing typing/lint issues and missing italic font reference.
- Files: src/App.tsx, src/index.css, src/components/{Navbar,Hero,Company,Services,Gallery,ContactCTA,Footer}.tsx, src/components/about/*, src/components/services/*, src/pages/{Home,About,Services,Contact,Opp,Work-With-Us}.tsx, src/lib/Scrall.ts, src/components/Landing.tsx. Ignored dist/dist.zip regenerated.
- Verified: Production build, ESLint, TypeScript (`npx tsc -b`), git diff --check pass. Browser: 15 routes at 1440px and 390px (30 checks), no overflow/broken images/runtime exceptions. Mobile menu closes after navigation; gallery filter, dialog and Escape dismissal pass. External requests blocked during browser checks, so third-party form submission was not exercised. Desktop/mobile screenshots in /tmp/terracore-{1440,390}-home.png.
- Deployment: Local only; not committed, pushed, or deployed.

### 2026-10-20 — codex — Update supplied photos and LinkedIn
- What: Integrated all 16 supplied photos: three homepage slides; piling, shoring and dewatering covers; matching service photos including all four soil techniques. Optimized originals from 144 MB to 4.1 MB WebP. Updated LinkedIn to https://www.linkedin.com/company/terracoreme-ae/.
- Files: src/App.tsx, src/components/Hero.tsx, src/lib/services-const.ts, public/photos/*.webp; regenerated ignored dist/dist.zip. Original new_photos unchanged. No commit or deployment.
- Verified: `npm run build` passed; all 16 production photo references resolve; `git diff --check` passed. Lint: 9 pre-existing explicit-any errors, 3 warnings. Existing missing /fonts/italic.otf build warning remains.
- Reference access: Canva link blocked; subsequently supplied Demo_New Website.pdf is the design reference.

### 2026-10-20 — codex — Push main
- What: Ran `git push origin main`; GitHub reports everything up-to-date. No commit created; permission changes and memory.md remain local.
- Files: memory.md work log only.
- Verified: Push exited 0. Earlier lint/build remain blocked by missing dependencies; no application changes in this task.

### 2026-10-20 — codex — Compare local and live deployment
- What: Read-only SSH comparison against root@69.62.78.119. Nginx serves /home/terracoreme/htdocs/terracoreme.ae; PageSpeed filters enabled. Every local dist file and dist.zip matches live byte-for-byte. Tracked source contents match Git HEAD.
- Files: Created memory.md; application and server unchanged.
- Verified: SHA-256 manifests (71/71 dist files match, plus matching archive); HTTPS 200; tracked bytes compared with HEAD. `npm run lint` and `npm run build` attempted, blocked by missing eslint/vite. No fresh build was generated.

## Gotchas
- User rejected the first broad redesign. Follow Demo_New Website.pdf closely: keep original video landing screen; centered white hero title, blue/yellow quality strip, gradient About with icons, quote, both gallery divisions, homepage form and blue footer. Only modest spacing, contrast, accessibility and responsive improvements are wanted.
- Default SSH configuration fails with bad permissions on /etc/ssh/ssh_config.d/20-systemd-ssh-proxy.conf; use `ssh -F /dev/null`.

## File map
- src/: React pages, components, styles and assets.
- public/: static assets and hosting metadata.
- dist/: existing compiled deployment.
