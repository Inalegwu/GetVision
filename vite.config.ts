import { svelte } from "@sveltejs/vite-plugin-svelte";
import extractorSvelte from "@unocss/extractor-svelte";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		UnoCSS({
			extractors: [extractorSvelte()],
		}),
	],
});
