class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public year: number
    ) {}
}

class Library<T> {
    private books: T[] = [];

    addBook(book: T) {
        this.books.push(book);
    }
    getBookById(id: number): T | undefined {
        return this.books.find(book => (book as Book).id === id);
    }
    removeBook(id: number): void {
        this.books = this.books.filter(book => (book as Book).id !== id);
    }
    updateBook(id: number, updatedBook: T): void {
        const index = this.books.findIndex(book => (book as Book).id === id);
        if (index !== -1) {
            this.books[index] = updatedBook;
        }
    }
    listBooks(): T[] {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm: string): T[] {
        const term = searchTerm.toLowerCase();
        return this.books.filter(book =>
            (book as Book).title.toLowerCase().includes(term) ||
            (book as Book).author.toLowerCase().includes(term)
        );
    }
    getTotalBooks(): number {
        return this.books.length;
    }
    findBooksByYear(year: number): T[] {
        return this.books.filter(book => (book as Book).year === year);
    }
}

class EBook extends Book {
    constructor(
        id: number,
        title: string,
        author: string,
        year: number,
        public fileSize: number
    ) {
        super(id, title, author, year);
    }
}

// ======= DEMO MENU =======
const library = new Library<Book>();

function menu() {
    console.log("===== MENU =====");
    console.log("1. Thêm sách");
    console.log("2. Tìm sách theo ID");
    console.log("3. Cập nhật sách");
    console.log("4. Xóa sách");
    console.log("5. Tìm sách theo tên/tác giả");
    console.log("6. Đếm tổng số sách");
    console.log("7. Tìm sách theo năm xuất bản");
    console.log("8. Hiển thị tất cả sách");
    console.log("================\n");
}

// Giả lập thao tác
menu();

// 1. Thêm sách
library.addBook(new Book(1, "Lập trình C", "Nguyễn Văn A", 2020));
library.addBook(new Book(2, "TypeScript cơ bản", "Trần Văn B", 2021));
library.addBook(new EBook(3, "Java nâng cao", "Lê Văn C", 2019, 5.2));

console.log("Danh sách sau khi thêm:", library.listBooks());

// 2. Tìm sách theo ID
console.log("Tìm sách ID=2:", library.getBookById(2));

// 3. Cập nhật sách
library.updateBook(2, new Book(2, "TypeScript nâng cao", "Trần Văn B", 2023));
console.log("Danh sách sau cập nhật:", library.listBooks());

// 4. Xóa sách
library.removeBook(1);
console.log("Danh sách sau khi xóa:", library.listBooks());

// 5. Tìm sách theo tên/tác giả
console.log("Tìm theo từ khóa 'java':", library.findBooksByTitleOrAuthor("java"));

// 6. Đếm tổng số sách
console.log("Tổng số sách:", library.getTotalBooks());

// 7. Tìm sách theo năm xuất bản
console.log("Sách xuất bản năm 2019:", library.findBooksByYear(2019));
