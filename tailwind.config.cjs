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
				primaryBorderDark: '#9DB2BF',
				primaryBackgroundDark: '#27374D',
				primaryTextDark: '#9DB2BF',
				secondaryBorderDark: '#27374D',
				secondaryBackgroundDark: '#526D82',
				secondaryTextDark: '#DDE6ED'
			}
		},
	},
	plugins: [],
}

