//filter(): sempre retorna um array de tamanho igual ou inferior ao tamanho do array original
//exemplo 1: filter() - exemplo de como filtrar somente os numeros pares da cont valores;
const valores = [39,45,32,24,4,22,2,49,23,8];
const pares = valores.filter((valor) => valor % 2 ===0);

console.log(pares);

//exemplo 2:
console.clear();

const alunos = [
    {nome:"quincy", media:96},
    {nome:"jason", media:84},
    {nome:"alexis", media:100},
    {nome:"sam", media:65},
    {nome:"katy", media:90},
];

const alunosComMediaSuperiorA85 = alunos.filter((aluno) => aluno.media > 85);
console.log(alunosComMediaSuperiorA85);

//exemplo 3:
const produtos = [
    {nome:"suco", preco:7.5, tipo:"bebida"},
    {nome:"batata frita", preco:10.5, tipo:"comida"},
    {nome:"pizza", preco:12.5, tipo:"comida"},
    {nome:"chocolate", preco:1.5, tipo:"comida"},
    {nome:"pastel", preco:4.5, tipo:"comida"},
    {nome:"refrigerante coca-cola", preco:6.99, tipo:"bebida"},
];

const produtosFiltrados = produtos.filter(
    (produto)  => produto.preco < 10 && produto.tipo !== "bebida"
);
console.log(produtosFiltrados);