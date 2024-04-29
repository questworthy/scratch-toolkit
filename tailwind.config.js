/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				inter: "'Inter Variable', sans-serif",
				contrail: "'Contrail One', system-ui"
			},
			colors: {
				darkest: '#29292c',
				darker: '#27272a',
				dark: '#737373',
				light: '#f9aa37',
				lighter: '#FFFBF5',
				primary: '#f9aa37',
				highlight: '#4d97ff'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
