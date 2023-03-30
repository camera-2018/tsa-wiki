export default {
  title: 'VitePress',
  description: 'Just playing around.',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'How To Proxypass Openai Api', link: '/how-to-proxypass-openai-api' },
          { text: 'Name', link: '/name' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You && camera-2018'
    },
    algolia: {
      appId: '2O8TMOCFNV',
      apiKey: '27463a63004c0342a584443812c646f8',
      indexName: 'dev'
    },
  }
}