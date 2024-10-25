class BankAccount {
  private static totalAccounts: number = 0; // Static member
  private balance: number; // Instance member
  private accountNumber: string; // Instance member

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    BankAccount.totalAccounts++; // Tăng số tài khoản khi tạo mới
  }

  // Static method to get total number of accounts
  public static getTotalAccounts(): number {
    return BankAccount.totalAccounts;
  }

  // Instance method to deposit money
  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  // Instance method to withdraw money
  public withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    }
  }

  // Instance method to get balance
  public getBalance(): number {
    return this.balance;
  }
}

// Tạo các tài khoản ngân hàng
const account1 = new BankAccount("12345", 1000);
const account2 = new BankAccount("67890", 500);

// Thực hiện các giao dịch
account1.deposit(200); // Output: Deposited 200. New balance: 1200
account1.withdraw(300); // Output: Withdrew 300. New balance: 900
account2.withdraw(600); // Output: Insufficient funds!

// Kiểm tra số lượng tài khoản đã tạo
console.log(`Total bank accounts: ${BankAccount.getTotalAccounts()}`); // Output: Total bank accounts: 2
