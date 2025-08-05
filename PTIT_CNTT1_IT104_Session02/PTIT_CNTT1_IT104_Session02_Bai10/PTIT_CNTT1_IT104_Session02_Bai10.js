const products = [
  { name: "A", price: 100, discount: 0.1, quantity: 2 },
  { name: "B", price: 200, discount: 0.2, quantity: 1, bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 } },
  { name: "C", price: 300, discount: 0, quantity: 3, bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 } }
];

const getOrderSummary = (products) => {
  const details = products.map(product => {
    const { name, price, discount, quantity, bulkDiscount } = product;

    let count = discount;
    if (quantity >= bulkDiscount.minQuantity) {
      count += bulkDiscount.extraDiscount;
    }

    const finalPrice = price * (1 -count);
    const subtotal = finalPrice * quantity;

    return {
      name,
      finalPrice,
      quantity,
      subtotal
    };
  });

  const totalBeforeDiscount = products.reduce((a, b) => a + b.price * b.quantity, 0);
  const totalAfterDiscount = details.reduce((a, b) => a + b.subtotal, 0);


  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    details
  };
};


console.log(getOrderSummary(products));
