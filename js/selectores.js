// Selectors
/**
 *  Todas las interacciones que haces en DOM o código HTML por medio de Javascript requieren o inician con un selector. Igual que en CSS
 */

const heading = document.querySelector(".heading");
// console.log(heading);
// console.log(heading.tagName);
// console.log(heading.textContent);
// console.log(heading.classList);
// console.log(heading.id);

const enlaces = document.querySelector(".navegacion a"); // query selector trae hasta un elemento o nada si no existe. El primero.
const enlaces2 = document.querySelectorAll(".navegacion a"); // Trae todos los elementos del selector.
console.log(enlaces);

/* Ejemplos de uso de querySelector y querySelectorAll

querySelector:
- Selecciona el primer elemento que coincide con el selector CSS proporcionado.
- Devuelve un solo elemento o null si no hay coincidencias.

Ejemplo:*/
const primerEnlace = document.querySelector(".navegacion a");
console.log(primerEnlace); // Muestra el primer enlace de la navegación

/*querySelectorAll:
- Selecciona todos los elementos que coinciden con el selector CSS proporcionado.
- Devuelve una NodeList estática de todos los elementos coincidentes.

Ejemplo:*/
const todosLosEnlaces = document.querySelectorAll(".navegacion a");
todosLosEnlaces.forEach((enlace) => {
  console.log(enlace); // Muestra cada enlace de la navegación
});
