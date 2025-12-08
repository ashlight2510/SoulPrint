"use client"

import { useMemo } from "react"

interface BodyGraphProps {
  birthDate: string
  birthTime: string
}

/**
 * 독자적인 BodyGraph 시각화 컴포넌트
 * 공식 Human Design BodyGraph 디자인과 다르게 구성
 */
export function BodyGraph({ birthDate, birthTime }: BodyGraphProps) {
  // 출생 정보를 기반으로 센터 활성화 여부 결정 (독자 로직)
  const centers = useMemo(() => {
    const date = new Date(`${birthDate}T${birthTime}`);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    
    // 각 센터의 활성화 여부를 계산 (독자 알고리즘)
    const sum = year + month + day + hour;
    
    return {
      head: (sum % 2 === 0),
      ajna: (sum % 3 === 0),
      throat: (sum % 5 === 0),
      g: (sum % 7 === 0),
      heart: (sum % 11 === 0),
      solar: (sum % 13 === 0),
      sacral: (sum % 17 === 0),
      root: (sum % 19 === 0),
      spleen: (sum % 23 === 0),
    };
  }, [birthDate, birthTime]);

  const activeColor = "rgb(99, 102, 241)"; // indigo-500
  const inactiveColor = "rgb(229, 231, 235)"; // gray-200
  const strokeColor = "rgb(156, 163, 175)"; // gray-400

  return (
    <div className="flex justify-center p-4">
      <svg
        width="280"
        height="520"
        viewBox="0 0 280 520"
        className="border rounded-lg bg-white"
      >
        {/* Head Center - 상단 원 */}
        <circle
          cx="140"
          cy="50"
          r="35"
          fill={centers.head ? activeColor : inactiveColor}
          stroke={strokeColor}
          strokeWidth="2"
        />
        <text
          x="140"
          y="55"
          textAnchor="middle"
          className="text-xs font-medium"
          fill={centers.head ? "white" : "gray"}
        >
          Head
        </text>

        {/* Ajna Center - 상단 사각형 */}
        <rect
          x="100"
          y="100"
          width="80"
          height="60"
          fill={centers.ajna ? activeColor : inactiveColor}
          stroke={strokeColor}
          strokeWidth="2"
          rx="4"
        />
        <text
          x="140"
          y="135"
          textAnchor="middle"
          className="text-xs font-medium"
          fill={centers.ajna ? "white" : "gray"}
        >
          Ajna
        </text>

        {/* Throat Center - 중앙 사각형 */}
        <rect
          x="100"
          y="180"
          width="80"
          height="50"
          fill={centers.throat ? activeColor : inactiveColor}
          stroke={strokeColor}
          strokeWidth="2"
          rx="4"
        />
        <text
          x="140"
          y="208"
          textAnchor="middle"
          className="text-xs font-medium"
          fill={centers.throat ? "white" : "gray"}
        >
          Throat
        </text>

        {/* G Center - 중앙 다이아몬드 */}
        <polygon
          points="140,250 170,280 140,310 110,280"
          fill={centers.g ? activeColor : inactiveColor}
          stroke={strokeColor}
          strokeWidth="2"
        />
        <text
          x="140"
          y="285"
          textAnchor="middle"
          className="text-xs font-medium"
          fill={centers.g ? "white" : "gray"}
        >
          G
        </text>

        {/* Heart Center - 왼쪽 사각형 */}
        <rect
          x="50"
          y="330"
          width="60"
          height="50"
          fill={centers.heart ? activeColor : inactiveColor}
          stroke={strokeColor}
          strokeWidth="2"
          rx="4"
        />
        <text
          x="80"
          y="358"
          textAnchor="middle"
          className="text-xs font-medium"
          fill={centers.heart ? "white" : "gray"}
        >
          Heart
        </text>

        {/* Solar Plexus Center - 오른쪽 사각형 */}
        <rect
          x="170"
          y="330"
          width="60"
          height="50"
          fill={centers.solar ? activeColor : inactiveColor}
          stroke={strokeColor}
          strokeWidth="2"
          rx="4"
        />
        <text
          x="200"
          y="358"
          textAnchor="middle"
          className="text-xs font-medium"
          fill={centers.solar ? "white" : "gray"}
        >
          Solar
        </text>

        {/* Sacral Center - 중앙 하단 원 */}
        <circle
          cx="140"
          cy="420"
          r="40"
          fill={centers.sacral ? activeColor : inactiveColor}
          stroke={strokeColor}
          strokeWidth="2"
        />
        <text
          x="140"
          y="427"
          textAnchor="middle"
          className="text-xs font-medium"
          fill={centers.sacral ? "white" : "gray"}
        >
          Sacral
        </text>

        {/* Root Center - 하단 삼각형 */}
        <polygon
          points="140,480 180,460 100,460"
          fill={centers.root ? activeColor : inactiveColor}
          stroke={strokeColor}
          strokeWidth="2"
        />
        <text
          x="140"
          y="475"
          textAnchor="middle"
          className="text-xs font-medium"
          fill={centers.root ? "white" : "gray"}
        >
          Root
        </text>

        {/* Spleen Center - 왼쪽 하단 원 */}
        <circle
          cx="80"
          cy="420"
          r="25"
          fill={centers.spleen ? activeColor : inactiveColor}
          stroke={strokeColor}
          strokeWidth="2"
        />
        <text
          x="80"
          y="427"
          textAnchor="middle"
          className="text-xs font-medium"
          fill={centers.spleen ? "white" : "gray"}
        >
          Spleen
        </text>

        {/* 연결선들 (간단한 표현) */}
        <line
          x1="140"
          y1="85"
          x2="140"
          y2="100"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <line
          x1="140"
          y1="160"
          x2="140"
          y2="180"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <line
          x1="140"
          y1="230"
          x2="140"
          y2="250"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <line
          x1="110"
          y1="280"
          x2="80"
          y2="330"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <line
          x1="170"
          y1="280"
          x2="200"
          y2="330"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <line
          x1="140"
          y1="310"
          x2="140"
          y2="380"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <line
          x1="140"
          y1="460"
          x2="140"
          y2="480"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}

