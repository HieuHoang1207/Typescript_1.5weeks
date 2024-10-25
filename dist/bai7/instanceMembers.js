class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        // Instance method
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
// Tạo các đối tượng Person
const person12 = new Person2("Alice", 30);
const person22 = new Person2("Bob", 25);
console.log(person12.greet()); // Output: Hello, my name is Alice and I am 30 years old.
console.log(person22.greet()); // Output: Hello, my name is Bob and I am 25 years old.
//# sourceMappingURL=instanceMembers.js.map