class Person1 {
    constructor(age) {
        this.age = age;
    }
    showAge() {
        console.log(`I am ${this.age} years old`);
    }
}
const person1 = new Person1(30);
person1.showAge(); // Có thể gọi phương thức public, in ra 'I am 30 years old'
// sconsole.log(person.age); // Lỗi, vì age là private và không thể truy cập từ ngoài lớp
//# sourceMappingURL=private.js.map