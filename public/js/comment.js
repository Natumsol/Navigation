/**
 * Created by LiuJ on 2015/8/6.
 */

$(function () {
    $(".tab-content .tab-pane").each(function () {
        var articleId = $("input[name='articleId']", this).val();
        $.ajax({
            url: "/comment",
            data: {
                articleId: articleId
            },
            dateType: "json",
            type: "get",
            success: function (data) {
                console.log(data);
            }

        })
    });
    $.ajax({
        url: "/comment",
        data: {
            articleId: "55c6c4fe1610479886adb4e4"
        },
        dateType: "json",
        type: "get",
        success: function (data) {
            console.log(data);
        }

    })
});