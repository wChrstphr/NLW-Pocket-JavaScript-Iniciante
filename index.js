const { select, input, checkbox } = require("@inquirer/prompts")
// select é utilizado para selecionar por meio de arrows '>' no menu
// input é utilizado para esperar um input pelo usuário
// checkbox é utilizado para checagem de itens

let meta = {
    value: "Beber 3L de agua por dia",
    checked: false
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

const listarMetas = async () => {
    const respostas = await checkbox ({
        message: "Utilize as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar",
        choices: [...metas], // ...metas serve para copiar o conteudo de metas, para que não modifiquemos a fonte
        instructions: false,
    })
    // Desmarcando todas as metas para evitar problemas ao desmarcar todas
    metas.forEach((m) => {
        m.checked = false
    })

    if (respostas.length == 0) {
        console.log("Nenhuma meta foi selecionada");
        return
    }

    // desmarcando todas as metas para evitar erro 
    metas.forEach((m) => {
        m.checked = false
    })

    // remarcando de acordo com respostas
    // forEach itera sobre o array respostas executando a função entre ()
    // metas.find busca saber se o valor da meta passada 'm.value' é igual ao valor da resposta, se sim, essa meta é marcada como checked 'true', se não, continua a busca iterando sobre os arrays
    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checked = true;
    })

    console.log("Meta(s) marcadas como concluída(s)");

}

const metasRealizdas = async () => {
    // vamos pegar uma meta por vez utilizando o metas.filter e rodar a função
    const realizadas = metas.filter((meta) => {
        // retorna verdadeiro se a meta faz parte do filtro, ou seja, se checked = true
        return meta.checked;
    })

    if (realizadas.length == 0) {
        console.log("Complete uma meta para visualiza-la aqui! <3");
        return;
    }
    
    await select({
        message: "Metas Concluídas: " + realizadas.length,
        choices: [...realizadas]
    }
    )
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        // apenas meta.checked que retornar TRUE irá fazer parte de abertas
        return meta.checked != true // ou !meta.checked
    })

    if (abertas.length == 0) {
        console.log("Parabéns! Você realizou todas as suas metas.");
        return;
    }
    console.log(metasAbertas)

    await select({
        message: "Metas em aberto: " + abertas.length,
        choices: [...abertas]
    })
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
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Sair do aplicativo",
                    value: "sair"
                },
            ],
            
        });
        
        switch (opcao) {
            case "cadastrar":
                await cadastrarMeta();
                console.log(metas);
                break;
            case "listar":
                await listarMetas();
                break;
            case "realizadas":
                await metasRealizdas();
                break;
            case "abertas":
                await metasAbertas();
                break;
            case "sair":
                console.log("Até a proxima");
                return
        }
    }   
}

start();