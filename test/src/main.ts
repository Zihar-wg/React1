import './style.css'

// number
// string
// boolean
// null
// undefined

function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}
const [newA, newB] = swap<number>(1, 2);
console.log(newA, newB);
// Інтерфейс Product
interface Product {
  id: number;
  name: string;
  price: number;
}
const products: Product[] = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 120 },
];
function findMaxPriceProduct(products: Product[]): Product | null {
  return products.reduce((max, product) => (product.price > max.price ? product : max));
}
const maxPriceProduct = findMaxPriceProduct(products);
console.log(maxPriceProduct);

