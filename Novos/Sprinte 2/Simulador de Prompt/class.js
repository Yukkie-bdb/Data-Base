class Retangulo {

    constructor (comprimento, largura) {
        this.comprimento = comprimento
        this.largura = largura;
    }

    obterArea(){
        return this.comprimento * this.largura;
    }

    alterarComprimento (comp) {
        this.comprimento = comp;
    }

    alterarLargura (larg){
        this.largura = larg;
    }

}

var ret = new Retangulo(10,15);
console.table(ret);

console.log('Comprimento:', ret.comprimento);
console.log("Largura", ret.largura);
console.log("Área:", ret.obterArea());

ret.alterarComprimento(20);

console.log('Comprimento:', ret.comprimento);
console.log("Largura", ret.largura);
console.log("Área:", ret.obterArea());