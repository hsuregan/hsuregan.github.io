

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#navbar').addClass('stick');
        $('.navlink:not(#'+current_id+')').addClass('stick_li');
    } else {
        $('#navbar').removeClass('stick');
        $('.navlink').removeClass('stick_li');


    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});