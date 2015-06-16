$(document).ready(function() {
	$("#template").load("template.html");
	$('body').fadeIn(1000);

	$('.navlink').click(function(){
		event.preventDefault();
		var newLocation = this.href;
		$('body').fadeOut(5000, newpage);
	});

	function newpage() {
		window.location = newLocation;
	};

});