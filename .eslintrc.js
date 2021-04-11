module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
		parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
		plugins: [
	],
	rules: {
		"indent": [2, "tab"], 
		"vue/html-indent": [2, "tab"],
		"no-tabs": 0
	}
}
