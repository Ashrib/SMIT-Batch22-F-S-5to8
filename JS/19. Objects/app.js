
/// key-value pair
var person1 = {  /// JSON
    username: 'person 1',
    email: 'person1@abc.com',
    age: 20,
    contacts: ['03111111', '03222222'],
    address: {
        street: 'A13',
        house: 'R-117',
        city: 'karachi',
    },
};


var person2 = {
    username: 'person 2',
    email: 'person2@abc.com',
    age: 22,
    contacts: ['03111111', '03222222'],
};

console.log(person1);

person1.id = 3354547;

console.log(person1);



//// suppose get users from db


var users = [   //array of objects
    {
    username: 'person 2',
    email: 'person2@abc.com',
    age: 22,
    contacts: ['03111111', '03222222'],
},
    {
    username: 'person 2',
    email: 'person2@abc.com',
    age: 22,
    contacts: ['03111111', '03222222'],
},
   {
    username: 'person 2',
    email: 'person2@abc.com',
    age: 22,
    contacts: ['03111111', '03222222'],
},
]

console.log(users[0].age);
console.log(users[1]);

/// delete specific property of an object
delete person1.email

console.log(person1);



var checkProperty = "age" in person1;

console.log(checkProperty);

console.log(typeof person1);

/// primitive
var std1 = {
    name: "ali",
    age: 20,
    section: 'A',
    marks: [78,99,58,77,80],
    calPer: function () {  // object method
        var obtMarks = 0;
        for(var i=0; i<this.marks.length; i++){
            obtMarks += this.marks[i];
        }
        return ((obtMarks/500) *100);
    },
};


var std1Percentage = std1.calPer();
console.log(std1Percentage)
console.log(std1)
