/**
 * 这是处理评论点赞的js
 */
$(function() {
    $(".dian").on("click", function() {
        var zan = $(".dianzan").text()
        zan++
        $(".dianzan").text(zan)
        alert("点赞成功")
    })
})