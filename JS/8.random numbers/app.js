

// var randomNums = Math.random() * 100000000000000000;
// console.log(randomNums);




/// 0.00000000000000 -> 5.999999999999999999

// var nums = Math.random() * 6;
// nums = Math.ceil(nums);
// console.log(nums);


// OR

// var nums = (Math.random() * 6) + 1;
// console.log(nums);
// nums = Math.floor(nums);


//otp ---> 5 digits
// console.log(Math.floor((Math.random() * 9999999) + 999999));


var userNum = Math.floor(+prompt('guess a number'));
var randomNumbr = Math.floor((Math.random()*10) + 1); 

console.log(userNum);
console.log(randomNumbr);

if(userNum == randomNumbr){
    console.log(true);
}
else{
    console.log(false);
}






