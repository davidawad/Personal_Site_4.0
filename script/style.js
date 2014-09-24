$(document).ready(function() {

    $('ul li a').mouseenter(function() {
        $('ul li a').fadeTo('fast',100);
    });
    $('ul li a').mouseleave(function() {
        $('ul li a').fadeTo('fast',0.50);
    });

});
