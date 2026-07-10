

// var age = 20;
var height = 4;
var weight = 60;

// if(age > 18 || height > 5){
//     console.log("okay")
// }

// if((age > 18 && height > 5) || (weight > 50 && height > 5)){
//     console.log("okay")
// }

var nic = false;  // optional
var age = +prompt('enter your age');
var city = prompt("enter city");
var interPass = false;  // optional
var gender = 'female';


/// course

// if((nic == true || interPass == true) && (city == 'karachi' && age > 17) ){
//     console.log("avaiable");
// }
// else{
//     console.log("not avaiable");
// }


//// nested 

if (age >= 18) {
    if(city == 'karachi' || city == 'lahore'){
        if(gender == 'male'){
            console.log("web and app");
            console.log("graphics");
            console.log("digital marketing");
        }
        else{
            console.log("web and app");
            console.log("AI");
            console.log("wordpress");
        }

    }
    else{
        console.log("not avaiable in your city");
    }
    
}
else {
        console.log("not avaiable");

        // if(){

        // }

}

// confirm pop-up box
// var isConfirm = confirm('are you sure to delete your account!'); // true/false
