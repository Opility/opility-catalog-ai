# Opility Catalog AI — Real Build & Test Evidence

A GitHub-ready evidence and case-study package for **Opility Catalog AI**, with **Ella** as the assistant.

## Start here

- Open [`index.html`](index.html) in a browser for the responsive visual case study.
- Browse 16 unaltered user-supplied Dify screenshots in [`evidence/screenshots/`](evidence/screenshots/).
- Read [`docs/BUILD-JOURNEY.md`](docs/BUILD-JOURNEY.md).
- Read [`docs/TEST-REPORT.md`](docs/TEST-REPORT.md) and the original [`tests/captured-dify-run.md`](tests/captured-dify-run.md).
- Use [`docs/PORTFOLIO-PROJECT.md`](docs/PORTFOLIO-PROJECT.md) for the portfolio and [`docs/OPILITY-PRODUCT.md`](docs/OPILITY-PRODUCT.md) for Opility.
- See [`docs/CONFIGURATION-NOTES.md`](docs/CONFIGURATION-NOTES.md) for important caveats.

## File layout

- `index.html` — standalone case study, relative paths for GitHub Pages or Cloudflare Pages
- `visuals/` — official user-supplied Opility logo and a clearly labeled graphic summary of raw test output
- `evidence/screenshots/` — original screenshots (unchanged)
- `evidence/thumbnails/` — resized previews generated from originals
- `evidence/manifest.json` — ordered metadata and SHA-256 hashes for screenshot provenance
- `tests/captured-dify-run.md` — verbatim uploaded test record
- `tests/test-results.json` — evidence review status (not live test execution)
- `configuration/skill/` — corrected three-file Dify skill (source of current packaging recommendation)
- `configuration/agent-files/` — five supporting Markdown files from corrected ZIP
- `docs/` — reporting and ready-to-use site copy

## Evidence-first claims

- **Observed:** successful Ella greeting in Dify Build Mode; English and Hebrew product listing output in uploaded transcript.
- **Now observed:** current public brand name and Ella greeting; published new-listing question flow and user-provided English/Hebrew output. **Still pending:** example mode, adversarial missing-information testing and independent end-to-end automation tests.
- **Not implemented:** direct Shopify/Amazon/Shopee publishing and end-to-end client SaaS operations.
- **No synthetic test screenshots** have been substituted for evidence. The `captured-output-evidence-card.png` is explicitly a graphic rendition of the raw captured transcript.

## Suggested repository workflow

Create a repository such as `Opility/opility-catalog-ai-case-study`. Upload the contents of this folder, not just the enclosing ZIP. Enable GitHub Pages if you want a static case-study URL, or copy this folder into an existing site's assets and route the HTML appropriately. Verify page rendering after deployment.

This package has **not** been committed, pushed, or published to your repositories.

## Privacy note

Images are user-provided screenshots that may show browser UI, user accounts, and application URLs. Review them before making the repository public and redact any information you do not want exposed. Preserve an unmodified private evidence archive if you publish redacted copies.


## Latest export-backed verification (November 19, 2026)
The user provided `Opility Catalog AI.ifpkg` for this revision. A later published-app screenshot and user-supplied answer are included as newer evidence. See [export verification](docs/EXPORT-VERIFICATION.md), [build timeline](docs/ACTUAL-BUILD-TIMELINE.md), [web app integration](docs/WEBAPP-INTEGRATION.md), and the [export-backed evidence directory](evidence/dify-export).

**Discovered mismatch:** Dify app name is `Opility Catalog AI`, but exported public-facing `site.title` remains `Multilingual Product Listing Assistant`. Fix branding on Dify and verify again before claiming a fully branded published app.

**Warning:** The repo linked by the user is archived and its example configuration suggests a public client key. Use a server-side integration for actual credentials.

## Published-app user journey (new evidence)
- Real starter interaction: [`15-public-new-listing-flow.png`](evidence/screenshots/15-public-new-listing-flow.png)
- Product request being submitted: [`16-public-listing-input.png`](evidence/screenshots/16-public-listing-input.png)
- User-pasted bilingual response: [`live-published-shopify-response.md`](tests/live-published-shopify-response.md)
- These are user-supplied evidence, not simulated live tests.
