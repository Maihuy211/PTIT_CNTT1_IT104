type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number; // optional
};

const listProduct: Product[] = [
    {
        id: "1",
        name: "Áo sơ mi",
        price: 20000000,
        category: { id: "1", name: "Thời trang" },
        discount: 10
    },
    {
        id: "2",
        name: "Bút",
        price: 1500000,
        category: { id: "2", name: "Đồ Dùng Học tập" }
    },
    {
        id: "3",
        name: "LAP",
        price: 2500000,
        category: { id: "3", name: "Đồ Công nghệ" },
        discount: 5
    }
];

const  getFinalPrice = (product: Product): number => {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
}
const printProductInfo = (product: Product): void => {
    let discount: any;
    if(product.discount){
        discount = getFinalPrice(product) ;
    }else{
         discount = "không có giảm giá";
    }
     console.log(`
        Tên ${product.name}
        Giá gốc ${product.price} VND 
        Giá sau giảm:  ${discount} VND
        Danh mục: ${product.category.name}
    `)   
}
listProduct.forEach(printProductInfo);

