'use strict';

var Cookies = require('js-cookie');

module.exports = function() {

	var userData = Cookies.getJSON('honda-civic');

	/*if( userData && document.body && document.body) {
		document.body.className += ' registered';
	}*/

	if( userData ) {
		$('body').addClass('registered');
	}

};