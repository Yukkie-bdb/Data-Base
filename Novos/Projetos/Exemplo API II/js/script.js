/* https://www.mercadobitcoin.net/api/BTC/trades */

function exibirErro(mensagem) {
  let erro = document.getElementById("div-erro");
  erro.style.display = 'block';
  erro.innerHTML = '<b>Erro ao acessar a API:</b><br>' + mensagem;
}

async function carregarDados() {
  let erro = document.getElementById("div-erro");
  erro.style.display = "none";

  await fetch("https://www.mercadobitcoin.net/api/BTC/trades")
    .then(Response => Response.json())
    .then(dados => prepararDados(dados))
    .catch(e => exibirErro(e.mensagem));
}

function prepararDados(dados) {
  if (dados.length > 0) {

    dados_linhas = [['Indice', 'preço']];

    dados_pizza = [['Negociação', 'Volume']];

    let compras = 0;
    let vendas = 0;

    for( let i = 0; i < dados.length; i++){
      if (dados[i].type == 'sell'){
        vendas += dados[i].amount;

        dados_linhas.push( [new Date(dados[i].date*1000), dados[i].price])
      }
      else
        compras += dados[i].amount
    }
    dados_pizza.push(['Compras', compras])
    dados_pizza.push(['Vendas', vendas])  

  }

  desenharGraficoDeLinha();
  desenharGraficoDePizza();



}


/************************************************************************************/
/*************************** FUNCÇÕES PARA OS GRAFICOS ******************************/
/************************************************************************************/


var dados_linhas = [
  ['Indice', 'preço'],
  ['0', 0]
];

var dados_pizza = [
  ['Negociação', 'Volume'],
  ['0', 0]
];

//--- Grafico de linha para os preços de vendas ---

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGraficoDeLinha);

function desenharGraficoDeLinha() {
  let data = google.visualization.arrayToDataTable(dados_linhas);

  let options = {
    title: 'Variação preço',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  let chart = new google.visualization.LineChart(document.getElementById('grafico-precos'));

  chart.draw(data, options);
}

// --- Grafico de pizza para volume de negociações --- //

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGraficoDePizza);

function desenharGraficoDePizza() {

  let data = google.visualization.arrayToDataTable(dados_pizza);

  let options = {
    title: 'Volume de negociações',
    is3D: true,
    legend: { position: 'bottom' }
  };

  let chart = new google.visualization.PieChart(document.getElementById('grafico-volume'));

  chart.draw(data, options);
}