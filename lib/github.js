'use strict';

const MODULE_REQUIRE = 1
	/* built-in */

	/* NPM */

	/* in-package */
	, Badge = require('badging/badge')
	;

let getName = (userName, repoName) => {
	return `github.com/${userName}/${repoName}`;
};

module.exports = {
	coveralls(userName, repoName, branch) {
		if (!branch) branch = 'master';
		return new Badge({
			title: `coverage status of ${getName(userName, repoName)}`,

			/**
			 * @update 2017-06
			 * The official image source offered by coveralls.io will be redirected to some url located
			 * on s3.amazonaws.com which can not be stably accessed in some areas.
			 */
			// src: `https://coveralls.io/repos/github/${userName}/${repoName}/badge.svg?branch=${branch}`,
			src: `https://img.shields.io/coveralls/${userName}/${repoName}/${branch}.svg`,

			href: `https://coveralls.io/github/${userName}/${repoName}2?branch=${branch}`
		});
	},

	dependencies(userName, repoName) {
		return new Badge({
			title: `dependencies of ${getName(userName, repoName)}`,
			src: `https://david-dm.org/${userName}/${repoName}/status.svg`,
			href: `https://david-dm.org/${userName}/${repoName}`
		});
	},

	devDependencies(userName, repoName) {
		return new Badge({
			title: `devDependencies of ${getName(userName, repoName)}`,
			src: `https://david-dm.org/${userName}/${repoName}/dev-status.svg`,
			href: `https://david-dm.org/${userName}/${repoName}?type=dev`
		});
	},

	travis(userName, repoName, branch) {
		if (!branch) branch = 'master';
		return new Badge({
			title: `build status of ${getName(userName, repoName)}`,
			src: `https://travis-ci.org/${userName}/${repoName}.svg?branch=${branch}`,
			href: `https://travis-ci.org/${userName}/${repoName}`
		});
	},

	star(userName, repoName) {
		return new Badge({
			title: `star ${getName(userName, repoName)}`,
			src: `https://img.shields.io/github/stars/${userName}/${repoName}.svg?style=social&label=Star`,
			href: `https://github.com/${userName}/${repoName}/stargazers`
		});
	}
};
