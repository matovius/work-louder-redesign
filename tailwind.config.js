/** @type {import('tailwindcss').Config} */

import baseColors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000000',
			white: '#ffffff',
			neutral: baseColors.neutral,
			// LEMON-LIME
			primary: {
				50: '#fdffe5',
				100: '#fbffcc',
				200: '#f8ff99',
				300: '#f5ff66',
				400: '#f1ff33',
				500: '#eeff00',
				600: '#becc00',
				700: '#8f9900',
				800: '#5f6600',
				900: '#2f3300',
				950: '#181a00'
			},
			'spring-green': '#09f680',
			pumpkin: '#ff6700',
			'palatinate-blue': '#142cff',
			phlox: '#d000ff',
			'knob-orange': '#ff4d00',
			'figma-purple': '#5551ff'
		},
		spacing: {
			0: '0',
			px: '1px',
			4: '4px',
			8: '8px',
			12: '12px',
			24: '24px',
			36: '36px',
			48: '48px',
			60: '60px',
			72: '72px',
			84: '84px',
			96: '96px',
			108: '108px',
			120: '120px',
			240: '240px',
			296: '296px',
			360: '360px',
			480: '480px',
			600: '600px',
			720: '720px',
			840: '840px',
			960: '960px',
			1080: '1080px'
		},
		borderRadius: {
			none: '0',
			4: '4px',
			8: '8px',
			12: '12px',
			16: '16px',
			20: '20px',
			24: '24px',
			28: '28px',
			32: '32px',
			36: '36px',
			40: '40px',
			44: '44px',
			48: '48px',
			52: '52px',
			56: '56px',
			60: '60px',
			full: '9999rem'
		},
		fontFamily: {
			inherit: 'inherit',

			manrope: 'Manrope Variable, sans-serif',
			inter: 'Inter Variable, sans-serif',
			handjet: 'Handjet Variable, monospace',

			display: 'Manrope Variable, sans-serif',
			body: 'Inter Variable, sans-serif'
		},
		screens: {
			'min-480': '480px',
			'min-600': '600px',
			'min-720': '720px',
			'min-840': '840px',
			'min-960': '960px',
			'min-1080': '1080px',
			'min-1200': '1200px'
		},
		extend: {}
	},
	plugins: []
};
