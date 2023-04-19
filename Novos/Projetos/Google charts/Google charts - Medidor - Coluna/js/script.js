google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
  let data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Motivation Level');
      data.addColumn('number', 'Energy Level');

      data.addRows([
        [{v: [7, 0, 0], f: '7 am'}, 1, .25],
        [{v: [8, 0, 0], f: '8 am'}, 2, .5],
        [{v: [9, 0, 0], f:'9 am'}, 3, 1],
        [{v: [10, 0, 0], f: '10 am'}, 4, 2.25],
        [{v: [11, 0, 0], f: '11 am'}, 5, 2.25],
        [{v: [12, 0, 0], f: '12 pm'}, 6, 3],
        [{v: [13, 0, 0], f: '1 pm'}, 7, 4],
        [{v: [14, 0, 0], f: '2 pm'}, 8, 5.25],
        [{v: [15, 0, 0], f: '3 pm'}, 9, 7.5],
        [{v: [16, 0, 0], f: '4 pm'}, 10, 10],
      ]);

      let options = {
        title: 'Motivation and Energy Level Throughout the Day',
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [6, 30, 0],
            max: [16, 30, 0]
          }
        },
      };

      let chart = new google.visualization.ColumnChart(
        document.getElementById('chart-coluna'));

      chart.draw(data, options);
    }

    // ------------------------------------------------ MEDIDOR --------------------------

    google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        let data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Temp', 82],
          ['Network', 68]
        ]);

        let options = {
          width: 400, height: 480,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        let chart = new google.visualization.Gauge(document.getElementById('chart-medidor'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);

        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 5000);
        
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 10000);

        setInterval(function() {
          data.setValue(3, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 2000);
      }