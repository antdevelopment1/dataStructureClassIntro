class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.collection = [];
    }

    static notifyStudents(...students) {
        // Do something
        return 'Awesome'

    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

    getYear() {
        return `Your full name is ${this.firstName} ${this.lastName} and I was born in ${this.year}.`;
    }
    addNumber(number) {
        if (number) {
            this.collection.push(number);
        }
        return this.collection;
    }
    addTogether() {
        let sum = this.collection.reduce((a,b) => {
            return a + b;
        })
        return sum;
    }
    getAverage() {
        let sum = this.collection.reduce((a, b) => {
            return a + b;
        })
        return sum / this.collection.length;
    }
 }

let firstStudent = new Student('April', 'Copes', '1991');
let secondStudent = new Student('Lauren', 'Wilkerson', '1990');

console.log(firstStudent.fullName());
console.log(firstStudent.getYear());
secondStudent.addNumber(15)
secondStudent.addNumber(22)
secondStudent.addNumber(44)
console.log(secondStudent.addNumber(6))
console.log(firstStudent.addNumber())
console.log(secondStudent.addTogether())
console.log(secondStudent.getAverage())
console.log(Student.notifyStudents())