var Article = require('mongoose').model('Comment');
var Sight = require('mongoose').model('Sight');
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

exports.introductionById = function (req, res, next, id) {
	Sight.findById(id).exec(function (err, introduction) {
		if (err) return next(err);
		if (!introduction) return next(new Error('Failed to load Sight ' + id));
		req.introduction = introduction;
		next();
	})
};

exports.renderIntroduction = function (req, res) {
	res.render("introduction", {
		user: req.user,
		introduction: req.introduction
	});
};