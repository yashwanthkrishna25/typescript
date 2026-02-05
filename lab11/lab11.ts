interface Student {
  name: string;
  marks: number;
}

const students: Student[] = [
  { name: "A", marks: 80 },
  { name: "B", marks: 75 },
  { name: "C", marks: 90 }
];

students.forEach(s =>
  console.log(s.name, s.marks)
);