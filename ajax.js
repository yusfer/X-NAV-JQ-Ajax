

jQuery(document).ready(function() {
	
		$.ajax({
			type: 'GET',
			url: "text.txt",
			})
			.done(function( texto ) {
				$("#second").text(texto);
			});
			
		$("#boton1").click(function(){
			$.ajax({
			type: 'GET',
			url: "text2.txt",
			})
			.done(function( texto ) {
				$("#third").text(texto);
				//$("<p id='fourth'> EL ID CUATRO </p>").insertBefore("#third");
			})
		})
		$("#boton2").click(function(){
			$.ajax({
			type: 'GET',
			}).done(function(){
				$("#fourth").html("<h2> incluyo html <h2>")
			})
		})
});
	
	

	
	
	
	
