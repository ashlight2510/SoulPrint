import { Type, Authority, Profile } from "./calculator";

/**
 * 독자적인 설명문 생성기
 * 공식 Human Design 문구를 사용하지 않음
 */

export interface Descriptions {
  overview: string;
  typeExplanation: string;
  strategyExplanation: string;
  authorityExplanation: string;
  profileExplanation: string;
}

export function generateDescriptions(
  type: Type,
  strategy: string,
  authority: Authority,
  profile: Profile
): Descriptions {
  return {
    overview: generateOverview(type, profile),
    typeExplanation: generateTypeExplanation(type),
    strategyExplanation: generateStrategyExplanation(strategy, type),
    authorityExplanation: generateAuthorityExplanation(authority),
    profileExplanation: generateProfileExplanation(profile),
  };
}

function generateOverview(type: Type, profile: Profile): string {
  return `당신의 성향 분석 결과, ${type} 유형이며 성향 조합 ${profile}에 해당합니다. 이 분석은 출생 정보를 바탕으로 한 독자적인 알고리즘으로 계산되었으며, 당신의 고유한 에너지 패턴과 삶의 접근 방식을 이해하는 데 도움을 줍니다. 각 항목의 의미를 살펴보시면 자신에 대한 새로운 통찰을 얻으실 수 있습니다.`;
}

function generateTypeExplanation(type: Type): string {
  const explanations: Record<Type, string> = {
    조율가:
      "조율가는 주변 환경과 사람들을 잘 읽고 흐름을 맞추는 데 강점이 있습니다. 에너지를 직접 생산하기보다, 맞는 자리에서 자신의 통찰을 나눌 때 빛납니다. 무리해서 앞장서기보다 나를 알아보는 상황과 사람을 기다렸다가 초대를 받으면 크게 활약할 수 있습니다.",
    
    반응가:
      "반응가는 안정적인 에너지를 가진 타입으로, 외부에서 다가오는 일과 사람에 반응하며 만족을 느낍니다. 억지로 시작하기보다 내 안에서 '좋다/싫다'가 올라올 때를 기다리고, 몸이 끌리는 것에 집중하면 에너지가 오래갑니다.",
    
    "멀티 실행가":
      "멀티 실행가는 반응가의 에너지와 시작가의 즉각적인 추진력을 함께 지닌 타입입니다. 여러 일을 동시에 빠르게 해내는 것을 즐기며, 맞는 것엔 즉시 반응하고 아닌 것엔 과감히 손을 떼야 효율이 올라갑니다. 속도와 유연함을 살리되, 몸의 반응을 항상 확인하세요.",
    
    시작가:
      "시작가는 독립적으로 일을 착수하고 밀어붙이는 힘이 강한 타입입니다. 눈치 보지 않고 먼저 움직이는 것이 자연스럽지만, 주변에 미리 알려 소통하면 불필요한 마찰을 줄일 수 있습니다. 혼자 속도를 낼 때 능력이 잘 드러납니다.",
    
    관찰가:
      "관찰가는 주변 분위기와 사람들의 상태를 민감하게 느끼는 타입입니다. 서두르기보다 시간을 두고 지켜보며, 여러 관점을 모은 뒤 결정할 때 안전합니다. 환경이 잘 맞을수록 컨디션이 오르니, 편안한 장소와 사람을 고르는 것이 중요합니다.",
  };
  
  return explanations[type];
}

function generateStrategyExplanation(strategy: string, type: Type): string {
  const explanations: Record<string, string> = {
    "인정받을 때까지 기다리기":
      "당신의 전략은 '인정받을 때까지 기다리기'입니다. 능력을 발휘하려고 무리하게 나서기보다는, 자신의 고유한 재능을 알아보는 사람들과 환경을 기다리는 것이 중요합니다. 초대나 요청을 받았을 때 행동하는 것이 당신에게 가장 자연스럽고 효과적인 방식입니다. 강제로 기회를 만들려 하지 말고, 자신의 가치를 인정해주는 곳에서 활동하세요.",
    
    "다가오는 것에 반응하기":
      "당신의 전략은 '오는 것에 반응하기'입니다. 삶의 다양한 기회와 상황에 자연스럽게 반응하며, 자신의 내부 반응(만족감 또는 불만족감)을 신뢰하는 것이 핵심입니다. 미리 계획하거나 강제로 일을 시작하기보다는, 주변에서 오는 것들에 반응하며 흐름을 따르는 것이 당신에게 가장 적합합니다. 자신의 내부 신호를 잘 듣고 그에 따라 행동하세요.",
    
    "반응한 뒤 재빠르게 행동하기":
      "당신의 전략은 '반응한 후 빠르게 행동하기'입니다. 제너레이터의 반응성과 매니페스터의 즉각적인 행동력을 모두 활용할 수 있습니다. 자신에게 맞는 것에 빠르게 반응하고, 그에 따라 즉시 행동하는 것이 당신의 강점입니다. 여러 기회를 동시에 탐색하고, 가장 만족스러운 것에 집중하는 것이 중요합니다. 효율성과 속도를 중시하되, 자신의 내부 반응을 무시하지 마세요.",
    
    "알리고 시작하기":
      "당신의 전략은 '알리고 시작하기'입니다. 독립적으로 일을 시작하는 능력이 있지만, 주변 사람들에게 자신의 의도와 계획을 알리는 것이 중요합니다. 이렇게 하면 불필요한 저항을 줄이고 더 원활하게 진행할 수 있습니다. 혼자 모든 것을 하려 하지 말고, 필요한 사람들에게 정보를 공유하며 협력하는 것이 성공의 열쇠입니다.",
    
    "충분히 관찰하고 결정하기":
      "당신의 전략은 '관찰하고 시간을 갖기'입니다. 결정을 내리기 전에 충분한 시간을 두고 다양한 관점을 고려하는 것이 중요합니다. 주변 환경과 사람들의 에너지를 반영하는 특성상, 성급하게 결정을 내리면 자신에게 맞지 않은 선택을 할 수 있습니다. 최소 한 달 정도의 주기를 통해 상황을 관찰하고, 자신에게 진정으로 맞는 것을 선택하세요.",
  };
  
  return explanations[strategy] || "당신의 전략을 이해하고 실천하는 것이 중요합니다.";
}

