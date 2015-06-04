jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.cd-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    },
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
		    		$('.cd-header').addClass('is-visible');
		    	} else {
		    		$('.cd-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.cd-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.cd-primary-nav-trigger').on('click', function(){
		$('.cd-menu-icon').toggleClass('is-clicked');
		$('.cd-header').toggleClass('menu-is-open');

		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});
		}
	});




///////////////////////////////////FOR THE FORM





	var messages = $('div[data-type="message"]');
	//check if user updates the email field
	$('.cd-form .cd-email').keyup(function(event){
		//check if user has pressed the enter button (event.which == 13)
		if(event.which!= 13) {
			//if not..
			//hide messages and loading bar
			messages.removeClass('slide-in is-visible');
			$('.cd-form').removeClass('is-submitted').find('.cd-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
		}

		var emailInput = $(this),
			insertedEmail = emailInput.val(),
			atPosition = insertedEmail.indexOf("@");
	    	dotPosition = insertedEmail.lastIndexOf(".");
	    //check if user has inserted a "@" and a dot
	    if (atPosition< 1 || dotPosition<atPosition+2 ) {
	    	//if he hasn't..
	    	//hide the submit button
	    	$('.cd-form').removeClass('is-active').find('.cd-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
	    } else {
	    	//if he has..
	    	//show the submit button
	    	$('.cd-form').addClass('is-active');
	    }
	});

	//backspace doesn't fire the keyup event in android mobile
	//so we check if the email input is focused to hide messages and loading bar
	$('.cd-form .cd-email').on('focus', function(){
		messages.removeClass('slide-in is-visible');
		$('.cd-form').removeClass('is-submitted').find('.cd-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
	});

	//you should replace this part with your ajax function
	$('.cd-submit').on('click', function(event){
		if($('.cd-form').hasClass('is-active')) {
			event.preventDefault();
			//show the loading bar and the corrisponding message
			$('.cd-form').addClass('is-submitted').find('.cd-loading').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				showMessage();
			});

			//if transitions are not supported - show messages
			if($('html').hasClass('no-csstransitions')) {
				showMessage();
			}
		}
	});

	function showMessage() {
		if( $('#cd-success').is(':checked') ) {
			$('.cd-response-success').addClass('slide-in');
		} else if ( $('#cd-error').is(':checked') ) {
			$('.cd-response-error').addClass('is-visible');
		} else {
			$('.cd-response-notification').addClass('is-visible');
		}
        // on submit take in val of email field and send email.
        var userEmail = $('#formEmail').val();
        console.log("sending email to " + userEmail );
  $.ajax({
  'type': "POST",
  'url': "https://mandrillapp.com/api/1.0/messages/send.json",
  'data': {
    'key': "5xnjyeS5tH1qCoxtOaukqA",
    'message': {
      'from_email': "davidawad64@gmail.com",
      'to': [
          {
            'email': "davidawad64@gmail.com",
            'name': "RECIPIENT NAME",
            'type': "to"
          },
					{
						'email': "THEIR EMAIL", //this is still in development
						'name': "",
						'type': "to"
					},
        ],
      'autotext': "true",
      'subject': "New Site Visit!",
      'html': "You got a site visit from : " + userEmail 
    }
  }
 }).done(function(response) {
   console.log(response); // if you're into that sorta thing
 });

    		var ref = new Firebase("https://blinding-fire-9145.firebaseio.com");
        var usersRef = ref.child("users");
				var currentdate = new Date();
				var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

  usersRef.set({
  person: {
    email: userEmail,
    time: datetime
  }
});

}////////END OF SHOW NOTIF.
	//placeholder fallback (i.e. IE9)

	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}


});
