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
        age: 20
    },
    {
        name: 'user2',
        age: 23
    },
    {
        name: 'user3',
        age: 28
    }
]

let filterUsers = users.filter((user)=> {
    if(user.age < 25){
        return user
    }

})
console.log(filterUsers); 




