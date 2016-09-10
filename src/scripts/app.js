'use strict';
/*
var valorSalario     = document.querySelector('#valor-salario'),
	valorHora        = document.querySelector('#valor-hora'),
	horasTrabalhadas = document.querySelector('#horas-trabalhadas'),
	valorTotal       = document.querySelector('.total__val'),
	limpaCampos      = document.querySelector('.form-limpar'),
	calcular         = document.querySelector('.form-calcular');

var somaSalario = function() {
	var valor = valorHora.getAttribute('value') * 160;

	valorSalario.setAttribute('value', valor / 2);
};

var somaValorHora = function() {
	var valor = valorSalario.getAttribute('value') / 160;

	valorHora.setAttribute('value', valor * 2);
};

var somaHorasTrabalhadas = function() {
	var valor = horasTrabalhadas.getAttribute('value');

	valor = valor * valorHora.getAttribute('value');

	valorTotal.innerHTML = valor;
};

valorSalario.addEventListener('keyup', function() {
	console.log(10);
	somaValorHora();
});

horasTrabalhadas.addEventListener('keyup', function() {
	console.log(20);
	somaHorasTrabalhadas();
	somaSalario();
});

limpaCampos.click(function() {
	valorTotal.innerHTML = '0';
});

calcular.click(function() {
	// e.preventDefault();
	somaHorasTrabalhadas();
	somaSalario();
});
*/


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

