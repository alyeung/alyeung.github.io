/* global $*/
// Write your pseudo code here! HAPPY CODING!!

// hide the modal
$('.modal-background').hide();

// when click for a good time
$('#showModal').on('click', function(){
    $('.modal-background').show();
})
    // modal shows up

// when click on close
$('#close').on('click', function(){
    $('.modal-background').hide();
})
    // modal is hidden