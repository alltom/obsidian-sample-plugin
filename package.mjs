import { execSync } from "child_process";
import { mkdirSync, readFileSync, rmSync } from "fs";
import { copyBuildArtifacts } from "./copy-plugin.mjs";

const pluginId = JSON.parse(readFileSync("manifest.json", "utf8")).id;

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
copyBuildArtifacts("dist");

// Create zip (use -j to junk directory paths)
execSync(`zip -j ${pluginId}.zip dist/*`, { stdio: "inherit" });

console.log(`Created ${pluginId}.zip`);
