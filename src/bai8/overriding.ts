class Calculator8 {
  // Khai báo phương thức nạp chồng
  add(a: number, b: number): number;
  add(a: number, b: number, c: number): number;
  add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
      return a + b + c; // Nếu có tham số thứ ba
    }
    return a + b; // Nếu chỉ có hai tham số
  }
}

const calc8 = new Calculator8();
console.log(calc8.add(2, 3)); // Kết quả: 5
console.log(calc8.add(2, 3, 4)); // Kết quả: 9
