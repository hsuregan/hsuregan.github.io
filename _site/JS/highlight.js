	$(document).ready(function()
		{
			var url = document.URL;
			for(i = url.length; i != 0; i--)
			{
				if(url[i] == '/')
					break;
			}
			var page = url.substring(i+1, url.length-5);
			var pull = "s-"+page;
			console.log(pull);
			var button = document.getElementById(pull);
			$(button).css("background-color", "#006400");
			$(button).css("color", "white");

		
		}
	)
