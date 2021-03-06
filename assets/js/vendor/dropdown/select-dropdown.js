$(document).ready(function () {

    //Select-Dropdown
    var $html = $('html');
    $html.on('click.ui.select-dropdown', '.js-select-dropdown', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-open');
    });
    $html.on('click.ui.select-dropdown', '.js-select-dropdown [data-select-dropdown-value]', function (e) {
        e.preventDefault();
        var $item = $(this);
        var $dropdown = $item.parents('.js-select-dropdown');
        $dropdown.find('.js-select-dropdown__input').val($item.data('select-dropdown-value'));
        $dropdown.find('.js-select-dropdown__current').text($item.text());
    });
    $html.on('click.ui.select-dropdown', function (e) {
        var $target = $(e.target);
        if (!$target.parents().hasClass('js-select-dropdown')) {
            $('.js-select-dropdown').removeClass('is-open');
        }
    });

});



