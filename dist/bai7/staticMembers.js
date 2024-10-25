class Counter {
    constructor() {
        Counter.count++; // Tăng giá trị count mỗi khi tạo một instance mới
    }
    static getCount() {
        // Static method
        return Counter.count;
    }
}
Counter.count = 0; // Static member
// Tạo các đối tượng Counter
const counter1 = new Counter();
console.log(Counter.getCount());
const counter2 = new Counter();
console.log(Counter.getCount()); // Output: 2
//# sourceMappingURL=staticMembers.js.map