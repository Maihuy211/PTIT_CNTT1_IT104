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
class CheckingAccount extends Account {
    constructor(accountNumber, balance, history, status, overdraftLimit) {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(money) {
        if (money <= this.balance + this.overdraftLimit) {
            this.balance -= money;
            this.history.push(`Đã rút ${money}`);
        }
        else {
            this.history.push("Vượt quá hạn mức");
        }
    }
}
const acc = new CheckingAccount("987654", 10000, [], true, 2000);
acc.deposit(500);
acc.withdraw(300);
acc.withdraw(2000);
acc.withdraw(20000);
acc.showHistory();
