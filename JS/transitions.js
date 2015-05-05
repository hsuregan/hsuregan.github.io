$(document).ready(function() {
	$("#template").load("template.html");
	$('body').fadeIn(500);

	$('.navlink').click(function(){
		event.preventDefault();
		var newLocation = this.href;
		$('body').fadeOut(500, newpage);
	});

	function newpage() {
		window.location = newLocation;
	};

});