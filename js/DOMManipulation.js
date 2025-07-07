// Manipular elementos HTML con JS
/**
 *  Todas las interacciones que haces en DOM o código HTML por medio de Javascript requieren o inician con un selector. Igual que en CSS
 */

const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a"); // retorna una colección de nodos (NodeList) de todos los enlaces dentro de la clase navegacion

heading.textContent = "Un nuevo heading...";
heading.id = "un nuevo ID";
heading.removeAttribute("id");

const inputNombre = document.querySelector("#nombre");
inputNombre.value = "Un nuevo valor...";
inputNombre.dataset.nombre = "input"; // Agrega un atributo data-nombre="input" al elemento

console.log(enlaces);
enlaces[0].textContent = "Nuevo enlace";
enlaces.forEach(enlace => enlace.textContent = "Nuevo Enlace");