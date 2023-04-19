class Sorvete {

    constructor (sabor, preco, tamanho){
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
    }
}

var s1 = new Sorvete('Chocolate', '69.00', "Médio");
var s2 = new Sorvete('Chocolate', '06.90', "Grande");
var s3 = new Sorvete('Chocolate', '0.69', "Pequeno");
var s4 = new Sorvete('Garoto', '06.90', "Pequeno");
var s5 = new Sorvete('Chiclete', '69.00', "Médio");

var todos = [s1,s2,s3,s4,s5]

console.table(todos)