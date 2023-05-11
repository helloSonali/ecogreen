$(function () {
  $(document).scroll(function () {
    
    toggle_colors();
    
   //$('#js-logo-color').toggleClass('hidden', $(this).scrollTop() > $nav.height());
   //$('#js-logo-white').toggleClass('hidden', $(this).scrollTop() > $nav.height());

    
  });
  
  
  toggle_colors = function() {
	  var $nav = $(".navbar-fixed-top");
	    $nav.toggleClass('tm-scrolled', $(this).scrollTop() > $nav.height());
	    
	    //Page is scrolled down
	    if ( $(this).scrollTop() > $nav.height()) {
			$('.js-logo-color').show();
		    $('.js-logo-white').hide();
		    
		    if ($(window).width() > 425 ) {
		    		$('.navbar-default .navbar-nav > li > a').css('color', '#5C5756');
		    		
		    		$('.js-navbar-phone-icon').css('color', '#5C5756');
		    		$('.js-navbar-icon-bar').css('background-color', 'black');
		    }
		    
		    $('.navbar-default').css('border-bottom','1px solid lightgray');
		    
		    $('.navbar-default .navbar-toggle .tm-icon-bar').css('background-color','black');
		    
		    
		    
	    }
	    //Navbar on top of hero image
	    else {
		    $('.js-logo-color').hide();
		    $('.js-logo-white').show();
		    
		    $('.navbar-default .navbar-nav > li > a').css('color', 'white');
		    
		    $('.js-navbar-phone-icon').css('color', 'white');
		    $('.js-navbar-icon-bar').css('background-color', 'white');
		    
		     $('.navbar-default').css('border','none');
		     
		     $('.navbar-default .navbar-toggle .tm-icon-bar').css('background-color','black');
	    }
  };
  
  toggle_colors();
  
});