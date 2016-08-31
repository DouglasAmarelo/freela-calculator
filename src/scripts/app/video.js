/* global Bideo */

'use strict';

// BACKGROUND VIDEO
require('vendor/bideo');

module.exports = function() {

	var bv = new Bideo();
	
	if( $(window).width() > 768 ) {
		bv.init({
			videoEl: $('.video__pl')[0],
			container: $('.main')[0],
			resize: true,
			autoplay: true,
			src: [/*{
				src: './videos/' + video + '.webm',
				type: 'video/webm'
			},*/{
				src: './videos/civic.mp4',
				type: 'video/mp4'
			}
			],
			/*onLoad: function () {
				$('.video__cover').hide();
			}*/
		});
	}
};