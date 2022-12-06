/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Inter var", "sans-serif"],
			Roboto: ["Roboto, sans-serif"],
			poppins: ["Poppins", " sans-serif"],
		},
	},
	plugins: [],
};
