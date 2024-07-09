/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#E6F0FF",
				secondary: {
					100: "#01204E",
					200: "#808080",
					300: "#80808010",
				},
			},
			backgroundImage: {
				"hero-bg": "url('heroBg.jpg')",
			},
		},
		plugins: [],
	},
};
