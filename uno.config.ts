import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import { defineConfig, presetIcons } from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: "google",
			fonts: {
				grotesque: "Bricolage Grotesque",
				mono: "Nunito Sans",
			},
		}),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle",
				color: "text-purple-500",
			},
		}),
	],
});
