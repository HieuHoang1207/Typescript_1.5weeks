import "reflect-metadata";

function Required(target: any, propertyKey: string, parameterIndex: number) {
  const existingRequiredParameters: number[] =
    Reflect.getOwnMetadata("requiredParameters", target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    "requiredParameters",
    existingRequiredParameters,
    target,
    propertyKey
  );
}

function Validate(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const requiredParameters: number[] = Reflect.getOwnMetadata(
      "requiredParameters",
      target,
      propertyKey
    );
    if (requiredParameters) {
      requiredParameters.forEach((paramIndex) => {
        if (args[paramIndex] === undefined || args[paramIndex] === null) {
          throw new Error(
            `Missing required argument at position ${paramIndex}`
          );
        }
      });
    }
    return originalMethod.apply(this, args);
  };
}

class UserService {
  @Validate
  createUser(@Required name: string, age?: number) {
    console.log(`Creating user: ${name}, Age: ${age}`);
  }
}

const service = new UserService();
service.createUser("John"); // OK
// service.createUser(); // Throw Error
