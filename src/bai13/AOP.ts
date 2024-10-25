function Transaction(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log("Transaction started");
    const result = originalMethod.apply(this, args);
    console.log("Transaction ended");
    return result;
  };
  return descriptor;
}

class OrderService {
  @Transaction
  placeOrder(orderId: number) {
    console.log(`Placing order: ${orderId}`);
  }
}

const orderService = new OrderService();
orderService.placeOrder(123); // Log thông tin transaction
