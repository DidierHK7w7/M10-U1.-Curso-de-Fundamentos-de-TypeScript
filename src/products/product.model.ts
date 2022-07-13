export type Sizes = 'S' | 'M' | 'L' | 'XL';
//objeto como tipo
export type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}
