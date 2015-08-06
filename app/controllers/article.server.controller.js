var Article = require('mongoose').model('Comment');
exports.getArticle = function (req, res) {
	Article.find({article: req.app.body.article}).exec(function (err, comments) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(comments);
		}
	});
};
exports.postArticle = function (req, res) {
	var comment = new Comment(req.body);
	comment.save(function (err) {
		Article.find({article: req.app.body.article}).exec(function (err, comments) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(comments);
			}
		});
	});
};
