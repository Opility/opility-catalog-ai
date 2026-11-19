# Dify application export verification

**Source:** user-supplied `Opility Catalog AI.ifpkg` (a Dify portable app export).

## Confirmed from actual export
- Dify application name: **Opility Catalog AI**.
- Agent description identifies Ella as Opility's listing and localization assistant.
- Embedded skill: `opility-catalog-ai-listing-localization`.
- Skill archive contains exactly **3 files**: `SKILL.md`, `references/output-and-review.md`, `references/platform-rules.md`.
- Export contains **7 agent-level Markdown files**, a separate storage scope from skill references.
- Export contains an application icon image.
- Dify web-app *site* title still says **Multilingual Product Listing Assistant** and uses a globe emoji at the time of export. This needs to be fixed in **Access Point → Settings → Branding** and re-exported if public branding has since changed.

## Evidence limitations
- Export does not establish that the live URL currently matches these settings or that its model produces accurate answers today.
- The captured English/Hebrew output remains separate execution evidence.
- Do not upload the unreviewed original `.ifpkg` to a public repository; exported configuration may include private prompts or other internal configuration. The included copies of skill Markdown are provided for review before publishing.
- The package's SHA-256 fingerprint is in `evidence/dify-export/export-audit.json`.

## Replication
The skill layout is derived by reading the embedded archive inside the `.ifpkg`, not reconstructed from screenshots. For technical reviewers, compare the skill name, archive listing, and sanitized configuration summary.
