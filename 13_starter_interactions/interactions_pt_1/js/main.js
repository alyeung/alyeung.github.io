/* global $*/

// example: http://madeline-omoore.com/FEWD_JAN/week_8/13_interactions/solutions/interactions_pt_1/
// when click on click me menu / toggle
$('#openDropdown').on('click', function() {
    // show/hide the menu for click me
    $('#dropdownMenu').slideToggle(500);
})

// hide answer 2
$('#answer2').hide();
    
// when click on what are your hours
$('#question1').on('click', function(){
    // show hours text
    $('#answer1').slideDown();
    // button is yello
    $('#question1').addClass('active');
    
    // hide answer 1
    $('#answer2').slideUp();
    
    // make question 1 note yellow
    $('#question2').removeClass('active');
})

    
// when click on how can i reach you
$('#question2').on('click', function(){
    
    // show contact text
    $('#answer2').slideDown();
    // button is yello
    $('#question2').addClass('active');
    
    // hide answer 1
    $('#answer1').slideUp();
    
    // make question 1 note yellow
    $('#question1').removeClass('active');
    
})

    
// when click on yellow
$('#showYellowCircles').on('click', function(){
    // hide blue
    $('.blue').hide();
    // show yellow
    $('.yellow').show();
    
})

// when click on blue
$('#showBlueCircles').on('click', function(){
    // hide yellow
    $('.yellow').hide();
    // show blue
    $('.blue').show();
})