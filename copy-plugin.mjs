import { cpSync } from "fs";

const PLUGIN_FILES = ["main.js", "styles.css", "manifest.json"];

export function copyBuildArtifacts(destDir) {
	for (const file of PLUGIN_FILES) {
		cpSync(`build/${file}`, `${destDir}/${file}`);
	}
}
