class Animal1 {
    sound() {
        console.log("Animal makes a sound");
    }
}
class Dog1 extends Animal1 {
    // Ghi đè phương thức sound
    sound() {
        console.log("Dog barks");
    }
}
const myDog = new Dog1();
myDog.sound(); // Kết quả: Dog barks
//# sourceMappingURL=overloading.js.map