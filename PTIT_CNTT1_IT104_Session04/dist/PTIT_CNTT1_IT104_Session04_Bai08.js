"use strict";
const calculateOrderTotal = (order) => {
    return order.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
};
const printOrder = (order) => {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    order.items.forEach(item => {
        const lineTotal = item.product.price * item.quantity;
        console.log(`- ${item.product.name} × ${item.quantity} → ${lineTotal} VND`);
    });
    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
};
printOrder({
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: { id: "P1", name: "Áo sơ mi", price: 250000 }, quantity: 2 },
        { product: { id: "P2", name: "Quần tây", price: 400000 }, quantity: 1 }
    ],
    note: "Giao sau 18h"
});
