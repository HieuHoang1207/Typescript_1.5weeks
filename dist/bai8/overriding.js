class Calculator8 {
    add(a, b, c) {
        if (c !== undefined) {
            return a + b + c; // Nếu có tham số thứ ba
        }
        return a + b; // Nếu chỉ có hai tham số
    }
}
const calc8 = new Calculator8();
console.log(calc8.add(2, 3)); // Kết quả: 5
console.log(calc8.add(2, 3, 4)); // Kết quả: 9
//# sourceMappingURL=overriding.js.map