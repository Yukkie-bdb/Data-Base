var rodada = 1;
var vitorias = 0;
var derrotas = 0;
var face = '';
var escolhaDoJogador = '';

do{
    face = Math.random() >=0.5 ? 'Cara' : 'Coroa';
    escolhaDoJogador = Math.random() >=0.5 ? 'Cara' : 'Coroa';

    console.log("Você escolheu", escolhaDoJogador, '::: Saiu', face)

    if (escolhaDoJogador==face){
        vitorias++;
        console.log("Parabens cara, tu ganhou ta feliz?")
    }

    else{
        derrotas++; 
        console.log("Perdeu seu PIPOQUEIRO");
    }
rodada++;
}   while (rodada <= 3);

console.log("---------------------------");
console.log("-----------PLACAR----------");
console.log("---------------------------");
console.log("Vitorias:", vitorias);
console.log("Derrotas:", derrotas);
console.log("---------------------------");