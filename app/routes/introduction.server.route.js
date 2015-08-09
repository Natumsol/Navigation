// 不同的路由应用不同的控制器
var comment = require('../controllers/comment.server.controller'),
    introduction = require('../controllers/article.server.controller');
module.exports = function (app) {
    app.route('/comment')
        .get(comment.getComment)
        .post(comment.postComment);
    app.route('/introduction/:introductionId')
        .get(introduction.renderIntroduction);

    app.param('introductionId', introduction.introductionById);
};