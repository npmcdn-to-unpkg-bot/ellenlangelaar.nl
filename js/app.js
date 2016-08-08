$(function(){
    $("#woorden").typed({
        strings: [
            "web applications.",
            "backoffice systems.",
            "landing pages.",
            "corporate websites."
        ],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });

    function fullscreen(){
        $('#hero').css({
            //width: $(window).width(),
            height: $(window).height()
        });
    }

    $(window).resize(function() {
        fullscreen();
    });

    fullscreen();

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 80,
        percentPosition: true
    });

    window.dispatchEvent(new Event('resize'));
});
