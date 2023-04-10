/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        backgroundImage: (theme) => ({
            "home-img": "url('./src/assets/bg-image-home.png')",
            "contact-img": "url('./src/assets/orange-car.jpg')",
            "prices-img": "url('./src/assets/black-car.jpg')",
        }),
        extend: {},
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
    },
    plugins: [],
};
