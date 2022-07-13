import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'Product',
  createdAt: new Date(2022, 7, 13),
  stock: 12
});
addProduct({
  title: 'Product',
  createdAt: new Date(2022, 7, 13),
  stock: 12
});
console.log(products);
const total = calcStock();
console.log(total);
