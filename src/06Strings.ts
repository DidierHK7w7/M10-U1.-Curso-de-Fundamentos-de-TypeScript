(() => {
  let productTitle = 'My amazing products';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;

  productTitle = "My amazing product changed";
  console.log('productTitle', productTitle);

  const productDescription = "Hello world";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  //se usa `` para concatenar variables y multilinea
  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;

  console.log(summary);
})
