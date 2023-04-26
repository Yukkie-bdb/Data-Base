var frase = "Oloko meu, você não sabia que me utelefone é (55) 1234-5678.";
var padrao = /\((\d{2})\)\s(\d{4,5})-(\d{4})/;

let resultado = padrao.test(frase);

if (resultado == true){
    console.log("Chora não 😂🤣 Positivo")
}

else{
    console.log("🤮")
}

let resultadoDetalhado = padrao.exec(frase);

console.log("😎Padrão Encontrado:", resultadoDetalhado[0]);
console.log("🎁Código Encontrado:", resultadoDetalhado[1]);
console.log("👌Prefixo:", resultadoDetalhado[2]);
console.log("❤️Sufixo:", resultadoDetalhado[3]);