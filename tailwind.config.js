module.exports = {
	mode: "jit",
	purge: ["./src/**/*"],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Complex site-specific column configuration
				'action': 'repeat(3, minmax(min-content, max-content))',
			}
		}
	}
};