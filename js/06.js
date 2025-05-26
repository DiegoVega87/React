// Objects - Destructuring multiple objects
const product = {
  name: "Tablet", //propiedad--> Key : Value
  price: 300,
  available: false,
};

const client = {
  name: "Juan",
  premium: true,
  address: {
    street: "Calle México",
    newObject: {
      test: "Diego",
    },
  },
};

const { name } = product;
const {
  name: clientName,
  address: { street },
  address: {
    newObject: { test },
  },
} = client;

console.log(name);
console.log(clientName);

console.log(street);
console.log(test);
