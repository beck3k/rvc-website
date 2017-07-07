$(document).ready(function(){
	$('.white-links').children().children().addClass('black-text');
	$('.slider').slider({height: 400});
	$('.modal').modal();
	$('.parallax').parallax();
	$('nav.nav-extended').append('<div class = "nav-content white"><ul class = "tabs tabs-transparent"><li><a href = "#" class = "to-about">About</a></li><li><a href = "#" class = "to-history">History</a></li><li><a href = "#" class = "to-events">Events</a></li></ul></div>');
	$('.footer-links').children().children().addClass('grey-text text-lighten-3');
	$('.tabs').children().addClass('tab').children().addClass('black-text');
	$('ul.tabs').tabs();
	$('.to-about').click(function() {
		$('html, body').animate({
			scrollTop: $("#scroll-about").offset().top
		}, 2000);
	});
	$('.to-history').click(function() {
		$('html, body').animate({
			scrollTop: $("#scroll-bhistory").offset().top
		}, 2000);
	});
	$('.to-events').click(function() {
		$('html, body').animate({
			scrollTop: $("#scroll-events").offset().top
		}, 2000);
	});
});

