/*********************************************************
 Scripts para o EXEMPLO 1
 *********************************************************/

// Crianda variavel para manipular a div "Lampada"

var lampada = document.getElementById('lampada')

//  Função para acender a luz Verde
function acenderVerde() {
    lampada.style.backgroundColor = 'green';

}

//  Função para acender a luz Verde
function acenderVermelho() {
    lampada.style.backgroundColor = 'red';

}

//  Função para acender a luz Verde
function acenderAzul() {
    lampada.style.backgroundColor = 'blue';

}

//  Função para acender a luz Verde
function acenderAmarelo() {
    lampada.style.backgroundColor = 'yellow';

}

//  Função para acender a luz Verde
function apagar() {
    lampada.style.backgroundColor = 'white';

}

// =-==============================SCRIPT SIMPLES============================================-=

function acender(cor) {
    lampada.style.backgroundColor = cor;

}

/*********************************************************
 
 Scripts para o EXEMPLO 2

 *********************************************************/

function falar() {
    const frases =[
        'Hoje está um belo dia',
        'Eu sou beta cara? Eu sou BETA CARA??',
        'Não meu, a mulher te mque entender que eu não quero uma cervejinha barata, eu to tomando o meu campari cara',
        'Cala a boca ai o Beta'
    ];

    let indice = 0;

    let numero = Math.random();

    if (numero > 0.75)
        indice = 3;
    else
        if (numero > 0.5)
            indice = 2;
        else
            if (numero > 0.25)
                indice = 1;

    let divTagarela = document.getElementById('tagarela');

    divTagarela.innerHTML = frases[indice];
}

/*********************************************************
 
 Scripts para o EXEMPLO 3

 *********************************************************/

function validarDados() {
    let nome = frmExemplo.inNome.value;
    let idade = frmExemplo.inIdade.value;

    console.log('Nome:  ', nome, 'Idade:', idade)

    if (nome.trim() == ''){
        alert('O campo nome não pode estar vazio!'),
        frmExemplo.inNome.focus();
        return false
    }

    if (idade ==''){
        alert('O campo idade não pode estar vazio!')
        frmExemplo.inIdade.focus(); 
        return false
    }

    if (idade <0){
        alert('A idade não pode ser negativa');
        frmExemplo.inIdade.focus();
        return false
    }   

    alert('Muito bem Flipper, pegue seu peixe!')
}