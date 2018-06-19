$().ready(function(){
	var garotao = 0;

	$('a[href^="#"]').click(function(){
		$("html, body").animate({
			scrollTop: $( $.attr(this, "href")).offset().top
		}, 600);
		return false;
	});
	
	$("#enviar").click(function(){
		alert("Por hora estamos sem o back-end, por favor mande um e-mail para dellvale@alu.ufc.br");
	});

	setTimeout(function(){
		if (garotao == 0) {
			$("#vinicius_garotao").animate({top: '33%', left: '34%', transform: 'translate(-34%, -33%)'}, 800);
	    	garotao = 1;
		}
	}, 1000);
});   