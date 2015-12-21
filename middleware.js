var middleware = {
	requireAuthentication: function  (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log("request: " + req.method + " " + req.originalUrl + new Date().toString());
		next();
	}
};

module.exports = middleware;
