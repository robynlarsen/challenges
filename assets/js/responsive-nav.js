$(document).ready(function(){ //document ready

	$('.mobileMenu' ).on('click',function(e){
		e.preventDefault();
		$('nav ul').slideDown("slow", function(){});

      $('nav ul a').on('click', function(){
        $('nav ul').slideUp("slow", function(){
          // $('section').offset().top - $('nav').offset().top;
        });
      });
	}); //end of responsive-menu
	
}); //end document ready