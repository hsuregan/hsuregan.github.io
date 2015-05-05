$(document).ready(function() {
	$('body').fadeIn(1000);
	$("#template").load("template.html");

	$('.navlink').click(function(){
		event.preventDefault();
		var newLocation = this.href;
		$('body').fadeOut(1000, newpage);
	});

	function newpage() {
		window.location = newLocation;
	};

});