#Anotações  para estudos:

o padrão de um evento "subimit" é enviar os dados para pagina, usamos o preventDefault(); para remover esse evento padrao assim, podemos enviar para um console.log por exemplo.
```scss
form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    console.log("funcionou")
});
```
Criamos uma nova variável, para adicionar uma nova classe a li.
Criamos também a nossa strong que recebe como parametro a quantidade de itens
```scss
function criaElemento(nome, quantidade){
    
    const novoItem = document.createElement("li"); 
     
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;
}
```
```scss
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
    console.log(novoItem)
}
```

comandos  de localStorage
localStorage.setItem para salver o item, passando dois parametros
exemplo: localStorage.setItem("curso"m "localStorage")

localStorage.curso para ver o conteudo do curso,
retorno = "localStorage"

localStorage.getItem("curso")
retorno = "localStorage"

localStorage.removeItem("curso")
para remover o item, assim o curso retornada um item nulo "null"

localStorage.clear 
esvazia os items no localStorage

localStorage
retorna um objeto com todos os items dentro do localStorage

