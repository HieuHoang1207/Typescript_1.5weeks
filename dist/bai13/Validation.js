"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function Required(target, propertyKey, parameterIndex) {
    const existingRequiredParameters = Reflect.getOwnMetadata("requiredParameters", target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata("requiredParameters", existingRequiredParameters, target, propertyKey);
}
function Validate(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const requiredParameters = Reflect.getOwnMetadata("requiredParameters", target, propertyKey);
        if (requiredParameters) {
            requiredParameters.forEach((paramIndex) => {
                if (args[paramIndex] === undefined || args[paramIndex] === null) {
                    throw new Error(`Missing required argument at position ${paramIndex}`);
                }
            });
        }
        return originalMethod.apply(this, args);
    };
}
class UserService {
    createUser(name, age) {
        console.log(`Creating user: ${name}, Age: ${age}`);
    }
}
__decorate([
    Validate,
    __param(0, Required),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "createUser", null);
const service = new UserService();
service.createUser("John"); // OK
// service.createUser(); // Throw Error
//# sourceMappingURL=Validation.js.map