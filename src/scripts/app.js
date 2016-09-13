'use strict';

var $ = require('app/helpers');

var data = {};

var updateDom = function() {
	//console.log(data);
	$('valor-salario').value = data.salary;
	$('valor-hora').value = data.price;
	$('valor-total').innerText = data.price * data.hour;
};

var handleSalary = function() {
	data.salary = this.value;
	data.price = (data.salary / 160 ) * 2;
	updateDom();
};

var handlePrice = function() {
	data.price = this.value;
	data.salary = (data.price * 160 ) / 2;
	updateDom();
};

var handleHours = function() {
	data.hour = this.value;
	updateDom();
};

var resetValues = function() {
	data = {
		salary: 0,
		price: 0,
		hour: 0
	};

	updateDom();
};

document.addEventListener('DOMContentLoaded', function () {
	$('valor-salario').bind('keyup', handleSalary ).bind('change', handleSalary );
	$('valor-hora').bind('keyup', handlePrice ).bind('change', handlePrice );
	$('horas-trabalhadas').bind('keyup', handleHours ).bind('change', handleHours );

	$('clear').bind('click', resetValues);
	resetValues();
});


/*
var valorSalario     = $('#valor-salario'),
	valorHora        = $('#valor-hora'),
	horasTrabalhadas = $('#horas-trabalhadas'),
	valorTotal       = $('.total__val'),
	limpaCampos      = $('.form-limpar'),
	calcular         = $('.form-calcular');


var escreveValor = function(valor) {
	valorTotal.text(valor);
};

var verificaCampo = function(campo) {
	if (campo !== '') {
		return campo.val();
	}
};

var somaSalario = function() {
	var valor = verificaCampo(valorHora);
		valor = valor * 160;

	valorSalario.val(valor / 2);
};

var somaValorHora = function() {
	var valor = verificaCampo(valorSalario);
		valor = valor / 160;

	valorHora.val(valor * 2);
};

var somaHorasTrabalhadas = function() {
	var valor = verificaCampo(horasTrabalhadas);

	valor = valor * valorHora.val();

	escreveValor(valor);
};

valorSalario.on('keyup change', function() {
	somaValorHora();
});

horasTrabalhadas.on('keyup change', function() {
	somaHorasTrabalhadas();
	somaSalario();
});

limpaCampos.click(function() {
	valorTotal.text('0');
});

calcular.click(function(e) {
	e.preventDefault();
	somaHorasTrabalhadas();
	somaSalario();
});
*/