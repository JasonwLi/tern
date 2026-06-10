#!/usr/bin/env python3
"""Audit meta descriptions in content files for SERP length compliance."""

import re
import sys
import glob
import os

# Limits per locale group
LIMITS = {
    "en": 155,
    "es": 155,
    "ja": 90,
    "ko": 90,
    "zh-TW": 90,
}
TARGETS = {
    "en": 150,
    "es": 150,
    "ja": 80,
    "ko": 80,
    "zh-TW": 80,
}

def extract_descriptions(filepath):
    """Extract {locale: description} from a TS content file."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    results = {}
    locales = ["en", "es", "ja", "ko", "zh-TW"]

    for locale in locales:
        # Match the locale block: look for locale key then find description inside it
        # Pattern: locale key (e.g., en: { or "zh-TW": {) followed by content up to closing }
        # We need to extract description from within the locale block

        # Build pattern to find the locale block
        if locale == "zh-TW":
            locale_pattern = r'"zh-TW"\s*:\s*\{'
        else:
            locale_pattern = rf'\b{re.escape(locale)}\s*:\s*\{{'

        locale_match = re.search(locale_pattern, content)
        if not locale_match:
            continue

        # From the locale block start, extract description
        block_start = locale_match.end()

        # Find the description field within this locale block
        # description can be:
        # 1. description: "single line",
        # 2. description:\n        "multiline",
        # 3. description:\n        "line1"\n        + "line2",  (template literals unlikely)

        block_text = content[block_start:block_start + 3000]

        # Match description: followed by a string (possibly multiline with concatenation)
        # Handle: description: "...", or description:\n    "...",
        desc_match = re.search(
            r'description\s*:\s*(?:"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)',
            block_text,
            re.DOTALL
        )
        if desc_match:
            desc = desc_match.group(1) or desc_match.group(2)
            # Normalize whitespace from multiline strings
            desc = re.sub(r'\s+', ' ', desc).strip()
            results[locale] = desc

    return results


def audit_files(base_dirs):
    offenders = []
    all_files = []
    for d in base_dirs:
        all_files.extend(glob.glob(os.path.join(d, "*.ts")))

    all_files.sort()

    for filepath in all_files:
        descriptions = extract_descriptions(filepath)
        filename = os.path.relpath(filepath, "/Users/jasonli/dev/neobank")
        for locale, desc in descriptions.items():
            limit = LIMITS.get(locale, 155)
            target = TARGETS.get(locale, 150)
            length = len(desc)
            if length > target:
                offenders.append({
                    "file": filepath,
                    "filename": filename,
                    "locale": locale,
                    "desc": desc,
                    "length": length,
                    "limit": limit,
                    "target": target,
                })

    return offenders


if __name__ == "__main__":
    base_dirs = [
        "/Users/jasonli/dev/neobank/lib/content/guides",
        "/Users/jasonli/dev/neobank/lib/content/blog",
    ]
    offenders = audit_files(base_dirs)

    if not offenders:
        print("✅ No offenders found — all descriptions within limits.")
        sys.exit(0)

    print(f"Found {len(offenders)} offending description(s):\n")
    by_locale = {}
    for o in offenders:
        by_locale.setdefault(o["locale"], []).append(o)

    for locale in ["en", "es", "ja", "ko", "zh-TW"]:
        if locale not in by_locale:
            continue
        items = by_locale[locale]
        print(f"=== {locale} (target ≤{TARGETS[locale]}, hard max {LIMITS[locale]}) — {len(items)} offender(s) ===")
        for o in items:
            print(f"  [{o['length']} chars] {o['filename']}")
            print(f"  DESC: {o['desc'][:200]}{'...' if len(o['desc']) > 200 else ''}")
            print()

    sys.exit(1)
