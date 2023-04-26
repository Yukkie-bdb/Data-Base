var nome = "joão José Santos Oliveira Dõm Pedro Marec$au Teodoro Da Fonseca"
var padao = /^(\S+)\b.*\b(\S+)$/;

let nomeValido = padao.test(nome);

    if (nomeValido == true){
        console.log("Nois conquistaremos Jerusalem?", nomeValido)
        let novoNome = padao.exec(nome);
        let substituir = "$2, $1";

        console.log(novoNome[0],novoNome[1],novoNome[2])

        nome = nome.replace(padao, substituir);
        console.log(nome)
    }

    else{
        console.log("Essa porta me matara?", nomeValido)
    }