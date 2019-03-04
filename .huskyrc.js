const tasks = arr => arr.join(' && ');

module.exports = {
	hooks: {
		'pre-commit': tasks(['flow status', 'lint-staged']),
	},
};
