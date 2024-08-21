
//exemplo 1: definição da função
function saudacao (nomeDoEstudante, curso ="Front-end em react"){
//template string || template literals
    return (`Olá, ${nomeDoEstudante}! Seja bem vinda(o) ao curso de ${curso}!` );
   
}
const mensagemDeSaudacao = saudacao("Brendha", "Front-End em react"); //chamada da função saudacao
console.log(mensagemDeSaudacao);

//Exemplo 2
console.clear();

function somar(numero1, numero2){
    return numero1+numero2;
}

const resultado = somar (2,5);

console.log(resultado);
console.log(resultado/5);

// funções anonimas 
console.clear()
const dobroDoNumero = function(numero){
    return numero * 2;
};

const dobro = dobroDoNumero(2);
console.log(dobro);

//arrow functions: Função seta ==>
console.clear();
const subtrair = (numero1,numero2)=>{
    return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1*numero2;

//object literal 
console.clear();
const array =["Brendha",20,1.55,true];

const pessoa = {
    nome:"Brendha",
    idade:20,
    altura:1.55,
    ehprogramadora:true,
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.prossisao="desenvolvedora front-end";// adicionar parametro
console.log(pessoa.prossisao)

const objeto={
    idade,
    altura
};

console.log(objeto);