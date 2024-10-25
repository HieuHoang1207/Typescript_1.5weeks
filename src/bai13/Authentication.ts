function Role(allowedRole: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
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
  @Role("admin")
  deleteUser(userRole: string, userId: number) {
    console.log(`User ${userId} is deleted`);
  }
}

const adminService = new AdminService();
adminService.deleteUser("admin", 1); // OK
adminService.deleteUser("user", 1); // Throw Error: User does not have permission
