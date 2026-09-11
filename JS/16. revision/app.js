// var data = [10,60];
// var result = 40;

// function  sum() {
//      result = 10;
//     console.log(result);
    
// }
// sum()

// console.log(result);


// var num = 10;

// switch(num){
//     case 20:
    
//     default:

// }



//  while (userInput === true) {
//  }


function calculate(btnValue){
    var calInp = document.getElementById("cal-input");
    var calInputValue = calInp.value;
    if(btnValue == '='){
        var res = eval(calInputValue);
        console.log(res);
    }
    else if(btnValue == 'del'){
        calInp.value = calInp.value.slice(0,-1)
    }
    else if(btnValue == 'C'){

        calInp.value = "";
    }
    else {
        calInp.value += btnValue
    }

}



















