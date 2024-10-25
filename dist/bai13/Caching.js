var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function CacheResult(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const cache = new Map();
    descriptor.value = function (...args) {
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
    fibonacci(n) {
        if (n <= 1)
            return n;
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
}
__decorate([
    CacheResult,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], FibonacciService.prototype, "fibonacci", null);
const fibService = new FibonacciService();
console.log(fibService.fibonacci(10)); // Tính toán và cache kết quả
console.log(fibService.fibonacci(10)); // Lấy từ cache
//# sourceMappingURL=Caching.js.map