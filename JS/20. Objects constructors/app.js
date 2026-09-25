/// constructor
function Student(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
}

Student.prototype.calPercentage = function () {
        var obtMarks = 0;
        for(var i=0; i < this.marks.length; i++){
            obtMarks += this.marks[i];
        }
        return ((obtMarks/500) *100);
}

Student.prototype.cancellable = true

var std1 = new Student('ali', 20, [70,60,80,90,77]); //{}
var std2 = new Student('usman',30,[74,99,70,80,76]);

std2.cancellable = false;
console.log(std1)
console.log(std2)
console.log(std2.calPercentage())





///









