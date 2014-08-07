var myName = "David Awad!";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);
bubbleShape = 'circle';

bounceBubbles();

$(document).ready(function() {

  //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
  $('.accordion').click(function() {

    //REMOVE THE ON CLASS FROM ALL BUTTONS
    $('.accordion').removeClass('on');

    //NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
     $('.hide').slideUp('fast');

    //IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
    if($(this).next().is(':hidden') == true) {

      //ADD THE ON CLASS TO THE BUTTON
      $(this).addClass('on');

      //OPEN THE SLIDE
      $(this).next().slideDown('fast');
     }

   });

  $('.accordionContent').hide();
  $('#open').show();

});
