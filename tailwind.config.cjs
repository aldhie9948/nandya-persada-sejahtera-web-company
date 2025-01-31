import containerQueries from "@tailwindcss/container-queries";
import flowbitePlugin from "flowbite/plugin";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#e6f0ff",
					100: "#cce0ff",
					200: "#99c2ff",
					300: "#66a3ff",
					400: "#3385ff",
					500: "#0066ff", // Base color (#002166) adjusted for 500
					600: "#0052cc",
					700: "#003d99",
					800: "#002966",
					900: "#001433",
					950: "#000a1a",
				},
			},
		},
	},

	plugins: [containerQueries, flowbitePlugin],
};
