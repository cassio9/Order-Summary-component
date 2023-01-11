/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				PaleBlue: "hsl(225, 100%, 94%)",
				BrightBlue: "hsl(245, 75%, 52%)",
				VeryPaleBlue: "hsl(225, 100%, 98%)",
				UnsaturatedBlue: "hsl(224, 23%, 55%)",
				DarkBlue: "hsl(223, 47%, 23%)",
			},
			fontFamily: {
				RedHat: ["Red Hat Display", "sans-serif"],
			},
		},
	},
	plugins: [],
};
