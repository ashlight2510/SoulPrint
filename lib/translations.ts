export type Language = "ko" | "en";

export const translations = {
  ko: {
    // Meta
    metaTitle: "SoulPrint | 출생 정보 기반 성향 분석",
    metaDescription: "출생 정보를 바탕으로 한 독자적인 성향 분석 서비스",
    
    // Home page
    title: "SoulPrint",
    subtitle: "출생 정보를 바탕으로 한 독자적인 성향 분석",
    cardTitle: "출생 정보 입력",
    cardDescription: "정확한 분석을 위해 출생 정보를 입력해주세요.",
    birthDateLabel: "생년월일",
    birthDatePlaceholder: "예: 1990-07-15",
    birthDateHint: "연도 4자리-월 2자리-일 2자리 형식으로 입력하세요.",
    birthTimeLabel: "출생 시간",
    birthTimePlaceholder: "예: 08:30",
    submitButton: "결과 보기",
    serviceNote: "이 서비스는 독자적인 알고리즘을 사용하여 계산됩니다.",
    
    // Validation messages
    validationAllFields: "모든 정보를 입력해주세요.",
    validationDateFormat: "생년월일을 YYYY-MM-DD 형식으로 입력해주세요.",
    validationTimeFormat: "출생 시간을 HH:MM 형식으로 입력해주세요.",
    
    // Result page
    resultTitle: "분석 결과",
    resultCalculating: "결과를 계산하는 중...",
    resultLoading: "결과를 불러오는 중...",
    backButton: "다시 분석하기",
    shareButton: "공유하기",
    shareTitle: "SoulPrint - 성향 분석 결과",
    shareText: "나의 유형: {type}, 성향 조합: {profile}",
    linkCopied: "링크가 클립보드에 복사되었습니다!",
    profileLabel: "성향 조합",
    strategyLabel: "전략",
    authorityLabel: "결정 스타일",
    overviewTitle: "분석 결과 요약",
    typeTitle: "유형",
    strategyTitle: "전략",
    authorityTitle: "결정 스타일",
    profileTitle: "성향 조합",
    moreTestsButton: "🎯 더 많은 테스트 해보기",
    
    // Footer
    footerNote: "이 서비스는 독자적인 알고리즘을 사용하여 계산됩니다.",
    footerDisclaimer: "© 2025 — 이 서비스는 다양한 형이상학적 시스템에서 영감을 받은 독립적인 성향 분석 도구이며, Human Design®, Jovian Archive 등 어떠한 공식 기관과도 관련이 없습니다.",
    footerNote2: "본 서비스는 Human Design System의 개념을 참고하여 독자적으로 재구성된 성향 분석 도구입니다. 공식 기관(Jovian Archive 등)과 무관하며, 공식 문구나 자료를 사용하지 않습니다.",
    
    // Type translations
    typeHarmonizer: "조율가",
    typeGenerator: "반응가",
    typeManifestingGenerator: "멀티 실행가",
    typeManifestor: "시작가",
    typeProjector: "관찰가",
    
    // Strategy translations
    strategyWait: "인정받을 때까지 기다리기",
    strategyRespond: "다가오는 것에 반응하기",
    strategyRespondAndAct: "반응한 뒤 재빠르게 행동하기",
    strategyInform: "알리고 시작하기",
    strategyObserve: "충분히 관찰하고 결정하기",
    
    // Authority translations
    authorityEmotional: "감정 흐름형",
    authoritySplenic: "직감형",
    authorityEgo: "의지 주도형",
    authoritySacral: "몸 반응형",
    authorityThroat: "말하면서 명료해지는 형",
    authorityAjna: "사색형",
  },
  en: {
    // Meta
    metaTitle: "SoulPrint | Birth Information Based Personality Analysis",
    metaDescription: "An independent personality analysis service based on birth information",
    
    // Home page
    title: "SoulPrint",
    subtitle: "Independent personality analysis based on birth information",
    cardTitle: "Enter Birth Information",
    cardDescription: "Please enter your birth information for accurate analysis.",
    birthDateLabel: "Birth Date",
    birthDatePlaceholder: "e.g. 1990-07-15",
    birthDateHint: "Enter in YYYY-MM-DD format (4-digit year, 2-digit month, 2-digit day).",
    birthTimeLabel: "Birth Time",
    birthTimePlaceholder: "e.g. 08:30",
    submitButton: "View Results",
    serviceNote: "This service uses an independent algorithm for calculation.",
    
    // Validation messages
    validationAllFields: "Please enter all information.",
    validationDateFormat: "Please enter birth date in YYYY-MM-DD format.",
    validationTimeFormat: "Please enter birth time in HH:MM format.",
    
    // Result page
    resultTitle: "Analysis Results",
    resultCalculating: "Calculating results...",
    resultLoading: "Loading results...",
    backButton: "Analyze Again",
    shareButton: "Share",
    shareTitle: "SoulPrint - Personality Analysis Results",
    shareText: "My type: {type}, Profile combination: {profile}",
    linkCopied: "Link copied to clipboard!",
    profileLabel: "Profile Combination",
    strategyLabel: "Strategy",
    authorityLabel: "Decision Style",
    overviewTitle: "Analysis Summary",
    typeTitle: "Type",
    strategyTitle: "Strategy",
    authorityTitle: "Decision Style",
    profileTitle: "Profile Combination",
    moreTestsButton: "🎯 Explore More Tests",
    
    // Footer
    footerNote: "This service uses an independent algorithm for calculation.",
    footerDisclaimer: "© 2025 — This service is an independent personality analysis tool inspired by various metaphysical systems and is not affiliated with any official organizations such as Human Design®, Jovian Archive, etc.",
    footerNote2: "This service is an independently restructured personality analysis tool that references concepts from the Human Design System. It is not related to official organizations (such as Jovian Archive) and does not use official terminology or materials.",
    
    // Type translations
    typeHarmonizer: "Harmonizer",
    typeGenerator: "Generator",
    typeManifestingGenerator: "Manifesting Generator",
    typeManifestor: "Manifestor",
    typeProjector: "Projector",
    
    // Strategy translations
    strategyWait: "Wait for Recognition",
    strategyRespond: "Respond to What Comes",
    strategyRespondAndAct: "Respond and Act Quickly",
    strategyInform: "Inform and Initiate",
    strategyObserve: "Observe and Decide",
    
    // Authority translations
    authorityEmotional: "Emotional Wave",
    authoritySplenic: "Splenic Intuition",
    authorityEgo: "Ego Will",
    authoritySacral: "Sacral Response",
    authorityThroat: "Speaking Clarity",
    authorityAjna: "Mental Reflection",
  },
};

