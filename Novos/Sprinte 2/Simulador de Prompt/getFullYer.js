var data1 = new Date();
console.log(data1);

var data2 = new Date("2005-05-12 18:25:58");
console.log(data2);

// ------------------------------------------------------ //

console.log("Data:", data2)
console.log("Ano:", data2.getFullYear());
console.log("Mês:", data2.getMonth());
console.log("Dia?:", data2.getDay());
console.log("Horas!!:", data2.getHours());
console.log("MINUTINHOS:", data2.getMinutes());
console.log("AI PRETO, Segundos", data2.getSeconds());

const mes = ['Janeiro','Fevereiro0','Março','Abril','Maio','Junho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

console.log("Mês:", mes[data2.getMonth()-1]);