/**
 * Mocking client-server processing
 */
import products from '../api/products.js';


console.log("products" + products);

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
