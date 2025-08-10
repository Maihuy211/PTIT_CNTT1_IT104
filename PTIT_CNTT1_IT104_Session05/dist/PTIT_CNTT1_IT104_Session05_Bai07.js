"use strict";
class Book2 {
    constructor(id, title, author) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
}
class Library2 {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach((book) => {
            console.log(`
                id: ${book.getId()}
                title: ${book.getTitle()}
                author: ${book.getAuthor()}
            `);
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        let book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
        }
        else {
            console.log("ko tìm thấy id");
        }
    }
}
let books2 = [
    new Book2(1, "Doraemon", "Fujiko F. Fujio"),
    new Book2(2, "Conan", "Gosho Aoyama"),
    new Book2(3, "Dragon Ball", "Akira Toriyama"),
    new Book2(4, "One Piece", "Eiichiro Oda"),
    new Book2(5, "Sherlock Holmes", "Arthur Conan Doyle")
];
const library2 = new Library2();
books2.forEach(book => library2.addBook(book));
library2.showBooks();
library2.updateBookById(3, "Dragon Ball Super", "Akira Toriyama & Toyotarou");
console.log("Sau khi cập nhật:");
library2.showBooks();
