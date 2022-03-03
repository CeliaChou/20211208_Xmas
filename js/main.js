
$(".myTabs").each(function() {
    var $myTabs = $(this);
    $myTabs.find(".tab_content").hide().eq(0).show();
    $myTabs.find(".award_content").hide().eq(0).show();
    $myTabs.find("ul.tabs_list li:first").addClass("active").show();
    $myTabs.find("ul.award_list li:first").addClass("active").show();
    $myTabs.find("ul.tabs_list li").click(function() {
        var $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
        $myTabs.find(".tab_content").hide();
        var activeTab = $this.find("a").attr("href");
        $(activeTab).show();
        $('html, body').animate({
            scrollTop:$("ul.tabs_list").offset().top
        }, 600);
        return false;
    });
    $myTabs.find("ul.award_list li").click(function() {
        var $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
        $myTabs.find(".award_content").hide();
        var activeTab = $this.find("a").attr("href");
        $(activeTab).show();
        $('html, body').animate({
            scrollTop:$("ul.award_list").offset().top
        }, 600);
        return false;
    });
});
//pop//
$(".close").click(function() {
    $('.popup').fadeOut(200);
});
$(".blacklayer").click(function() {
    $('.popup').fadeOut(200);
});
$(".pop_btn").click(function() {
$("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
//scrollspy
$(document).ready(function(){
    var sectionIds = $('.nav-link');
    $(document).scroll(function(){
        sectionIds.each(function(){
            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
                $(container).addClass("here");
                if (container=="#p1"||container=="#p2") {
                    $(".sign_area").fadeIn(200);
                } else {
                    $(".sign_area").fadeOut(200);
                }
            } else{
                $(this).removeClass('active');
                $(container).removeClass("here");
            }
            if(scrollPosition<=950){
                $(".nav-container").fadeOut(200);
            }
            else{
                $(".nav-container").fadeIn(200);
            }
        });
    });
});
//登入登出示意
    $(".sign_btn").click(function(){
        $(".account").fadeOut(200);
    });


    //延遲抽獎獎品跳窗
    $(".draw_btn").click(function(){
        var Z=setTimeout(function(){get_pop();},2000);
        function get_pop()
        {
            $('#draw_pop').fadeIn(200);
        }
        });