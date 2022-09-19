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
        },
    },
    plugins: [],
};
