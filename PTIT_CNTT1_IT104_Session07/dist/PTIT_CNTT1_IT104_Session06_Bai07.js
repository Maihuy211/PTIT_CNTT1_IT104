"use strict";
// class Account {
//     public accountNumber: string;
//     protected balance: number;
//     protected history: string[];
//     protected status: boolean;
//     constructor(accountNumber: string, balance: number, history: string[], status: boolean) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//         this.history = history;
//         this.status = status;
//     }
//     deposit(money : number){
//         this.balance += money
//         this.history.push(`Đã nạp ${money}`);
//     }
//     withdraw(money : number){
//         this.balance -= money
//         this.history.push(`Đã rút ${money}`);
//     } 
//     showHistory(){
//         this.history.forEach(item => console.log(item));
//     }
// }
// class SavingAccount extends Account {
//     private interestRate: number;
//     constructor(accountNumber: string, balance: number, history: string[], status: boolean, interestRate: number) {
//         super(accountNumber, balance, history, status);
//         this.interestRate = interestRate;
//     }
//     withdraw(money: number){
//         if(this.balance > money){
//             this.balance -= money;
//             this.history.push(`Đã rút ${money}`);
//         } else {
//             this.history.push("Tài khoản đã hết tiền");
//         }
//     }
// }
// const acc = new SavingAccount("987654", 1000, [], true, 1);
// acc.deposit(500);
// acc.withdraw(300);
// acc.withdraw(2000);
// acc.showHistory();
