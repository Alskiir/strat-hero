/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				swiss: ["Swiss 721 Extended", "sans-serif"],
				sinclair: ["FS Sinclair", "sans-serif"],
			},
		},
	},
	plugins: [],
};
