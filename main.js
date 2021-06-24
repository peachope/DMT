$(function() {
    $(window).scroll(function() {

        let position = $(window).scrollTop();

        if (position > 400) {
            $(".totop").addClass("appear");
        } else {
            $(".totop").removeClass("appear");
        }
    });
});