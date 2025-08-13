class MenuItem {
    public id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Table {
    public id: number;
    public capacity: number;
    public available: boolean;

    constructor(id: number, capacity: number, available: boolean) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}

class Reservation {
    public id: number;
    public customerName: string;
    public tableId: number;

    constructor(id: number, customerName: string, tableId: number) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    public id: number;
    public tableId: number;
    public items: MenuItem[];

    constructor(id: number, tableId: number, items: MenuItem[]) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }

    getTotal(): number {
        let total = 0;
        for (let item of this.items) {
            total += item.price;
        }
        return total;
    }
}
class Restaurant {
    public menu: MenuItem[];
    public tables: Table[];
    public reservations: Reservation[];
    public orders: Order[];

    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item: MenuItem): void {
        this.menu.push(item);
    }
    addTable(table: Table): void {
        this.tables.push(table);
    }
    makeReservation(customerName: string, tableId: number): void {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            
            return;
        }
        if (!table.available) {
            console.log("bàn này đã đc đặt");
            return;
        }
        this.reservations.push(
            new Reservation(this.reservations.length + 1, customerName, tableId)
        );
        table.available = false;
    }
    placeOrder(tableId: number, items: MenuItem[]): void {
         const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            
            return;
        }
        if (table.available) {
            console.log("bàn này chưa đc đặt");
            return;
        }
        this.orders.push(
            new Order(this.orders.length + 1, tableId, items)
        );
    }
    generateBill(tableId: number): void {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            console.log("Không tìm thấy bàn");
            return;
        }
        const tableOrders = this.orders.filter(o => o.tableId === tableId);
        if (tableOrders.length === 0) {
            console.log("Chưa có đơn hàng");
            return;
        }
        let total = 0;
        tableOrders.forEach(order => total += order.getTotal());

        console.log(`Tổng tiền ${total} VND`);
        table.available = true;
    }
}

const restaurant = new Restaurant();

restaurant.addMenuItem(new MenuItem(1, "Cơm", 25000));
restaurant.addMenuItem(new MenuItem(2, "mì", 9000));
restaurant.addMenuItem(new MenuItem(3, "phở", 35000));


restaurant.addTable(new Table(1, 2, true));

restaurant.makeReservation("huy", 1);

restaurant.placeOrder(1, [
    restaurant.menu[0],
    restaurant.menu[2] 
]);

restaurant.generateBill(1);