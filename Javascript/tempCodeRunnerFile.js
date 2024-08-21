promessa 
.then((retornoDoResolveDaPromise) =>{
    console.log("Deu certo!", retornoDoResolveDaPromise);
})
.catch((erro) => {
    console.log("Deu ruim!!!", erro);
});