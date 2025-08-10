class Book {
    private title: string;
    private author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }
}

class Library {
    private books: Book[] = [];
    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
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
