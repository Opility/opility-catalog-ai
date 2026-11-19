# Opility Catalog AI — evidence-based test report

**Review date:** 2026-11-19. **Evidence:** user-provided Dify screenshots and a captured output transcript. **The latest published user journey is documented using user-provided screenshots and response text; it was not independently executed by the reviewer.**

| ID | Test | Evidence status | Result |
|---|---|---|---|
| QA-01 | Ella greeting after configuration correction | observed-pass | Ella says she is the product listing and localization assistant. |
| QA-02 | English Shopify listing generation | observed-pass | Product title, five selling points, description, SEO title, meta description and suggested keywords appear. |
| QA-03 | Hebrew localization | observed-pass | Hebrew product title, selling points, description and metadata generated for the same sample facts. |
| QA-04 | Facts preserved across two languages | review-pass | DemoBrand, blue, 750 ml, stainless steel, leak-resistant lid, reusable design are represented in both versions. |
| QA-05 | Old public branding detected | observed-issue | Published public page displayed generic title and “Hi! I’m Listora.” |
| QA-06 | Build-mode tool error captured | observed-issue | Dify Tool 'create_research_task' is missing runtime parameters: resource. |
| QA-07 | Current public app branding and greeting | observed-pass | Verified public app title, Ella greeting, description, and four starters using read-only browser inspection and screenshots. |
| QA-08 | Example Listing Mode exact opening and closing | pending | Not yet verified by the supplied evidence. |
| QA-09 | Unsupported-claims and missing-data challenge | pending | Not yet verified by the supplied evidence. |
| QA-10 | Connected marketplace publication | not-implemented | No store-publishing integration demonstrated. |

| QA-11 | Published "Create a new product listing" starter | observed-pass | Ella requests product name and confirmed features/specifications/package contents in user screenshot. |
| QA-12 | Published bilingual Shopify output | observed-pass | User-provided English/Hebrew text includes listing fields, SEO metadata and review; screenshots show the initiating workflow. |
| QA-13 | No invented claims in published sample | review-pass | Static review found no unsupported warranty, certifications, pricing, or shipping terms in the supplied text. |

## New first-party evidence

- [Published workflow screenshot 1](../evidence/screenshots/15-public-new-listing-flow.png)
- [Published workflow screenshot 2](../evidence/screenshots/16-public-listing-input.png)
- [User-provided published response text](../tests/live-published-shopify-response.md)

The pasted final answer is **not itself visible in the screenshots**; avoid calling it a screenshot-verified response. Earlier Listora branding is retained as historical debugging evidence, not current product branding.

## Limits

The test log reports 15.23 seconds and 14,299 tokens, plus an unlabeled 52.47. These values are reported by the captured transcript, and **52.47 has no verified unit**. They are not reproducible performance benchmarks or cost savings.

SEO keywords are suggestions, not validated search-volume research. The product is fictional; no live product was published.
