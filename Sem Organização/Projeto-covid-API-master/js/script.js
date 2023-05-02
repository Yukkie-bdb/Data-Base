// google.charts.load('current', {
//   'packages':['geochart'],
// });
// google.charts.setOnLoadCallback(drawRegionsMap);

// function drawRegionsMap() {
//   var data = google.visualization.arrayToDataTable([
//     ['Country', 'Popularity'],
//     ['Germany', 200],
//     ['United States', 300],
//     ['Brazil', 400],
//     ['Canada', 500],
//     ['France', 600],
//     ['RU', 700]
//   ]);

//   var options = {

//     // resolution:{countries}

//   };
//   var chart = new google.visualization.GeoChart(document.getElementById('mapaMundi'));

//   chart.draw(data, options);
// }
// // ============================

//       google.charts.load('current', {'packages':['corechart']});
//       google.charts.setOnLoadCallback(drawChart);

//       function drawChart() {

//         var data = google.visualization.arrayToDataTable([
//           ['Task', 'Hours per Day'],
//           ['Confirmados',     1],
//           ['Mortos',      1],
//           ['Recuperados',  1]
//         ]);

//         var options = {
//           title: 'My Daily Activities'
//         };

//         var chart = new google.visualization.PieChart(document.getElementById('graficoPizza'));

//         chart.draw(data, options);
//       }


// // ============================

// google.charts.load('current', {'packages':['table']});
// google.charts.setOnLoadCallback(drawTable);

// function drawTable() {
//   var data = new google.visualization.DataTable();



//   data.addColumn('string', 'SIGLA');
//   data.addColumn('number', 'ESTADO');
//   data.addColumn('string', 'CASOS');
//   data.addColumn('string', 'MORTES');
//   data.addColumn('string', 'SUSPEITOS');
//   data.addColumn('string', 'DESCARTADOS');


//   data.addRows([
//     ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
//     ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike'],
//     ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
//     ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike'],
//     ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
//     ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike'],
//     ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
//     ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike'],
//     ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
//     ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike'],
//     ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
//     ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
//     ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike']
//   ]);

//   var table = new google.visualization.Table(document.getElementById('tabelaEstados'));

//   table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
// }

function mostraerro(mensagem) {
  let erro = document.getElementById('erro')
  erro.style.display = 'block';
  erro.innerHTML = 'Erro ao acessar a API:<br>' + mensagem;
}

async function pegardados() {
  let erro = document.getElementById('erro')
  erro.style.display = 'none';
  await fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries')
    .then(Response => Response.json())
    .then(dados => arrumardados(dados))
    .catch(e => mostraerro(e.mensagem))
}

var dados_mapa = [
  ['país', 'casos'],
  ['0', 0]
];

var dados_gra = [
  ['dados', 'números'],
  ['0', 0]
];

function arrumardados(dados) {
  if (dados.data.length > 0) {
    dados_mapa = [['país', 'casos']];
    dados_gra = [['dados', 'números']];
  }
  let confirmados = 0;
  let mortos = 0;
  let recuperados = 0;
  for (let i = 0; i < dados.data.length; i++) {
    dados_mapa.push([dados.data[i].country, dados.data[i].confirmed]);
    confirmados += dados.data[i].confirmed;
    mortos += dados.data[i].deaths;
    recuperados += dados.data[i].recovered;
  }
  drawRegionsMap();
  dados_gra.push(['mortos', mortos]);
  dados_gra.push(['confirmados', confirmados]);
  dados_gra.push(['recuperados', recuperados]);
  drawChart();
}




//
google.charts.load('current', {
  'packages': ['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable(dados_mapa);

  var options = {
    colorAxis: {colors: ['#c8ffc8', '#008000']}
  };
  var chart = new google.visualization.GeoChart(document.getElementById('mapaMundi'));

  chart.draw(data, options);
}
// ============================



google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable(dados_gra);

  var options = {
    title: 'mortos,recuperados e comfirmados da COVID-19'
  };

  var chart = new google.visualization.PieChart(document.getElementById('graficoPizza'));

  chart.draw(data, options);
}
// ============================











async function pegardadostabela() {
  let erro = document.getElementById('erro')
  erro.style.display = 'none';
  await fetch('https://covid19-brazil-api.now.sh/api/report/v1')
    .then(response => response.json())
    .then(dados => dadosdatabela(dados))
    .catch(e => mostraerro(e.mensagem))
}


let dados_tab = [
  ['sigla', 'estado', 0, 0, 0, 0]
]






function dadosdatabela(dados) {
  let barras = document.getElementById('barras');
  barras.innerHTML = '';

  for (let i = 0; i < dados.data.length; i++) {
    let baritas = '';

    if (i % 2 != 0)
      baritas = '<tr class="bonito">';
    else
      baritas = '<tr class="bonito2">';

    baritas += '<td>' + dados.data[i].uf + '</td>' +
      '<td>' + dados.data[i].state + '</td>' +
      '<td>' + dados.data[i].cases + '</td>' +
      '<td>' + dados.data[i].deaths + '</td>' +
      '<td>' + dados.data[i].suspects + '</td>' +
      '<td>' + dados.data[i].refuses + '</td>' +
      '</tr>';

    barras.innerHTML += baritas;
  }
}

document.addEventListener("DOMContentLoaded",
  function (event) {
    pegardadostabela();
    pegardados();
  }
);