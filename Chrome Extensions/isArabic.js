$(document).ready(function () 
{
	var myCSS = 
	{
		'font-family': 'BElham'
		// 'display':'inline',
		// 'background':'teal',
		// 'text-align': 'right',
		// 'padding' : '0 5 0 0',
		// 'font-size' : '100%'
	}

	var arabic = /[\u0600-\u06FF]/;

	var hasArabic = function(s){
		return arabic.test(s);
	}

	$('body').children().each(function() 
	{

		$("p,h,h1,h2,h3,span,li,il,lu,ul,div").each(function()
		{
			
			if(hasArabic($(this).text())){
				console.log($(this).text());
				$(this).css(myCSS);
			}
		});

	});


});