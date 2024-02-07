// colors: https://tailwindcss.com/docs/customizing-colors
const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	darkMode: 'class',
	content: [
		'./src/**/*.{svelte,html}'
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.neutral,
			white: colors.white,
			primary: colors.sky,
			green: colors.green,
			yellow: colors.amber,
			red: colors.red,
			black: colors.black,
		},
		extend: {
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif',
				],
			},
		},
	},
	variants: {},
	plugins: [],
	future: {},
}

