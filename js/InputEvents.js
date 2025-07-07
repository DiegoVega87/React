// Eventos del DOM - inputs
const inputNombre = document.querySelector("#nombre");
console.log(inputNombre.id);
inputNombre.addEventListener("input", (e)=> {
    console.log("Escribiendo...")
    console.log(e.target.value);
});

const inputPassword = document.querySelector("#password");
inputPassword.addEventListener("input", showPassword);

function showPassword(){
    inputPassword.type = "text";

    setTimeout(()=>{
        inputPassword.type = "password";
    }, 300);
}

inputPassword.addEventListener("input", ()=>{
    inputPassword.type = "text";

    setTimeout(()=> { 
        inputPassword.type = "password";
    }, 300);
});
