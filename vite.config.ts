import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
	manifest_version: 3,
	name: "Shortcuts for Youtube",
	version: "0.0.1",
	content_scripts: [
		{
			matches: ["https://www.youtube.com/*"],
			js: ["src/content/index.tsx"],
		},
	],
});

export default defineConfig({
	plugins: [react(), crx({ manifest })],
});
