var cpf = '1.65.555.89-00';
var padao = /\D/g;

cpf = cpf.replace(padao, '')

var cpfIsValid = true;





if (cpf.length == 11) {

    let soma = 0
    let resto;

    // Vailidação Primero DIGITO
    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    }

    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        cpfIsValid = false;
    }




    // Validação segundo digito
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    }

    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        cpfIsValid = false;
    }

    if(cpfIsValid == true){
            let novoCpf = cpf.substr(0,3)+'.'+cpf.substr(3,3)+'.'+cpf.substr(6,3)+'-'+cpf.substr(9,2)
            console.log("Novo CPF")
    }else{
        console.log("CPF não é valido")
    }












} else {
    cpfIsValid = false
    console.log("CPF não tem 11 (onze) dígitos")
}