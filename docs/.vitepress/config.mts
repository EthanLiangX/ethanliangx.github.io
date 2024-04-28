import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JELLY WEBSITE",
  description: "Jelly's work note",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Linux', link: '/linux/index' },
       { text: 'Gis', link: '/gis/index' }
    ],

    sidebar: [
      {
        text: 'Linux',
        items: [
          { text: 'Install Ovirt', link: '/linux/install_ovirt' },
          {text: 'Network', link: '/linux/network' }

        ]
      },
      {
        text: 'Gis',
        items: [
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xjellyx' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 jelly'
    }
  }
})
