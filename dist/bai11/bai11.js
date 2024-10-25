// Abstraction: Lớp trừu tượng Car11 đại diện cho các phương tiện có tính năng chung
class Car11 {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    // Phương thức không trừu tượng (có thể dùng chung cho mọi lớp con)
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
}
// Encapsulation: Đóng gói thông tin User và chỉ truy cập qua getter/setter
class User {
    constructor(name11, age11) {
        this.name11 = name11;
        this.age11 = age11;
    }
    // Getter cho name11
    getName11() {
        return this.name11;
    }
    // Setter cho name11
    setName11(name11) {
        this.name11 = name11;
    }
    // Getter cho age11
    getAge11() {
        return this.age11;
    }
    // Setter cho age11
    setAge11(age11) {
        this.age11 = age11;
    }
    displayUserInfo() {
        console.log(`User Name11: ${this.name11}, Age11: ${this.age11}`);
    }
}
// Inheritance: Lớp con ElectricCar11 kế thừa từ lớp Car11
class ElectricCar11 extends Car11 {
    constructor(brand, model, batteryCapacity) {
        super(brand, model);
        this.batteryCapacity = batteryCapacity;
    }
    // Polymorphism: Ghi đè phương thức startEngine để triển khai cho xe điện
    startEngine() {
        console.log(`Starting electric engine of ${this.brand} ${this.model}...`);
    }
    // Phương thức riêng của ElectricCar11
    displayBattery() {
        console.log(`Battery Capacity: ${this.batteryCapacity} kWh`);
    }
}
// Inheritance: Lớp con GasolineCar11 kế thừa từ lớp Car11
class GasolineCar11 extends Car11 {
    constructor(brand, model, fuelCapacity) {
        super(brand, model);
        this.fuelCapacity = fuelCapacity;
    }
    // Polymorphism: Ghi đè phương thức startEngine cho xe xăng
    startEngine() {
        console.log(`Starting gasoline engine of ${this.brand} ${this.model}...`);
    }
    // Phương thức riêng của GasolineCar11
    displayFuelCapacity() {
        console.log(`Fuel Capacity: ${this.fuelCapacity} liters`);
    }
}
// Sử dụng hệ thống Car11 và User
const user11 = new User("Alice", 28);
user11.displayUserInfo(); // Output: User Name11: Alice, Age11: 28
const electricCar11 = new ElectricCar11("Tesla", "Model S", 100);
electricCar11.displayInfo(); // Output: Brand: Tesla, Model: Model S
electricCar11.startEngine(); // Output: Starting electric engine of Tesla Model S...
electricCar11.displayBattery(); // Output: Battery Capacity: 100 kWh
const gasolineCar11 = new GasolineCar11("Toyota", "Camry", 50);
gasolineCar11.displayInfo(); // Output: Brand: Toyota, Model: Camry
gasolineCar11.startEngine(); // Output: Starting gasoline engine of Toyota Camry...
gasolineCar11.displayFuelCapacity(); // Output: Fuel Capacity: 50 liters
//# sourceMappingURL=bai11.js.map