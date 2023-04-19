var vet = [0,1,2,3,4,5,6,7,8,9,10]
var pares = 0
var positivos = 0


for (let i = 0; i < vet.length; i++) {

    if (vet [i]%2 == 0)
    pares++;

    if (vet [i]>0)
    positivos++;
}

console.log('Pares', pares);
console.log("Impares", positivos);