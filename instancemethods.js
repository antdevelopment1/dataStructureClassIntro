class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

    getYear() {
        return `Your full name is ${this.firstName} ${this.lastName} and I was born in ${this.year}.`;
    }
}

let firstStudent = new Student('April', 'Copes', '1991');
let secondStudent = new Student('Lauren', 'Wilkerson', '1990');

console.log(firstStudent.fullName());
console.log(firstStudent.getYear());