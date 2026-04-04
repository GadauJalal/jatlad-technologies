# Local Development Setup

## Prerequisites

Ensure the following are installed on your machine:

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 20.x LTS | [nodejs.org](https://nodejs.org) |
| npm | 10.x+ | Bundled with Node.js |
| Git | 2.40+ | [git-scm.com](https://git-scm.com) |

> **Note:** Use [nvm](https://github.com/nvm-sh/nvm) (Linux/macOS) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage Node.js versions.

---

## First-Time Setup

### 1. Clone the repository

```bash
git clone <repo-url>
cd jatlad
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your local values. Never commit `.env` to version control.

### 4. Start the development server

```bash
npm run dev
```

The app should be running at `http://localhost:3000`.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | Run TypeScript type checking |

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NODE_ENV` | Yes | `development`, `test`, or `production` |
| `PORT` | No | Server port (default: 3000) |
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `JWT_SECRET` | Yes | Secret key for JWT signing |
| `LOG_LEVEL` | No | `debug`, `info`, `warn`, `error` (default: `info`) |

---

## Project Structure

```
jatlad/
├── .github/
│   └── workflows/       # CI/CD pipeline definitions
│       ├── ci.yml       # Lint, test, build on PRs
│       └── cd.yml       # Deploy to production on main merge
├── docs/
│   └── dev-setup.md     # This file
├── src/                 # Application source code
├── tests/               # Test files
├── dist/                # Production build output (gitignored)
├── .env.example         # Environment variable template
├── .gitignore
├── CONTRIBUTING.md      # Branching strategy and commit conventions
├── package.json
└── README.md
```

---

## Git Setup

Configure your identity before committing:

```bash
git config user.name "Your Name"
git config user.email "you@jatlad.com"
```

We follow **Conventional Commits**. See [CONTRIBUTING.md](../CONTRIBUTING.md) for commit format and branching rules.

---

## Troubleshooting

### Port already in use

```bash
# Find and kill process on port 3000
npx kill-port 3000
```

### Dependency issues

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Database connection errors

- Check `DATABASE_URL` in your `.env` file.
- Ensure the database server is running.
- Run `npm run db:migrate` to apply pending migrations.

---

## Getting Help

- Check existing issues in the project tracker before opening a new one.
- For urgent blockers, reach out in the engineering channel.
