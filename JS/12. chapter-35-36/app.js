// function showAlert(){
//     alert("welcome to my app!")
// }


function addTwoNumbers(numberOne , numberTwo){
    console.log(numberOne)
    console.log(numberTwo)

    console.log(numberOne + numberTwo)
}


function getDesiredTable(){
    var userInput = prompt("Enter your table number ?")
    var endingLength = prompt("kahan tk table chahiye apko ??")

    for(var i = 1 ; i <= endingLength ; i++ ){
        console.log( userInput + "  x " + i + " = " + (userInput * i) )
    }
}