# Actual build journey: evidence-based chronology

1. **Template selection** — Dify Product Listing Assistant template selected (`evidence/screenshots/01-template-selection.png`).
2. **Agent naming** — initial Opility Catalog AI identity, Dify editor role/description and icon changes (`05-agent-edit.png`).
3. **Template inspection** — original Listora prompt, embedded skill, agent files and empty tools/knowledge sections (`02-initial-prompt.png`, `03-original-files.png`, `04-empty-integrations.png`, `06-embedded-skill.png`).
4. **Identity transition** — user instructed Ella as conversational identity; official Opility logo supplied and adapted for the agent. The app name remains Opility Catalog AI.
5. **Configuration preparation** — agent Markdown docs and skill resources prepared; discovered important distinction between a 3-file skill (SKILL.md plus 2 references) and agent-level files.
6. **Failure observed** — Build Mode tool action failed because required `resource` parameter was missing for `create_research_task` (`07-build-failed.png`, `08-tool-error.png`).
7. **Public branding mismatch observed** — hosted app showed Listora and old generic web-app name even after agent configuration edits (`09-old-public-app.png`, `10-webapp-branding.png`, `11-privacy-settings.png`, `12-access-point.png`).
8. **User-resolved blocker** — user removed an Agent Knowledge Base file and the agent responded to `hi` as Ella (`13-ella-success.png`). This is evidence of correlation, not a controlled root-cause proof.
9. **One pending file change** — Build draft showed pending `build_note.md` (`14-build-note-draft.png`).
10. **Captured multilingual test** — user supplied Dify output showing English and Hebrew Shopify copy for DemoBrand water bottle. See `tests/captured-dify-run.md`.
11. **Portable export received** — actual `.ifpkg` verified, confirming one embedded skill with 2 references and 7 agent Markdown files. Export still records old public title; see `docs/EXPORT-VERIFICATION.md`.

**Evidence principle:** historical screenshots establish what appeared at that time, not what is deployed today. Do not relabel historical errors as current failures or unverified fixes as passes.

## Published app testing — later evidence, 19 November 2026

User supplied two new screenshots of the public app: Ella handling the "Create a new product listing" starter and the product details/request composed in its input. User also pasted Ella’s actual English and Hebrew Shopify draft, SEO metadata, and pre-publication review. The published public branding was separately observed by reading the web app. These are authentic user-provided results, not an independently replayed browser test.
