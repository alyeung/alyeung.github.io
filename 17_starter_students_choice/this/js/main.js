/* global $*/
// -------------------------------------------------------------------------------
// Part 1 - Click a box! Get them all!
// -------------------------------------------------------------------------------

// 1. When the user clicks an element with the class .box
  // fade that .box out (using the this keyword).
$('.box').on('click', function(){
  $(this).fadeOut(400);
  
});
// 2. When the user clicks an element with the class .slide-me
  // slide that .slide-me up (using the this keyword).
$('.slide-me').on('click', function(){
  $(this).slideUp(400);
  
});