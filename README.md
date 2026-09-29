# japan-kyoto

Kyoto (京都) travel notes and itineraries by **Attuned Travellers**.

## Overview

A working repository for planning and documenting trips to Kyoto, Japan —
itineraries, neighbourhood notes, transport tips, food and lodging picks,
and anything else worth keeping between visits.

## Structure

```
.
├── itineraries/   # day-by-day plans
├── places/        # temples, gardens, cafés, shops
├── logistics/     # transport, passes, accommodation
└── notes/         # seasonal tips, phrases, misc.
```

Directories are added as content grows.

## Travel cards (`index.html`)

`index.html` 을 브라우저로 열면 여행지·음식 카드 가이드가 보입니다 (빌드·서버 불필요).
디자인과 엔진은 `../travel-kit` 공용 엔진을 사용합니다 (오사카와 동일).

```
index.html            # 화면 — 불러올 데이터 script 목록
assets/               # trip-cards.js / .css (travel-kit 사본 — 직접 수정 금지)
places/data/
  _config.js          # 카테고리·지역·색·안내 카드 (먼저 로드)
  spots.js food.js    # Trip.add([...]) 데이터
```

- **항목 추가**: `spots.js` / `food.js` 상단 템플릿을 복사해 `Trip.add([...])` 에 추가.
  필수 필드: `id`, `category`, `name`, `area`, `summary`.
- **새 카테고리**: `_config.js` 의 `categories` 에 한 줄 (`group: "spot" | "food"`).
- **새 데이터 파일** (예: `shopping.js`): `Trip.add([...])` 로 만들고 `index.html` script 목록에 추가.
- **엔진 수정**: `../travel-kit/assets` 에서 고친 뒤 `../travel-kit/sync.sh`.

## Contributing

1. Create a branch for your changes.
2. Keep one topic per file and use descriptive filenames.
3. Open a pull request for review.

## License

Content in this repository is for personal travel planning use.
