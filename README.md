# perfil-page

퍼필(PerFil) 공식 사이트 — 랜딩 페이지 + 법적 고지(이용약관, 개인정보 처리방침).

[Astro](https://astro.build) + [GitHub Pages](https://pages.github.com).

## 페이지 구조

```
/                  # 랜딩
/terms             # 서비스 이용약관
/privacy           # 개인정보 처리방침
```

## 로컬 개발

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # ./dist/ 에 정적 빌드
npm run preview      # 빌드 결과 로컬 미리보기
```

## 배포 (GitHub Pages)

자동 배포: `main` 브랜치에 push 하면 GitHub Actions(`.github/workflows/deploy.yml`)가
빌드 후 GitHub Pages에 자동 배포합니다.

### 최초 1회 셋업

1. GitHub 에서 이 레포 생성 후 push
2. **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 변경
3. `astro.config.mjs` 의 `site` 와 `base` 값을 본인 계정/레포에 맞게 수정
   - `site`: `https://<username>.github.io`
   - `base`: `/<repo-name>` (이 레포라면 `/perfil-page`)
4. push → Actions 탭에서 빌드 진행 확인 → 끝나면 Pages URL 활성화

### 커스텀 도메인 연결 시

`astro.config.mjs` 에서:

```js
site: 'https://your-domain.com',
base: '/',
```

그리고 `public/CNAME` 파일에 도메인을 한 줄로 적어두세요.

## 콘텐츠 수정

- 랜딩: `src/pages/index.astro`
- 약관: `src/pages/terms.md`
- 처방침: `src/pages/privacy.md`
- 공통 레이아웃 / 스타일: `src/layouts/Layout.astro`

마크다운 파일을 수정해서 push 하면 자동 배포됩니다.

## 향후 추가 가능

- `/blog` — 릴리스 노트, 업데이트 소식
- `/support` — 자주 묻는 질문
- 이미지/스크린샷은 `public/` 폴더에 두고 `<img src={`${base}/screenshot.png`} />` 로 참조
