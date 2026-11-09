# CoreSight Public Website — CLAUDE.md

This is the public marketing site for coresight.systems. Static HTML/CSS,
no build step. **THIS REPO IS PUBLIC** — everything committed here,
including history, is world-readable. It is the only public CoreSight
repo; act accordingly.

## Deploy model — a push here IS a publish

Cloudflare Pages (project `coresight-website`) auto-builds this repo:

- **Push to `main` → live on coresight.systems within ~a minute.** There
  is no separate deploy step and no undo short of another push.
- **Push to any other branch + open a PR → Cloudflare builds a preview
  URL** and comments it on the PR. This is the free staging environment.

**Default workflow: branch → PR → preview URL → Anthony merges. His merge
is the publish.** Commit directly to `main` only when the task brief
explicitly says "ship direct" — then a push is deliberate publication.

## Hard rules (each guards a standing CoreSight policy)

1. **No pricing, rates, dollar figures, or tier limits — ever, in any
   file, under any phrasing.** Pricing lives in internal documents this
   repo's sessions cannot and must not see. If a task requires a price on
   the site, the exact text arrives verbatim in Anthony's task brief; you
   never compose, infer, or "remember" a number. A brief asking for
   pricing content without supplying the text verbatim is a stop-and-ask.
2. **No tech-stack exposure.** Never name the frameworks, hosting,
   databases, AI models, vendors, or internal tools behind CoreSight —
   in page copy, meta tags, comments, filenames, or commit messages.
3. **No client names, logos, data, or identifiable details** unless the
   task brief supplies them with explicit permission noted.
4. **No secrets of any kind** — keys, tokens, emails beyond the contact
   addresses already published here, internal URLs, account IDs. The repo
   is public and history is forever.
5. **Brand values come from the task brief, never from memory or guesses.**
   The canonical brand reference lives in a private repo; the brief is the
   sanctioned carrier for hex values, voice and tone rules. Values already
   present in `site.css`/`brand/` may be reused as-is; new or changed
   values must be quoted in the brief.

## Facts about this repo

- `_headers` is Cloudflare Pages cache configuration — a wrong edit here
  changes caching for the whole site; touch deliberately.
- `robots.txt` / `sitemap.xml` affect indexing — same care.
- The site is plain static files: what you commit is exactly what ships.
  Verify by opening the changed page locally (or on the PR preview)
  before calling anything done — a rendered check, not a diff read.
- Task briefs come from Anthony or the Business role's requirement docs.
  Content decisions beyond the brief (new claims, new pages, tone shifts)
  are stop-and-ask, not improvisation.
