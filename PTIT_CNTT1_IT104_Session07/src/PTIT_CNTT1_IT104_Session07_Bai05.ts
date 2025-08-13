// type Status = "active" | "banned"
// class Account {
//     id: number
//     userName: string
//     password: string
//     isLogin: boolean
//     role: string
//     constructor(id: number, userName: string, password: string, isLogin: boolean, role: string) {
//         this.id = id;
//         this.userName = userName;
//         this.password = password;
//         this.isLogin = isLogin;
//         this.role = role;
//     }
//     login(): void {
//         if (!this.isLogin) {
//             this.isLogin = true;
//             console.log("Đã đăng nhập");
//         } else {
//             console.log("Đã đăng nhập rồi");
//         }
//     }
//     logout() {
//         if (this.isLogin) {
//             console.log("Đăng xuất thành công");
//             this.isLogin = false;
//         }
//     }
// }
// class userAcc extends Account {
//     status: Status;
//     constructor(id: number, userName: string, password: string, isLogin: boolean, role: string, status: Status) {
//         super(id, userName, password, isLogin, role)
//         this.status = status
//     }
//     login(): void {
//         if (this.status === "active") {
//             if (!this.isLogin) {
//                 this.isLogin = true;
//                 console.log("Đã đăng nhập");
//             } else {
//                 console.log("Đã đăng nhập rồi");
//             }
//         }else{
//             console.log("Tài khoản đã bị khoá"); 
//         }
//     }
// }
// const user1 = new userAcc(1, "huy", "123456", false, "member", "active");
// user1.login();  
// user1.logout(); 
