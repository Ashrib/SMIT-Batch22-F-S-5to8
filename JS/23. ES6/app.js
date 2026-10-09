
/// let vs var
let num = 20;

/// block scope

// if(){
//     let a = 10
// }


/// hoisting with var
function cal() {
    b = 20;
    alert(b);
    
    var b ;
}

/// arrow functions

let add = (num1, num2) => num1 + num2 ;

let res = add(4,5)
/// 
let sq = n => n * n;
console.log(sq(5));


/// higher-order function

/// factorial
// 5! => 5 * 4 * 3 * 2 * 1

let factorial = (n) =>{
    if(n == 1){
        return n * 1;
    }

    return  4 * factorial(n - 1) ///recursion -- recursive function
}

console.log(factorial(4));

/// DSA
/// OOPS


let num2 = 20;
if(num2){  
    console.log('hello from if')
}

if(!num2){   //// falsy  ------ '' , null, undefined, 0, NaN
    console.log('hello from if')
}


// if(true) console.log()


let arr = [];

// if(arr){  ///  X
//     console.log('array console')
// }


/// ternary 
let result = (num2 == 20) ? num2 * 5 : 0 ;
console.log(result);

