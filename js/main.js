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
    console.log(existe)
    const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value

    }
    //Se o nome for encontrado na lista, com o existe, atualizamos o item
    if(existe){
        console.log(existe)
        //Ultilizamos como id atual, o id que já existe no elemento
        itemAtual.id = existe.id
        atualizaElemento(itemAtual);

        itens[itens.findIndex(elemento => elemento.id === existe.id )] = itemAtual;
    //Se não encontrarmos o elemento, criamos um novo elemento.     
    }else{  
        /*Ou usamos o tamanho do array para adicionar ao elemento atual
        usamos o operador condicional ternario para alternar entre parametros dependendo do id*/
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;
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
    
    //Colocamos o botao de deletar dentro de cada novo item.
    novoItem.appendChild(BotaoDeleta(item.id));

    lista.appendChild(novoItem);
}
//função para buscar o data elements da strong procurar o id e atualizar a quantidade da strong.
function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}
//função para criar um botao "x" para remover itens da lista.
function BotaoDeleta(id) {
    const elementoBotao = document.createElement("button");
    elementoBotao.innerText = "x";
    /*adicionamos um evento ao botão, pois elementos em js não tem evento padrao.
    ultilizamos a função comum e não a arrow function pois, ultilizamos o this.*/
    elementoBotao.addEventListener("click", function(){
        /*como o botao é filho da nossa li, somente o this, deletaria apenas o botao 
        por isso o uso do parentNode, para pegarmos os filhos da li.*/
        deletaElemento(this.parentNode, id);
    })
    
    return elementoBotao;
}
//passamos os parametros de tag e id quando chamamos o item, em novoItem.appendChild(BotaoDeleta(item.id));
function deletaElemento(tag, id) {
    //remove elemento
    tag.remove()
    /*remover o item do array
    passamos esse id para o: botao deleta, para o deleta elemento, para utilizarmos no splice*/
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

    //para reescrevermos por cima do localStorage e remover os itens permanentemente.
    localStorage.setItem("itens", JSON.stringify(itens));
}