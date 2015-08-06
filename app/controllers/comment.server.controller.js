var Comment = require('mongoose').model('Comment');
var moment = require("moment");
exports.getComment = function (req, res) {
    Comment.find({article: req.body.article}).exec(function (err, comments) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(comments);
        }
    });
};
exports.postComment = function (req, res) {
    var comment = new Comment(req.body);
    comment.ip = req._remoteAddress;
    comment.save(function (err) {
        Comment.find({article: req.body.article}).exec(function (err, comments) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                for(var i in comments) {
                    comments[i].formatedDate = moment(comments[i].created).format("YYYY-MM-dd HH:mm:ss");
                }
                res.jsonp(comments);
            }
        });
    });
};
