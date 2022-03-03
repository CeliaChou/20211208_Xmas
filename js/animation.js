$(".draw_btn").click(function () {
    $(".draw_gift_L").addClass("drawing_gift_L");
    $(".draw_gift_R").addClass("drawing_gift_R");
    $(".draw_tree").addClass("drawing_tree");
    $(".draw_snowflake").addClass("drawing_snowflake");
    });
$(".pop-2_close").click(function () {
    $(".draw_gift_L").removeClass("drawing_gift_L");
    $(".draw_gift_R").removeClass("drawing_gift_R");
    $(".draw_tree").removeClass("drawing_tree");
    $(".draw_snowflake").removeClass("drawing_snowflake");
    });