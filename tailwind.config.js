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
				darkest: '#FFD0D0',
				darker: '#3C5B6F',
				dark: '#737373',
				light: '#f9aa37',
				lighter: '#DC6B19',
				primary: '#f9aa37',
				highlight: '#4d97ff'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
