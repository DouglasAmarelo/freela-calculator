'use strict';

module.exports = function() {

	var $box = $('.captation-box');

	$('#btn-register').click(function(e) {
		e.preventDefault();
		$box.toggleClass('active');
	});

};