/* global $*/

$('#submit').on('click', function() {
    event.preventDefault();
    // console log
    console.log("Console Log Stuff:");
    //console.log(course);
    var name = $("#name").val();
    
    var email = $("#email").val();
    
    var phone = $("#phone").val();
    
    var course = $("#course").val();
    
    var city = $("#city").val();
    
    var past = $("#past").val();
    
    // need to handle checkbox
    
    // output
    console.log(name);
    
    console.log(email);
    
    console.log(phone);
    
    console.log(course);
    
    console.log(city);
    
    console.log(past);
    
})