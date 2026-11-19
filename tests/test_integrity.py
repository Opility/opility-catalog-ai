from pathlib import Path
import unittest
ROOT=Path(__file__).resolve().parents[1]
class AppIntegrityTest(unittest.TestCase):
    def test_logo_exists(self):
        self.assertTrue((ROOT/'public/opility/catalog-ai-icon.webp').exists())
    def test_secret_not_exported_to_browser(self):
        shared=(ROOT/'config/index.ts').read_text()
        self.assertNotIn('NEXT_PUBLIC_APP_KEY',shared)
        self.assertNotIn('DIFY_API_KEY',shared)
        server=(ROOT/'app/api/utils/common.ts').read_text()
        self.assertIn('process.env.DIFY_API_KEY',server)
        self.assertIn("import 'server-only'",server)
    def test_no_old_assistant_images(self):
        app=(ROOT/'app/components/base/app-icon/index.tsx').read_text()
        self.assertNotIn('🤖',app)
        self.assertIn('catalog-ai-icon.webp',app)
    def test_evidence(self):
        self.assertTrue((ROOT/'app/proof/page.tsx').exists())
        self.assertEqual(len(list((ROOT/'public/proof').glob('*.webp'))),7)
    def test_no_secrets_in_example(self):
        self.assertNotIn('sk-',(ROOT/'.env.example').read_text())
if __name__=='__main__':unittest.main()
