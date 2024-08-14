const fs = require("fs");

//1 Callbacks 
console.log("ANTES da função ler o arquivo...")
//Função assíncrona (ler um arquivo leva um tempo)
fs.readFile("JavaScript/arquivo.txt",(erro, conteudoDoArquivo)=> {
    if (erro){
        console.log("Ocorreu um erro ao tentar ler o arquivo:",erro);
    }else{
        console.log(String(conteudoDoArquivo));
    }
});
console.log("DEPOIS da função ler o arquivo...")

//2
console.clear();
console.log("ANTES do TimeOut...");

setTimeout(() => {
    console.log("Isso aqui vai ser executado após 5 segundos!");
},5 * 1000);
console.log("DEPOIS do SetTimeOut...");

//Promises:
console.clear();
console.log("Antes da criação da promise...");

const promessa = new Promise((resolve, reject) => {
    fs.readFile("JavaScript/arquivo.txt", (erro, conteudoDoArquivo) => {
        if (erro){
            reject ("ocorreu um erro ao tentar ler o arquivo:", erro);
        }else{
            resolve(String(conteudoDoArquivo));
        }
    });
}); // criando uma promessa
promessa.then((retornoDoResolveDaPromise) =>{
    console.log("Deu certo!", retornoDoResolveDaPromise);
});
//console.log(promessa);

// foco a partir daqui...
lerArquivoPromise()
.then((retornoDoResolveDaPromise) =>{
    console.log("Deu certo! 2.0", retornoDoResolveDaPromise);
})
.catch((erro) => {
    console.log("Deu ruim!!!", erro);
})
.finally(() => {
    console.log("Isso será executado independente de sucesso ou fracasso!");
});

//async/await

async function leituraDosDados(){
console.log("isso aqui é executado ANTES da promisse ser resolvida!");
try{
    const dadosDoArquivoLido = await lerArquivoPromise();

    console.log(dadosDoArquivoLido);
    console.log("isso é executado DEPOIS da promisse ser resolvida!");
} catch (erro){
    console.log(erro);
    console.log("isso aqui é executado DEPOIS da promisse (com erro)")
}
};
//const retornoDaPromessa = await lerArquivoPromise(); // espera a promessa ser resolvida para avançar

//console.log(retornoDaPromessa);
//console.log("isso aqui é executado DEPOIS da promisse ser resolvida!")
leituraDosDados();