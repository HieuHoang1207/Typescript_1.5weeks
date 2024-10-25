class Animal {
    constructor(sound) {
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class Dog extends Animal {
    constructor() {
        super("Bark");
    }
    bark() {
        this.makeSound(); // Có thể gọi phương thức protected từ lớp con
    }
}
const dog = new Dog();
dog.bark(); // In ra 'Bark'
// dog.makeSound(); // Lỗi, vì makeSound là protected và không thể gọi từ ngoài lớp
//# sourceMappingURL=protected.js.map