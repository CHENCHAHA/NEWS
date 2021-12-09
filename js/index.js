$(function() {
    $("#dianji").on("click", "li", function() {
        $(".news").children().eq($(this).index()).removeClass("none").addClass("block").siblings("div").addClass("none")
        $(this).addClass("active").siblings().removeClass("active")
    })
})