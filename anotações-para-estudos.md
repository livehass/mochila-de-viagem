```js
//variaveis de controle do html
const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");


//Criamos um array de items para cada objeto, cada item adicionado.
const itens = JSON.parse(localStorage.getItem("itens")) || []
// ou pegamos os itens do local storage ou do array
// e o  JSON.parse pegamos o iten que passamos para string com o stringfy e retornamos com itens

//funcao quando clicar no botao de enviar
form.addEventListener("submit", (evento)=>{
    //retira do padrao de submit que recarrega a tela. 
    evento.preventDefault()
    
    //variaveis para pegar os itens do html
    const nome = evento.target['nome'];
    const quantidade = evento.target['quantidade'];

    criaElemento(nome.value, quantidade.value);

   nome.value ="";
   quantidade.value ="";
});
//função que cria um novo elemento
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
    
    //O filho da lista vai receber o novo item
    lista.appendChild(novoItem);
    
    //criando um objeto do novo item
    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade,
    }
    //Colocamos o itemAtual, ou seja o objeto dentro do array, com o push.
    itens.push(itemAtual);

    //localStorage
    //LocalStorage salva apenas texto, salva apenas o objesto, queremos usar uma string com os items
    // usarmos o "JSON.stringify" "transformar em string" para salvarmos uma string e não um objeto
    
    //O parametro que passamos para nosso localStorage é o itens ou seja o array de itens.
    
    localStorage.setItem("item", JSON.stringify(itens));
}



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

```
<<<<<<< HEAD

localStorage armazena dados de forma persistente, apenas aqueles considerados não sensíveis. Cookies possuem menor espaço de armazenamento 4KB, e salvam dados considerados sensíveis de forma persistente. Já sessionStorage não salva de forma persistente, armazenando dados apenas enquanto o site estiver aberto.

localStorage não possui nenhuma camada de proteção de dados, não é indicado para salvar dados considerados sensíveis.
=======
>>>>>>> 69ff866f154c6fc3b05dcdb9c34029491c06d49c
