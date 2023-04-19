google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable( gerarDados() );

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('grafico-linha'));

        chart.draw(data, options);
      }

function gerarDados(){
    let dados = [
        [
            ['Ano', 'Vendas', 'Despesas', 'Lucro'],
            ['2004',  Math.random()*1000,      Math.random()*1000,  Math.random()*1000],
            ['2005',  Math.random()*1000,      Math.random()*1000,  Math.random()*1000],
            ['2006',  Math.random()*1000,      Math.random()*1000,  Math.random()*1000],
            ['2007',  Math.random()*1000,      Math.random()*1000,  Math.random()*1000],
            ['2008',  Math.random()*1000,      Math.random()*1000,  Math.random()*1000],
            ['2009',  Math.random()*1000,      Math.random()*1000,  Math.random()*1000],
            ['20010',  Math.random()*1000,      Math.random()*1000,  Math.random()*1000]
          ]
    ];

    return dados;
}