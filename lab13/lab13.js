var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.showRollNo = function () {
        console.log(this.rollNo);
    };
    return Student;
}());
var s1 = new Student("Yashwanth", 57);
s1.showRollNo();
console.log(s1.name);
