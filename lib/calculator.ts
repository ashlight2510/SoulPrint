/**
 * 독자적인 성향 분석 계산 로직
 * Human Design System의 개념을 참고하되 완전히 독립적인 알고리즘 사용
 */

export type Type = 
  | "조율가" 
  | "반응가" 
  | "멀티 실행가" 
  | "시작가" 
  | "관찰가";

export type Authority = 
  | "감정 흐름형" 
  | "직감형" 
  | "의지 주도형" 
  | "몸 반응형" 
  | "말하면서 명료해지는 형" 
  | "사색형";

export type Profile = `${number}/${number}`;

export interface CalculationResult {
  type: Type;
  strategy: string;
  authority: Authority;
  profile: Profile;
}

/**
 * 생년월일과 시간을 기반으로 Type 계산
 */
export function calculateType(
  year: number,
  month: number,
  day: number,
  hour: number
): Type {
  // 독자적인 계산 로직: 연월일시의 합을 기준으로 매핑
  const sum = year + month + day + hour;
  const mod = sum % 5;
  
  switch (mod) {
    case 0:
      return "조율가";
    case 1:
      return "반응가";
    case 2:
      return "멀티 실행가";
    case 3:
      return "시작가";
    case 4:
      return "관찰가";
    default:
      return "반응가";
  }
}

/**
 * Type에 따른 Strategy 결정
 */
export function getStrategy(type: Type): string {
  const strategyMap: Record<Type, string> = {
    조율가: "인정받을 때까지 기다리기",
    반응가: "다가오는 것에 반응하기",
    "멀티 실행가": "반응한 뒤 재빠르게 행동하기",
    시작가: "알리고 시작하기",
    관찰가: "충분히 관찰하고 결정하기",
  };
  
  return strategyMap[type];
}

/**
 * 출생 시간을 기반으로 Authority 계산
 */
export function calculateAuthority(hour: number): Authority {
  const mod = hour % 6;
  
  switch (mod) {
    case 0:
      return "감정 흐름형";
    case 1:
      return "직감형";
    case 2:
      return "의지 주도형";
    case 3:
      return "몸 반응형";
    case 4:
      return "말하면서 명료해지는 형";
    case 5:
      return "사색형";
    default:
      return "감정 흐름형";
  }
}

/**
 * Profile 계산 (독자 로직)
 */
export function calculateProfile(
  year: number,
  month: number,
  day: number,
  hour: number
): Profile {
  const line1 = ((year + month) % 6) + 1;
  const line2 = ((day + hour) % 6) + 1;
  
  return `${line1}/${line2}` as Profile;
}

/**
 * 메인 계산 함수
 */
export function calculate(
  birthDate: string,
  birthTime: string,
  birthPlace: string
): CalculationResult {
  const date = new Date(`${birthDate}T${birthTime}`);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  
  const type = calculateType(year, month, day, hour);
  const strategy = getStrategy(type);
  const authority = calculateAuthority(hour);
  const profile = calculateProfile(year, month, day, hour);
  
  return {
    type,
    strategy,
    authority,
    profile,
  };
}
