# Lumental Frontend README

## 기본 정보
1. Lumental <br>
-Lumental은 **스마트워치에서 수집되는 생체 데이터를 기반으로** 사용자의 정신적 컨디션을 분석하고 관리할 수 있도록 돕는 **AI 멘탈 헬스케어 플랫폼**입니다.
-주관적인 감정 기록이 아닌, **수치와 패턴에 근거한 분석**을 통해 보다 신뢰도 높은 멘탈 관리 경험을 제공합니다.


## 🧠 프로젝트 핵심 기능

### 1️⃣ 스마트워치 데이터 연동
- 심박수, 심박변이도(HRV), 수면 패턴 등 생체 데이터를 실시간으로 수집(현재는 사용자가 직접 업로드하는 형태)
- 수집된 데이터를 기반으로 사용자의 현재 컨디션을 시각화
- 하단 탭에서 **나만의 멘탈 리포트**를 한눈에 확인 가능

### 2️⃣ 데이터 기반 AI 상담
- AI 챗봇이 생체 데이터의 변화를 감지
- 사용자의 현재 상태를 해석하여 **맞춤형 상담 및 솔루션 제안**
- 단순 대화가 아닌, **데이터 기반 의사결정** 제공

### 3️⃣ 개인 맞춤 체크리스트 생성
- AI가 제안한 솔루션을 체크리스트 형태로 제공
- 미션을 수행하며 일상 속에서 멘탈 케어 실천
- 미션 완료 시 캐릭터가 성장하는 **게이미피케이션 요소(게임적 요소)** 포함


## 🛠 기술 스택 (Frontend)

- **HTML**
- **CSS**
- **JavaScript**
- **React + Vite** (개발 및 빌드 도구)


## 폴더 구조

```bash
LUMENTAL
├── dist
├── public
├── src
│   ├── assets        # 이미지, 아이콘 등 정적 리소스
│   ├── charts        # 심박수, HRV 등 데이터 시각화 컴포넌트
│   ├── components    # 공통 UI 컴포넌트
│   ├── fonts         # 웹 폰트
│   ├── layouts       # 페이지 레이아웃
│   ├── onboardings   # 온보딩 관련 화면
│   ├── pages         # 페이지 단위 컴포넌트
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── index.html
├── package.json
├── vite.config.js
└── README.md
```


## .env 환경변수

-API 서버 주소: VITE_API_URL
-카카오톡 로그인 REST KEY: VITE_KAKAO_REST_KEY
-카카오톡 로그인 이후 REDIRECT 주소: VITE_KAKAO_REDIRECT


## 🚀 실행 방법

배포된 서비스 링크를 통해 바로 이용하실 수 있습니다.


👉 **배포 링크:** `https://lumental-frontend.vercel.app/`

별도의 설치 없이 웹 환경에서 실행 가능합니다.

