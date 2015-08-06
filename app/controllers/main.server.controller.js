/**
 * Created by LiuJ on 2015/8/5.
 */
var moment = require("moment");
exports.index = function(req, res) {
    res.render("index", {
        user:req.user
    });
};
exports.introduction = function(req, res) {
    var Comment = require('mongoose').model('Comment');
    Comment.find().exec(function (err, comments) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            for(var i in comments) {
                comments[i].formatedDate = moment(comments[i].created).format("YYYY-MM-DD HH:mm:ss");
            }
            res.render("introduction", {
                user:req.user,
                comments:comments
            });
        }
    });

};