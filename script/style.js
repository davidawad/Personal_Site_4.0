$(document).ready(function() {

    $('home').mouseenter(function() {
        $('home').fadeTo('fast',100);
    });
    $('home').mouseleave(function() {
        $('home').fadeTo('fast',0.80);
    });

    $('about').mouseenter(function() {
        $('about').fadeTo('fast',100);
    });
    $('about').mouseleave(function() {
        $('about').fadeTo('fast',0.80);
    });

    $('github').mouseenter(function() {
        $('github').fadeTo('fast',100);
    });
    $('github').mouseleave(function() {
        $('github').fadeTo('fast',0.80);
    });

});
