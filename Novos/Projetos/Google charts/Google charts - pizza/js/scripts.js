google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable( obterDados() );

        var options = {
          title: 'My Daily Activities',
          // pieHole: 0.4,
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    
// FUNÇÃO SIMULAR OBTENÇÃO DE DADOS

function obterDados() {
    let dados = [
        ['Atividades', 'Horas diárias'],
        ['Trabalhar', Math.random()*10],
        ['Comer', Math.random()*10],
        ['Deslocamento', Math.random()*10],
        ['Dormir', Math.random()*10],

    
    ];
    return dados;
}
