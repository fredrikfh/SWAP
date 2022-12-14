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
		"react/prop-types": 0,
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		indent: "off",
		"no-tabs": 0,
		"no-unused-vars": "off",
	},

	ignorePatterns: ["build/*", "cypress/*"],

	settings: {
		react: {
			version: "detect",
		},
	},
};
