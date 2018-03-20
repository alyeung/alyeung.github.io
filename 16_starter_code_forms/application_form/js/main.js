/* global $*/

/*
*Bonus* Try logging the information from the form to the console!

*Bonus 2* Check to make sure the user has entered information into each field. 
If they have not added information to each field, don’t let them submit the form and add an alert under the associated field telling the user what needs to be changed!

*Bonus 3* Check to make sure that the user has added the correct type of data in the 
_EMAIL_ and _PHONE NUMBER_ fields. If they have not, under the associated field, 
tell the user what they need to do!
*/

/* reference: http://madeline-omoore.com/FEWD_JAN/week_9/16_form_basics/solution/contact_form_solution_js/index.html */

/*https://codepen.io/alyeung/pen/eMgvGQ */

$('#submit').on('click', function() {
    event.preventDefault();
    
    // capture data on click
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var course = $("#course").val();
    
    
    var city;
    var sf= $("#sf").val();
    var chi= $("#ch").val();
    console.log(chi, sf);
    /*
    if(chi == 'undefined'){
        city =sf;
    }
    else if (sf =='undefined'){
        city=chi;
    }
    else{
        city="I don't know"
    }
    */

    var past = $("#past").val();
    
    // on or off, handle the checkbox for updates
    var updates = $("#updates").val();


    var response = "not set";
    if (updates === "on"){
        response = "yes"
    }
    else{ // checkbox was not selected
        response = "no"
    }
    
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
 
     /* handle course interest  */
    if(!course ){
        //alert('Please enter your email');
        $('#course').addClass('warn');
        $('#course-error-message').fadeIn(300);
    } else{
        $('#course').removeClass('warn');
        //alert('Submitted!');
        $('#course-error-message').fadeOut(300);
    }

    /* handle city of interest  */
    /* .isChecked */
    if($('#sf').is(':checked') ||  $('#ch').is(':checked')){
        $('#sf').removeClass('warn');
        $('#ch').removeClass('warn');
        //alert('Submitted!');
        $('#city-error-message').fadeOut(300);
    } else{
        //alert('Please enter your email');
        $('#sf').addClass('warn');
        $('#ch').addClass('warn');
        $('#city-error-message').fadeIn(300);
    }
    
    
    /* handle past experience */
    if(!past ){
        //alert('Please enter your email');
        $('#past').addClass('warn');
        $('#past-error-message').fadeIn(300);
    } else{
        $('#past').removeClass('warn');
        //alert('Submitted!');
        $('#past-error-message').fadeOut(300);
    }
    
    
    
    // if not null
    if(name){
      // console log
        console.log("Console Log Stuff:");      
        console.log("Name is: " + name);
        console.log("Email is: " + email);
        console.log("Phone Number is: " + phone);
        console.log("Course of interest is: " + course);
        console.log("City to take course: " + city);
        console.log("Past experience is as follows: " + past);
        console.log("I want to receive updates: " + response);
    }
    // else something was not defined
    else{
        // add alert under name field or show alert message
        console.log("Name is not defined");
    }
    
})