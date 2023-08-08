const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    content: [
        './**/*.html'
    ],
    theme: {
        extend: {
            typography: ({theme}) => ({
                DEFAULT: {
                    css: {
                        pre: {
                            padding: "0",
                            color: "#f3f3f3",
                            backgroundColor: "#1f2933"
                        },
                        code: {
                            padding: "0.2em 0.4em",
                            backgroundColor: "#474747",
                            color: "#DD1144",
                            fontWeight: "400",
                            "border-radius": "0.25rem"
                        },
                        "code::before": false,
                        "code::after": false,
                        "blockquote p:first-of-type::before": false,
                        "blockquote p:last-of-type::after": false,
                    },
                },
                dark: {
                    css: {
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