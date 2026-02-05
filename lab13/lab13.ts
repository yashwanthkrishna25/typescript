class Student {
  public name: string;
  private rollNo: number;

  constructor(name: string, rollNo: number) {
    this.name = name;
    this.rollNo = rollNo;
  }

  showRollNo() {
    console.log(this.rollNo);
  }
}

const s1 = new Student("Yashwanth", 57);
s1.showRollNo();
console.log(s1.name);
