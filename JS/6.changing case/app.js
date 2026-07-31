// var cities = ['karachi','lahore', 'islamabad'];
// var userCity = prompt('enter your city name').toLowerCase();
// console.log(userCity)

// // console.log(userCity.toUpperCase())

// for(var i=0; i<cities.length; i++){
//     console.log(cities[i]);
//     if(userCity == cities[i]){
//         console.log(true);
//         break;
//     }
    
// }


var firstName = 'ahmed';
var lastName = 'ali';

var fullName = firstName[0].toUpperCase() + firstName.slice(1) + 
" " + lastName[0].toUpperCase() + lastName.slice(1);
console.log(fullName)


// var userInput = prompt("enter some text.");
// console.log(userInput);


// //// abc  def
// for(var i=0; i<userInput.length; i++){
//     // console.log(userInput.slice(i, i+2))
//     if(userInput.slice(i, i+2) == '  '){  // '  '
//         alert('no double space allow! Enter again.')
//     }
// }



var text = "World War II The New Yorker magazine doesn't allow 'the' phrase World War II. They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers."

// for(var i = 0; i< text.length; i++){
//     if('World War II' == text.slice(i, i + 12)){
//         console.log(true)
//     }
// }

console.log(text.indexOf("'the'"));
console.log(text.lastIndexOf('the'));

if(text.indexOf('World War II')  !== -1 ){
    console.log(true);
}
else{
    console.log(false);
}



