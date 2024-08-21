// const button = document.querySelector("section button");

// button.addEventListener("click", (event) =>{
//     console.log(button);
//     alert('você clicou no botão')
// });

//aumentar - diminuir

const botaoDiminuir = document.querySelector("#diminuir-botao");
const botaoAumentar = document.querySelector("#aumentar-botao");

const contadorElemento = document.querySelector("#contador");
const input = document.querySelector("#input");

botaoAumentar.addEventListener("click", (event) => {
    const valorAtual = Number(contadorElemento.textContent);

    contadorElemento.textContent = valorAtual + 1;

    botaoAumentar.classList.add("btn");
    botaoDiminuir.classList.remove("btn");
});
botaoDiminuir.addEventListener("click", (event) => {
    const valorAtual = Number(contadorElemento.textContent);

    contadorElemento.textContent = valorAtual - 1;

    botaoAumentar.classList.add("btn");
    botaoDiminuir.classList.remove("btn");
});

input.addEventListener("input", () =>{
    console.log(input.value);
});

//adicionando estilos inline no elemento contador
contadorElemento.style.color = "green";
contadorElemento.style.padding ="0 2 rem";
contadorElemento.style.border = "1px solid #AAA";
contadorElemento.style.width = "150px";
// contadorElemento.style.backgroundColor ="#AAA";

//Manipular clases:
console.log(botaoDiminuir.classList);
// botaoAumentar.classList.add("btn");

const themebutton = document.querySelector("#theme");

let darkTheme;

//Definindo uma função que será executada ao carregar o conteudo da página/janela
window.onload = () => {
    const isDarkThemeStorage = localStorage.getItem("isDarkTheme")
    darkTheme = isDarkThemeStorage === "true" ? true : false;

    const body = document.querySelector("body");

    if (darkTheme) { 
        body.style.backgroundColor = "#222";
        body.style.color = "white";
    } else{
        body.style.backgroundColor = "white";
        body.style.color = "#222";
    }
};

themebutton.addEventListener("click", () => {
    darkTheme= !darkTheme;

    localStorage.setItem("IsDarkTheme", darkTheme);

    const body = document.querySelector("body");

if (darkTheme) { 
    body.style.backgroundColor = "#222";
    body.style.color = "white";
} else{
    body.style.backgroundColor = "white";
    body.style.color = "#222";
}});