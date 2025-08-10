"use strict";
class Book4 {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
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
    getYear() {
        return this.year;
    }
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
    setYear(year) {
        this.year = year;
    }
}
class Library4 {
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
                year: ${book.getYear()}
            `);
        });
    }
    deleteBookById(id) {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);
        if (this.books.length < initialLength) {
            console.log("Đã xoá");
        }
        else {
            console.log("ko tim thay id");
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        let book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
        }
        else {
            console.log("ko tìm thấy id");
        }
    }
}
let books4 = [
    new Book4(1, "Doraemon", "Fujiko F. Fujio", 1970),
    new Book4(2, "Conan", "Gosho Aoyama", 1994),
    new Book4(3, "Dragon Ball", "Akira Toriyama", 1984),
    new Book4(4, "One Piece", "Eiichiro Oda", 1997),
    new Book4(5, "Sherlock Holmes", "Arthur Conan Doyle", 1887)
];
const library4 = new Library4();
books4.forEach(book => library4.addBook(book));
library4.showBooks();
console.log("xoa id 3");
library4.deleteBookById(3);
library4.showBooks();
console.log("sua id 4");
library4.updateBookById(4, "One Piece - Updated", "Eiichiro Oda", 2000);
library4.showBooks();
