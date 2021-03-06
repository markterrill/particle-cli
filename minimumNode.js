const semver = require('semver');
const packageJson = require('./package.json');
const _ = require('lodash');

module.exports = function minimumNode(options) {
	options = options || {};
	var version = options.version || process.version;
	var json = options.json || packageJson;
	var exit = options.exit || process.exit;
	var _console = options.console || console;
	var requirement = _.get(json, 'engines.node');
	if (!semver.satisfies(version, requirement)) {
		_console.error('The Particle CLI requires Node ' + requirement);
		exit(1);
	}
}

