"use strict";
const calculateInvoiceTotal = (invoice) => {
    return invoice.orders.reduce((total, order) => {
        const orderTotal = order.items.reduce((sum, item) => {
            return sum + item.product.price * item.quantity;
        }, 0);
        return total + orderTotal;
    }, 0);
};
const getUnpaidOrders = (invoice) => {
    return invoice.orders.filter(order => !order.isPaid);
};
const printInvoice = (invoice) => {
    console.log(`HÓA ĐƠN: #${invoice.invoiceId} - Ngày tạo: ${invoice.createdAt}
----------------------
    `);
    invoice.orders.forEach((order) => {
        console.log(`ĐƠN HÀNG: #${order.orderId} - ${order.customerName}`);
        order.items.forEach((item) => {
            const notePart = item.note ? ` (note: ${item.note})` : '';
            const line = `- ${item.product.name} × ${item.quantity} → ${item.product.price} VNĐ${notePart}`;
            console.log(line);
        });
        const total = order.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        console.log(`Tổng đơn: ${total} VNĐ`);
        console.log(`Trạng thái: ${order.isPaid ? "ĐÃ THANH TOÁN" : "CHƯA THANH TOÁN"}`);
    });
    const grandTotal = calculateInvoiceTotal(invoice);
    console.log(`>> Tổng cộng hóa đơn: ${grandTotal} VNĐ`);
};
printInvoice({
    invoiceId: "INV001",
    createdAt: new Date("2024-05-14"),
    orders: [
        {
            orderId: "ORD001",
            customerName: "Nguyễn Văn A",
            deliveryAddress: "Hà Nội",
            isPaid: true,
            items: [
                {
                    product: { id: "P001", name: "Áo sơ mi", price: 500000 },
                    quantity: 2
                },
                {
                    product: { id: "P002", name: "Quần jean", price: 400000 },
                    quantity: 1
                }
            ]
        },
        {
            orderId: "ORD002",
            customerName: "Trần Thị B",
            deliveryAddress: "HCM",
            isPaid: false,
            items: [
                {
                    product: { id: "P003", name: "Váy hoa", price: 700000 },
                    quantity: 1,
                    note: "size M"
                }
            ]
        }
    ]
});
