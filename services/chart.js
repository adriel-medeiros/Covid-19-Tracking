const Chart = require('chart.js');

async function chartMaker(set) {

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
  });

  
    /*
     const NO = await getData('Norte');
    const NE = await getData('Nordeste');
    const CO = await getData('Centro-Oeste');
    const SD = await getData('Sudeste');
    const SL = await getData('Sul');

    const data = [NO,NE,CO,SD,SL]
    const colors = [
                    'rgba(102, 215, 61, 1)',
                    'rgba(220, 65, 65,1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ]


    const ctx = document.getElementById('chart').getContext('2d');
    

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          
          labels: SD.xValues,
          datasets: data.map((reg, i) => {
                                return {
                                  label: reg.givenRegion,
                                  data: reg.yValues,
                                  fill: false,
                                  borderColor: colors[i],
                                }
                              })
          
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Deaths due to COVID-19 in Brazil'
          },
        }
    */
   
      
  
    
}

async function getData(givenRegion){
    //Arrays of dates, new death rate and monthly total quantity
    const xValues = []; // Dates = xAxes
    const yValues = []; // New death quantity = yAxes
    const deathsArr = []; 


    const response = await fetch('brazil_covid19.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    let totalD = 0; // Acummulator that expresses total quantity on a particular date

    table.forEach((row,index)=> {

      const columns = row.split(',');
      const date = columns[0].split('2020-')[1]; //Format: month-day (mm-dd)
      const region = columns[1];
      const state = columns[2];
      const cases = columns[3];
      const deaths = columns[4];

      if (region == givenRegion) {            
        //Filtering by region
        if (xValues.includes(date)) {
          // Adding values to the acummulator
          totalD += parseInt(deaths);

        } else {

          yValues.length > 0 ? yValues.push(totalD - deathsArr[deathsArr.length - 1]) : yValues.push(deaths);
        
          xValues.push(date);
          deathsArr.push(totalD);
          totalD = parseInt(deaths);

        }

      }

    });

    return {givenRegion ,xValues, yValues};

}

module.exports = {
  chart:chartMaker

}