// Type translation map
export const typeTranslations: Record<string, { ko: string; en: string }> = {
  "조율가": { ko: "조율가", en: "Harmonizer" },
  "반응가": { ko: "반응가", en: "Generator" },
  "멀티 실행가": { ko: "멀티 실행가", en: "Manifesting Generator" },
  "시작가": { ko: "시작가", en: "Manifestor" },
  "관찰가": { ko: "관찰가", en: "Projector" },
};

// Strategy translation map
export const strategyTranslations: Record<string, { ko: string; en: string }> = {
  "인정받을 때까지 기다리기": { ko: "인정받을 때까지 기다리기", en: "Wait for Recognition" },
  "다가오는 것에 반응하기": { ko: "다가오는 것에 반응하기", en: "Respond to What Comes" },
  "반응한 뒤 재빠르게 행동하기": { ko: "반응한 뒤 재빠르게 행동하기", en: "Respond and Act Quickly" },
  "알리고 시작하기": { ko: "알리고 시작하기", en: "Inform and Initiate" },
  "충분히 관찰하고 결정하기": { ko: "충분히 관찰하고 결정하기", en: "Observe and Decide" },
};

// Authority translation map
export const authorityTranslations: Record<string, { ko: string; en: string }> = {
  "감정 흐름형": { ko: "감정 흐름형", en: "Emotional Wave" },
  "직감형": { ko: "직감형", en: "Splenic Intuition" },
  "의지 주도형": { ko: "의지 주도형", en: "Ego Will" },
  "몸 반응형": { ko: "몸 반응형", en: "Sacral Response" },
  "말하면서 명료해지는 형": { ko: "말하면서 명료해지는 형", en: "Speaking Clarity" },
  "사색형": { ko: "사색형", en: "Mental Reflection" },
};

export function t(key: keyof typeof translations.ko, lang: Language = "ko", vars?: Record<string, string>): string {
  const translation = translations[lang]?.[key] || translations.ko[key] || key;
  if (vars) {
    return translation.replace(/\{(\w+)\}/g, (_, k) => vars[k] || `{${k}}`);
  }
  return translation;
}
