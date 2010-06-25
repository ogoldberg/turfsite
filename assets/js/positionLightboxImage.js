function positionLightboxImage() {
	var top = ($(window).height() - $('#lightbox').height()) / 2;
	var left = ($(window).width() - $('#lightbox').width()) / 2;
	$('#lightbox')
		.css({
			'top': top + $(document).scrollTop(),
			'left': left
		})
		.fadeIn();
}
