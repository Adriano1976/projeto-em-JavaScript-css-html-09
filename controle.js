function calcular_imposto(valor)
{		
	var imposto = (valor * 22.5) / 100;
	return imposto;
}

function mostrar_imposto(form)
{
	var imposto = calcular_imposto	
		(parseFloat(form.valor.value));		


			alert("Valor do Imposto de Renda á Pagar (R$): " + imposto.toFixed(2))		
}