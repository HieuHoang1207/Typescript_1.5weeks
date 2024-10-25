var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Role(allowedRole) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const userRole = args[0]; // Giả sử role của user là tham số đầu tiên
            if (userRole !== allowedRole) {
                throw new Error(`User does not have permission to perform this action`);
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
class AdminService {
    deleteUser(userRole, userId) {
        console.log(`User ${userId} is deleted`);
    }
}
__decorate([
    Role("admin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], AdminService.prototype, "deleteUser", null);
const adminService = new AdminService();
adminService.deleteUser("admin", 1); // OK
adminService.deleteUser("user", 1); // Throw Error: User does not have permission
//# sourceMappingURL=Authentication.js.map