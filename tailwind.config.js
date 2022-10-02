const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    content: [
        './**/*.html'
    ],
    theme: {
        extend: {
            typography: ({theme}) => ({
                dark: {
                    css: {
                        '--tw-prose-body': theme('colors.slate[50]'),
                        '--tw-prose-headings': theme('colors.slate[50]'),
                        '--tw-prose-lead': theme('colors.pink[700]'),
                        '--tw-prose-links': theme('colors.white'),
                        '--tw-prose-bold': theme('colors.pink[900]'),
                        '--tw-prose-counters': theme('colors.pink[600]'),
                        '--tw-prose-bullets': theme('colors.pink[400]'),
                        '--tw-prose-hr': theme('colors.pink[300]'),
                        '--tw-prose-quotes': theme('colors.pink[900]'),
                        '--tw-prose-quote-borders': theme('colors.pink[300]'),
                        '--tw-prose-captions': theme('colors.pink[700]'),
                        '--tw-prose-code': theme('colors.pink[900]'),
                        '--tw-prose-pre-code': theme('colors.pink[100]'),
                        '--tw-prose-pre-bg': theme('colors.pink[900]'),
                        '--tw-prose-th-borders': theme('colors.pink[300]'),
                        '--tw-prose-td-borders': theme('colors.pink[200]'),
                        '--tw-prose-invert-body': theme('colors.pink[200]'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.pink[300]'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.pink[400]'),
                        '--tw-prose-invert-bullets': theme('colors.pink[600]'),
                        '--tw-prose-invert-hr': theme('colors.pink[700]'),
                        '--tw-prose-invert-quotes': theme('colors.pink[100]'),
                        '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
                        '--tw-prose-invert-captions': theme('colors.pink[400]'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
                        '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
                        a: {
                            color: 'var(--tw-prose-links)',
                            textDecorationLine: 'none',
                            fontWeight: '500',
                        }
                    },
                },
            }),
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary-color': '#0a192f',
                'second': '#0d213d',
            },
        },
    },

    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],

}