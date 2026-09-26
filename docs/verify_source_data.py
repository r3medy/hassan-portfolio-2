"""Reproduce public chart aggregates from locally retained source CSVs."""

import calendar
import csv
import hashlib
import json
from collections import Counter, defaultdict
from datetime import datetime
from decimal import Decimal, InvalidOperation
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / ".source-data"
EVIDENCE = json.loads((ROOT / "docs/chart-evidence.json").read_text())
MONTH_NUMBER = {
    month: number for number, month in enumerate(calendar.month_name) if month
}


def load_rows(filename):
    path = SOURCE / filename
    with path.open(encoding="utf-8-sig", newline="") as file:
        return path, list(csv.DictReader(file))


def require(condition, message):
    if not condition:
        raise ValueError(message)


def evidence_items(group):
    items = [
        (item["label"], Decimal(str(item["value"])))
        for item in EVIDENCE["retail"][group]
    ]
    require(
        len(items) == len(dict(items)),
        f"Duplicate labels in {group} evidence",
    )
    return items


def verify_group(group, actual_items):
    expected_items = evidence_items(group)
    actual = dict(actual_items)
    expected = dict(expected_items)
    require(actual.keys() == expected.keys(), f"Label mismatch for {group}")
    require(actual == expected, f"Value mismatch for {group}")
    require(list(actual) == list(expected), f"Order mismatch for {group}")


def count_evidence_items(section, group):
    items = [
        (item["label"], Decimal(str(item["value"])))
        for item in EVIDENCE[section][group]
    ]
    require(
        len(items) == len(dict(items)),
        f"Duplicate labels in {section} {group} evidence",
    )
    return items


def verify_count_group(section, group, actual_items):
    expected_items = count_evidence_items(section, group)
    actual_items = [
        (label, Decimal(value)) for label, value in actual_items
    ]
    actual = dict(actual_items)
    expected = dict(expected_items)
    require(
        actual.keys() == expected.keys(),
        f"Label mismatch for {section} {group}",
    )
    require(actual == expected, f"Value mismatch for {section} {group}")
    require(
        list(actual) == list(expected),
        f"Order mismatch for {section} {group}",
    )


def verify_retail():
    path, rows = load_rows("retail.csv")
    require(
        len(rows) == EVIDENCE["retail"]["rowCount"],
        "Retail row count mismatch",
    )

    category_spend = defaultdict(Decimal)
    item_quantity = defaultdict(Decimal)
    location_spend = defaultdict(Decimal)
    payment_transactions = defaultdict(Decimal)
    monthly_spend = defaultdict(Decimal)

    for row_number, row in enumerate(rows, start=2):
        required = (
            "Category",
            "Item",
            "Quantity",
            "Total Spent",
            "Location",
            "Payment Method",
            "Transaction Month",
            "Transaction Year",
        )
        require(
            all(row[field] for field in required),
            f"Retail row {row_number} has a missing grouping value",
        )

        spend = Decimal(row["Total Spent"])
        category_spend[row["Category"]] += spend
        item_quantity[(row["Category"], row["Item"])] += Decimal(row["Quantity"])
        location_spend[row["Location"]] += spend
        if row["Transaction ID"]:
            payment_transactions[row["Payment Method"]] += Decimal(1)
        month_key = (
            int(row["Transaction Year"]),
            MONTH_NUMBER[row["Transaction Month"]],
        )
        monthly_spend[month_key] += spend

    verify_group(
        "categorySpend",
        sorted(category_spend.items(), key=lambda item: (-item[1], item[0])),
    )

    top_items = sorted(
        item_quantity.items(),
        key=lambda item: (-item[1], item[0]),
    )[:20]
    verify_group(
        "topItemsByQuantity",
        [
            (f"{category} / {item}", quantity)
            for (category, item), quantity in top_items
        ],
    )

    verify_group("locationSpend", sorted(location_spend.items()))
    verify_group("paymentTransactions", sorted(payment_transactions.items()))
    verify_group(
        "monthlySpend",
        [
            (f"{year} {calendar.month_abbr[month]}", spend)
            for (year, month), spend in sorted(monthly_spend.items())
        ],
    )

    require(
        sum(category_spend.values())
        == sum(Decimal(row["Total Spent"]) for row in rows),
        "Retail category totals do not cover all recorded spend",
    )
    require(
        sum(payment_transactions.values())
        == sum(bool(row["Transaction ID"]) for row in rows),
        "Retail payment totals do not cover all transaction IDs",
    )
    print(
        "Retail aggregates verified; "
        f"SHA256 {hashlib.sha256(path.read_bytes()).hexdigest()}"
    )


