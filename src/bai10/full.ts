// Function overloading
function format(input: string): string;
function format(input: number): string;
function format(input: any): string {
  if (typeof input === "string") {
    return `String: ${input}`;
  } else if (typeof input === "number") {
    return `Number: ${input}`;
  }
  return `Unknown type`;
}

// Gọi function
console.log(format("Hello")); // Output: String: Hello
console.log(format(123)); // Output: Number: 123
