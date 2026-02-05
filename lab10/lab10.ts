interface User {
  readonly id: number;
  name: string;
  age?: number;
}

const user: User = { id: 1, name: "Yashwanth", age: 20 };
console.log(user);

interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

console.log(calc.add(2, 3));
console.log(calc.multiply(2, 3));