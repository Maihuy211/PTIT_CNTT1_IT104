"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity, available) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId, items) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        let total = 0;
        for (let item of this.items) {
            total += item.price;
        }
        return total;
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(customerName, tableId) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            return;
        }
        if (!table.available) {
            console.log("bàn này đã đc đặt");
            return;
        }
        this.reservations.push(new Reservation(this.reservations.length + 1, customerName, tableId));
        table.available = false;
    }
    placeOrder(tableId, items) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            return;
        }
        if (table.available) {
            console.log("bàn này chưa đc đặt");
            return;
        }
        this.orders.push(new Order(this.orders.length + 1, tableId, items));
    }
    generateBill(tableId) {
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
