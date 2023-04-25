const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

form.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    criaElemento(evento.target['nome'].value, evento.target['quantidade'].value);
})

function criaElemento(nome, quantidade){
    //Criamos uma nova li.
    const novoItem = document.createElement('li'); 
    //Adcionamos uma nova classe a li.
    novoItem.classList.add("item");
    //Criamos uma anova strong.
    const numeroItem = document.createElement('strong');
    //Passamos o valor do numero para a strong.
    numeroItem.innerHTML = quantidade;
    //Passamos o valor para dentro  da strong. a strong  é o filho da li.
    novoItem.appendChild(numeroItem);

    //Passamos o parametro nome para dentro da li.
    novoItem.innerHTML += nome;
    
    
    

    lista.appendChild(novoItem);

    console.log(novoItem)


}

