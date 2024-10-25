function combine(input1: string, input2: string): string;
function combine(input1: number, input2: number): number;
function combine(input1: any, input2: any): any {
  return input1 + input2;
}

// Gọi với chuỗi
let combinedString = combine("Hello, ", "World!"); // Output: Hello, World!

// Gọi với số
let combinedNumber = combine(10, 20); // Output: 30
