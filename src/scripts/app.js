'use strict';

var $ = require('app/helpers');

var valorSalario = document.querySelector('#valor-salario');
var valorHora    = document.querySelector('#valor-hora');
var quantHora    = document.querySelector('#horas-trabalhadas');
var percentual   = document.querySelector('#percentual');
var valorTotal   = document.querySelector('#valor-total');

var resetValues = function() {
	valorSalario.value = '';
	valorHora.value    = '';
	quantHora.value    = '';
	percentual.value   = '';

	updateDom();
};

var updateDom = function() {
	valorSalario.value =  valorSalario.value > 0 ? valorHora.value * 160 : '';
	valorTotal.textContent = handlePercentage().toFixed(2);

	console.log('Dom updated!');
};

var handleSalary = function () {
	valorHora.value = valorSalario.value / 160;
	quantHora.value = 160;

	updateDom();
}

var handleHour = function () {
	if ( this.value != 160 ) {
		valorSalario.value = '';
	}
	else {
		valorSalario.value = valorHora.value * 160;
	}

	updateDom();
}

var handlePercentage = function() {
	var porcentagem = percentual.value;
	var total = valorHora.value * quantHora.value;

	if ( porcentagem != '' && porcentagem != 0 ) {
		if ( porcentagem > 0 ) {
			porcentagem = (total * porcentagem) / 100;
			porcentagem = total + porcentagem;
		}
		else if ( porcentagem < 0 ) {
			porcentagem = (total * porcentagem) / 100;
			porcentagem = total - Math.abs(porcentagem);
		}

		return porcentagem;
	}
	else {

		return total;
	}
};

document.addEventListener('DOMContentLoaded', function () {
	$('valor-salario').bind('keyup', handleSalary ).bind('change', handleSalary);
	$('valor-hora').bind('keyup', updateDom ).bind('change', updateDom);
	$('horas-trabalhadas').bind('keyup', handleHour ).bind('change', handleHour);
	$('percentual').bind('keyup', updateDom ).bind('change', updateDom);

	$('clear').bind('click', resetValues);

	resetValues();
});