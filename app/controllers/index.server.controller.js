/**
 * Created by LiuJ on 2015/8/5.
 */
exports.render = function(req, res) {
    res.render("index", {
        user:req.user
    });
};