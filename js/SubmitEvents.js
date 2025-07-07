// Eventos del DOM - submit
const form = document.querySelector("#formulario");
form.addEventListener("submit", e =>{
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const password = document.querySelector("#password").value;

    console.log(nombre);
    console.log(password);
    console.log("Enviando Formulario...");

    if(nombre === "" || password === ""){
        console.log("Todos los campos son obligatorios");
    }else{
        console.log("Todo bien, iniciando sesio...");
    }
});
