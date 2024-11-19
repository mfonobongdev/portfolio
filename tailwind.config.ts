import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				"geist-sans": ["var(--font-geist-sans)"],
				"geist-mono": ["var(--font-geist-mono)"],
				inter: ["var(--font-inter)"],
				"inter-italic": ["var(--font-inter-italic)"],
			},
		},
	},
	plugins: [],
} satisfies Config;
