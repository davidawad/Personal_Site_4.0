$(document).ready(function() {

    $('home','about','github').mouseenter(function() {
        $('home','about','github').fadeTo('fast',100);
    });
    $('home','about','github').mouseleave(function() {
        $('home','about','github').fadeTo('fast',0.80);
    });

});
