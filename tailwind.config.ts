import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
	theme: {
		extend: {
			colors: {
				background: '#0d1117',
				primary: '#00aaff',
				'text-primary': '#c9d1d9',
				'text-secondary': '#8b949e',
				borders: '#21262d'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['IBM Plex Mono', 'monospace']
			}
		}
	},
	plugins: [typography]
};

export default config;
