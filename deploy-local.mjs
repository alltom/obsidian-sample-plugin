import "dotenv/config";
import { copyBuildArtifacts } from "./copy-plugin.mjs";

const dest = process.env.OBSIDIAN_PLUGIN_PATH;
if (!dest) {
	console.error("OBSIDIAN_PLUGIN_PATH not set in .env");
	process.exit(1);
}

copyBuildArtifacts(dest);
console.log(`Deployed to ${dest}`);
