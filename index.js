
/*!
 * This project is an integration of the amazing [Bliss Templating System](https://github.com/cstivers78/bliss) for [Express](https://github.com/visionmedia/express).
 * Copyright (c) 2013 Andre Ventura (http://github.com/andreventuravale)
*/

var Bliss;
var bliss;

function init(options) {
  
	Bliss = Bliss || require("bliss");
	
	bliss = bliss || new Bliss({ 
		ext: options.ext || '.bliss', 
		cacheEnabled: options.cache || false 
	});
};

function render(path, options, callback) {
	try {
		var output = bliss.render(path, options._locals);
		if (callback)
			callback(null, output);
		else
			return output;
	} catch (err) {
		if (callback)
			callback(err, null);
		else
			throw err;
	}
};

module.exports = function (path, options, callback) {

	init({ 
		ext: this.ext, 
		cache: options.cache 
	});

	return render.apply(this, arguments);
};
