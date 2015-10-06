;(function(){


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
					"former sperm racing champion",
					"Pretentious? Moi?",
					"eats rappers for breakfast"
				];


			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				// generate random number for new catchy line from array
				var newTag = Math.round( Math.random() * catchy.length ) - 1 ;
				document.getElementById("catchyText").innerHTML = catchy[newTag];
				document.getElementById("smallTitle").innerHTML = catchy[newTag];

				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

})(jQuery)
