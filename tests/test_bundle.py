from pathlib import Path
import json, unittest
ROOT=Path(__file__).resolve().parents[1]
class RepositoryBundleChecks(unittest.TestCase):
    def test_source_and_license(self):
        for p in ('LICENSE','package.json','next.config.js','app/page.tsx','app/api/utils/common.ts','app/proof/page.tsx'):
            self.assertTrue((ROOT/p).is_file(),p)
    def test_ella_brand_icon(self):
        self.assertTrue((ROOT/'public/opility/catalog-ai-icon.webp').exists())
    def test_screenshots(self):
        a=list((ROOT/'evidence/screenshots/cropped').glob('*.png'))
        b=list((ROOT/'evidence/private-originals').glob('*.png'))
        self.assertEqual(len(a),15 if not (ROOT/"evidence/screenshots/cropped/12_access-point-settings-entry.png").exists() else 16)
        if b:  # Original uploads are only included in the private handoff.
            self.assertEqual(len(b),16)
    def test_no_public_key_in_shared_config(self):
        self.assertNotIn('NEXT_PUBLIC_APP_KEY',(ROOT/'config/index.ts').read_text())
        self.assertIn('process.env.DIFY_API_KEY',(ROOT/'app/api/utils/common.ts').read_text())
        self.assertIn('evidence/private-originals/',(ROOT/'.gitignore').read_text())
    def test_evidence(self):
        self.assertTrue((ROOT/'evidence/tests/live-published-shopify-response.md').is_file())
        journey = ROOT/'public/proof/journey'
        expected = 16 if (journey/'12_access-point-settings-entry.png').exists() else 15
        self.assertEqual(len(list(journey.glob('*.png'))), expected)
        self.assertTrue((ROOT/'WORK_MODE_HANDOFF.md').is_file())
if __name__=='__main__':unittest.main(verbosity=2)
