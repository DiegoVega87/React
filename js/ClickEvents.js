// Eventos del DOM - Clicks
const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");


// heading.addEventListener("mouseenter", () => {
//     heading.textContent = "Nuevo heading al dar click...";
// });
// heading.addEventListener("mouseleave", () => {
//     heading.textContent = "Saliendo...";
// });

enlaces.forEach(enlace => {
    enlace.addEventListener("click" , (e) => {
        console.log(e);
        e.preventDefault //Previene el salto que hace por defecto cuando haces click en un enlace
        console.log(e.target);

        e.target.textContent = "Diste click";
    })
    
});