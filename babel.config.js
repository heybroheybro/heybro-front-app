module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'babel-plugin-root-import',
            {
                rootPathPrefix: '@heybro',
                rootPathSuffix: 'src',
            },
        ],
    ],
    env: {
        production: {
            plugins: [
                [
                    'babel-plugin-root-import',
                    {
                        rootPathPrefix: '@heybro',
                        rootPathSuffix: 'src',
                    },
                ],
            ],
        },
    },
}
