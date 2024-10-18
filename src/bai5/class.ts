class Warehouse {
  private _name: string;
  private _storage: string;
  private _address: string;
  owner: string;

  constructor(name: string, storage: string, address: string, owner: string) {
    this._name = name;
    this._storage = storage;
    this._address = address;
    this.owner = owner;
  }

  // Getter for name
  get name(): string {
    return this._name;
  }

  // Setter for name
  set name(value: string) {
    if (value.length > 0) {
      this._name = value;
    } else {
      console.log("Name cannot be empty");
    }
  }

  // Getter for storage
  get storage(): string {
    return this._storage;
  }

  // Setter for storage
  set storage(value: string) {
    if (value.length > 0) {
      this._storage = value;
    } else {
      console.log("Storage cannot be empty");
    }
  }

  // Getter for address
  get address(): string {
    return this._address;
  }

  // Setter for address
  set address(value: string) {
    if (value.length > 0) {
      this._address = value;
    } else {
      console.log("Address cannot be empty");
    }
  }

  displayInfo(): void {
    console.log(`Warehouse Information:
      Name: ${this._name}
      Storage: ${this._storage}
      Address: ${this._address}
      Owner: ${this.owner}`);
  }
}

// Khởi tạo đối tượng thuộc lớp Warehouse
const warehouse1 = new Warehouse(
  "Main Warehouse",
  "5000m²",
  "123 Main St",
  "John Doe"
);

// Truy xuất các thuộc tính
console.log("Name:", warehouse1.name); // Output: Name: Main Warehouse
console.log("Storage:", warehouse1.storage); // Output: Storage: 5000m²
console.log("Address:", warehouse1.address, "\n"); // Output: Address: 123 Main St

// Thay đổi các thuộc tính
warehouse1.name = "Secondary Warehouse";
warehouse1.storage = "3000m²";
warehouse1.address = "456 Secondary St";

// Truy xuất lại để kiểm tra thay đổi
console.log("Updated Name:", warehouse1.name); // Output: Updated Name: Secondary Warehouse
console.log("Updated Storage:", warehouse1.storage); // Output: Updated Storage: 3000m²
console.log("Updated Address:", warehouse1.address, "\n"); // Output: Updated Address: 456 Secondary St

warehouse1.displayInfo();
