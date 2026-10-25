# 경사면 순수 구름 가속도 계산기

회전 관성까지 반영하여 경사면을 미끄러지지 않고 구르는 물체의 가속도를 계산합니다.

- ID: E122
- App: https://nanalab.kr/eng-rolling-incline/
- Repository: https://github.com/NaNaCompany/eng-rolling-incline
- Formula: a = g sin θ / [1 + I/(m r²)]

## Model and data

강체가 일정한 경사면에서 순수 구름 운동을 합니다. 접촉을 유지하는 0 ≤ θ < 90° 범위이며, 미끄럼 방지에 충분한 정지마찰이 있다고 가정합니다. I는 질량중심을 지나는 구름 축에 대한 값입니다. 공기저항·구름저항·미끄럼은 제외합니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
