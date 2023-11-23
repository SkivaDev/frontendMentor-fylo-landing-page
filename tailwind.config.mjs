/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"very-dark-blue": 'hsl(243, 87%, 12%)',
				"desaturated-blue": 'hsl(238, 22%, 44%)',
				"bright-blue": 'hsl(224, 93%, 58%)',
				"moderate-cyan": 'hsl(170, 45%, 43%)',
				"light-grayish-blue": 'hsl(240, 75%, 98%)',
				"light-gray": 'hsl(0, 0%, 75%)',
			},
			backgroundColor: {
				"very-dark-blue": 'hsl(243, 87%, 12%)',
				"desaturated-blue": 'hsl(238, 22%, 44%)',
				"bright-blue": 'hsl(224, 93%, 58%)',
				"moderate-cyan": 'hsl(170, 45%, 43%)',
				"light-grayish-blue": '#f8f8fe',
				"light-gray": 'hsl(0, 0%, 75%)',
			},
			fontFamily: {
				"Raleway": ['Raleway', 'sans-serif'],
			},
			borderColor: {
				"moderate-cyan": 'hsl(170, 45%, 43%)',
				"bright-blue": 'hsl(224, 93%, 58%)',
				"light-gray": 'hsl(0, 0%, 75%)',
			},
		},
	},
	plugins: [],
}
