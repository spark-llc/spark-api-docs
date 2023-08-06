import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Spark API Documentation',
  description: 'Official documentation for Spark.',

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference()
    },
    socialLinks: [
      {
        icon: 'github',
        link: ''
      }
    ]
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-stations-api', activeMatch: '/guide/' }
    /*{
      text: 'Reference',
      activeMatch: '^/(api|server|system)/',
      items: [
        { text: '@semantic-api/access-control', link: '/access-control/' },
        { text: '@semantic-api/api', link: '/api/' },
        { text: '@semantic-api/server', link: '/server/' },
        { text: '@semantic-api/system', link: '/system/' },
      ]
    }*/
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Stations API?', link: '/guide/what-is-stations-api' },
        { text: 'API Endpoints', link: '/guide/api-endpoints' }
      ]
    },
    {
      text: 'Authentication',
      collapsed: false,
      items: [
        { text: 'Login Process', link: '/guide/login-process' },
        { text: 'Authentication Tokens', link: '/guide/authentication-token' }
      ]
    },
    {
      text: 'Stations Data',
      collapsed: false,
      items: [
        { text: 'My Stations', link: '/guide/my-stations' },
        { text: 'My Sockets', link: '/guide/my-sockets' },
        { text: 'Add Availability Info', link: '/guide/add-availability-info' },
        { text: 'Start In Use', link: '/guide/start-in-use' },
        { text: 'End In Use', link: '/guide/end-in-use' },
        { text: 'List Availability Info', link: '/guide/list-availability-info' },
        { text: 'Find Availability Info ', link: '/guide/find-availability-info' },
        { text: 'Delete Availability Info ', link: '/guide/delete-availability-info' },
        { text: 'Update Availability Info ', link: '/guide/update-availability-info' },
        { text: 'Add Price Info ', link: '/guide/add-price-info' }
      ]
    },
    {
      text: 'System',
      collapsed: false,
      items: [
        { text: 'System Date', link: '/guide/system-date' },
        { text: 'Error Codes', link: '/guide/error-codes' }
      ]
    }
  ]
}

function sidebarReference() {
  return [
    {
      text: 'Entrypoint',
      link: '/reference/entrypoint'
    },
    {
      text: '@semantic-api/api',
      collapsed: false,
      items: [
        { text: 'Algorithm', link: '/api/algorithm' },
        { text: 'Collection', link: '/api/collection' },
        { text: 'Context', link: '/api/context' },
        { text: 'Description', link: '/api/description' },
      ]
    }
  ]
}
