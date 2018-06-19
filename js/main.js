$().ready(function(){
	var garotao = 0;
	
	$("#enviar").click(function(){
		alert ("No momento não há back-end. Por favor envie um e-mail para dellvale@alu.ufc.br");
	});

	$('a[href^="#"]').click(function(){
		$("html, body").animate({
			scrollTop: $( $.attr(this, "href")).offset().top
		}, 600);
		return false;
	});

	setTimeout(function(){
		if (garotao == 0) {
			$("#vinicius_garotao").animate({top: '33%'}, 700);
	    	garotao = 1;
		}
	}, 1000);
});
