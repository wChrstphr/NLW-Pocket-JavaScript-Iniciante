//
/* comentario em JS
const mensagem = "olá Christopher"

{
    // local
    const mensagem = "Olá, Joao"
    console.log(mensagem);
}

console.log(mensagem);
*/

// arrays, objetos
/*
let metas = ["agua", "exercicio"]
console.log(metas[0] + " " + metas[1]);
*/
/*
// atribuição de objeto em JS
let meta = {
    value: "ler um livro por mês",
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

// assignment of a new value
meta.value = "nao é mais um livro"
meta.log(meta.value);

// function // arrow function
const criarMeta = () => {}

// normal function without variable/const assignment
// function criarMeta() {}
*/

// 
let meta = {
    value: "ler um livro por mês",
    checked: true,
}

// Array de muitas metas
let metas = [
    meta,
    {
        value:"caminhar 20 min todos os dias",
        checked: false,
    }
]

console.log(metas[0].value + " " + metas[1].value);