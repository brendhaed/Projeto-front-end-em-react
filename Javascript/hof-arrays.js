//*FUNÇÕES DE ALTA ORDEM DE ARRAYS 

//Array .forEach()

const numeros = [40, 34, 67, 89, 23, 10];

function imprimirElemento(elemento){
    console.log(elemento);
}
numeros.forEach(imprimirElemento);
//-------------------------------------------------
const numeros2 = [40, 34, 67, 89, 23, 10];

numeros2.forEach((item, index, arraycompleto) => {
    console.log(index, item, arraycompleto);
});

//2. Array.find()
console.clear();
const encontrado= numeros.find((numero) => {
    return numero > 50;
});

console.log(encontrado);

//Array de objetos
console.clear();
const pessoas = [
{
    nome:"pessoa 1",
    idade: 34,
},
{
    nome:"pessoa 2",
    idade:25,
},
{
    nome:"pessoa 3",
    idade:46,
},
];

pessoas.find((pessoa) => pessoa.idade > 40);

//array.prototype .findindex(): muito arecido com .find(), porém retorna o indice do elemento encontrado
const indiceDaPessoaEncontrada = pessoas.findIndex(
    (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7
);

console.clear();
console.log(indiceDaPessoaEncontrada);
