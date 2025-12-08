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
  return `당신의 성향 분석 결과, ${type} 유형이며 Profile ${profile}에 해당합니다. 이 분석은 출생 정보를 바탕으로 한 독자적인 알고리즘으로 계산되었으며, 당신의 고유한 에너지 패턴과 삶의 접근 방식을 이해하는 데 도움을 줍니다. 각 항목의 의미를 살펴보시면 자신에 대한 새로운 통찰을 얻으실 수 있습니다.`;
}

function generateTypeExplanation(type: Type): string {
  const explanations: Record<Type, string> = {
    Projector:
      "Projector 유형은 주변 환경과 사람들을 깊이 이해하고 지도하는 능력이 뛰어납니다. 당신은 에너지를 직접 생산하기보다는 다른 사람들의 에너지를 인식하고 활용하는 데 특화되어 있습니다. 올바른 환경과 인정을 받을 때 최고의 성과를 발휘합니다. 무리하게 에너지를 소모하려 하지 말고, 자신의 고유한 관찰력과 통찰력을 활용하는 것이 중요합니다.",
    
    Generator:
      "Generator 유형은 지속적인 에너지 흐름을 가지고 있으며, 삶의 다양한 경험에 반응하며 만족감을 얻습니다. 당신은 자신에게 맞는 것과 맞지 않는 것을 직관적으로 구분할 수 있는 능력이 있습니다. 외부의 요구나 기대에 무작정 반응하기보다는, 자신의 내부 반응을 신뢰하고 그에 따라 행동할 때 가장 큰 만족을 느낍니다. 인내심을 가지고 올바른 기회를 기다리는 것이 핵심입니다.",
    
    "Manifesting Generator":
      "Manifesting Generator 유형은 Generator의 지속적인 에너지와 Manifestor의 즉각적인 행동력을 모두 가지고 있습니다. 당신은 빠르게 반응하고 행동할 수 있는 능력이 있으며, 동시에 지속적인 에족감을 추구합니다. 여러 일을 동시에 처리하는 것을 즐기며, 자신에게 맞는 것에 빠르게 반응하고 그렇지 않은 것은 과감히 놓아버리는 것이 중요합니다. 효율성과 속도를 중시하는 당신의 특성을 활용하세요.",
    
    Manifestor:
      "Manifestor 유형은 독립적이고 주도적인 에너지를 가지고 있습니다. 당신은 자신의 의지로 일을 시작하고 추진하는 능력이 뛰어납니다. 다른 사람들의 허락이나 동의를 기다리기보다는, 자신의 결정을 주변에 알리고 행동하는 것이 자연스럽습니다. 혼자 일하는 것을 선호하며, 자신의 페이스로 진행할 때 가장 큰 성과를 냅니다. 주변과의 소통을 통해 불필요한 저항을 줄이는 것이 중요합니다.",
    
    Reflector:
      "Reflector 유형은 주변 환경과 사람들의 에너지를 반영하고 관찰하는 특별한 능력을 가지고 있습니다. 당신은 매우 민감하고 직관적이며, 주변 상황을 객관적으로 바라볼 수 있습니다. 결정을 내릴 때 충분한 시간을 두고 다양한 관점을 고려하는 것이 중요합니다. 한 달의 주기를 통해 자신의 상태를 관찰하고, 자신에게 맞는 환경을 찾는 것이 핵심입니다.",
  };
  
  return explanations[type];
}

