# Quality Soft 🚀

<p align="center">
  <img src="./src/icons/logo.svg" width="128" height="128" alt="Quality Soft logo" />
</p>

<p align="center">
  <strong>A company landing page with an admin panel to manage its own content.</strong><br />
  Services, projects, team and contact messages, all editable without touching code.
</p>

<p align="center">
  <img alt="Astro" src="https://img.shields.io/badge/Astro-SSR-BC52EE?style=for-the-badge&logo=astro&logoColor=white" />
  <img alt="Prisma" src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="Status" src="https://img.shields.io/badge/status-v0.0.1-yellow?style=for-the-badge" />
</p>

---

## ✨ What is Quality Soft?

Quality Soft is a showcase site for a software company. Visitors see the services, projects, team and a contact form. Admins sign in and manage all of that from a panel, so the content lives in a database instead of the code.

## 🧩 Features

### 🌐 Public site
- Landing page with the company information.
- Detail pages for each **service** and each **project**.
- **Contact form**: messages are saved in the database for the admins to read.

### 🛡️ Admin panel
- Sign in with [Auth.js](https://authjs.dev/) (`auth-astro`) and hashed passwords (`bcryptjs`).
- Create, edit, view and enable or disable:
  - **Services**
  - **Projects**, linked to a service, with client, dates and category
  - **Team members**
  - **Users**, with `USER` and `ADMIN` roles
- **Contact inbox**: mark each message as read or answered.
- Dashboard with quick stats.
- A seed page (`/seed/seed-database`) loads demo users and technologies.

## 🧱 Tech stack

| Layer | Tools |
| --- | --- |
| Framework | [Astro](https://astro.build/) in server mode |
| Database | PostgreSQL with [Prisma](https://www.prisma.io/) |
| Styling | Tailwind CSS, `astro-icon` with Material Design Icons, SweetAlert2 |
| Auth | `auth-astro` (Auth.js), `bcryptjs` |
| Language | TypeScript |
| Deploy | Netlify adapter |

## 🗄️ Data model

`User`, `Service`, `Project`, `Technology`, `TeamMember`, `ContactMessage` and `SiteInfo`, defined in [`prisma/schema.prisma`](./prisma/schema.prisma). A project belongs to one service, and every record has a `status` flag for soft enabling and disabling.

## 🗂️ Project structure

```text
prisma/schema.prisma   Database schema
src/
├── actions/           Astro Actions: contacts, projects, services, team-members, technologies, users
├── modules/           UI split by area: admin, public, auth, shared
├── pages/             Routes: /, /services, /projects, /auth/signin, /admin/*
├── seed/              Demo users and technologies
└── middleware.ts      Route protection
```

## 🚀 Getting started

### Requirements
- Node.js 18.17 or newer (Astro 4)
- A PostgreSQL database

### Setup

```bash
git clone https://github.com/pxnditxyr/quality-soft.git
cd quality-soft
npm install
cp .example.env .env
npx prisma db push
npm run dev
```

Then open `/seed/seed-database` once to load the demo users and technologies, and sign in at `/auth/signin`.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string used by Prisma |
| `AUTH_SECRET` | Secret used by Auth.js to sign sessions |
| `AUTH_TRUST_HOST` | Set to `true` when running behind a proxy or on Netlify |

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run prisma:generate` | Generate the Prisma client |
| `npm run build` | Generate the Prisma client and build |
| `npm run preview` | Preview the production build |

## 🗺️ Status

Version `0.0.1`. The public site and the admin panel described above are implemented. Last updated in November 2024.

## 📄 License

No license file is included in this repository yet.
