$(document).ready(function() {
    $('.button-holder').click(function() {
        $('html, body').animate({
            scrollTop: $(".welcome-wrapper").offset().top
        }, 1000);
    });
});