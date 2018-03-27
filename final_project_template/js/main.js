/* global $*/

///////////////
// Feedback from Bryan: must have & nice, wish I have to have so we don't get stuck.
// !!!!!!!!!!!!!!!!!(no hover on mobile devices ***** )
//////////////
$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	// Step 2: Log distanceScrolled to the console to see what it holds!
    console.log(distanceScrolled);	

        // handle butterfly animation
      if(distanceScrolled > 2660){
        $('.butterfly').addClass('animated');
      }
      else{
        $('.butterfly').removeClass('animated');  
    }
});
// slick
$('.carousel-wrapper').slick({
  //  dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'
});   

// when click on hamburger 
  $('.hamburger').on('click', function(){
    $('body').addClass('active');
    $('.hamburger').hide();
  });

    //bring out the side bar
    

// when the side bar is open, click on the X
    $('.close').on('click', function(){
        $('body').removeClass('active');
        $('.hamburger').show();
    });
    // add a class so the sidebar slides back to left
    // hamburger is shown
    
// blog: actions

// hide the modal
$('#cloud9Modal').hide();
$('#codeCommitModal').hide();
$('#lambdaModal').hide();
$('#postmanModal').hide();
$('#wordpressModal').hide();


// when click to read more for cloud 9
$('#showCloud9').on('click', function(){
    // modal shows up
    //$('#nine').attr('src', $('#nine').attr('src'));
    $('#cloud9Modal').show();
});


// when click on close
$('#cloud9CloseButton').on('click', function(){


    // pause video and reset on close
    //https://stackoverflow.com/questions/13598423/stop-all-playing-iframe-videos-on-click-a-link-javascript
    //$('iframe').attr('src', $('iframe').attr('src'));
    $('#nine').attr('src', $('#nine').attr('src'));
    //$('object').attr('data', $('object').attr('data'));
    
    //$('.modal-background').hide();
    // modal is hidden
    $('#cloud9Modal').hide();
    
});
    
// handle code commit dialog open
$('#showCodeCommit').on('click', function(){
    //$('#code').attr('src', $('#code').attr('src')); 
    $('#codeCommitModal').show();
});

// and close
$('#codeCommitCloseButton').on('click', function(){
    
    // pause video and reset on close
    //https://stackoverflow.com/questions/13598423/stop-all-playing-iframe-videos-on-click-a-link-javascript
    //$('iframe').attr('src', $('iframe').attr('src'));    
    $('#code').attr('src', $('#code').attr('src')); 
    //$('object').attr('data', $('object').attr('data'));
    
    $('#codeCommitModal').hide();
});

// handle lambda dialog open
$('#showLambda').on('click', function(){
    //$('#lamb').attr('src', $('#lamb').attr('src'));
    $('#lambdaModal').show();
    // force a reload
    
});

// and close
$('#lambdaCloseButton').on('click', function(){
    
    // pause video and reset on close
    //https://stackoverflow.com/questions/13598423/stop-all-playing-iframe-videos-on-click-a-link-javascript
    $('#lamb').attr('src', $('#lamb').attr('src'));
    //$('object').attr('data', $('object').attr('data'));
    
    $('#lambdaModal').hide();
});

// handle postman
$('#showPostman').on('click', function(){
    $('#post').attr('src', $('#post').attr('src'));
    $('#postmanModal').show();

});

// and close
$('#postmanCloseButton').on('click', function(){

    // pause video and reset on close
    //https://stackoverflow.com/questions/13598423/stop-all-playing-iframe-videos-on-click-a-link-javascript
    //$('iframe').attr('src', $('iframe').attr('src'));
    $('#post').attr('src', $('#post').attr('src'));
    //$('object').attr('data', $('object').attr('data'));

    $('#postmanModal').hide();
    
});

// show wordpress
$('#showWordpress').on('click', function(){

    $('#wordpressModal').show();

});

// and close
$('#wordpressCloseButton').on('click', function(){

    $('#wordpressModal').hide();
    
});


// smooth scroll
// Do it when someone clicks a nav link
$('navigation a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
 
 
  $(this).addClass('activeB');
  
  $(this).siblings().removeClass('activeB');
  
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('html, body').animate({
    scrollTop: targetOffset
  }, 600);
  
});

// feedback form action handling
$('#submit').on('click', function() {
    event.preventDefault();
    
    // capture data on click
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var comments = $("#comments").val();

    /* handle name experience */
    if(!name){
        //alert('Please enter your name');
        $('#name').addClass('warn');
        $('#name-error-message').fadeIn(300);
    } else{
        $('#name').removeClass('warn');
        //alert('Submitted!');
        $('#name-error-message').fadeOut(300);
    }
    
        /* handle email experience */    
    if(!email ){
        //alert('Please enter your email');
        $('#email').addClass('warn');
        $('#email-error-message').fadeIn(300);
    } else{
        $('#email').removeClass('warn');
        //alert('Submitted!');
        $('#email-error-message').fadeOut(300);
    }
    
        /* handle phone experience */
    if(!phone ){
        //alert('Please enter your email');
        $('#phone').addClass('warn');
        $('#phone-error-message').fadeIn(300);
    } else{
        $('#phone').removeClass('warn');
        //alert('Submitted!');
        $('#phone-error-message').fadeOut(300);
    }
    
         /* handle comments interest  */
    if(!comments ){
        //alert('Please enter your email');
        $('#comments').addClass('warn');
        $('#comments-error-message').fadeIn(300);
    } else{
        $('#comments').removeClass('warn');
        //alert('Submitted!');
        $('#comments-error-message').fadeOut(300);
    }
    if(name && email && phone && comments){
        
        // form spree: https://formspree.io/
        
        //alert("Form fields complete.  Please note this is not wired up yet to send me the feedback.  Please copy the comments and send to me by github or linkedin.")
        //alert("Form fields complete submitted.  Thank you!")
        
        
    }
})
// responsive bottom Menu
/*
function myFunction() {
    var x = document.getElementById("myBottomNav");
    if (x.className === "bottomNav") {
        x.className += " responsive";
    } else {
        x.className = "bottomNav";
    }
}
*/

// handle feedback form


// Make it rain!


/////////////////
// for map/bike.html page
////////////////

// Must Have: on mouse over of image
    // place a partial opacity color box over the image choice/gear
    // display white text heading and paragraph describing the gear and a link to Amazon.com
    
// Must Have: slide down vertically X pixels display blog text

// Must Have: slide down vertically X pixels and slide from left to right the favorite links

// Nice to Have: slide down more and display google map
    // hover over icon for location name and description, with URL
    // 3 bike shops: Recycled Cycles, Electric Lady, 2020 cycle 


////////////////    
// main page: portfolio
/////////////////

// when select sandwich bar 
    // display side menu

// when hover over the experience image, display complexity notes or stars?

//////////////////////////
//blog / feedback page:
//////////////////////////

// carousel effect for social media ways to contact:
    // animate left or right on button click.
    // display twitter image, github link image, linkedin

// toggle down for filter on topics in blog
    
// fade in the feedback form


///////////////////
// dog page:
///////////////////

// when page loads
    // animate bar like seen here: https://vebolife.com/
    
// show images of favorite products
    // however over for title, and description
    // click on item to shop
    
// reach bottom scale up pictures and change background color 