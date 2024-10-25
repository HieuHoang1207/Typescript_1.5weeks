interface User3 {
  readonly id: number;
  name: string; // Tên của người dùng
  age: number; // Tuổi của người dùng
  address: string; // Địa chỉ của người dùng
  email: string; // Email của người dùng
  phone: string; // Số điện thoại của người dùng
  isActive?: boolean; // Thuộc tính tùy chọn, xác định người dùng có đang hoạt động hay không
  createdAt?: Date; // Ngày tạo (tùy chọn)
}
const user3: User3 = {
  id: 1,
  name: "John Doe",
  age: 30,
  address: "123 Main St",
  email: "john@example.com",
  phone: "123-456-7890",
  isActive: true,
  createdAt: new Date(),
};
console.log(user3);

interface User2 extends User3 {
  role: string;
  pro: boolean;
}

const user31: User2 = {
  id: 2,
  name: "John Doe",
  age: 30,
  address: "123 Main St",
  email: "john@example.com",
  phone: "123-456-7890",
  role: "customer",
  pro: false,
};
console.log(user31);
