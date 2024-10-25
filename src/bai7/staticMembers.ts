class Counter {
  static count: number = 0; // Static member

  constructor() {
    Counter.count++; // Tăng giá trị count mỗi khi tạo một instance mới
  }

  static getCount(): number {
    // Static method
    return Counter.count;
  }
}

// Tạo các đối tượng Counter
const counter1 = new Counter();
console.log(Counter.getCount());
const counter2 = new Counter();

console.log(Counter.getCount()); // Output: 2
