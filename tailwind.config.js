/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg}"],
	theme: {
		extend: {
			fontFamily: {
				swiss: ["Swiss 721 Extended", "sans-serif"],
				sinclair: ["FS Sinclair", "sans-serif"],
			},
			colors: {
				'mainScreenBG': '#1c2022',
				'diverYellow': '#ffe80a',
				'textUnselected': '#acacac',
			},
			boxShadow: {
				'buttonShadowHover': '0px 0px 30px -18px rgba(255,232,10,0.4);',
			},
		},
	},
	plugins: [],
};
