"""Reproduce public chart aggregates from locally retained source CSVs."""
import csv
import hashlib
import json
from collections import Counter, defaultdict
from decimal import Decimal
from pathlib import Path

root = Path(__file__).resolve().parents[1]
source = root / '.source-data'
evidence = json.loads((root / 'docs/chart-evidence.json').read_text())

for project, filename, category, measure in (
    ('retail', 'retail.csv', 'Category', 'Total Spent'),
    ('employee', 'employee.csv', 'Department', None),
):
    path = source / filename
    with path.open(encoding='utf-8-sig', newline='') as file:
        rows = list(csv.DictReader(file))
    assert len(rows) == evidence[project]['rowCount']
    expected = {item['label']: Decimal(str(item['value'])) for item in evidence[project]['data']}
    if measure:
        actual = defaultdict(Decimal)
        for row in rows:
            assert row[category] and row[measure]
            actual[row[category]] += Decimal(row[measure])
        assert sum(actual.values()) == sum(Decimal(row[measure]) for row in rows)
    else:
        actual = Counter(row[category] for row in rows)
        assert sum(actual.values()) == len(rows)
    assert actual == expected
    print(f'{project}: aggregate values verified; SHA256 {hashlib.sha256(path.read_bytes()).hexdigest()}')
