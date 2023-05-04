const form = document.getElementById("novoItem"); 
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || []  

itens.forEach( (elemento) => {    
    criaElemento(elemento);
} )

form.addEventListener("submit", (evento) => {  
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value)
    
    const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value

    }
    if(existe){
        itemAtual.id = existe.id
    }else{  

        itemAtual.id = existe.length
        criaElemento(itemAtual)
        itens.push(itemAtual)

    }   


    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value ="";
    quantidade.value ="";
})

function criaElemento(item) {  
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade
    //criamos um novo ida para nosso numero, para ser utilizado pelo if existe ou não essa li.
    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem);
}