# Work Mode Handoff — Opility Catalog AI

## Mission
Create a **new independent GitHub repository** at `Opility/opility-catalog-ai` from the **contents inside the `opility-catalog-ai/` folder** in this ZIP. The ZIP is the transfer container, not part of the repository. **Do not nest** `opility-catalog-ai/opility-catalog-ai`.

## Confirmed inputs
- Existing Next.js Dify conversation frontend source is already customized inside this folder. It preserves the upstream code layout and `LICENSE` and uses Ella/Opility branding.
- Existing hosted Dify app: https://udify.app/agent/hAhLK7FhuM6NwNvd
- Real original screenshots, cropped app-only variants, and captured English/Hebrew product-listing test transcript are included.
- The source-level integrity checks passed previously; this is not proof that the deployed Next.js application works.

## Actions requested of Work
1. Inspect `README.md`, `docs/IMPLEMENTATION-STATUS.md`, `docs/SITE-INTEGRATION.md`, and `evidence/README.md`.
2. Inspect `.gitignore`, ensure `evidence/private-originals/`, `.env.local` and all secrets are **excluded** from the public repository. Review evidence for personal data and sensitive URLs before publishing.
3. Create the repository in the user's authorized GitHub Opility organization. Keep `LICENSE` and upstream attribution.
4. Commit the files that belong at the repository root, preserving the complete folder tree and file names.
5. Run dependency installation, typecheck, lint, build, unit and browser tests. Report real outcomes, failures and blockers; never mark unrun tests passed. Audit archived upstream dependencies.
6. Obtain Dify **Service API key** via an approved secure secret input. **Never** paste it in code, chat, tracked `.env` or a `NEXT_PUBLIC_` variable. The hosted public app URL is not an API key.
7. Test the real authenticated Dify API via the custom frontend, including conversation handling, new chat, rendering, mobile widths, error cases, and Hebrew RTL where supported. Add rate limiting and request controls before public deployment.
8. If compatible, configure the Cloudflare Workers/Next.js adapter and deploy a preview, verify it. If not, explain blockers and keep Dify's hosted app live. No Vercel requirement.
9. Integrate a product card/live-app link into Opility AI at opility.com and a portfolio engineering case study into naveensharma.net in separate reviewable branches. No merge or production deployment without user approval.
10. Confirm the evidence/case-study links are working and that the user can access the original record without publishing the unredacted private screenshots.

## Critical boundaries
- Do not replace Ella's existing Dify backend or claim it was reimplemented.
- Only Ella/Opility images in customer-facing UI. Do not use historical Listora/Almora default artwork outside explicitly labeled historical screenshots.
- No fake storefront connections, live marketplace publishing, invented performance data or fabricated test results.
- `public/proof/journey/` contains actual app screenshots cropped to remove browser UI. The original screenshots are stored privately for audit, not for public publishing.
