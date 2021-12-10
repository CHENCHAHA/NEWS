/**
 * 这是处理评论点赞的js
 */
$(function() {
    var f = true
    $(".dian").on("click", function() {
        if (f) {
            var zan = $(".dianzan").text()
            zan++
            $(".dianzan").text(zan)
            f = false
            alert("你已经点过赞了")
        }

    })
    $(".fa").on("click", function() {
        var liu = $(".inp").val()
        console.log(liu);
        var xing = $('<li>陈超:' + liu + '</li>')
        $("ul").prepend(xing)
    })
})