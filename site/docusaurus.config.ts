import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Squid Wiki · 理财',
  tagline: '美股 · 黄金 · 红利 · BTC',
  favicon: 'img/favicon.svg',

  url: 'https://finance.squid.wiki',
  baseUrl: '/',
  organizationName: 'squid-wiki',
  projectName: 'finance',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {defaultLocale: 'zh-Hans', locales: ['zh-Hans']},

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/squid-wiki/finance/edit/main/site/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
        gtag: {trackingID: 'G-8M670Q2TMT', anonymizeIP: true},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'Squid Wiki · 理财',
      logo: {alt: 'Squid', src: 'img/favicon.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'main', position: 'left', label: '笔记'},
        {href: 'https://squid.wiki', label: 'squid.wiki', position: 'right'},
        {href: 'https://github.com/squid-wiki/finance', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Squid Wiki',
          items: [
            {label: 'Energy · 能源', href: 'https://energy.squid.wiki'},
            {label: 'Game · 游戏', href: 'https://game.squid.wiki'},
            {label: 'Finance · 理财', href: 'https://finance.squid.wiki'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Squid Wiki · 内容采用 CC BY-NC-SA 4.0 · 不构成投资建议 · 本站使用 Google Analytics 统计匿名访问数据`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
