$(document).ready(function(){
	$('.white-links').children().children().addClass('black-text');
	$('.slider').slider({height: 800});
	$('.modal').modal();
	$('.parallax').parallax();
	$('li.footer-links').each(function(){
		$(this).addClass('grey-text text-lighten-3');
	});
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

