/* global $*/

/*
*Bonus* Try logging the information from the form to the console!

*Bonus 2* Check to make sure the user has entered information into each field. 
If they have not added information to each field, don’t let them submit the form and add an alert under the associated field telling the user what needs to be changed!

*Bonus 3* Check to make sure that the user has added the correct type of data in the 
_EMAIL_ and _PHONE NUMBER_ fields. If they have not, under the associated field, 
tell the user what they need to do!
*/

$('#submit').on('click', function() {
    event.preventDefault();
    
    
    // console log
    console.log("Console Log Stuff:");
    //console.log(course);
    var name = $("#name").val();
    
    var email = $("#email").val();
    
    var phone = $("#phone").val();
    
    var course = $("#course").val();
    
    
    var city;
    var sf= $("#sf").val();
    var chi= $("#ch").val();
    if(chi == 'undefined'){
        city =sf;
    }
    else if (sf =='undefined'){
        city=chi;
    }
    else{
        city="I don't know"
    }
    
    var past = $("#past").val();
    var response = "not set";
    if (past === "on"){
        response = "yes"
    }
    else{
        response = "no"
    }
    
    // on or off
    var updates = $("#updates").val();
    
    // need to handle checkbox
    
    // output
    console.log("Name is: " + name);
    
    console.log("Email is: " + email);
    
    console.log("Phone Number is: " + phone);
    
    console.log("Course of interest is: " + course);
    
    console.log("City to take course: " + city);
    
    console.log("Past experience is as follows: " + past);
    
    console.log("I would like to receive updates: " + response);
})