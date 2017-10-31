$(document).ready(function () {

    //Plain-Dropdown
    $('.dropdown .button').click(function(e) {
        e.stopPropagation();
        $('#dropdown-menu').toggleClass('open');
        return $('#dropdown-menu li a').removeClass();
    });

    $('#dropdown-menu li a').click(function(e) {
        $(this).addClass("flash");
        return $('#dropdown-menu').removeClass('open');
    });

    $('html').click(function() {
        return $('#dropdown-menu').removeClass('open');
    });

});



