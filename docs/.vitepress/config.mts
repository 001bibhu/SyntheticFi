import { defineConfig } from 'vitepress'

const base = process.env.VP_BASE_PATH ?? '/SyntheticFi/'

export default defineConfig({
  base,
  title: 'SyntheticFi Docs',
  description:
    'Documentation for SyntheticFi — portfolio-backed liquidity for advisors and investors.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#0392F1' }],
    ['link', { rel: 'icon', href: `${base}favicon.svg` }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      },
    ],
  ],

  themeConfig: {
    logo: {
      light: '/logo.svg',
      dark: '/logo-light.svg',
      alt: 'SyntheticFi',
    },
    siteTitle: 'Docs',

    nav: [
      {
        text: 'Guides',
        items: [
          { text: 'Overview', link: '/core/overview' },
          { text: 'Getting started', link: '/core/getting-started' },
          { text: 'FAQ', link: '/core/faq' },
          { text: 'Admin guide', link: '/core/admin-guide' },
          { text: "What's new", link: '/core/whats-new' },
          { text: 'Troubleshooting', link: '/core/troubleshooting' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'API overview', link: '/platform/api-overview' },
          { text: 'Authentication', link: '/platform/authentication' },
          { text: 'API reference', link: '/platform/api-reference' },
        ],
      },
      {
        text: 'Integrations',
        items: [
          { text: 'Overview', link: '/integrations/overview' },
          { text: 'Brokerages', link: '/integrations/brokerages' },
          { text: 'Custodians', link: '/integrations/custodians' },
        ],
      },
      {
        text: 'Support',
        items: [
          { text: 'Create ticket', link: '/support/create-ticket' },
          { text: 'Feature requests', link: '/support/feature-requests' },
          { text: 'Contact', link: '/support/contact-support' },
        ],
      },
      { text: 'Analytics', link: '/admin/analytics' },
    ],

    sidebar: {
      '/core/': [
        {
          text: 'Guides',
          collapsed: false,
          items: [
            { text: 'SyntheticFi Overview', link: '/core/overview' },
            { text: 'Getting started with SyntheticFi', link: '/core/getting-started' },
            { text: 'How it works', link: '/core/how-it-works' },
            { text: 'Use cases', link: '/core/use-cases' },
            { text: 'FAQ', link: '/core/faq' },
            { text: 'Admin guide', link: '/core/admin-guide' },
            { text: "What's new", link: '/core/whats-new' },
            { text: 'Troubleshooting', link: '/core/troubleshooting' },
          ],
        },
      ],
      '/platform/': [
        {
          text: 'API reference',
          collapsed: false,
          items: [
            { text: 'API overview', link: '/platform/api-overview' },
            { text: 'Authentication', link: '/platform/authentication' },
            { text: 'API reference', link: '/platform/api-reference' },
          ],
        },
      ],
      '/integrations/': [
        {
          text: 'Integrations',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/integrations/overview' },
            { text: 'Brokerages', link: '/integrations/brokerages' },
            { text: 'Custodians', link: '/integrations/custodians' },
          ],
        },
      ],
      '/support/': [
        {
          text: 'Support',
          collapsed: false,
          items: [
            { text: 'Create a ticket', link: '/support/create-ticket' },
            { text: 'Feature requests', link: '/support/feature-requests' },
            { text: 'Contact support', link: '/support/contact-support' },
          ],
        },
      ],
      '/admin/': [
        {
          text: 'Administration',
          items: [{ text: 'Documentation analytics', link: '/admin/analytics' }],
        },
      ],
    },

    search: {
      provider: 'local',
      options: { detailedView: true },
    },

    socialLinks: [{ icon: 'globe', link: 'https://www.syntheticfi.com/' }],

    footer: {
      message: 'SyntheticFi — financial infrastructure for portfolio liquidity.',
      copyright: 'Copyright © 2026 SyntheticFi, Inc.',
    },

    docFooter: { prev: 'Previous', next: 'Next' },
    outline: { level: [2, 3], label: 'On this page' },
  },
})
