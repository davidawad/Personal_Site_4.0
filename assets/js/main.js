;(function(){


        // TODO do this on device resize
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        $('html').css('width', width + 'px');


		var catchy = ["Oh hey",
					"yolo",
					"ayyy, lmao",
					"dank",
					"A wad of intrigue",
					"Not your average wad",
					"you come here often?",
					"the fork on the left",
					"uses spoons loosely",
					"I'm inverse hiring",
					"Cool person, at time of writing",
					"bam.",
					"I'm Obamaself",
					"Pretentious? Moi?",
					"eats rappers for breakfast",
					"recovering lawyer",
                    "proof that one can in fact, live off of Taco Bell"
				];


			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				// generate random number for new catchy line from array
				var newTag = Math.floor( Math.random() * catchy.length ) ;
				document.getElementById("catchyText").innerHTML = catchy[newTag];
				document.getElementById("smallTitle").innerHTML = catchy[newTag];

				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

})(jQuery)
