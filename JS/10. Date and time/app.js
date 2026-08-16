var num = 5.774;
num = num.toFixed(5);
console.log(num);


//// Date and time
var currentDate = new Date();  /// date object
// currentDate.setFullYear(2015)
// currentDate.setMonth(0)

console.log(currentDate);

document.write(currentDate)



console.log(currentDate.getMonth());
console.log(currentDate.getDay());
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getMilliseconds());
console.log(currentDate.getTime());


var futureDate = new Date("June 14, 2050 17:40:20");
console.log(futureDate)

console.log(futureDate.getFullYear() - currentDate.getFullYear() )


/// days

var miliSecDifference = futureDate.getTime() - currentDate.getTime();
console.log(miliSecDifference);


// units
/// miliSec -> sec

var result = miliSecDifference / 1000 ;
/// Sec -> mins
result = result / 60

/// mins -> hrs
result = result / 60;

/// hrs -> days
result = result / 24;
// var result = miliSecDifference / (1000 * 60 * 60 * 24)


console.log(Math.floor(result));






