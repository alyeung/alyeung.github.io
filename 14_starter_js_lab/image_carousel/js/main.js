// Write your pseudo code here. Happy pseudo coding!!
/* global $*/

// example: http://madeline-omoore.com/FEWD_JAN/week_8/14_js_lab/moved_temp/solution/image_carousel_part_2/

// create a variable to count number and keep track of which click we are on
var count = 0;

// when the user clicks on next button
$('#next').on('click', function() {
    // if counter is less than three
    if (count < 3) {
        // increment count by 1
        count += 1;
        console.log("Count Status Debug: " + count);
    }
    // if counter is greater than 3 (else)
    // if (count > 3... then), sent the user back to the beginning image
    else {
        // set to zero.
        count = 0;
        console.log("Count Status Debug: " + count);
    }

    // show the image based on the count
    $('img').hide();
    $('img').eq(count).show();

})


// when the user clicks on the last button
$('#previous').on('click', function() {
    // if counter is greater than 0
    if (count > 0) {
        // decrement count by 1
        count -= 1;
        console.log("Count Status Debug: " + count);

    }
    // if counter is less than equal 0
    else {
        // set counter to 3
        count = 3;
        console.log("Count Status Debug: " + count);
    }
    // show the image based on the count
    $('img').hide();
    $('img').eq(count).show();
})


//HINT jquery eq method

// bonus carousel changes on timer in reverse direction

//https://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(function() {
        // if counter is greater than 0
        if (count > 0) {
            // decrement count by 1
            count -= 1;
            console.log("Count Status Debug: " + count);

        }
        // if counter is less than equal 0
        else {
            // set counter to 3
            count = 3;
            console.log("Count Status Debug: " + count);
        }
        // show the image based on the count
        $('img').hide();
        $('img').eq(count).show();
    },
    3000); // 3 second interval