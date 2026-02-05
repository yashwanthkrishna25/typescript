class Student {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  makeSound() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Tommy", "Labrador");
dog.makeSound();
console.log(dog.name);
console.log(dog.breed); 
