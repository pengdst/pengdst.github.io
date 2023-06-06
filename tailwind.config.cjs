/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				primaryBorder: '#6b7280',
				primaryBackground: '#f0f9ff',
				primaryText: '#0f172a',
				secondaryBackground: '#fff',
				secondaryBorder: '#f0f9ff',
				secondaryText: '#64748b',
				accent: '#0EA5E9',
				primaryBorderDark: '#9DB2BF',
				primaryBackgroundDark: '#27374D',
				primaryTextDark: '#9DB2BF',
				secondaryBorderDark: '#27374D',
				secondaryBackgroundDark: '#526D82',
				secondaryTextDark: '#DDE6ED'
			}
		},
	},
	daisyui: {
		themes: [
			{
				dark: {
					primaryBorderDark: '#9DB2BF',
					primaryBackgroundDark: '#27374D',
					primaryTextDark: '#9DB2BF',
					secondaryBorderDark: '#27374D',
					secondaryBackgroundDark: '#526D82',
					secondaryTextDark: '#DDE6ED',
					accent: '#1c7299',
				},
				light: {
					primaryBorder: '#6b7280',
					primaryBackground: '#f0f9ff',
					primaryText: '#0f172a',
					secondaryBackground: '#fff',
					secondaryBorder: '#f0f9ff',
					secondaryText: '#64748b',
					accent: '#0EA5E9',
				}
			}
		], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: false, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
	},
	plugins: [require("daisyui")],
}

