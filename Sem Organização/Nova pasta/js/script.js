google.charts.load('current', {
  'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ]);

  var options = {

    // resolution:{countries}
  
  };
  var chart = new google.visualization.GeoChart(document.getElementById('mapaMundi'));

  chart.draw(data, options);
}
// ============================

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Confirmados',     1],
          ['Mortos',      1],
          ['Recuperados',  1]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('graficoPizza'));

        chart.draw(data, options);
      }


// ============================

google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
  var data = new google.visualization.DataTable();



  data.addColumn('string', 'SIGLA');
  data.addColumn('number', 'ESTADO');
  data.addColumn('string', 'CASOS');
  data.addColumn('string', 'MORTES');
  data.addColumn('string', 'SUSPEITOS');
  data.addColumn('string', 'DESCARTADOS');


  data.addRows([
    ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
    ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
    ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
    ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike'],
    ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
    ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
    ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
    ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike'],
    ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
    ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
    ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
    ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike'],
    ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
    ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
    ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
    ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike'],
    ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
    ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
    ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
    ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike'],
    ['Mike',  {v: 10000, f: '$10,000'}, 'Mike', 'Mike', 'Mike', 'Mike'],
    ['Jim',   {v:8000,   f: '$8,000'},  'Mike', 'Mike', 'Mike', 'Mike'],
    ['Alice', {v: 12500, f: '$12,500'}, 'Mike',  'Mike', 'Mike', 'Mike'],
    ['Bob',   {v: 7000,  f: '$7,000'},  'Mike',  'Mike', 'Mike', 'Mike']
  ]);

  var table = new google.visualization.Table(document.getElementById('tabelaEstados'));

  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}