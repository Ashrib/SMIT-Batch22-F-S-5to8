let arr1 = [1,2,3,4,5,6,7,8];
let arr2 = [10,12,13,14,15,16,17,18];

let arr3 = arr1.concat(arr2, [60,70,80], 90, 100);
console.log(arr3)



arr2.forEach((num, index, array) => {
    console.log(`at index ${index} : ${num}`);
    console.log(array); 
});


let countArr = ["Bilbo", "Gandalf", "Nazgul"].map((item, index, array) => item.length)
console.log(countArr); 


let num3 = [3,5,6,87, 9, 4];
console.log(num3.map((num)=> num * num));


let filterNums = num3.filter((item) => item % 2 == 0); /// []
console.log(filterNums); 

let users = [
    {
        name: 'user1',
        age: 20,
        city: 'karachi'
    },
    {
        name: 'user2',
        age: 23,
        city: 'lahore'
    },
    {
        name: 'user3',
        age: 15,
        city: 'karachi'
    },
    {
        name: 'user4',
        age: 41,
        city: 'islamabad'
    },
    {
        name: 'user5',
        age: 30,
        city: 'karachi'
    }
]

let filterUsers = users.filter((user)=> {
    if(user.age < 25){
        return user
    }

})
console.log(filterUsers); 


let karachiUsers = users.filter((user)=> user.city == 'karachi' || user.city == 'islamabad');
console.log(karachiUsers)


let findUser = users.find((user)=> user.city == 'karachi')  /// 
console.log(findUser); 



let nums = [9,3,76,5,2,6,7,100];
let chars = ['c','d','a','b','w','e'];
chars.sort();
console.log(chars); 

// nums.sort((a,b)=> a - b);
// nums.sort((a,b)=> b - a);
console.log(nums); 


users.sort((a,b)=> a.age - b.age)
console.log(users); 


let a = 20


// ...   (spread opt)

let nums2 = [...nums, 200, ...chars, 'x','y','z'] 
console.log(nums2)



//// 1. students array 

//// failed stds
//// passed stds

/// sort both 

/// result no.of passing and failing, highest and the lowest


console.log(chars.includes('a'));

// let numbers = [1,2,3,4,5];

// let total = numbers.reduce((previousSum, num)=> previousSum * num , 0)
// console.log(total)



console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray(chars));







