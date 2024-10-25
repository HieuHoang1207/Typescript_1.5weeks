function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;
  console.log(originalMethod);
  descriptor.value = function (...args: any[]) {
    console.log(descriptor.value);
    console.log(`Method: ${propertyKey}, Arguments: ${args}`);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @logMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // Log: Method: add, Arguments: [2, 3]
