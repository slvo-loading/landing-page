/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

		var app = document.getElementById('app');

		var typewriter = new Typewriter(app, {
			loop: true,
			delay:100
		});

		typewriter.typeString('Aspiring Software Engineer')
			.pauseFor(1000)
			.deleteChars(17)
			.typeString('Graphic Designer')
			.pauseFor(1000)
			.deleteAll()
			.typeString('Bridging Code with Creativity')
			.pauseFor(1000)
			.typeString(', One <strong>Byte</strong> at a Time!')
			.pauseFor(1000)
			.start();

		var app = document.getElementById('pop-cat');

		var typewriter = new Typewriter(app, {
			loop: true,
			delay: 85
		});

		typewriter.typeString('"Improving by <strong>1%</strong> isn\'t particluarly <strong>notable</strong>')
			.pauseFor(1000)
			.typeString('—sometimes it isn\'t even <strong>noticeable</strong>')
			.pauseFor(1000)
			.typeString('—but it can be far more <strong>meaningful</strong>')
			.pauseFor(1000)
			.typeString(', especially in the long run"- James Clear')
			.pauseFor(1000)
			.deleteAll()
			.typeString('"You can\'t always see the light at the end of the tunnel')
			.pauseFor(1000)
			.typeString(', but <strong>if you just keep moving</strong> ...')
			.pauseFor(1000)
			.typeString('you will come to a better place.')
			.pauseFor(1000)
			.typeString(' When you\'re in your darkest place')
			.pauseFor(1000)
			.typeString(', you give yourself hope and that\'s <strong>inner strength</strong>." - Uncle Iroh')
			.pauseFor(1000)
			.deleteAll()
			.typeString('"If my life is going to <strong>mean</strong> anything')
			.pauseFor(1000)
			.typeString(', I have to <strong>live</strong> it myself" - Percy Jackson')
			.pauseFor(1000)
			.deleteAll()
			.pauseFor(1000)

			.start();


	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

	

})(jQuery);