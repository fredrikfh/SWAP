module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},

	extends: ["eslint:recommended", "plugin:react/recommended"],

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},

	plugins: ["react"],

	rules: {
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		indent: ["error", "tab"],
		"no-tabs": 0,
	},

	ignorePatterns: ["build/*", "cypress/*"],

	settings: {
		react: {
			version: "detect",
		},
	},
};
