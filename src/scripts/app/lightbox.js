'use strict';

module.exports = function() {

	$('.js-lightbox__privacy').click(function(e) {
		e.preventDefault();
		$('.lightbox__privacy').addClass('lightbox--active');
	});

	$('.js-lightbox__video').click(function(e) {
		e.preventDefault();
		$('.lightbox__video').addClass('lightbox--active');
	});

	$('.js-lightbox-close').click(function(e) {
		e.preventDefault();
		console.log(e.target);
		$('.lightbox').removeClass('lightbox--active');
	});

};