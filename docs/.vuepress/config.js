module.exports = {
  title: 'Laravel Charts',
  description: 'The laravel adapter for Chartisan',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'google-adsense-account', content: 'ca-pub-9814799490323520' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    sidebar: [
      '/',
      '/guide/',
      '/guide/installation',
      '/guide/create_charts',
      '/guide/chart_configuration',
      '/guide/render_charts',
      '/guide/chart_customization',
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Chartisan', link: 'https://chartisan.dev' },
      { text: 'Github', link: 'https://github.com/ConsoleTVs/Charts' },
    ],
  },
};
