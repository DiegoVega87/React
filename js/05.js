// Objetos - Manipulación
const product = {
  name: "Tablet", //propiedad--> Key : Value
  price: 300,
  available: false,
};

// Prevent object manipulation -When applied, nothing can be changed in the object
//Object.freeze(product);

// Prevents from adding or deleting properties. Allows overwritting.
Object.seal(product);

// Reescribir un valor
product.available = true;

//Creates the property within the object if not exists.
product.image = "image.jpg";

// Delete property from product
delete product.price;
console.log(product);
