'use strict';

require('jquery-form');
require('jquery-validation');
require('jquery-placeholder');
require('jquery-mask-plugin');
require('vendor/jquery.tagsinput');

require('vendor/cpfBR');

var Cookies = require('js-cookie');

module.exports = function() {

	var API_ENDPOINT = '//jussi-mailer.herokuapp.com/',
		$btnRegister = $('#btn-register'),
		$formRegister = $('#form-register'),
		$fields = $('#form-fields'),
		$inputs = $fields.find('input'),
		$indicados = $('#indicados'),
		$errorBoxes = $('.alert-error'),
		$successBoxes = $('.alert-success');

	$inputs.placeholder();

	$indicados.tagsInput({email: true/* ,width:'auto' */});

	$('#cpf').mask('999.999.999-99', {
		clearIfNotMatch: true
	});

	var SPMaskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	},
	spOptions = {
		onKeyPress: function(val, e, field, options) {
			field.mask(SPMaskBehavior.apply({}, arguments), options);
		},
		clearIfNotMatch: true
	};

	$('#tel').mask(SPMaskBehavior, spOptions);

	$formRegister.validate({
		focusCleanup: true,
		errorPlacement : function(err, el) {
			el.prop('placeholder', err.text());
		},
		highlight: function(element, errorClass, validClass) {
			var self = $(element);
			self.add( self.closest('div') )
				.addClass(errorClass)
				.removeClass(validClass);
		},
		unhighlight: function(element, errorClass, validClass) {
			var self = $(element);
			self.add( self.closest('div') )
				.removeClass(errorClass)
				.addClass(validClass);
		}
	});

	var setupAjaxForm = function( $form, url, success, beforeSerialize ) {

		$form.ajaxForm({
			url: API_ENDPOINT + url,
			beforeSerialize: beforeSerialize,
			beforeSubmit: function(arr, $form ) {
				$errorBoxes.hide();
				return ! $form.find('.submit').hasClass('loading');
			},
			beforeSend: function(){
				$form.find('.submit').addClass('loading');
			},
			complete: function() {
				$form.find('.submit').removeClass('loading');
			},
			success: function( data, statusText, xhr, form ) {

				if( data ) {
					console.log(data);

					if( data.status ) {

						return success && success.call(form, data);

					} else {
						if(data.code !== 'EENVELOPE'){
							$errorBoxes.filter('.error-email').show();
						}else{
							$errorBoxes.filter('.error-indicado').show();
						}
					}

				} else {
					$errorBoxes.filter('.error-default').show();
				}

			},
			error: function() {
				$errorBoxes.filter('.error-default').show();
			}
		});

	};

	var pushMailChimp = function( formData ) {

		$.post('submit.php', formData, function( data ) {
			console.log('submit result', data);
		});

	};

	setupAjaxForm( $formRegister, 'register/honda-civic', function(data) {

		$btnRegister.hide();
		$fields.hide();
		$errorBoxes.hide();

		$successBoxes.filter('.success-register').show();

		var formData = $(this).serializeObject();

		$(this).data( 'formData', formData ).clearForm();

		Cookies.set('honda-civic', formData, {
			expires: 365,
			path: '/'
		});

		$.pushEvent('lead', {
			lead_id: data.id,
			data: formData
		});

		pushMailChimp(formData);

	});

	setupAjaxForm( $('#form-indicate'), 'submit/honda-civic-indicacao', function(data) {

		$errorBoxes.hide();

		$successBoxes.find('h3').hide();
		$successBoxes.filter('.success-indicate').show();

		var formData = $(this).serializeObject();

		$(this).clearForm();

		$indicados.importTags('');

		$.pushEvent('indicar', {
			indicar_id: data.id,
			data: formData
		});

	}, function($form, options) {

		var formData = $formRegister.data('formData');

		options.data = {
			from_name : formData.name,
			from_address: formData.email
		};
	});

};