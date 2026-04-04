# Contributing to JATLAD TECHNOLOGIES

## Branching Strategy

We follow **GitHub Flow** — simple, trunk-based delivery.

### Branch Types

| Branch | Purpose | Naming Pattern |
|--------|---------|----------------|
| `main` | Production-ready code. Always deployable. | — |
| `feature/*` | New features or enhancements | `feature/short-description` |
| `fix/*` | Bug fixes | `fix/short-description` |
| `chore/*` | Maintenance, tooling, refactors | `chore/short-description` |
| `docs/*` | Documentation-only changes | `docs/short-description` |
| `hotfix/*` | Urgent production fixes | `hotfix/short-description` |

### Rules

- **Never commit directly to `main`.**
- Branch off `main`, open a PR, get review, merge.
- Delete branches after merging.
- For urgent hotfixes, branch from `main` → merge back to `main` via PR (expedited review).

---

## Commit Style

We follow the **Conventional Commits** specification.

### Format

```
<type>(<scope>): <short summary>

[optional body]

[optional footer(s)]
```

### Types

| Type | When to use |
|------|-------------|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation only |
| `style` | Formatting, whitespace (no logic change) |
| `refactor` | Code refactor (no feature/fix) |
| `perf` | Performance improvement |
| `test` | Adding or fixing tests |
| `chore` | Build process, tooling, dependencies |
| `ci` | CI/CD configuration |
| `revert` | Reverts a previous commit |

### Examples

```
feat(auth): add JWT refresh token support
fix(api): handle null response from payment gateway
docs(readme): update local setup instructions
ci: add Node.js 20 to test matrix
chore(deps): upgrade express to 4.18.3
```

### Rules

- Use **imperative mood** in the summary: "add X", not "added X" or "adds X".
- Keep the summary under **72 characters**.
- Reference issue IDs in the footer: `Refs: JAT-42` or `Closes: JAT-42`.
- Breaking changes: add `BREAKING CHANGE:` in the footer.

---

## Pull Request Process

1. Create a branch from `main`.
2. Make your changes and commit following the commit style above.
3. Open a PR with a clear title and description of what changed and why.
4. CI checks must pass before merge (linting, tests, build).
5. At least **1 approval** required before merging.
6. Squash merge into `main` (keep history clean).
7. Delete the branch after merge.

---

## Code Review Guidelines

- Be specific and constructive in feedback.
- Approve when good enough to ship, not perfect.
- Resolve blocking comments before merging.
- Authors should address or respond to all comments.
