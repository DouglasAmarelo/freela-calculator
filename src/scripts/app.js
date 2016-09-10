'use strict';

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
