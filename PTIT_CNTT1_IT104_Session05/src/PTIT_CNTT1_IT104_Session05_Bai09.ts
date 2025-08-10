class Book4 {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getYear(): number {
        return this.year;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setAuthor(author: string): void {
        this.author = author;
    }

    setYear(year: number): void {
        this.year = year;
    }
}

class Library4 {
    private books: Book4[] = [];

    addBook(book: Book4): void {
        this.books.push(book);
    }

    showBooks(): void {
        this.books.forEach((book) => {
            console.log(`
                id: ${book.getId()}
                title: ${book.getTitle()}
                author: ${book.getAuthor()}
                year: ${book.getYear()}
            `);
        });
    }

    deleteBookById(id: number): void {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);
        if (this.books.length < initialLength) {
            console.log("Đã xoá");
        } else {
            console.log("ko tim thay id");
        }
    }

    updateBookById(id: number, newTitle: string, newAuthor: string ,newYear: number): void {
        let book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
        } else {
            console.log("ko tìm thấy id");
        }
    }
}
let books4 = [
    new Book4(1,"Doraemon", "Fujiko F. Fujio", 1970),
    new Book4(2,"Conan", "Gosho Aoyama", 1994),
    new Book4(3,"Dragon Ball", "Akira Toriyama", 1984),
    new Book4(4,"One Piece", "Eiichiro Oda", 1997),
    new Book4(5,"Sherlock Holmes", "Arthur Conan Doyle", 1887)
];

const library4 = new Library4();
books4.forEach(book => library4.addBook(book));

library4.showBooks();

console.log("xoa id 3")
library4.deleteBookById(3);
library4.showBooks();

console.log("sua id 4")
library4.updateBookById(4, "One Piece - Updated", "Eiichiro Oda", 2000);
library4.showBooks();
