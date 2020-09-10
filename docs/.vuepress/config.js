module.exports = {
    title: 'Laravel Charts',
    description: 'The missing laravel charting library (outdated)',
    themeConfig: {
        sidebarDepth: 3,
        nav: [
            { text: 'Home', link: '/' },
			{ text: 'Latest Version', link: 'https://charts.erik.cat' },
            { text: 'Documentation', link: '/getting_started' },
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
                    '/getting_started',
                    '/installation',
                    '/configuration',
                ]
            },
            {
                title: 'Supported Libraries',
                collapsable: true,
                children: [
                    '/supported_libraries',
                ]
            },
            {
                title: 'Creating Charts',
                collapsable: true,
                children: [
                    '/create_charts',
                    '/adding_datasets',
                    '/render_charts',
                    '/api_charts',
                ]
            },
            {
                title: 'Customization',
                collapsable: true,
                children: [
                    '/customize_charts',
                    '/customize_datasets',
                ]
            },
            {
                title: 'More Examples',
                collapsable: true,
                children: [
                    '/full_example',
                ]
            }
        ]
    }
  }