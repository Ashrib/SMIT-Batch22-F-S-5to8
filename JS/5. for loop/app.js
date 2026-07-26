var count = 0;
// count = count + 1 ;

// count = count + 1 ;
count++;
count++;
count++;
count++;
count++;



count = count - 1 ;
count--;
count--;
count--;
count--;
count--;
count--;
// console.log(count);




var num = 1;

// num++;
// console.log(num)

// ++num;
// console.log(num)


var num2 = ++num;

// console.log(num2)
// console.log(num)

--num;
num--;

/// for loop

// for(var i = 0;  i < 11;  i++) {
//     // iteration --> no of cycle

//     console.log(i);
// }


var names = ['ali','usman','asif','ahmed', 'huzaifa', 'hamid']; // 4

// console.log(names.length)

// for(var i = 0; i < names.length; i++){
//     console.log( "element at index "+ i + " is: " + names[i])
// }




// var cities = ['karachi', 'lahore', 'islamabad', 'faisalabad', 'sukkar'];

// var userCityInput = prompt("enter city name");


// for( var i =0; i < cities.length; i++){
//     console.log(cities[i])
    
//     if(userCityInput == cities[i]){
//         console.log("found at index: " + i);

//         break;  /// terminate loop 
//     }
    
// }




// n = 10

// for(var i = 1; i <= 10; ++i){ /// n + 1 = 11

//     console.log(i);  /// n = 10

// }


/// nested loop
// for(var i = 1; i <= 5; ++i){ /// outer loop
//     console.log("outer loop iteration: "+ i)  /// 5

//     for(var j = 1; j<=3; j++){ /// inner loop  /// 5
//         console.log("inner loop iteration: "+ j);  /// n * n --> 3 * 5
        
//     }
// }

/// time complexity





//// outer i = 1
//       inner j =1
//       inner j =2
//       inner j =3


//// outer i = 2
//       inner j =1
//       inner j =2
//       inner j =3


//// outer i = 3



var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

for(var i=0; i<firstNames.length; i++){
    // console.log(firstNames[i]);
    for(var j=0; j<lastNames.length; j++){
        console.log(firstNames[i] + lastNames[j]);
    }

}


// var nums = [5,10,2];
// var nums2 = [2,3,4];

// var total = 0;

// for(var i=0; i<nums.length; i++){
//     total = 0; /// reset
//     for(var j=0; j < nums2.length; j++){
//         total += nums[i] * nums2[j];
//         console.log(nums[i]+ " X " + nums2[j] + " = " +nums[i] * nums2[j]);
//     }

//     console.log(nums[i]+ " total: " + total);
// }



var dupArr = [2,3,3,4,4,6,7,8,8];
var newArr = [];

// for(var i=0; i < dupArr.length; i++){
//     // console.log("dupArr "+ dupArr[i])
    
//     for(var j=0; j <= i; j++){
//         console.log("inner loop")
//         if(dupArr[i] == newArr[i+1]){  /// 2 == unde
//             continue;
//         }
//         else{
//             console.log("dupArr "+ dupArr[i]+ "----newArr "+newArr[j])
//             newArr.push( dupArr[i] )
//         }
//     }
// }

// console.log(newArr);


// for(var i=0; i<dupArr.length; i++){
//     if(newArr.indexOf(dupArr[i] ) == -1){
//         newArr.push(dupArr[i])
//     }

// }
// console.log(newArr);




