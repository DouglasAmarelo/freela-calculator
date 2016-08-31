'use strict';

module.exports = function() {

	$.ajaxSetup({ cache: true });

	var shareUrl = window.location.href;

	/*$.getScript('//connect.facebook.net/pt_BR/all.js', function() {
		FB.init({
			appId: '402192299929994',
			version: 'v2.6',
			status : true
		});

		FB.getLoginStatus(function( data ) {
			console.log(data);
		});
	});*/

	/*$.getScript('//platform.twitter.com/widgets.js', function(){});*/

	$('a.facebook').click(function(e) {
		e.preventDefault();

		/*FB.ui({
			method: 'share',
			href: shareUrl
		});*/

		var data = {
			text: document.title,
			u: shareUrl
		};

		$.popupCenter( 'https://www.facebook.com/sharer/sharer.php?u=?' + $.param(data), document.title, 580, 470);

		return false;
	});

	$('a.twitter').click(function(e) {
		e.preventDefault();

		var data = {
			text: document.title,
			url: window.location.href,
			hashtags: 'CivicGeração10'
		};

		$.popupCenter( 'https://twitter.com/intent/tweet?' + $.param(data), document.title, 580, 470);

		return false;
	});

};