/*
 * 교토 여행 설정 — 카테고리·지역·색·안내문
 * 옵션 전체 설명은 assets/trip-cards.js 상단 주석 참고.
 * ▸ 카테고리 추가: categories 에 한 줄 (group 으로 여행지/음식 탭 지정)
 * ▸ 데이터 추가:   places/data/*.js 의 Trip.add([...]) 에 항목 추가
 */
Trip.config({
  id: "kyoto",
  title: "교토 여행 카드",
  eyebrow: "ATTUNED TRAVELLERS · 京都",
  intro: "사찰과 골목, 교토다운 한 끼까지. 카드를 누르면 상세 정보가 열리고, 찜·다녀옴 표시는 이 브라우저에 저장됩니다.",
  mapSuffix: "Kyoto",
  accent: "#b5412c", // 朱色 (도리이 주홍)

  groups: {
    spot: { label: "여행지", emoji: "📍" },
    food: { label: "음식", emoji: "🍽" },
  },

  categories: {
    // ── 여행지 ──
    shrine:     { group: "spot", label: "신사",          emoji: "⛩️", color: "#c8402a" },
    temple:     { group: "spot", label: "사찰",          emoji: "🛕", color: "#b7791f" },
    garden:     { group: "spot", label: "정원·자연",     emoji: "🎋", color: "#2f855a" },
    street:     { group: "spot", label: "거리·산책",     emoji: "🏮", color: "#805ad5" },
    history:    { group: "spot", label: "역사·궁궐",     emoji: "🏯", color: "#2b6cb0" },
    museum:     { group: "spot", label: "박물관",        emoji: "🏛️", color: "#4c51bf" },
    shopping:   { group: "spot", label: "쇼핑",          emoji: "🛍️", color: "#b83280" },
    experience: { group: "spot", label: "체험",          emoji: "👘", color: "#d53f8c" },
    daytrip:    { group: "spot", label: "근교",          emoji: "🚃", color: "#2c7a7b" },
    // ── 음식 ──
    tofu:       { group: "food", label: "두부·사찰음식", emoji: "🍲", color: "#b7791f" },
    noodle:     { group: "food", label: "면",            emoji: "🍜", color: "#dd6b20" },
    rice:       { group: "food", label: "덮밥·정식",     emoji: "🍚", color: "#a0a01c" },
    meat:       { group: "food", label: "고기·튀김",     emoji: "🥩", color: "#c53030" },
    sushi:      { group: "food", label: "스시·생선",     emoji: "🍣", color: "#e53e3e" },
    kaiseki:    { group: "food", label: "교요리",        emoji: "🍱", color: "#b83280" },
    sweets:     { group: "food", label: "화과자·디저트", emoji: "🍡", color: "#38a169" },
    cafe:       { group: "food", label: "카페",          emoji: "☕", color: "#975a16" },
    bakery:     { group: "food", label: "빵",            emoji: "🥐", color: "#c05621" },
    market:     { group: "food", label: "시장·길거리",   emoji: "🍢", color: "#6b46c1" },
    drink:      { group: "food", label: "술·이자카야",   emoji: "🍶", color: "#2b6cb0" },
  },

  // 지역은 데이터의 area 문자열을 그대로 사용 (여기 순서를 지정하면 필터·정렬 순서가 됨)
  areas: {},

  notes: [
    { emoji: "🚃", title: "교통", text: "시내버스는 늘 붐벼요. 멀리 갈 땐 지하철·JR·게이한·한큐 전철을 섞어 쓰면 빨라요. IC카드(ICOCA 등) 하나면 대부분 탈 수 있어요." },
    { emoji: "⏰", title: "시간", text: "사찰은 대개 16–17시에 문을 닫아요. 인기 명소는 개문 직후 아침이 가장 한적해요." },
    { emoji: "🙏", title: "매너", text: "기온 사유지 골목은 촬영 금지 구역이 있어요. 시장에서는 걸으면서 먹지 않기." },
    { emoji: "💴", title: "결제", text: "노포·작은 가게는 현금만 받는 곳이 아직 있어요. 현금을 조금 챙기세요." },
  ],
});
