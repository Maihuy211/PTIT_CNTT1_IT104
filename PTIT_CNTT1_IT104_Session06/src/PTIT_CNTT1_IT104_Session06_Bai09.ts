class Book {
    id: number;
    title: string;
    author: string;
    stock: number;
    status: string;
    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id: number;
    name: string;
    contact: string;
    lendedBooks: LendedBook[];
    status: string;
    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
}
class LendedBook {
    memberId: number;
    bookId: number;
    dueDate: Date;
    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books: Book[];
    members: Member[];
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book: Book): void {
        this.books.push(book);
    }
    showBooks(): void {
        this.books.forEach((book) => {
            console.log(`ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Số lượng: ${book.stock}, Tình trạng: ${book.status}`);
        });
    }
    registerMember(newId: number, name: string, contact: string): void {
        const newMember = new Member(newId, name, contact, "Hoạt động");
        this.members.push(newMember);
    }
    blockMember(memberId: number, block: boolean): void {
        const member = this.members.find(m => m.id === memberId);
        if (member) {
            member.status = block ? "Bị khóa" : "Hoạt động";
        } else {
            console.log("Khong tim thay thanh vien");
        }
    }
    showMembers(): void {
        this.members.forEach((member) => {
            console.log(`ID: ${member.id}, Tên: ${member.name}, Liên hệ: ${member.contact}, Trạng thái: ${member.status}`);
        });
    }
}

const library = new Library();

const newBooks: Book[] = [
    new Book(1, "Doraemon", "Fujiko F. Fujio", 7, "Đang có sẵn"),
    new Book(2, "Conan", "Gosho Aoyama", 4, "Đang có sẵn"),
    new Book(3, "Dragon Ball", "Akira Toriyama", 6, "Đang có sẵn"),
];
newBooks.forEach(book => library.addBook(book));
console.log("dang sach sach")
library.showBooks();

console.log("dang ki thanh vien");
library.registerMember(4, "huy", "0987654321");
library.showMembers();

console.log("block thanh vien");
library.blockMember(4, true); 
library.showMembers();

