function start () {
    
    while (true) {
        let opcao = "Cadastrar"
        
        switch (opcao) {
            case "cadastrar":
                console.log("Vamos Cadastrar");
                break;
            case "listar":
                console.log("Vamos Listar");
                break;
            case "sair":
                return
        }
    }
}

start();