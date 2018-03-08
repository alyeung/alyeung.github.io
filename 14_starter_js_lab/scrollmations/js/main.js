/* global $*/

// example: http://madeline-omoore.com/FEWD_JAN/week_8/14_js_lab/solutions/scrollmations/

// When the user scrolls in the browser window
$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	// Step 2: Log distanceScrolled to the console to see what it holds!
    console.log(distanceScrolled);
    
// https://codepen.io/alyeung/pen/XErzYY
  // if distanceScrolled is greater than or equal to 50
  if(distanceScrolled> 50) {
    // Add a class to the nav to update styles (give it a white background color)
    $('nav').addClass('scrolled');
    $('nav a').addClass('scrolled a');
  }
  else{
  // else
    // Remove the class from the nav to remove the background color
    $('nav').removeClass('scrolled');
    $('nav a').removeClass('scrolled a');
  }
  
  // handle butterfly animation
  if(distanceScrolled > 1400){
    $('.butterfly').addClass('animated');
  }
  else{
    $('.butterfly').removeClass('animated');  
  }

  // handle flybug labels showing
  if(distanceScrolled > 600){
    $('.label-1').addClass('labelshow');
    $('.label-2').addClass('labelshow');
    
  } 
  else{
    $('.label-1').removeClass('labelshow');
    $('.label-2').removeClass('labelshow');  
  }

});

