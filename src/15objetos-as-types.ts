(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  //objeto como tipo
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];
  const addProduct = (data:Product) =>{
    products.push(data);
  }

  addProduct({
    title: 'Product',
    createdAt: new Date(2022, 7, 13),
    stock: 12
  })
  console.log({
    title: 'Product2',
    createdAt: new Date(2022, 7, 13),
    stock: 123
  });

})();
