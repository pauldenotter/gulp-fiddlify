'use strict';

var through2 = require('through2'),
	path = require('path');

module.exports = function(dest) {
	var buffer = {},
		files = {};

	return through2.obj(function(file, enc, callback) {
		var id = file.path.replace(file.base, '').replace(/(.*)\/.*/, '$1').replace(/\//g, '-'),
			type = file.path.replace(/.*\./, ''),
			_file;

		if (!files[id]) {
			file.path = path.join(file.base, id);
			files[id] = file;
		}

		_file = files[id];

		type = type.replace('js', 'javascript') + '';
		if (!/(html|css|javascript)/.test(type)) return callback();

		buffer[id] = buffer[id] || {};
		buffer[id][type] = file.contents.toString();

		_file.contents = new Buffer((new Buffer(
			JSON.stringify(buffer[id])
		)).toString('base64'));

		callback(null, _file);
	});
};