function generateAuthorityExplanation(authority: Authority): string {
  const explanations: Record<Authority, string> = {
    "감정 흐름형":
      "감정의 물결을 한 번 흘려보낸 뒤 결정하는 타입입니다. 기분이 들뜨거나 가라앉을 때는 잠시 기다렸다가, 감정이 잔잔해졌을 때 선택하면 후회가 줄어듭니다. 바로 대답하기보다는 하루 정도 시간을 두고 마음이 편안해질 때 결정하세요.",
    
    "직감형":
      "첫 느낌과 번쩍 떠오르는 감각이 가장 믿을 만한 타입입니다. 머리로 오래 고민하기보다 순간적으로 오는 '이거다/아니다' 신호를 따라가면 후회가 적습니다. 생각이 복잡해질수록 직감이 흐려지니, 몸이 주는 빠른 신호를 놓치지 마세요.",
    
    "의지 주도형":
      "정말 하고 싶은가, 내 마음이 끌리는가가 기준이 되는 타입입니다. 남의 기대보다 내 욕구와 자존감을 지켜주는 선택을 할 때 힘이 납니다. '내가 정말 원하는가?'를 스스로에게 물어보고, 가슴이 확실히 끌릴 때 움직이세요.",
    
    "몸 반응형":
      "생각보다 몸이 먼저 대답하는 타입입니다. 맞으면 자연스레 힘이 나고, 아니면 몸이 무거워집니다. '어깨가 펴지는가, 힘이 빠지는가' 같은 느낌을 잘 관찰하세요. 몸이 가볍게 반응하는 선택이 가장 잘 맞습니다.",
    
    "말하면서 명료해지는 형":
      "속마음을 소리 내어 말해 볼 때 답이 명확해지는 타입입니다. 혼잣말이든, 믿을 만한 사람에게 털어놓든, 말로 뱉어보며 마음이 밝아지는 쪽을 선택하세요. 입 밖으로 내는 순간 스스로 진짜 원하는 방향이 들립니다.",
    
    "사색형":
      "시간을 두고 찬찬히 생각을 굴려 볼 때 가장 좋은 답을 찾는 타입입니다. 정보를 모으고, 여러 관점을 비교하며, 감정이 가라앉은 뒤에 결정하면 안정적입니다. 서두르기보다 거리감을 두고 바라볼 때 명확함이 생깁니다.",
  };
  
  return explanations[authority];
}

function generateProfileExplanation(profile: Profile): string {
  const [line1, line2] = profile.split("/").map(Number);
  
  const lineDescriptions: Record<number, string> = {
    1: "연구자: 깊이 있는 탐구와 근본적인 이해를 추구합니다.", 
    2: "은둔자: 고유한 재능을 가지고 있으나 때를 기다립니다.",
    3: "순환자: 시행착오를 통해 배우고 성장합니다.",
    4: "기회주의자: 네트워크와 연결을 통해 기회를 만듭니다.",
    5: "일반화자: 보편적 해결책을 찾아 다른 사람들을 돕습니다.",
    6: "모범자: 이상을 추구하며 다른 사람들의 롤모델이 됩니다.",
  };
  
  return `성향 조합 ${profile}: 첫 번째 숫자 ${line1}은 당신의 의식적 특성을, 두 번째 숫자 ${line2}는 무의식적 특성을 나타냅니다. ${lineDescriptions[line1]} 동시에 ${lineDescriptions[line2]} 이 두 가지 특성이 조화를 이루며 당신의 고유한 삶의 방식을 만들어냅니다. 각 라인의 특성을 이해하고 균형 있게 발전시키는 것이 중요합니다.`;
}
