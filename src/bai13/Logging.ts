function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(
      `${propertyKey} was called with arguments: ${JSON.stringify(args)}`
    );
    const result = originalMethod.apply(this, args);
    console.log(`${propertyKey} returned: ${JSON.stringify(result)}`);
    return result;
  };
  return descriptor;
}

class Calculator13 {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const calc13 = new Calculator13();
calc13.add(2, 3); // Log hiển thị tham số và kết quả của phương thức add
