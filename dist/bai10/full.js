function format(input) {
    if (typeof input === "string") {
        return `String: ${input}`;
    }
    else if (typeof input === "number") {
        return `Number: ${input}`;
    }
    return `Unknown type`;
}
// Gọi function
console.log(format("Hello")); // Output: String: Hello
console.log(format(123)); // Output: Number: 123
//# sourceMappingURL=full.js.map