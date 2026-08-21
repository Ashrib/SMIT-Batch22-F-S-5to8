
/// DOM

// var hElm = document.getElementById("first-h");
// console.log(hElm.innerText)

// hElm.innerText = "Hello from JS";

var hrs_span = document.getElementById("hrs");
var mins_span = document.getElementById("mins");
var secs_span = document.getElementById("secs");
var ampm_span = document.getElementById("am_pm");

/// functions
function greetUser() {
    console.log("thank you!");
    console.log("please visit us again!");
}

greetUser(); /// invoke (call)

// 0 -- 23
// 0 => 12am
// 1 => 1am
// 11 => 11am
// 12 => 12pm
// 13 => 1pm
// 23 => 11pm 

function digitalClockHandle (){
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var am_pm = '';

    if(hours == 0){
        am_pm = 'am';
        hours = 12;
    }
     else if(hours >= 1 && hours <= 11){
        am_pm = 'am';
    }
     else if(hours == 12){
        am_pm = 'pm';
    }
    else{
        am_pm = 'pm';
        hours -= 12; // 14 -> 2
    }

    hrs_span.innerText = hours;
    mins_span.innerText = currentDate.getMinutes() + 1;
    secs_span.innerText = currentDate.getSeconds() + 1;
    ampm_span.innerText = am_pm;
} 


setInterval(digitalClockHandle, 1000);
