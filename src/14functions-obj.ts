(() => {
  const login = (data: {email: string; password: string | number}) => {
    console.log(data.email, data.password);
  }

  login({
    email: "xd@xd.com",
    password: 12121,
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];
  const addProduct = (data:{
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) =>{
    products.push(data);
  }

  addProduct({
    title: 'Product',
    createdAt: new Date(2022, 7, 13),
    stock: 12
  })
  console.log(products);

})();
