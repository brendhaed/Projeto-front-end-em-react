//HIGH ORDER FUNCTION
// * 1. função que retorna outra como parametro
function wellcome (courseName){
    return (studantName) => {
console.log(
    `Olá,${studantName}!Seja Bem-vindo(a) ao curso de ${courseName}!`)
};
};
const displayWelcomeToFrontEndCourse=wellcome("Front-End em React")
displayWelcomeToFrontEndCourse("Brendha");

// * 2. função que recebe outra função como parametro
console.clear();

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

//operação:função que realiza a operação entre os dois números, ou seja, ela precisa ser uma função que receba dois numeros //
const calcular = (num1, num2, funcaoDaOpearação) => funcaoDaOpearação(num1, num2);

//calcular = (10,5,somar) =>  somar(10,5)

const retorno = calcular(10,2,subtrair);
console.log("o resultado é:",retorno);

const resultado = calcular(
    10,
    5,
    (num1,num2) => num1*num2 + 2 * num1 * num2);

console.log(resultado);