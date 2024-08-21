//reduce():
//exemplo 1:
const numeros = [1,2,3,4,5];

const soma = numeros.reduce((acumulador, elemento) => {
    return elemento + acumulador;
}, 0);

console.log(soma);

//exemplo 2: 
console.clear();
const numeros2 = [1,2,3,4,5];
const media = numeros2.reduce((acumulador, elemento,_, arrayCompleto) => {
    return elemento / arrayCompleto.length + acumulador;
}, 0);
console.log(media);

//exemplo 3: soma os numeros pares, no caso: 2 + 4 = 6;

console.clear();
const numeros3 = [1,2,3,4,5];
const somaDosPares = numeros3.reduce((acumulador, numero) => {
    //se o numero for par
    if (numero % 2 === 0){
        return numero + acumulador;
    }else{
        return acumulador;
    }
}, 0);

console.log(somaDosPares);

//exemplo 4:
console.clear();
const carrinho =[
    {produto:"feijão", preco:7.98, quantidade:3},
    {produto:"arroz", preco:4.98, quantidade:5},
    {produto:"leite", preco:6.99, quantidade:2},
];
const totalAPagar = carrinho.reduce((acumulador, item) => {
    return item.preco * item.quantidade + acumulador;
},0);

console.log(totalAPagar);
