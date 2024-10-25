function logClass12<T extends { new (...args: any[]): {} }>(target: T) {
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log(`Instance created with args: ${args}`);
    }
  };
}

@logClass12
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p = new Person("John", 25); // Log: Instance created with args: [John, 25]
