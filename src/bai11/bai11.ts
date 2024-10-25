// Abstraction: Lớp trừu tượng Car11 đại diện cho các phương tiện có tính năng chung
abstract class Car11 {
  protected brand: string;
  protected model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  // Phương thức trừu tượng mà các lớp con sẽ triển khai chi tiết
  abstract startEngine(): void;

  // Phương thức không trừu tượng (có thể dùng chung cho mọi lớp con)
  public displayInfo(): void {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

// Encapsulation: Đóng gói thông tin User và chỉ truy cập qua getter/setter
class User {
  private name11: string;
  private age11: number;

  constructor(name11: string, age11: number) {
    this.name11 = name11;
    this.age11 = age11;
  }

  // Getter cho name11
  public getName11(): string {
    return this.name11;
  }

  // Setter cho name11
  public setName11(name11: string): void {
    this.name11 = name11;
  }

  // Getter cho age11
  public getAge11(): number {
    return this.age11;
  }

  // Setter cho age11
  public setAge11(age11: number): void {
    this.age11 = age11;
  }

  public displayUserInfo(): void {
    console.log(`User Name11: ${this.name11}, Age11: ${this.age11}`);
  }
}

// Inheritance: Lớp con ElectricCar11 kế thừa từ lớp Car11
class ElectricCar11 extends Car11 {
  private batteryCapacity: number; // Dung lượng pin của xe điện

  constructor(brand: string, model: string, batteryCapacity: number) {
    super(brand, model);
    this.batteryCapacity = batteryCapacity;
  }

  // Polymorphism: Ghi đè phương thức startEngine để triển khai cho xe điện
  startEngine(): void {
    console.log(`Starting electric engine of ${this.brand} ${this.model}...`);
  }

  // Phương thức riêng của ElectricCar11
  public displayBattery(): void {
    console.log(`Battery Capacity: ${this.batteryCapacity} kWh`);
  }
}

// Inheritance: Lớp con GasolineCar11 kế thừa từ lớp Car11
class GasolineCar11 extends Car11 {
  private fuelCapacity: number; // Dung tích nhiên liệu của xe xăng

  constructor(brand: string, model: string, fuelCapacity: number) {
    super(brand, model);
    this.fuelCapacity = fuelCapacity;
  }

  // Polymorphism: Ghi đè phương thức startEngine cho xe xăng
  startEngine(): void {
    console.log(`Starting gasoline engine of ${this.brand} ${this.model}...`);
  }

  // Phương thức riêng của GasolineCar11
  public displayFuelCapacity(): void {
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
