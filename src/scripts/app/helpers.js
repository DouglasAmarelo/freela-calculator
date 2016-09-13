'use strict';

String.prototype.formatArray = function(a){
	return this.replace(/\{(\d+)\}/g, function(r,e){return a[e];});
};

String.prototype.render = function(obj){
	return this.replace(/\{(\w+)\}/g, function(r,e){return obj[e];});
};

var $ = function(e) {
	
	var el = e;
	
	if( typeof e === 'string' ) {
		el = window[e];
	}
	
	if( el.length === 0 ) {
		el = document.querySelectorAll(e);
	}

	el.bind = function(event, func) {
		this.addEventListener(event, func);
		return el;
	};
	
	return el;
};

module.exports = $;