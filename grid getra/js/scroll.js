$(document).ready(function(){
			// Плавный скролл по якорям
			$('a[href^="#"]').click(function () { 
			    elementClick = $(this).attr("href");
				destination = $(elementClick).offset().top;
			    	$('html').animate( { scrollTop: destination }, 1000 );
				
				return false;
		   });
		});