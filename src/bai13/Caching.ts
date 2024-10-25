function CacheResult(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const cache = new Map();

  descriptor.value = function (...args: any[]) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      const result = originalMethod.apply(this, args);
      cache.set(key, result);
    }
    return cache.get(key);
  };

  return descriptor;
}

class FibonacciService {
  @CacheResult
  fibonacci(n: number): number {
    if (n <= 1) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}

const fibService = new FibonacciService();
console.log(fibService.fibonacci(10)); // Tính toán và cache kết quả
console.log(fibService.fibonacci(10)); // Lấy từ cache
