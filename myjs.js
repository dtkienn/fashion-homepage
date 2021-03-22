$(document).ready(function () {
    $('#burger').click(function () {
        $('#mobile-nav').css({
            'display': 'block'
        });
    })
    $('#close-btn').click(function () {
        $('#mobile-nav').css({
            'display': 'none'
        });
    })
});
