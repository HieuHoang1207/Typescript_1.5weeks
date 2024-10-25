class Person5 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const person = new Person5("John");
console.log(person.name); // Truy cập từ ngoài lớp, in ra 'John'
person.greet(); // Gọi phương thức công khai, in ra 'Hello, my name is John'
//# sourceMappingURL=public.js.map