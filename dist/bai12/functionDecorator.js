function logger(func) {
    return function (...args) {
        console.log(`Arguments: ${args}`);
        const result = func(...args);
        console.log(`Result: ${result}`);
        return result;
    };
}
function add(a, b) {
    return a + b;
}
const decoratedAdd = logger(add);
decoratedAdd(2, 3); // Log: Arguments: [2, 3], Result: 5
//# sourceMappingURL=functionDecorator.js.map