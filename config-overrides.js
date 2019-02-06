const path = require('path');

module.exports = function override(config) {
	config.resolve = Object.assign({}, config.resolve, {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
	});

	return config;
};
