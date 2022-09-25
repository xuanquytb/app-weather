/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            flex: {
                10: '10',
                1.2: '1.2',
            },
            fontFamily: {
                BadScript: 'Bad Script',
            },
            borderRadius: {
                varBor: 'calc(var(--width-content__time-sun) / 2) calc(var(--width-content__time-sun) / 2) 0 0;',
            },
            backgroundImage: {
                'primary-gradien': `linear-gradient(to bottom, rgba(245, 164, 106, 0.3) ,rgba(245, 164, 106, 0.03))`,
            },
            screens: {
                tablet: '640px',
                // => @media (min-width: 640px) { ... }

                laptop: '1024px',
                // => @media (min-width: 1024px) { ... }

                desktop: '1280px',
                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    plugins: [],
};
