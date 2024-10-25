class Person5 {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person5("John");
console.log(person.name); // Truy cập từ ngoài lớp, in ra 'John'
person.greet(); // Gọi phương thức công khai, in ra 'Hello, my name is John'
