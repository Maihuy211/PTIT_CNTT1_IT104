class Book3 {
    private title: string;
    private author: string;
    private id: number;

    constructor(id: number, title: string, author: string) {
        this.title = title;
        this.author = author;
        this.id = id;
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

    setTitle(title: string): void {
        this.title = title;
    }

    setAuthor(author: string): void {
        this.author = author;
    }
}

class Library3 {
    private books: Book3[] = [];
    addBook(book: Book3): void {
        this.books.push(book);
    }

    showBooks(): void {
        this.books.forEach((book) => {
            console.log(`
                id: ${book.getId()}
                title: ${book.getTitle()}
                author: ${book.getAuthor()}
            `);
        });
    }
    searchBooksByTitle(keyword: string): void {
        const results = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );
        if (results.length > 0) {
            results.forEach(book => {
                console.log(`tim thay: ${book.getTitle()}`)
                console.log(`
                id: ${book.getId()}
                title: ${book.getTitle()}
                author: ${book.getAuthor()}
            `);
            });
        } else {
            console.log("ko tim thay ten sach");
        }
    }
}
let books3 = [
    new Book3(1,"Doraemon", "Fujiko F. Fujio"),
    new Book3(2,"Conan", "Gosho Aoyama"),
    new Book3(3,"Dragon Ball", "Akira Toriyama"),
    new Book3(4,"One Piece", "Eiichiro Oda"),
    new Book3(5,"Sherlock Holmes", "Arthur Conan Doyle")
];

const library3 = new Library3();
books3.forEach(book => library3.addBook(book));
library3.showBooks();

library3.searchBooksByTitle("Dragon Ball");
