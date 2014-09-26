$(document).ready(function() {
    //$('#wrapper').fadein('slow');
    //$('#header').fadein('slow');

    //$h1 = $('<p>I am the King</p>');
    //$('body').append($h1);
    //$('#two').after('<p>shit in tag</p>');

    $('#home').mouseenter(function() { //fade  the other two buttons
        $('#about').fadeTo('slow',0.50);
        $('#github').fadeTo('slow',0.50);
    });

    $('#home').mouseleave(function() { //un-fade the other two buttons
        $('#about').fadeTo('slow',100);
        $('#github').fadeTo('slow',100);
    });

    //for the about me button
    $('#about').mouseenter(function() {
        $('#home').fadeTo('slow',0.50); //fade  the other two buttons
        $('#github').fadeTo('slow',0.50);
    });

    $('#about').mouseleave(function() { //un-fade the other two buttons
        $('#home').fadeTo('slow',100);
        $('#github').fadeTo('slow',100);
    });

    //for the my github button
    $('#github').mouseenter(function() { //fade  the other two buttons
        $('#home').fadeTo('slow',0.50);
        $('#about').fadeTo('slow',0.50);
    });

    $('#github').mouseleave(function() { //un-fade the other two buttons
        $('#home').fadeTo('slow',100);
        $('#about').fadeTo('slow',100);
    });

    $("#link_resume").click(function(){ //function for resume button on the 404 page.
      window.open("/res/David Awad.pdf");
    });

});
