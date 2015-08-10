/**
 * Created by LiuJ on 2015/8/6.
 */

$(function () {
    $(".tab-content .tab-pane").each(function () {
        var articleId = $("input[name='articleId']", this).val();
        var that = this;
        $.ajax({
            url: "/comment",
            data: {
                articleId: articleId
            },
            dateType: "json",
            type: "get",
            success: function (data) {
                var comment = new EJS({url: '/comment.ejs'}).render(data); // 渲染评论模板
                $('.comment-wrapper', that).html(comment);
            }

        })
    });

    $(".submit-comment").click(function () {
        var form = $(this).parents('form');
        var articleId = $(this).parents('.tab-pane').find("input[name='articleId']").val();
        var email = $("input[name='email']", form).val();
        var comment = $("textarea[name='comment']", form).val();
        var name = $("input[name='name']", form).val();
        var comment_wrapper = $(this).parents('.tab-pane').find('.comment-wrapper');
        $.ajax({
            url: "/comment",
            data: {
                article: articleId,
                email: email,
                name: name,
                comment: comment
            },
            dateType: "json",
            type: "post",
            success: function (data) {
                var comment = new EJS({url: '/comment.ejs'}).render(data); // 渲染评论模板
                comment_wrapper.html(comment);
            }
        })
        return false;
    });
});