


    jQuery(function($){

		//tweet

        // $(".tweet").tweet({
        //   join_text: "",
        //   username: "pracipio",
        //   avatar_size: 17,
        //   count: 5,
        //   loading_text: "loading tweets..."
        // });


	     //refine slider

        $('.rs-slider').refineSlide({
				      transition         : 'blockScale',
				      transitionDuration : 1000,
				      autoPlay           : true,
				      keyNav             : true,
				      delay              : 7000,
				      controls           : 'arrows',
				      arrowTemplate         : '<div class="rs-arrows"><a href="#" class="rs-prev"><</a><a href="#" class="rs-next">></a></div>' // String: The markup used for arrow controls (if arrows are used). Must use classes '.rs-next' & '.rs-prev'

		});

        //carousel
        $('#myCarousel').carousel();

		// Configurating flexslider for Recent News Section
		 $('.news-slider .flexslider').flexslider({
			 animation: "slide",

			 slideshow: false,
			 directionNav: true,
			 controlNav: false,
				prevText: "(",
				nextText: ")",
			maxItems: 1,
			move: 1,
			smoothHeight: true
		 });
		// Configurating flexslider for Blog Slider on footer
		$('.blog-slider .flexslider').flexslider({
			directionNav: false,
			smoothHeight: true,
			slideshow: false
		});
		// Configurating flexslider for Blog Slider on footer
		//---------------------------------------------------
		$('.portofolio-carousel .flexslider').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 150,
			asNavFor: '.portofolio-slider .flexslider',
			directionNav: false
		});

		$('.portofolio-slider .flexslider').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			directionNav: false,
			sync: ".portofolio-carousel .flexslider"
		});
		//---------------------------------------------------

		// Tooltip for social icons
		$("[rel=tooltip]").tooltip({
			delay: { show: 10, hide: 200 },
			placement: 'bottom'
		});

		//Hide Dropdown Menu and replace it with select menu
		// From http://css-tricks.com/convert-menu-to-dropdown/
		//---------------------------------------------------

		// Create the dropdown base
		$("<select />").appendTo("nav.main-nav");

		// Create default option "Go to..."
		$("<option />", {
			"selected": "selected",
			"value"   : "",
			"text"    : "Go to..."
		}).appendTo("nav.main-nav select");

		// Populate dropdown with menu items
		$("nav.main-nav a").each(function() {
			var el = $(this);
			$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
			}).appendTo("nav.main-nav select");
		});

		$("nav.main-nav select").change(function() {
			window.location = $(this).find("option:selected").val();
		});
		//--------------------------------------------------------


		//BACK TO TOP
		//--------------------------------------------------------
		// hide #back-top first
		$(".scroll-top").hide();

		// fade in #back-top

		$(window).scroll(function () {
			if ($(this).scrollTop() > 400) {
				$('.scroll-top').fadeIn();
			} else {
				$('.scroll-top').fadeOut();
			}
		});

		$('.scroll-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		//--------------------------------------------------------

		//Flickrush plugin

		$('#flickrImages').flickrush({
			id: '44499772@N06',  // the ID of your flickr username
			limit: 12,            // the number of photos to display
			random: true         // randomly select photos to be displayed
		});

		//Black and White plugin
		$('.bwWrapper').BlackAndWhite({
		    hoverEffect : true, // default true
	        // set the path to BnWWorker.js for a superfast implementation
		    webworkerPath : false,
		    // for the images with a fluid width and height
	    	invertHoverEffect: true,
	        responsive:true,
		    speed: { //this property could also be just speed: value for both fadeIn and fadeOut
		        fadeIn: 200, // 200ms for fadeIn animations
		        fadeOut: 800 // 800ms for fadeOut animations
		    }
		});



    });
