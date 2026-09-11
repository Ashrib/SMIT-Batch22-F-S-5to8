function calculateMarks(subOne , subTwo , subThree , subFour , subFive ) {
    var obtainedMarks = subOne + subTwo + subThree + subFour + subFive
    return obtainedMarks
}

function calculateGrade(studentMarks){
    var grade = ''
    var totalMarks = 500
    var calculatePercentage = studentMarks * 100 / totalMarks
    if(calculatePercentage >= 90 ) {
        grade = "A+"
    } else if(calculatePercentage >= 70 ){
        grade = "A"
    } else if (calculatePercentage >= 60){
        grade = "B"
    }  else if (calculatePercentage >= 50){
        grade = "C"
    } else{
        grade = "Fail"
    }

    return grade
}

function welcomeMessage(){
    alert("Welcome to my application")

    var numberOne = +prompt("Enter English marks")
    var numberTwo = +prompt("Enter Maths marks")
    var numberThree = +prompt("Enter Science marks")
    var numberFour = +prompt("Enter Urdu marks")
    var numberFive = +prompt("Enter PST marks")

    
    var studentMarks = calculateMarks(numberOne , numberTwo , numberThree , numberFour , numberFive)
    var studentGrade = calculateGrade(studentMarks)

    console.log("your grade is " + studentGrade)
    console.log("your marks is " + studentMarks)

}

