class Vehicle2 {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id; 
        this.name = name;
        this.year = year;
        this.company = company;
    }
    print(): void {
        console.log(
       `ID: ${this.id}
        Tên xe: ${this.name}
        Năm sản xuất: ${this.year}
        Hãng xe: ${this.company}
        `)
    }
}

const vehicle4 = new Vehicle2(1, "Meo", 2023,"company");

vehicle4.print();

console.log(`ID: ${vehicle4.id}`);
console.log(`Tên xe: ${vehicle4.name}`);

// console.log(`Năm sản xuất: ${vehicle4.year}`);
// /loi do protected

// console.log(`Hãng xe: ${vehicle4.company}`);
//loi do private