// Objects - Destructuring multiple objects
const product = {
  name: "Tablet", //propiedad--> Key : Value
  price: 300,
  available: false,
};

const client = {
  name: "Juan",
  premium: true,
};

/* const shoppingCart = {
  quantity: 1,
  ...product, // Spread operator
};

console.log(shoppingCart.name); // This is called destructuring
 */
// Creates a copy of the product object and client object
const copyObject = {
  product,
  client,
};
console.log(copyObject);

//Combine two objects into a new one using spread operator maintaining the original objects
const keepingOriginalObjects = {
  product: { ...product },
  client: { ...client },
};
console.log(keepingOriginalObjects);
// Combine two objects into a new one
const newObject = {
  ...product,
  ...client, // name will be overwritten by client.name
};
console.log(newObject);
// Combine two objects into a new one using Object.assign
const newObject2 = Object.assign(product, client); // This will also combine the objects
console.log(newObject2);
