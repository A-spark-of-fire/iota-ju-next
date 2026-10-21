# IOTA JU website redesign

This is the separate local Git repository for planning and implementing the redesigned IOTA JU website. The redesign is planned as a Next.js App Router and Payload CMS application. The public site, CMS admin, authentication and content APIs will run in one Vercel project. PostgreSQL and object storage will be separate managed services.

## Current state

This repository currently contains the team handbooks and architecture decisions. The application has **not** been scaffolded yet. Sourasish owns the initial app scaffold. No GitHub remote, paid provider, production resource or production domain has been configured.

## Read the right guide

- [Orchestrator guide](main.tex): decisions, team coordination, phase gates, integration and release ownership.
- [Sourasish: platform and release integration](docs/assignments/sourasish.tex)
- [Ritendu: CMS, permissions and content data](docs/assignments/ritendu.tex)
- [Pritish: design and public website](docs/assignments/pritish.tex)
- [Shreyam: source inventory, migration and media](docs/assignments/shreyam.tex)

The name-to-workstream mapping follows the member order in the request. Pritish's handbook uses shorter, sequential steps and defines technical terms as they appear.

## Shared project decisions

- Keep the existing website live and available for rollback.
- Preserve approved text, people, departments, roles, project ordering, reports, links, images and existing videos.
- Do not copy original media archives, production secrets, participant data or the legacy workshop Q&A backend into this repository.
- Keep Next.js and Payload in the same application. Do not add a second Express or FastAPI service.
- Use a managed PostgreSQL database and object storage/CDN. Provider choice and spend limit must be approved before provisioning.
- Use a supported Node.js LTS release (Payload currently requires at least 20.18.1) and pnpm. Sourasish records the exact compatible package versions in the lockfile when implementation starts.

## Reading and compiling the handbooks

Each assignment is a standalone LaTeX file. The files use a plain black-and-white article layout with no custom images or color theme. Open the file in Codex's LaTeX editor to preview and compile it. If compiling locally, use a LaTeX distribution with the standard packages listed in each file's preamble, then run pdflatex main.tex or point pdflatex at the selected member file.

## Start implementation

1. The orchestrator records the remote-repository decision, confirms Vercel/database/storage ownership and budget, and assigns the first phase.
2. Sourasish creates the application foundation in this repository while retaining the existing docs/ and main.tex.
3. The members work from their task IDs and file ownership tables. Each PR includes its checks and a staging demonstration when relevant.
4. Do not switch the public domain until the orchestrator approves the release gate.
