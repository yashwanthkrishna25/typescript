
function greetUser(name: string, title?: string): void {
  if (title) {
    console.log(`Hello, ${title} ${name}!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greetUser("Yashwanth");

const addNumbers = (a: number, b: number): number => a + b;

console.log("Age:", addNumbers(1, 19));
