/**
 * Created by LiuJ on 2015/8/5.
 */
exports.index = function(req, res) {
    res.render("index", {
        user:req.user
    });
};
exports.introduction = function(req, res) {
    res.render("introduction", {
        user:req.user
    });
};