var senha = "Eric#!sobrenome1707"
var padrao = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%!?]).{8,}$/

var resultado = padrao.test(senha);

    if (resultado == true){
        console.log("Tu conseguil MEU PARCEIRO!! 🎉🎉🎉")
    }

    else{
        console.log("Tu Não conseguil cara. 🤨🤨🤨")

    }