$(document).ready(function () {
    var frags = 0;
    //console.log(frags);
    $('.js-scrollto').click(function() {
        $('html, body').animate({
            scrollTop: $('.nm-main').offset().top
        }, 700);
    });
    $('.alien').click(function () {
        function pad2(number) {

            return (number < 10 ? '000' : '') + number

        }
        $(this).animate({width: "0"}, 200);
        var pad = '00000';
        var score = $(this).data('score');
        console.log(score);
        fragsumm = score + frags;
        frags = fragsumm;
        console.log(fragsumm);
        $('.nm-machine__title').text(pad.substr(0, pad.length - frags.length) + frags);
    });

    //Audio

    $('.js-blaster').click(function () {
       $(this).removeAttr('style');

        if ($(this).hasClass('active')) {
            document.getElementById('audio').pause();
            $(this).removeClass('active');
        } else {
            document.getElementById('audio').play();
            $(this).addClass('active');
        }
    });
});

$('#email').on('change keyup paste', function() {
    if ($(this).is(':valid')) {
        $('.js-form').addClass('filled');
    }
});