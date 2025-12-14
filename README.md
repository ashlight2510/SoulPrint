# SoulPrint - 성향 분석 웹앱

출생 정보를 바탕으로 한 독자적인 성향 분석 서비스입니다.

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
/app
  page.tsx              # 메인 입력 페이지
  /result/page.tsx      # 결과 페이지
  layout.tsx            # 레이아웃 (Footer 포함)
  globals.css           # 전역 스타일
/components
  DateInput.tsx         # 날짜/시간 입력 컴포넌트
  ResultCard.tsx        # 결과 카드 컴포넌트
  /ui                   # ShadCN UI 컴포넌트
/lib
  calculator.ts         # 계산 로직 (독자 알고리즘)
  descriptions.ts       # 독자 설명문 생성기
  utils.ts              # 유틸리티 함수
```

## 🔑 주요 기능

- **독자적인 계산 로직**: Human Design 개념을 참고하되 완전히 독립적인 알고리즘 사용
- **독자 설명문**: 공식 문구를 사용하지 않는 완전 독립적인 해석
- **결과 공유**: URL 공유 기능
- **면책문 포함**: Footer에 자동 포함된 법적 면책문

## ⚖️ 법적 고지

본 서비스는 Human Design System의 개념을 참고하여 독자적으로 재구성된 성향 분석 도구입니다. 공식 기관(Jovian Archive 등)과 무관하며, 공식 문구나 자료를 사용하지 않습니다.

## 🛠️ 기술 스택

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI**

## 📝 라이선스

이 프로젝트는 독자적인 구현으로, Human Design®과의 연관성을 주장하지 않습니다.
