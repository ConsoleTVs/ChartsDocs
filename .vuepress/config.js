module.exports = {
    title: 'Laravel Charts',
    description: 'The missing laravel charting library',
    themeConfig: {
        sidebarDepth: 3,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/docs/' },
            { text: 'Github', link: 'https://github.com/ConsoleTVs/Charts' },
            { text: 'erik.cat', link: 'https://erik.cat' },
        ],
        lastUpdated: 'Last Updated',
        displayAllHeaders: true,
        sidebar: [
            '/',
            {
                title: 'First Steps',
                collapsable: true,
                children: [
                    '/docs/',
                    '/docs/installation',
                    '/docs/configuration',
                ]
            },
            {
                title: 'Supported Libraries',
                collapsable: true,
                children: [
                    '/docs/supported_libraries',
                ]
            },
            {
                title: 'Creating Charts',
                collapsable: true,
                children: [
                    '/docs/create_charts',
                    '/docs/adding_datasets',
                    '/docs/render_charts',
                    '/docs/api_charts',
                ]
            },
            {
                title: 'Customization',
                collapsable: true,
                children: [
                    '/docs/customize_charts',
                    '/docs/customize_datasets',
                ]
            },
            {
                title: 'More Examples',
                collapsable: true,
                children: [
                    '/docs/full_example',
                ]
            }
        ]
    }
  }