// Fetch API with Async / Await
const url = "https://jsonplaceholder.typicode.com/comments";

// fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Hubo un error...");
//   })
//   .then((data) => console.log(data))
//   // Cathc solo se ejecutara si hay problema de red en caso de no tener un throw
//   .catch((error) => console.log(error.message));

const consultarAPI = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Hubo un error...");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

// async function consultarApi(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Hubo un error...");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
consultarAPI(url);
