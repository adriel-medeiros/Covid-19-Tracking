const Chart = require('chart.js')

module.exports.chartMaker = async function(set) {

    let ctx = $('#chart');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        
        labels: ['mortes'],
        datasets: [{
          label: 'testing',
          data: set.provinces.deaths
        }]
        
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Deaths due to COVID-19 in Brazil'
        },
      }
    })
};
