//Array prototype.every(): verificar se todos os elementos de uma arrays seguem uma determinada condição retornada pela função

const numeros =[40,34,67,89,23,16,10];
const todosPositivos = numeros.every((elemento) =>elemento > 0);

console.log(todosPositivos);

//Array prototype.some(): verifica se algum elemento da array torna verdadeira uma determinada consição retornada pela função
const numeros2 =[-1,3,7,-3,5];
const retorno = numeros2.some((numero) => numero > 0);

//Array prototpe.map(): um metodo do array que chama a função que passada como parametro para cada elemento do array, e devolve um novo array como resultado
//exemplo 1: prototpe.map()
console.clear();
const numbers =[40,34,67,89,23,16,10];

const novoArray = numbers.map((elemento, index, arrayCompleto)=>{
    console.log(elemento, index, arrayCompleto);
});
console.log(novoArray);
//exemplo 2: prototpe.map()
console.clear();

const numbers2 =[40,34,67,89,23,16,10];
const novoArray2 = numbers2.map((elemento,index,arrayCompleto) => {
   // return 1;
   return elemento * 2;
});
console.log(novoArray2);

//exemplo 3: prototpe.map()
const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];
const valoresAoQuadrado = valores.map((valor) => valor ** 2);

console.log(valoresAoQuadrado);

//exemplo 4: prototpe.map()
const carrinho = [
    {produto:"feijão", preco: 7.98, quantidade: 3},
    {produto:"arroz", preco: 4.98, quantidade: 5},
    {produto:"leite", preco: 6.99, quantidade: 2},
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
    return{
        ...itemDoCarrinho,
        total:itemDoCarrinho.preco * itemDoCarrinho.quantidade,
    }
});
console.log(carrinhoComTotal);

