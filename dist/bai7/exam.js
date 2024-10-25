class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        BankAccount.totalAccounts++; // Tăng số tài khoản khi tạo mới
    }
    // Static method to get total number of accounts
    static getTotalAccounts() {
        return BankAccount.totalAccounts;
    }
    // Instance method to deposit money
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    // Instance method to withdraw money
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
        }
        else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        }
    }
    // Instance method to get balance
    getBalance() {
        return this.balance;
    }
}
BankAccount.totalAccounts = 0; // Static member
// Tạo các tài khoản ngân hàng
const account1 = new BankAccount("12345", 1000);
const account2 = new BankAccount("67890", 500);
// Thực hiện các giao dịch
account1.deposit(200); // Output: Deposited 200. New balance: 1200
account1.withdraw(300); // Output: Withdrew 300. New balance: 900
account2.withdraw(600); // Output: Insufficient funds!
// Kiểm tra số lượng tài khoản đã tạo
console.log(`Total bank accounts: ${BankAccount.getTotalAccounts()}`); // Output: Total bank accounts: 2
//# sourceMappingURL=exam.js.map