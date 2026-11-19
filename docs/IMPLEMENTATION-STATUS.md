# Implementation and verification — 19 November 2026

## Implemented in source
- Based on uploaded upstream Dify `webapp-conversation-main.zip` source; preserved the original chat architecture and LICENSE.
- Opility Catalog AI application title, description, and official provided logo asset.
- All default robot avatar instances that use `AppIcon` now render Opility Catalog AI branding.
- Removed `NEXT_PUBLIC_APP_KEY` from the shared configuration; Dify service credential is read on the server as `DIFY_API_KEY`.
- New evidence route `/proof` using genuine Dify screenshots cropped to remove browser sidebars; older template screenshots are contextual history, not active assistant branding.
- Real Dify backend routes retained for conversations, messages, and file upload.

## Tested here (source integrity)
- Five Python static integrity checks passed: branding image, server-only secret, no default robot emoji in AppIcon, evidence page and screenshots, secret-free example file.

## Not tested in this environment
- No dependency install or full Next.js production build completed (package retrieval was unavailable/hung).
- No authenticated call to Dify Service API performed; no private service key was supplied.
- No Cloudflare deployment performed; no production URL for the custom frontend exists.
- Mobile browser, rate limiting, bot protection, accessibility and security penetration testing remain pending.

## Existing independent evidence
- Prior user-provided Dify screenshots show successful public agent interaction.
- User-provided English/Hebrew Shopify listing responses are archived in earlier case-study evidence bundle.
- Neither merchant publishing nor automatic Shopify/Shopee/Amazon updates were implemented.

## Required before public launch
1. Install dependencies and run `npm run typecheck` and `npm run build`.
2. Set DIFY_API_KEY only on the deployment server.
3. Add effective per-IP/session abuse prevention and rate limiting to the public API routes.
4. Verify Dify streaming, chat-history, feedback and upload endpoints with an authenticated service key.
5. Run mobile/desktop/RTL visual testing and production security review.
6. Only then deploy the frontend (Cloudflare Workers compatible Next.js adapter or another suitable server runtime).

**Safe fallback:** https://udify.app/agent/hAhLK7FhuM6NwNvd
