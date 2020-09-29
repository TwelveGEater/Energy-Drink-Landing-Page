var owl = $('.owl-carousel');

owl.owlCarousel({
	center: true,
	items: 2,
	loop: true,
	margin: 14,
	dots: true,
	dotsContainer: '.scrolling__menu',
	responsive: {
		0: {
			center: true,
			items: 1,
			dots: false,
			nav: false
		},
		600: {
			items: 3
		},
		992: {
			items: 4
		},
		1300: {
			items: 5
		},
		1800: {
			items: 7
		}
	}
});

$('#scrollingButtonLeft').click(function() {
	owl.trigger('prev.owl.carousel');
});

$('#scrollingButtonRight').click(function() {
	owl.trigger('next.owl.carousel');
});

$('#back-to-top').click(function() {
	$('body,html').animate(
		{
			scrollTop: 0
		},
		400
	);
	return false;
});
