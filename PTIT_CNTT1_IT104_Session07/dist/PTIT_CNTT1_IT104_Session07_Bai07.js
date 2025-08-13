"use strict";
class Account {
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    deposit(money) {
        this.balance += money;
        this.history.push(`Đã nạp ${money}`);
    }
    withdraw(money) {
        this.balance -= money;
        this.history.push(`Đã rút ${money}`);
    }
    showHistory() {
        this.history.forEach(item => console.log(item));
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, history, status, interestRate) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
    withdraw(money) {
        if (this.balance > money) {
            this.balance -= money;
            this.history.push(`Đã rút ${money}`);
        }
        else {
            this.history.push("Tài khoản đã hết tiền");
        }
    }
}
const acc = new SavingAccount("987654", 1000, [], true, 1);
acc.deposit(500);
acc.withdraw(300);
acc.withdraw(2000);
acc.showHistory();
