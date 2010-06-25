$('a.lightbox').click(function(e) {
	//hide scrollbars!
	$('body').css('overflow-y', 'hidden');

	$('<div id="overlay"></div>')
	  .css('top', $(document).scrollTop())
	  .css('opacity', '0')
	  .animate({'opacity': '0.5'}, 'slow')
	  .appendTo('body');

	$('<div id="lighbox"></div>')
	  .hide()
	  .appendTo('body');

	$('<img />')
	  .attr('src', $(this).attr('href'))
	  .load(function() {
	    postitionLightboxImage();
	  })
	  .click(function() {
	    removeLightbox();
	  })
	  .appendTo('#lightbox');

	return false;
});


