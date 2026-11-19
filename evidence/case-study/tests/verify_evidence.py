from pathlib import Path
import json
root = Path(__file__).resolve().parents[1]
audit = json.loads((root / 'evidence/dify-export/export-audit.json').read_text())
assert audit['app_name'] == 'Opility Catalog AI'
assert audit['skill_name'] == 'opility-catalog-ai-listing-localization'
assert audit['skill_contents'] == ['SKILL.md','references/output-and-review.md','references/platform-rules.md']
assert audit['agent_file_count'] == 7
assert audit['web_app_title_at_export'] == 'Multilingual Product Listing Assistant'
for path in audit['skill_contents']:
    assert (root / 'evidence/dify-export/skill' / path).exists()
assert len(list((root / 'evidence/screenshots').glob('*.png'))) == 14
assert (root / 'tests/captured-dify-run.md').exists()
print('Evidence consistency checks: PASS (static artifact checks only)')
