module.exports = {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans'],
                mono: ['Menlo', 'monospace']
            },
            colors: {
                teal: '#008483',
                'teal-light': '#a6d0cf'
            },
            gridTemplateColumns: {
                '1': 'repeat(1, minmax(0, 1fr))',
                '2': 'repeat(2, minmax(0, 1fr))',
                '3': 'repeat(3, minmax(0, 1fr))',
            },
            gridGap: {
                '8': '2rem',
            }
        }
    },
    plugins: [],
    important: true
};
