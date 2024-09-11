const { select, input } = require("@inquirer/prompts")

let meta = {
    value: "Beber 3L de agua por dia",
    checked: true
}

let metas = [ meta ]

// async sempre é acompanhado por await e vice-versa
const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta"});

    // verificando se a pessoa digitou algo
    if (meta.length == 0) {
        console.log("A meta não pode ser vazia.");
        return
    }
    
    // para colocar novas metas no array de metas []
    metas.push({value: meta, checked: false})

}
// funcao start
const start = async() => {
    while (true) {

        // await serve para que o console espere o usuario selecionar uma opcao
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair do aplicativo",
                    value: "sair"
                },
            ]
        });
        
        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas.value);
                break;
            case "listar":
                console.log("Vamos Listar");
                break;
            case "sair":
                console.log("Até a proxima");
                return
        }
    }   
}

start();