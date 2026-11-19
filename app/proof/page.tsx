import type { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = { title: 'Build & QA Evidence | Opility Catalog AI', description: 'Original Dify build screenshots and measured validation results for Ella Catalog AI.' }
const images = [
  {
    "file": "01_create-app-from-template.png",
    "title": "Create the app from a template",
    "note": "Starting point in Dify: the Product Listing Assistant template with the initial app-name dialog open."
  },
  {
    "file": "02_initial-generated-configuration.png",
    "title": "Review the generated agent configuration",
    "note": "First generated prompt/configuration before Opility and Ella branding were fully corrected."
  },
  {
    "file": "03_skill-files-overview.png",
    "title": "Review the listing skill files",
    "note": "The embedded skill section showing the generated file set inside the listing-localization skill."
  },
  {
    "file": "04_tools-and-knowledge-retrieval-sections.png",
    "title": "Review tools and knowledge retrieval",
    "note": "The agent configuration view showing Tools, Knowledge Retrieval, and Advanced Settings during setup."
  },
  {
    "file": "05_edit-agent-metadata.png",
    "title": "Set the Opility agent name and role",
    "note": "Editing the agent name, role, and description for Opility Catalog AI."
  },
  {
    "file": "06_inspect-old-skill-md-content.png",
    "title": "Inspect the original skill instructions",
    "note": "Opening the embedded skill files revealed that the older Listora naming was still present."
  },
  {
    "file": "07_build-mode-error-state.png",
    "title": "Investigate a build-mode failure",
    "note": "The agent entered an Action failed state while building, which had to be troubleshooted."
  },
  {
    "file": "08_runtime-parameter-error.png",
    "title": "Identify the missing runtime parameter",
    "note": "Visible error message: “Dify Tool create_research_task is missing runtime parameters: resource.”"
  },
  {
    "file": "09_old-public-branding-still-visible.png",
    "title": "Check the branding on the hosted app",
    "note": "The hosted public app still showed the old Multilingual Product Listing Assistant branding before the branding settings were updated."
  },
  {
    "file": "10_branding-settings-main-section.png",
    "title": "Set the web app title and icon",
    "note": "Access Point branding settings where the web app name and description were updated."
  },
  {
    "file": "11_branding-settings-lower-section.png",
    "title": "Review the remaining appearance settings",
    "note": "Lower portion of the branding settings, including input placeholder and disclaimer areas."
  },
  {
    "file": "12_access-point-settings-entry.png",
    "title": "Find web app settings under Access Point",
    "note": "The Access Point page where the web app Settings button is used to control hosted app branding."
  },
  {
    "file": "13_build-test-passes-in-dify-editor.png",
    "title": "Verify Ella responds in the editor",
    "note": "After fixing the failing knowledge-base issue, the agent replied as Ella inside Build mode."
  },
  {
    "file": "14_pending-build-note-change.png",
    "title": "Review the pending build-note change",
    "note": "The build draft change list shows build_note.md being added when applying updates."
  },
  {
    "file": "15_live-public-app-user-flow-begins.png",
    "title": "Start guided intake in the published app",
    "note": "The hosted public app greeting screen. The user selected “Create a new product listing,” and Ella asked for verified product details."
  },
  {
    "file": "16_live-public-app-successful-listing-output.png",
    "title": "Submit the English and Hebrew Shopify listing request",
    "note": "The seller supplies verified product facts and requests bilingual Shopify drafts, SEO metadata, and a pre-publication review."
  }
]
const facts = ['DemoBrand', '750 ml', 'stainless-steel', 'blue', 'leak-resistant lid', 'reusable design']
export default function EvidencePage() { return <main className="proof-page">
  <header className="proof-hero"><div className="proof-container"><a className="proof-back" href="/">← Back to Ella chat</a><div className="proof-eyebrow">OPILITY AI · PROJECT EVIDENCE</div><h1>Built. Debugged. <em>Verified.</em></h1><p>Follow the setup, troubleshooting, branding, and bilingual Shopify listing test for Opility Catalog AI.</p><div className="proof-links"><a href="https://udify.app/agent/hAhLK7FhuM6NwNvd" target="_blank" rel="noopener noreferrer">Try live hosted Ella ↗</a><a href="/">Open custom chat →</a></div></div></header>
  <section className="proof-container"><div className="proof-metrics"><div><strong>{images.length}</strong><span>documented build steps</span></div><div><strong>2</strong><span>listing languages shown</span></div><div><strong>1</strong><span>working hosted prototype</span></div></div><h2 className="proof-title">From first setup to tested output</h2><div className="proof-grid">{images.map(item => <article className="proof-card" key={item.file}><div className="proof-image"><Image src={`/proof/journey/${item.file}`} alt={`${item.title}`} width={1400} height={900} unoptimized /></div><div className="proof-copy"><h3>{item.title}</h3><p>{item.note}</p></div></article>)}</div></section>
  <section className="proof-results"><div className="proof-container"><div className="proof-eyebrow">REAL RESPONSE · DEMOBRAND WATER BOTTLE</div><h2>What Ella actually produced</h2><p>In the captured test, the same verified product facts remained consistent across English and Hebrew. The output provided a title, selling points, description, suggested SEO metadata, and seller review notes.</p><div className="proof-result-grid"><div className="proof-result-card"><small>ENGLISH · US MARKET</small><h3>DemoBrand Stainless-Steel Water Bottle, 750 ml, Blue</h3><p>A reusable stainless-steel water bottle from DemoBrand, with a 750 ml capacity and a leak-resistant lid. Available in blue.</p></div><div className="proof-result-card" dir="rtl"><small>עברית · שוק ארה״ב</small><h3>בקבוק מים מנירוסטה DemoBrand, בנפח 750 מ״ל, כחול</h3><p>בקבוק מים רב־פעמי מנירוסטה מבית DemoBrand, בנפח 750 מ״ל ועם מכסה עמיד בפני נזילות. זמין בצבע כחול.</p></div></div><div className="proof-facts">{facts.map(f => <span key={f}>✓ {f}</span>)}</div><div className="proof-limit"><strong>Verified scope:</strong> observed bilingual listing generation and honest pre-publication warnings. Not claimed: marketplace publishing, live inventory sync, independent compliance approval, or guaranteed SEO results.</div></div></section>
  <footer className="proof-footer"><div className="proof-container">Opility Catalog AI · Ella · Powered by Opility · <a href="https://opility.com">opility.com</a></div></footer></main> }
