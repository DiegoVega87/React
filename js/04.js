// Objetos > Coleccion de propiedades. Asociación entre una nombre/clave/llave y un valor.
const product = {
  name: "Tablet", //propiedad--> Key : Value
  price: 300,
  available: false,
};

/* console.log(product);
console.log(typeof product);
console.table(product); */
// console.log(product.name);

// Destructuring
/* const { name, price, available } = product;
console.log(name);
console.log(price);
console.log(available); */
// const name = product.name;

// console.log(name);
// const price = product.price;
// console.log(price);
// const available = product.available;
// console.log(available);

// Object literal enhancement --> Si la llave y el valor se llaman igual, no hace falta poner el valor.
const authenticated = true;
const user2 = "usuario";

const newObject = {
  authenticated,
  user: user2,
};

console.log(newObject);
