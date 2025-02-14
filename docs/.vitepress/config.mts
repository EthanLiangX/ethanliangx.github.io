import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EthanLiangX WEBSITE",
  description: "EthanLiangX's work note",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/'},
      {text: 'Lang',link: '/lang/index'},
      { text: 'Linux', link: '/linux/index' },
      { text: 'GIS', link: '/gis/index' },
      { text: 'Devops', link: '/devops/index'}
    ],

    sidebar: [
      {
        text: 'Lang',
        items: [
          { text: 'Go', link: '/lang/go/index',
            items: [
              { text: 'Strings', link: '/lang/go/strings' },
              { text: 'Network', link: '/lang/go/networks' }
            ]
          }
        ]
      },
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
          {text: 'GDAL', link: '/gis/gdal' }
        ]
      },
      {
        text: 'Devops',
        items: [
          {text: 'Docker', link: '/devops/docker' },
          {text: 'Jenkins', link: '/devops/jenkins' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EthanLiangX' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 EthanLiangX'
    }
  }
})
