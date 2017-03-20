/* concept: we're going to tell the user how logn they've been on the planet in each of the following; days; weeks; months; seconds. we will ask for their dob in dd/mm/yyyy format and calculate the outputs based on this */

/* pseudo code */
//user is asked to enter their dob as a dd/mm/yyyy format
//once all three inputs are recieved, the submit button is highlighted
//user clicks submit
//calculation takes place
//outputs are presented to the screen
//clear button is highlighted


//how to convert DOB into dateformat?
var datetest = Date.parse("December 8, 1988");
//date.parse is super flexible and it can read in dates in many formats
//output of datetest will be in milliseconds: 1332288000000
var now = new Date();
//collects date now
var currentdate = Date.parse(now);
//parses it to milliseconds
console.log(datetest);
console.log(currentdate);

var elapsed = currentdate - datetest;
//calculates differnce between todays date and the input (ortest) date
console.log(elapsed);

var millisPerDay = 1000*60*60*24;
//this equation provides amount of milliseconds per day

function millisToDays(inputMillis) {
    var days = inputMillis / millisPerDay;
    //divides the elapsed time (input as inputMillis) by the amount of milliseconds in days
    return Math.floor(days);
    //rounds the output down to lowest single number
}

var days = millisToDays(elapsed);
//calls the function millistoDays and passes the value of elapsed into it
console.log("You've been alive for " + days + " days");

