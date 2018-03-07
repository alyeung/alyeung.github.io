/* global $*/
// Write your pseudo code here! HAPPY CODING! :) 
// example: http://saraheholden.com/fewd53/classes/week_07/sidebar_menu/#

// when click on hamburger 
  $('.hamburger').on('click', function(){
    $('body').addClass('active');
    $('.hamburger').hide();
  })

    //bring out the side bar
    

// when the side bar is open, click on the X
    $('.close').on('click', function(){
        $('body').removeClass('active');
        $('.hamburger').show();
    })
    // add a class so the sidebar slides back to left
    // hamburger is shown