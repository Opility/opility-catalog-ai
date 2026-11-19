# Opility Catalog AI · Ella — Dify frontend

**Source:** Customized from Dify's `langgenius/webapp-conversation` Next.js client (MIT). The upstream LICENSE and original source layout are retained. Customization by Opility. This is source code, NOT a replacement for the existing Dify agent.

**Live hosted Ella:** https://udify.app/agent/hAhLK7FhuM6NwNvd

## Features
- Genuine Dify conversation API; no simulated AI messages.
- Real Opility Catalog AI identity and logo, not the original Listora assistant image.
- Server-only Dify API key (`DIFY_API_KEY`). The key is never embedded in browser JS.
- Original Dify client conversation and file upload flows maintained.
- `/proof` page showing original interface screenshots, the failure/recovery, and a verified bilingual output excerpt.
- English/Hebrew content presentation and original i18n framework. Full locale acceptance testing is pending.

## Run locally

1. `npm install` or `pnpm install` (requires internet; this bundle does not include node_modules).
2. Copy `.env.example` to `.env.local`.
3. Obtain a **Dify Service API key** for **this specific agent** from Dify's API area. Never put it in a public repo or `NEXT_PUBLIC_` variable. Set `DIFY_API_KEY=...` in `.env.local`.
4. Keep `DIFY_API_URL=https://api.dify.ai/v1` unless your provider uses another endpoint.
5. `npm run dev` then open http://localhost:3000. Go to `/proof` for the evidence case study.

**Note:** The publicly shareable Dify hosted URL does NOT grant access to its authenticated Service API. Without a genuine Dify API key the custom chat cannot run; the hosted Dify app remains available separately.

## Security / production checklist
- The Dify key is server-only, but server endpoints are publicly reachable: add bot protection, abuse controls, per-session/IP rate limiting, content-type and payload-size limits before opening public access. A private API key on the server alone does **not** prevent strangers from consuming billable model calls.
- Avoid exposing private test fixtures, original unredacted exports, or customer product data.
- Audit upstream dependencies (original template is archived); install security updates and run typecheck, build and interaction tests before launch.
- Validate iframe requirements and cookies before embedding; review `SameSite` and CSP for your deployment.
- Use Cloudflare Workers with a Next.js-capable adapter if you want Cloudflare hosting; Pages static export is insufficient for Dify API routes.
- If rate limits, Dify Service key or Cloudflare runtime are unavailable, link directly to the existing hosted Dify agent instead.
- Review the site privacy policy before inviting real merchants to submit data.

## Evidence and truthful claims
- The screenshots are cropped from real supplied screenshots without altering the underlying Dify UI. The earliest template screenshot documents the starting point only.
- The passed observation includes Ella identity, greeting and bilingual listing generation from seller-provided facts, plus appropriate pre-publication review notes.
- Do not claim that live marketplace updates, authorization or bulk import are implemented.

## Sites
- Opility: product page with “Open Ella” and “View proof” links.
- Portfolio: detailed project case study anchored by the `/proof` page.

## License
Original Dify Web Client code is MIT; see `LICENSE`. New Opility design, branding and original screenshots are not offered under that upstream license solely by inclusion in this repo.

## Local private preview

Use Node.js 22 or later and pnpm 11. Install from the checked-in lockfile with
`pnpm install --frozen-lockfile`. Set a random ASCII `DIFY_PREVIEW_PASSWORD`
alongside `DIFY_API_KEY` in the server environment. The chat API requires
HTTP Basic authentication with username `preview`. Use HTTPS outside localhost.
The preview uses a per-instance write cap, JSON and multipart request limits,
and same-origin checks. A multi-instance public deployment still needs an edge
rate limit and abuse protection. File links are currently unsupported. Local
uploads depend on the Dify agent's upload settings.

The original ZIP retains the private screenshot originals, agent configuration,
export inspection, and access-settings capture. The publication tree omits
those materials. The hosted prototype and historical test transcript document
a separate hosted Dify run.
