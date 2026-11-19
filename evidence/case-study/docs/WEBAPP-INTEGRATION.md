# Web application and deployment guidance

## Existing hosted prototype
Dify-hosted URL: https://udify.app/agent/hAhLK7FhuM6NwNvd
This is the link shared by the project owner. A web request can reach the site, but automated inspection cannot confirm authenticated interaction or current branding.

## GitHub repository provided
https://github.com/langgenius/webapp-conversation
This is an external Next.js conversation app template, not the source code of Opility Catalog AI. As of 2026-11-19 the repository is **archived/read-only**. Prefer linking to the existing Dify hosted demo for initial showcasing.

## Security note
That repository's README places a `NEXT_PUBLIC_APP_KEY` in client-side environment configuration. `NEXT_PUBLIC_` variables are exposed to the browser build in Next.js. **Do not place a private Dify API key there for a public product.** Use server-side proxy endpoints with secrets kept server-side, authorization, rate limits, audit logs and abuse controls instead.

## Website integration
For Opility: show an accurately labeled `Functional prototype` card with the hosted demo URL, screenshots and this case study.
For naveensharma.net: show the full build journey and test evidence, including known limitations.
Do not describe Shopify/Amazon/Shopee live publishing, billing, client isolation, or CSV bulk automation as implemented.
