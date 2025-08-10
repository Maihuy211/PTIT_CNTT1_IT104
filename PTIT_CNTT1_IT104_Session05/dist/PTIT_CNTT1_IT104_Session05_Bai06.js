"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach((book) => {
            console.log(`
                title: ${book.getTitle()}
                author: ${book.getAuthor()}
            `);
        });
    }
}
let books = [
    new Book("Doraemon", "Fujiko F. Fujio"),
    new Book("Conan", "Gosho Aoyama"),
    new Book("Dragon Ball", "Akira Toriyama"),
    new Book("One Piece", "Eiichiro Oda"),
    new Book("Sherlock Holmes", "Arthur Conan Doyle")
];
let library = new Library();
books.forEach(book => library.addBook(book));
library.showBooks();