def verify_employee():
    path, rows = load_rows("employee.csv")
    require(
        len(rows) == EVIDENCE["employee"]["rowCount"],
        "Employee row count mismatch",
    )
    monthly_hiring = Counter()
    age_distribution = Counter()

    for row_number, row in enumerate(rows, start=2):
        require(row["Join_Date"], f"Employee row {row_number} has no join date")
        try:
            join_date = datetime.strptime(row["Join_Date"], "%Y-%m-%d")
        except ValueError:
            require(
                False,
                f"Employee row {row_number} has an invalid join date",
            )
        monthly_hiring[(join_date.year, join_date.month)] += 1

        require(row["Age"], f"Employee row {row_number} has no age")
        try:
            age_label = format(Decimal(row["Age"]).normalize(), "f")
        except (InvalidOperation, ValueError):
            require(False, f"Employee row {row_number} has an invalid age")
        age_distribution[age_label] += 1

    verify_count_group(
        "employee",
        "monthlyHiring",
        [
            (f"{year} {calendar.month_abbr[month]}", count)
            for (year, month), count in sorted(monthly_hiring.items())
        ],
    )

    age_order = ("25", "30", "35", "40")
    require(
        age_distribution.keys() == set(age_order),
        "Employee age labels mismatch",
    )
    verify_count_group(
        "employee",
        "ageDistribution",
        [(age, age_distribution[age]) for age in age_order],
    )

    require(
        sum(monthly_hiring.values()) == len(rows),
        "Employee monthly hiring totals do not cover all rows",
    )
    require(
        sum(age_distribution.values()) == len(rows),
        "Employee age totals do not cover all rows",
    )
    print(
        "Employee aggregates verified; "
        f"SHA256 {hashlib.sha256(path.read_bytes()).hexdigest()}"
    )


def verify_netflix():
    path, rows = load_rows("netflix.csv")
    require(
        len(rows) == EVIDENCE["netflix"]["rowCount"],
        "Netflix row count mismatch",
    )
    by_type = Counter(row["type"] for row in rows)
    type_order = ("Movie", "TV Show")
    require(by_type.keys() == set(type_order), "Netflix type labels mismatch")
    verify_count_group(
        "netflix",
        "byType",
        [(item_type, by_type[item_type]) for item_type in type_order],
    )
    require(
        sum(by_type.values()) == len(rows),
        "Netflix type totals do not cover all rows",
    )
    print(
        "Netflix aggregates verified; "
        f"SHA256 {hashlib.sha256(path.read_bytes()).hexdigest()}"
    )


def verify_crime():
    path, rows = load_rows("crime.csv")
    require(
        len(rows) == EVIDENCE["crime"]["rowCount"],
        "Crime row count mismatch",
    )
    severity = Counter(row["severity"] for row in rows)
    severity_order = ("Low", "Medium", "High", "Critical", "Unknown")
    require(severity.keys() == set(severity_order), "Crime severity labels mismatch")
    verify_count_group(
        "crime",
        "severity",
        [(label, severity[label]) for label in severity_order],
    )
    require(
        sum(severity.values()) == len(rows),
        "Crime severity totals do not cover all rows",
    )
    print(
        "Crime aggregates verified; "
        f"SHA256 {hashlib.sha256(path.read_bytes()).hexdigest()}"
    )


verify_retail()
verify_employee()
verify_netflix()
verify_crime()
