# Configuration notes and known caveats

- The original template skill was named `listora-listing-localization`. The replacement skill ZIP is named `opility-catalog-ai-listing-localization`.
- The five-file agent ZIP includes a `build_note.md` that still refers to the old internal skill name. **Update this reference before using that note as an authoritative configuration instruction**. It is retained in the supplied files for transparency.
- A later Dify screenshot showed a *new pending* `build_note.md` change. This is different from confirming the five-file ZIP was installed.
- A screenshot shows the published app previously displayed “Multilingual Product Listing Assistant” and Listora. Later screenshots show Ella answering in Build Mode; these do **not** independently prove the public app's greeting and branding are now corrected.
- The uploaded log reports a `dify-agent config ... pull` job as `status: running` at capture time, with truncated skill text. Do not present that command as a verified completed file sync.
- The user attributed an initial build issue to a selected knowledge-base file; the exact causal chain is not independently established by logs.
- The assistant's Dify runtime is hosted externally. This repository is documentation and portfolio evidence, **not** the source-code implementation of Dify itself.
