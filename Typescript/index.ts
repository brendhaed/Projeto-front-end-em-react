const numero1 = 10;
const numero2 =3;

console.log("hello world");
console.log(numero1+numero2);

let numero:number = 20;//typecript faz uma inferencia de tipo
let nome: string ='brendha'; 
let correta:boolean = false;
let pi:number = 3.14;

let resultado= numero * pi;
const nomeDoUsuario = prompt('qual é o seu nome?');
console.log(nomeDoUsuario);

const numeros: number[] = [1,2,3,4]; //tipagem de array
const misto:(number|string)[] = ['brendha',20,1.55] //tipagem de array misto

const idades:number[] = [];
idades.push(23)
idades.push(38)
idades.push(12)
idades.push(49)
idades.push(16)

const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);

const pessoaTupla:[string,number] = ['brendha',20] //tupla


//object types

//interface: tipo personalizado
// interface Person {
//     nome:string;
//     idade:number;
//     profissao?:string 
// }
// ? torna a propriedade opcional 
type Person = {
    nome:string;
    idade:number;
    profissao?:string 
}
const pessoa:Person = {
    nome:'brendha',
    idade:20,
    profissao:'dev front end'
}

type criterio = "greater" | "lower";
function chooseNumber(numero1:number, numero2:number, criterio?: "greater" | "lower"):number{
    switch(criterio){
        case "greater":
            return numero1 > numero2 ? numero1 : numero2;
        case "lower":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();

            if (numeroAleatorio >= 0.5) return numero1;
            return numero2
    }

}
const numeroEscolhido = chooseNumber(10,20,"lower");
console.log("numeroEscolhido:", numeroEscolhido);

function somar (num1:number, num2:number):number{
    return num1 + num2
}

//Utility Types: A ideia deles é permitir que você crie novos tipos a partir de tipos já existentes

//1. Partial
type PersonPartial = Partial<Person>; //

//2. Required
type PersonRequired = Required<Person>;//torna todos as propriedes obrigatórias

//3.Pick
type PersonPicked = Pick<Person,'nome'|'idade'>; //escolhe as propriedades

//4. Omit
type PersonOmit = Omit<Person, 'profissao'>; //oculta propriedades

//5.Exclude
type CriterioExclude = Exclude<criterio, 'greater'>; //

//5. Record
type Pessoas = Record<string,Person>;

const pessoas: Pessoas {
    "123.456.789.10":{
        nome:"nome",
        idade: 20,
        profissao:"dev",
    },
    "123.456.789.00":{
        nome:"nomee",
        idade:25,
        profissao:"dev",
   },
};