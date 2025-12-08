/**
 * 독자적인 성향 분석 계산 로직
 * Human Design System의 개념을 참고하되 완전히 독립적인 알고리즘 사용
 */

export type Type = 
  | "Projector" 
  | "Generator" 
  | "Manifesting Generator" 
  | "Manifestor" 
  | "Reflector";

export type Authority = 
  | "Emotional" 
  | "Splenic" 
  | "Ego" 
  | "Sacral" 
  | "Self-Projected" 
  | "Mental";

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
      return "Projector";
    case 1:
      return "Generator";
    case 2:
      return "Manifesting Generator";
    case 3:
      return "Manifestor";
    case 4:
      return "Reflector";
    default:
      return "Generator";
  }
}

/**
 * Type에 따른 Strategy 결정
 */
export function getStrategy(type: Type): string {
  const strategyMap: Record<Type, string> = {
    Projector: "Wait to be recognized",
    Generator: "Respond to what comes",
    "Manifesting Generator": "Respond then act quickly",
    Manifestor: "Inform and initiate",
    Reflector: "Observe and take time",
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
      return "Emotional";
    case 1:
      return "Splenic";
    case 2:
      return "Ego";
    case 3:
      return "Sacral";
    case 4:
      return "Self-Projected";
    case 5:
      return "Mental";
    default:
      return "Emotional";
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

