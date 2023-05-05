const form = document.getElementById("novoItem"); 
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || []  

itens.forEach( (elemento) => {    
    criaElemento(elemento)
});

//formulario enviado
form.addEventListener("submit", (evento) => {  
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    //Verificamos se os itens já existem no formulario
    const existe = itens.find(elemento => elemento.nome === nome.value)
    
    const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value

    }
    //Se o nome for encontrado na lista, com o existe, atualizamos o item
    if(existe){
        //Ultilizamos como id atual, o id que já existe no elemento
        itemAtual.id = existe.id
        atualizaElemento(itemAtual);
    //Se não encontrarmos o elemento, criamos um novo elemento.     
    }else{  
        //Ou usamos o tamanho do array para adicionar ao elemento atual
        itemAtual.id = itens.length;
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
    numeroItem.innerHTML = item.quantidade;
    //criamos um novo ida para nosso numero, para ser utilizado pelo if existe ou não essa li.
    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
}
function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}