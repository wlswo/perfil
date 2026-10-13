import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// 커스텀 도메인을 사용하므로:
//  - site: 본인 도메인으로 변경
//  - base: '/' (커스텀 도메인은 항상 루트)
export default defineConfig({
  site: 'https://wlswo.me',
  base: '/perfil',
  trailingSlash: 'ignore',
  // lastmod = 빌드(배포) 시각. push 때마다 갱신돼 크롤러에 변경 신호를 준다.
  integrations: [sitemap({ lastmod: new Date() })],
});