// Fetch API with promises
const url = "https://jsonplaceholder.typicode.com/123";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Hubo un error...");
  })
  .then((data) => console.log(data))
  // Cathc solo se ejecutara si hay problema de red en caso de no tener un throw
  .catch((error) => console.log(error.message));
