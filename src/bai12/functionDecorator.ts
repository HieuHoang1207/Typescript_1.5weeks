function logger(func: Function) {
  return function (...args: any[]) {
    console.log(`Arguments: ${args}`);
    const result = func(...args);
    console.log(`Result: ${result}`);
    return result;
  };
}

function add(a: number, b: number): number {
  return a + b;
}

const decoratedAdd = logger(add);
decoratedAdd(2, 3); // Log: Arguments: [2, 3], Result: 5
