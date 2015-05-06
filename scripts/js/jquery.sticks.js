$(document).ready(function() {
    var stickyNavTop = $('.navbar').offset().top;

    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) { 
            $('.navbar').addClass('sticky');
            $('#haulOut').addClass('margining');
        } else {
            $('.navbar').removeClass('sticky'); 
            $('#haulOut').removeClass('margining');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});