import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import edgeoneAdapter from "@edgeone/astro";

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-aria.edgeone.app/',
	output: "server",
	prerender: {
		default: true
	},
	legacy: {
		collections: true
	},
	integrations: [tailwind()],
	adapter: edgeoneAdapter()
});