function generateStrategyExplanation(strategy: string, type: Type): string {
  const explanations: Record<string, string> = {
    "Wait to be recognized":
      "당신의 전략은 '인정받을 때까지 기다리기'입니다. 능력을 발휘하려고 무리하게 나서기보다는, 자신의 고유한 재능을 알아보는 사람들과 환경을 기다리는 것이 중요합니다. 초대나 요청을 받았을 때 행동하는 것이 당신에게 가장 자연스럽고 효과적인 방식입니다. 강제로 기회를 만들려 하지 말고, 자신의 가치를 인정해주는 곳에서 활동하세요.",
    
    "Respond to what comes":
      "당신의 전략은 '오는 것에 반응하기'입니다. 삶의 다양한 기회와 상황에 자연스럽게 반응하며, 자신의 내부 반응(만족감 또는 불만족감)을 신뢰하는 것이 핵심입니다. 미리 계획하거나 강제로 일을 시작하기보다는, 주변에서 오는 것들에 반응하며 흐름을 따르는 것이 당신에게 가장 적합합니다. 자신의 내부 신호를 잘 듣고 그에 따라 행동하세요.",
    
    "Respond then act quickly":
      "당신의 전략은 '반응한 후 빠르게 행동하기'입니다. Generator의 반응성과 Manifestor의 즉각적인 행동력을 모두 활용할 수 있습니다. 자신에게 맞는 것에 빠르게 반응하고, 그에 따라 즉시 행동하는 것이 당신의 강점입니다. 여러 기회를 동시에 탐색하고, 가장 만족스러운 것에 집중하는 것이 중요합니다. 효율성과 속도를 중시하되, 자신의 내부 반응을 무시하지 마세요.",
    
    "Inform and initiate":
      "당신의 전략은 '알리고 시작하기'입니다. 독립적으로 일을 시작하는 능력이 있지만, 주변 사람들에게 자신의 의도와 계획을 알리는 것이 중요합니다. 이렇게 하면 불필요한 저항을 줄이고 더 원활하게 진행할 수 있습니다. 혼자 모든 것을 하려 하지 말고, 필요한 사람들에게 정보를 공유하며 협력하는 것이 성공의 열쇠입니다.",
    
    "Observe and take time":
      "당신의 전략은 '관찰하고 시간을 갖기'입니다. 결정을 내리기 전에 충분한 시간을 두고 다양한 관점을 고려하는 것이 중요합니다. 주변 환경과 사람들의 에너지를 반영하는 특성상, 성급하게 결정을 내리면 자신에게 맞지 않은 선택을 할 수 있습니다. 최소 한 달 정도의 주기를 통해 상황을 관찰하고, 자신에게 진정으로 맞는 것을 선택하세요.",
  };
  
  return explanations[strategy] || "당신의 전략을 이해하고 실천하는 것이 중요합니다.";
}

function generateAuthorityExplanation(authority: Authority): string {
  const explanations: Record<Authority, string> = {
    Emotional:
      "당신의 결정 권위는 감정적 움직임에 있습니다. 감정의 파도는 상승과 하강을 반복하며, 중요한 결정은 감정이 안정된 상태에서 내리는 것이 중요합니다. 즉각적인 반응보다는 시간을 두고 감정의 흐름을 관찰한 후 결정을 내리세요. 감정의 고조와 저조를 경험한 후에야 진정한 명확함을 얻을 수 있습니다.",
    
    Splenic:
      "당신의 결정 권위는 직관과 본능에 있습니다. 순간적인 직감과 몸의 신호를 신뢰하는 것이 중요합니다. 이 권위는 즉각적이고 자동적이므로, 생각하기 전에 느껴지는 첫 번째 반응을 따르는 것이 좋습니다. 과도한 분석이나 지연은 이 권위의 힘을 약화시킵니다. 자신의 본능적 신호를 믿고 따르세요.",
    
    Ego:
      "당신의 결정 권위는 의지의 중심에 있습니다. 자신의 약속과 의지의 힘을 통해 결정을 내립니다. 진정으로 원하는 것에 대해 명확한 의지를 가지고 있을 때 가장 강력한 결정을 내릴 수 있습니다. 다른 사람의 기대나 압력에 휘둘리지 말고, 자신의 진정한 의지를 확인하는 것이 중요합니다.",
    
    Sacral:
      "당신의 결정 권위는 생명력의 중심에 있습니다. '음'과 '응' 같은 즉각적인 몸의 반응을 신뢰하는 것이 핵심입니다. 자신에게 맞는 것에 대해서는 자연스러운 긍정적 반응이 오고, 맞지 않는 것에 대해서는 부정적 반응이나 무관심이 옵니다. 이 신호를 잘 듣고 따르는 것이 당신에게 가장 적합한 결정 방식입니다.",
    
    "Self-Projected":
      "당신의 결정 권위는 자신의 목소리에 있습니다. 말로 표현하거나 다른 사람과 대화를 나누는 과정에서 명확해집니다. 혼자 생각하는 것보다는 자신의 생각을 말로 표현하거나, 신뢰할 수 있는 사람과 대화를 나누면서 진정한 답을 찾을 수 있습니다. 내부의 목소리를 외부로 표현하는 것이 결정의 열쇠입니다.",
    
    Mental:
      "당신의 결정 권위는 정신적 과정에 있습니다. 정보를 수집하고 분석하는 과정을 통해 결정을 내립니다. 충분한 정보와 시간을 가지고 신중하게 고려한 후 결정을 내리는 것이 중요합니다. 성급하게 결정을 내리기보다는, 다양한 관점을 검토하고 자신에게 맞는 것을 선택하세요.",
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
  
  return `Profile ${profile}: 첫 번째 숫자 ${line1}은 당신의 의식적 특성을, 두 번째 숫자 ${line2}는 무의식적 특성을 나타냅니다. ${lineDescriptions[line1]} 동시에 ${lineDescriptions[line2]} 이 두 가지 특성이 조화를 이루며 당신의 고유한 삶의 방식을 만들어냅니다. 각 라인의 특성을 이해하고 균형 있게 발전시키는 것이 중요합니다.`;
}

