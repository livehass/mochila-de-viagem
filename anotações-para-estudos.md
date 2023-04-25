#Anotações  para estudos:

o padrão de um evento "subimit" é enviar os dados para pagina, usamos o preventDefault(); para remover esse evento padrao assim, podemos enviar para um console.log por exemplo.
```scss
form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    console.log("funcionou")
});
```