"use strict";
class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        if (!this.isLogin) {
            this.isLogin = true;
            console.log("Đã đăng nhập");
        }
        else {
            console.log("Đã đăng nhập rồi");
        }
    }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            if (!this.isLogin) {
                this.isLogin = true;
                console.log("Đã đăng nhập");
            }
            else {
                console.log("Đã đăng nhập rồi");
            }
        }
        else {
            console.log("Tài khoản đã bị khoá");
        }
    }
}
class adminAcc extends Account {
    banUser(id, users) {
        const user = users.find(u => u.id === id);
        if (user) {
            user.status = "banned";
            console.log(`Người dùng ${user.userName} đã bị khóa`);
        }
        else {
            console.log("Không tìm thấy người dùng");
        }
    }
}
const user = [
    new userAcc(1, "huy", "123456", false, "member", "active")
];
user[0].login();
user[0].logout();
const admin = new adminAcc(12, "admin", "123456", false, "admin");
admin.banUser(1, user);
