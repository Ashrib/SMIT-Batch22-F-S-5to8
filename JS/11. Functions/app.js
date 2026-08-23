
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





function addNums(num1, num2) { /// data catch (parameters)

    var result = num1 + num2;
    console.log(result)

}

/// data passing
addNums(100, 60); //agruments
addNums(50, 23); //agruments




function userGreet (firstName, lastName, age, address) {
    console.log("welcome, " + firstName + " " + lastName)
    console.log(age)
    console.log(address)

}

userGreet('ali', 'khan', 23)
userGreet('usman', 'khan')

var array1 = [34,57,89,23,132]


function readArray (array) {

    for(var i=0; i < array.length; i++){
        console.log(array[i]);
    }
    console.log("-----array end -----")
}


readArray(array1);
 
readArray(['a','b','c', 'd', 'f']);


function multiplication(num1, num2){
    var result = num1 * num2;
    
    return result;
}

multiplication(3, 8);
console.log(multRes)




var bankBalance = 0;

///// bank account

/// 
//1 . view balance
//2 . amount deposit
//3 . amount withdraw

// 1, 3,
prompt("enter amount for deposit");

prompt("enter amount for ");





// 0 -- 23
// 0 => 12am
// 1 => 1am
// 11 => 11am
// 12 => 12pm
// 13 => 1pm
// 23 => 11pm 

// function digitalClockHandle (){
//     var currentDate = new Date();
//     var hours = currentDate.getHours();
//     var am_pm = '';

//     if(hours == 0){
//         am_pm = 'am';
//         hours = 12;
//     }
//      else if(hours >= 1 && hours <= 11){
//         am_pm = 'am';
//     }
//      else if(hours == 12){
//         am_pm = 'pm';
//     }
//     else{
//         am_pm = 'pm';
//         hours -= 12; // 14 -> 2
//     }

//     hrs_span.innerText = hours;
//     mins_span.innerText = currentDate.getMinutes() + 1;
//     secs_span.innerText = currentDate.getSeconds() + 1;
//     ampm_span.innerText = am_pm;
// } 


// setInterval(digitalClockHandle, 1000);
