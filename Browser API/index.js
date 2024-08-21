//selecionar elementos HTML da nossa pagina utilizando o document:
// 1. pelo nome da tag:
const todosP = document.getElementsByTagName("p");
console.log(todosP);

// 2. pelo nome da classe
const todosClasseParagrafo = document.getElementsByClassName("paragrafo");
console.log(todosClasseParagrafo);

// 3. pelo nome da tag
const emailInput = document.getElementsByName("email");
console.log(emailInput);

// 4. pelo id da tag
const jslogoImg = document.getElementById("js-logo");
console.log(jslogoImg);

// 5. query selector
const imagem = document.querySelector("body > img#js-logo");
console.log(imagem);

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

//console.clear();

//Acessando/alterando o conteúdo HTML das tags:
const primeiroParagrafo = document.querySelector("p.paragrafo");
console.log(primeiroParagrafo);
console.log("conteúdo:", primeiroParagrafo.textContent);
console.log("innerHTML:", primeiroParagrafo.innerHTML);

//primeiroParagrafo.innerHTML = "<strong>outra coisa</strong>";

console.clear();

emailInput[0].value = "brendha@gmail.com";

//criando elementos na página HTML

const listaUl = document.querySelector("ul#lista");
const listaLis = document.querySelectorAll("ul > li")

const novaTagLi = document.createElement("li");// criando uma tag li vazia
novaTagLi.textContent = "Segundo item"; //adicionando um texto dentro da tag li

console.log(novaTagLi);

listaUl.appendChild(novaTagLi);

listaUl.insertBefore(novaTagLi, listaLis[1]);

//remover
//listaUl.removeChild(listaLis[0]);