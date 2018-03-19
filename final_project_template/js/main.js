/* global $*/
///////////////
// Feedback from Bryan: must have & nice, wish I have to have so we don't get stuck.
// !!!!!!!!!!!!!!!!!(no hover on mobile devices ***** )
//////////////

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
$('#cloud9').hide();
$('#codeCommit').hide();

// when click to read more for cloud 9
$('#showCloud9').on('click', function(){
    // modal shows up
    $('#cloud9').show();
});


// when click on close
$('#close').on('click', function(){
    //$('.modal-background').hide();
    // modal is hidden
    $('#cloud9').hide();
    
});
    
// handle code commit dialog open
$('#showCodeCommit').on('click', function(){
    $('#codeCommit').show();
});

// and close
$('#close2').on('click', function(){
    $('#codeCommit').hide();
    
});

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