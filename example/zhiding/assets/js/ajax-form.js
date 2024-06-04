$(function () {
    var a = $('#contact-form');
    var b = $('.ajax-response');
    $(a).submit(function (c) {
        c.preventDefault();
        var d = $(a).serialize();
        $.ajax({ type: 'POST', url: $(a).attr('action'), data: d })
            .done(function (e) {
                $(b).removeClass('error');
                $(b).addClass('success');
                $(b).text(e);
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (e) {
                $(b).removeClass('success');
                $(b).addClass('error');
                if (e.responseText !== '') {
                    $(b).text(e.responseText);
                } else {
                    $(b).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });
});
