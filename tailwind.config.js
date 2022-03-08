module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('https://miro.medium.com/max/698/4*BIK9VGjeCj2TaTDw4id2nA.png')"
            },
            backgroundSize: {
                'hero': "385px 341px",
            },
            backgroundPosition: {
                'hero-bottom-md' : "bottom 1px right 48px",
                'hero-bottom-sm' : "bottom 1px right -64px",
                'hero-bottom' : "bottom 1px right -126px",
            }
        },
    },
    variants: {
        extend: {
            backgroundPosition: ["md", "sm"]
        }
    },
    plugins: [],
}
