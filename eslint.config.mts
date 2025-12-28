import tseslint from "typescript-eslint";
import obsidianmd from "eslint-plugin-obsidianmd";
import globals from "globals";
import { globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
	// Base config for all files
	{
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ["*.mjs", "*.mts"],
				},
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	...tseslint.configs.recommended,
	...tseslint.configs.stylisticTypeChecked,

	// Plugin source code: browser globals + Obsidian rules
	{
		files: ["src/**/*.ts"],
		plugins: { obsidianmd },
		languageOptions: { globals: { ...globals.browser } },
		rules: {
			...obsidianmd.configs.recommended,
			// Allow sample class names and code
			"obsidianmd/sample-names": "off",
			"obsidianmd/no-sample-code": "off",
		},
	},

	// Tooling and test files: node globals, no Obsidian rules
	{
		files: ["*.mjs", "*.mts", "tests/**/*.ts"],
		languageOptions: { globals: { ...globals.node } },
	},

	globalIgnores(["node_modules", "build", "dist", "*.json"]),
	eslintConfigPrettier,
);
