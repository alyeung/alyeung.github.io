/* global $*/

///////////////
// Feedback from Bryan: must have & nice, wish I have to have so we don't get stuck.
// !!!!!!!!!!!!!!!!!(no hover on mobile devices ***** )
//////////////


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


// when click to read more for cloud 9
$('#showCloud9').on('click', function(){
    // modal shows up
    $('#cloud9Modal').show();
});


// when click on close
$('#cloud9CloseButton').on('click', function(){
    //$('.modal-background').hide();
    // modal is hidden
    $('#cloud9Modal').hide();
});
    
// handle code commit dialog open
$('#showCodeCommit').on('click', function(){
    $('#codeCommitModal').show();
});

// and close
$('#codeCommitCloseButton').on('click', function(){
    $('#codeCommitModal').hide();
});

// handle lambda dialog open
$('#showLambda').on('click', function(){
    $('#lambdaModal').show();
});

// and close
$('#lambdaCloseButton').on('click', function(){
    $('#lambdaModal').hide();
});

// handle lambda dialog open
$('#showPostman').on('click', function(){
    $('#postmanModal').show();
});

// and close
$('#postmanCloseButton').on('click', function(){
    $('#postmanModal').hide();
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