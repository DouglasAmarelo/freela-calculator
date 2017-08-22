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
	var total = valorHora.value * quantHora.value;
	valorSalario.value =  valorSalario.value > 0 ? valorHora.value * 160 : '';
	valorTotal.textContent = total;
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

	if ( porcentagem != '' && porcentagem != 0) {
		if ( porcentagem > 0 ) {
			porcentagem = (total * porcentagem) / 100;
			porcentagem = parseInt(total) + parseInt(porcentagem);
		}
		else if ( porcentagem < 0 ) {
			porcentagem = (total * porcentagem) / 100;
			porcentagem = parseInt(total) - parseInt(Math.abs(porcentagem));
		}

		valorTotal.textContent = porcentagem;
	}
	else if (porcentagem != '' && porcentagem == 0) {
		valorTotal.textContent = total;
	}
	else {
		valorTotal.textContent = total;
	}
};

document.addEventListener('DOMContentLoaded', function () {
	$('valor-salario').bind('input', handleSalary ).bind('change', handleSalary);
	$('valor-hora').bind('input', updateDom ).bind('change', updateDom);
	$('horas-trabalhadas').bind('input', handleHour ).bind('change', handleHour);
	$('percentual').bind('input', handlePercentage ).bind('change', handlePercentage);

	$('clear').bind('click', resetValues);

	resetValues();
});
