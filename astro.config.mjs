import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// 커스텀 도메인을 사용하므로:
//  - site: 본인 도메인으로 변경
//  - base: '/' (커스텀 도메인은 항상 루트)
export default defineConfig({
  site: 'https://wlswo.me',
  base: '/perfil',
  trailingSlash: 'ignore',
});
