
// var user1 = 'abc';
// var user2 = 'abc2';
// var user3 = 'abc3';

/// arrays
var users = ['sammad', 'asif', 'abbas'];  ///  array notations
console.log(users);

 var mixArray =  [34, true ,'abc' ];  /// index

//  last index = array length - 1 

var marks = [10,40,50];

/// primitive
// number, string, boolean 


/// Non-primitive
// arrays , objects

var num1 = 2;

// console.log(num1 ** 3) ;  // a ^ n


console.log("hello, " +  users[0])
console.log("hello, " +  users[1])
console.log("hello, " +  users[2])


users[0] = 'new name';
console.log(users);

users = [];
console.log("-----------empty array---------");
console.log(users);

users[0] = 'abc';
users[1] = 'abc1';
users[2] = null;
users[3] = null;
users[4] = 'abc1';
// console.log(users[10]);  /// undefined
console.log(users);  



/////  ----- Array methods ---------

// adding new elements 
users.push('new user', 'new user 2', 'user 3');
console.log('---array after push---');  
console.log(users);  

// removing elements from the end
users.pop()
users.pop()
users.pop()
console.log('---array after pop---');  
console.log(users);  

// removing elements from the start
users.shift()
console.log('---array after shift---');  
console.log(users);  

// adding elements from the start
users.unshift('a');
console.log('---array after unshift---');  
console.log(users); 



//// splice

/// 1. add new elements anywhere
users.splice(3,0, 'b','c' );
console.log('---array after splice---');  
console.log(users); 


/// 2. add and remove (both) new elements anywhere
users.splice(5,1, 'd','e' );
console.log('---array after splice---');  
console.log(users); 


/// 3. only remove elements anywhere
users.splice(2,1);
console.log('---array after splice---');  
console.log(users); 


// prompt('1. only add\n2. only remove');

var arr1 = [30,40,50,60,70,80,90,100];
console.log(arr1);

var arr2 = arr1.slice(0, 3);

// arr2.pop()

console.log(arr2);

var arr3 = arr1.slice(-3, -1)  // n -1 ==> (-1) -1
console.log(arr3);

