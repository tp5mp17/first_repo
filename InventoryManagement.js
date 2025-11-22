const products = []

const product1 = {
 name: "laptop",
 price: 399.99,
 stock: 100,
}
const product2 = {
 name:"phone",
 price: 200,
 stock: 100,
}
const product3 = {
 name: "Headphones",
 price: 49.99,
 stock: 100,
}
const product4 = {
 name: "Monitor",
 price: 499.99,
 stock: 100,
}

products.push(product1, product2, product3, product4);

function addProduct(name, price, stock){
   const product5 = {
    name: name,
    price: price,
    stock: stock
  }
  products.push(product5)

}
addProduct("tv", 599.99, 45)


console.log(products);
