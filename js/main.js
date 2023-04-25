const form = document.getElementById("novoItem");

form.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    console.log(evento.target['nome'].value);
    console.log(evento.target['quantidade'].value);
})


