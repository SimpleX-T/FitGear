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
				"hero-bg":
					"radial-gradient(circle at center, rgba(10,10,10,0.2),rgba(10,10,10,0.6)),url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
			},
		},
		plugins: [],
	},
};
