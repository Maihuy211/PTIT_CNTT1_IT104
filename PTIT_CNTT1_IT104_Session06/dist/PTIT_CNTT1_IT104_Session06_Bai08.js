"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach((book) => {
            console.log(`ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Số lượng: ${book.stock}, Tình trạng: ${book.status}`);
        });
    }
}
const library = new Library();
const newBooks = [
    new Book(4, "Doraemon", "Fujiko F. Fujio", 7, "Đang có sẵn"),
    new Book(5, "Conan", "Gosho Aoyama", 4, "Đang có sẵn"),
    new Book(6, "Dragon Ball", "Akira Toriyama", 6, "Đang có sẵn"),
];
newBooks.forEach(book => {
    library.addBook(book);
});
library.showBooks();
