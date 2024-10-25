class Car {
  model: string; // Mặc định là 'public'

  constructor(model: string) {
    this.model = model;
  }

  drive() {
    // Mặc định là 'public'
    console.log(`Driving a ${this.model}`);
  }
}

const car = new Car("Toyota");
console.log(car.model); // Truy cập được, vì 'model' là public mặc định
car.drive(); // Gọi phương thức, vì 'drive' là public mặc định
