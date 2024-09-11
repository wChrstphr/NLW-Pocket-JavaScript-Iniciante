const { select } = require("@inquirer/prompts")

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
                console.log("Vamos Cadastrar");
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