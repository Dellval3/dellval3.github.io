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
			$("#ini_wel").animate({left: '35%'}, 500);
			setTimeout(function(){
				$("#ini_work").animate({left: '35%'}, 500);
			}, 500);
			setTimeout(function(){
				$("#ini_to").animate({top: '32.5%'}, 500);
			}, 800);
			setTimeout(function(){
				$("#vinicius_garotao").animate({top: '33%'}, 700);
			}, 1000)
	    	garotao = 1;
		}
	}, 1000);
});