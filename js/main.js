const form = document.getElementById("novoItem");

form.addEventListener("subimit", (evento)=>{
    evento.preventDefault();
    console.log("funcionou")
});