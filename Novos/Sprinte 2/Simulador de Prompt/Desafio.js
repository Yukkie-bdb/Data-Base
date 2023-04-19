var A = 800000;
var B = 950000;
var Y = 0;

while (A < B) {

    console.log("ANO:", Y, "Populção A", A.toFixed(2), "População B", B.toFixed(2));

    A = A * 1.03
    B = B * 1.015
    Y++
}


console.log("ANO:", Y, "Populção A", A.toFixed(2), "População B", B.toFixed(2));