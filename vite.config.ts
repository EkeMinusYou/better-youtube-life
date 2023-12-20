import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
	manifest_version: 3,
	name: "Shortcut for Youtube",
	version: "1.0.0",
	content_scripts: [
		{
			matches: ["https://www.google.com/*"],
			js: ["src/contentScript/script.ts"],
		},
	],
});

export default defineConfig({
	plugins: [react(), crx({ manifest })],
});
