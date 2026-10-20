# MyPortfolio

Personal portfolio of **Badrul Amin**, an infrastructure engineer focused on Linux, cloud platforms, and automation. Built with React and Vite, the site brings together professional experience, technical skills, projects, photography, and contact information.

**Website:** [badrulamin.com](https://badrulamin.com) · **GitHub:** [KingBard77](https://github.com/KingBard77)

## Features

- Responsive, single-page layout with section navigation.
- Animated introduction, hero, and section reveals with reduced-motion support.
- Professional experience and education timelines with detail dialogs.
- Categorized technical skills and services.
- Filterable project showcase with pagination, previews, and project details.
- Photo gallery with optimized previews, a keyboard-accessible viewer, and original downloads.
- Client testimonials and an EmailJS contact form with submission feedback.
- Resume, cover letter, and social profile links.
- Shared dialog handling for focus containment, Escape, backdrop dismissal, and scroll locking.

## Tech Stack

| Area                 | Technology                |
| -------------------- | ------------------------- |
| Application          | React 18, JavaScript, JSX |
| Build tooling        | Vite 8                    |
| Styling              | CSS, responsive layouts   |
| Animation            | Framer Motion, GSAP       |
| Navigation and icons | React Scroll, React Icons |
| Testimonials         | Swiper                    |
| Contact delivery     | EmailJS                   |
| Code quality         | ESLint 10, Prettier       |
| Containers           | Docker, nginx             |

## Getting Started

### Requirements

- Node.js 24, matching the project's Docker images.
- npm.
- Git.
- Docker with Compose support, if using containers.

### Local Development

```bash
git clone https://github.com/KingBard77/MyPortfolio.git
cd MyPortfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The current application requires no local environment variables. An optional `.env.example` is provided for future local configuration; `.env` and its environment-specific variants are ignored by Git.

### Build and Preview

```bash
npm run build
npm start
```

The production build is written to `build/`. `npm start` previews that output at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command                | Purpose                                                                |
| ---------------------- | ---------------------------------------------------------------------- |
| `npm run dev`          | Start the development server with hot reload.                          |
| `npm run build`        | Generate the production site in `build/`.                              |
| `npm start`            | Preview the existing build on port 3000.                               |
| `npm run preview`      | Preview the existing build using Vite's configured preview port.       |
| `npm run lint`         | Check source and configuration; fail on warnings.                      |
| `npm run lint:fix`     | Apply available ESLint fixes.                                          |
| `npm run format`       | Format source and tooling configuration.                               |
| `npm run format:check` | Check formatting without changing files.                               |
| `npm test`             | Print the current test placeholder; no automated tests are configured. |

Before committing application changes:

```bash
npm run lint
npm run format:check
npm run build
```

To check production dependencies:

```bash
npm audit --omit=dev --audit-level=moderate
```

## Project Structure

```text
MyPortfolio/
├── conf/                    # Workstation deploy settings and Docker configuration
│   └── docker/
│       ├── local/           # Development Dockerfile and Compose file
│       └── prod/            # Production Dockerfile, ignore file, and nginx configuration
├── public/                  # Public assets copied directly into the build
│   └── icon.png
├── src/
│   ├── assets/              # Images and documents grouped by section
│   ├── components/          # Portfolio sections and shared components
│   │   ├── abilities/
│   │   ├── about/
│   │   ├── background/
│   │   ├── contact/
│   │   ├── footer/
│   │   ├── gallery/
│   │   ├── header/
│   │   ├── intro/
│   │   ├── nav/
│   │   ├── portfolio/
│   │   ├── qualification/
│   │   ├── service/
│   │   ├── shared/
│   │   └── testimonial/
│   ├── motion/              # Shared GSAP configuration and reveal hook
│   ├── App.jsx              # Page composition
│   ├── index.css            # Global styles and design tokens
│   └── main.jsx             # React entry point
├── .env.example
├── .gitignore
├── .prettierrc.json
├── eslint.config.mjs
├── index.html
├── package.json
├── package-lock.json
└── vite.config.mjs
```

Section content lives in local `data/` folders. Section-specific child components live in `components/`; reusable components and hooks live in `src/components/shared/`.

## Customization

| Content                                | Location                                          |
| -------------------------------------- | ------------------------------------------------- |
| Hero, resume, and social links         | `src/components/header/Header.jsx`                |
| Profile and biography                  | `src/components/about/About.jsx`                  |
| Skills                                 | `src/components/abilities/data/abilities.jsx`     |
| Education and experience               | `src/components/qualification/data/`              |
| Services                               | `src/components/service/data/services.jsx`        |
| Projects                               | `src/components/portfolio/data/portfolio.js`      |
| Gallery images and variants            | `src/components/gallery/data/gallery.js`          |
| Testimonials                           | `src/components/testimonial/data/testimonials.js` |
| Contact channels and EmailJS setup     | `src/components/contact/Contact.jsx`              |
| Site metadata                          | `index.html`                                      |
| Global colors, typography, and spacing | `src/index.css`                                   |

Imported assets use two-part lowercase names such as `showcase-grafana.webp`, `logo-kpm.webp`, and `profile-badrulamin.jpeg`. Gallery originals, previews, and viewer images share matching names in separate folders.

The contact form currently uses the portfolio owner's EmailJS configuration. To reuse it, configure your own service and template, update the `sendForm` arguments in `Contact.jsx`, and match the template fields to `name`, `email`, `phone`, and `message`.

## Docker

### Development

Run from the repository root:

```bash
docker compose --project-directory . -f conf/docker/local/compose.yml up --build
```

The development container mounts the source for hot reload and keeps Linux dependencies in a named volume. It serves the site at [http://localhost:3000](http://localhost:3000).

Stop the development containers with:

```bash
docker compose --project-directory . -f conf/docker/local/compose.yml down
```

`conf/deploy.local.conf` stores project settings used by the owner's workstation helpers. Plain Docker Compose uses port 3000 by default; set `PORT` when invoking Compose to override it.

### Production

```bash
docker build -f conf/docker/prod/Dockerfile -t myportfolio:production .
docker run --rm --name myportfolio -p 127.0.0.1:8080:80 myportfolio:production
```

Open [http://localhost:8080](http://localhost:8080).

The production image builds the application with Node.js and serves the generated files through nginx. `conf/docker/prod/Dockerfile.dockerignore` restricts build inputs and excludes local environment files, editor metadata, agent instructions, logs, and development artifacts.

For deployment without Docker, serve `build/` through nginx or a static hosting service. The live site syncs `build/` to Amazon S3 through the owner's workstation helper, configured in `conf/deploy.prod.conf`. Keep `public/` limited to files intended for visitors because Vite copies its contents directly into the build.

## Current Limitations

- Automated tests are not configured yet; validate affected interactions in a browser alongside lint and build checks.
- Skills and Testimonials load near the viewport; their section anchors remain available before loading. EmailJS loads when the contact form is submitted.
- Full-resolution gallery originals are retained for downloads; previews and viewer images are used for display.

## Author

**Badrul Amin** · [Website](https://badrulamin.com) · [GitHub](https://github.com/KingBard77) · [LinkedIn](https://www.linkedin.com/in/badrul-amin-762000225/)

## License

No license file is currently included in this repository.
