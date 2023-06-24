
//////////////////////////////////////////////TEMP//////////////////////////////
const data = {
    labels: false,
    datasets: [{
      label: false,
      data: [15, 7.5 , 3.75, 3.75],
      backgroundColor: [
        'rgba(0, 0, 255, 1)',
        'rgba(60, 179, 113, 1)',
        'rgba(255, 165, 0, 1)',
        'rgba(255, 0, 0, 1)'
        
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      needleValue: 25,
      // 0 to -30 *C
      //
      borderWidth: '2',
      borderColor: 'white',
      cutout: '90%',
      circumference: 180,
      rotation: 270,
      borderRadius: 8,
    }]
  };
  // gaugeNeedle block
  const gaugeNeedle = {
    id: 'gaugeNeedle',
    afterDatasetDraw(chart, args, options) {
        const { ctx, config, data, chartArea: {top, bottom, left, right, width, height } } = chart;
        ctx.save();
        

        const needleValue = data.datasets[0].needleValue;
        const dataTotal = data.datasets[0].data.reduce((a, b) => a + b,0);
        //należy zmienić wzór dla zmiennej angle
        const angle =  Math.PI + ( 1 / dataTotal * needleValue * Math.PI);
      
        //od PI - 180 st do 360 
        
        const cx = width / 2;
        const cy = chart._metasets[0].data[0].y;

        //needle
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0,-2);
        ctx.lineTo(chart._metasets[0].data[0].outerRadius + 50, 0);
        ctx.lineTo(0, 2);
        ctx.fillStyle = '#444';
        ctx.fill();

        //needle dot
        ctx.translate(-cx, cy);
        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, 10);
        ctx.fill();
        ctx.restore();

        //text fill
        ctx.font = '50px Helvetica';
        ctx.fillStyle = '#444';
        ctx.fillText(needleValue + '*C' , cx, cy + 50 );
        ctx.textAlign = 'center';
        ctx.restore();
    }

  }

  // config 
  const config = {
    type: 'doughnut',
    data,
    options: {

        events: ["mouseout", "click", "touchstart", "touchmove", "touchend"],
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                
            }
        }
      
    },
    plugins: [gaugeNeedle]
  };

  // render init block
  const tempChart = new Chart(
    document.getElementById('temp-pn-in'),
    
    config
  );
///////////////////////////////////////////////HUM//////////////////////////////



const dataHum = {
  labels: false,
  datasets: [{
    label: false,
    data: [15, 7.5 , 3.75, 3.75],
    backgroundColor: [
      'rgba(0, 0, 255, 1)',
      'rgba(60, 179, 113, 1)',
      'rgba(255, 165, 0, 1)',
      'rgba(255, 0, 0, 1)'
      
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)'
    ],
    needleValue: 15,
    // 0 to -30 *C
    //
    borderWidth: '2',
    borderColor: 'white',
    cutout: '90%',
    circumference: 180,
    rotation: 270,
    borderRadius: 8,
  }]
};
// gaugeNeedle block
const gaugeNeedleHum = {
  id: 'gaugeNeedleHum',
  afterDatasetDraw(chart, args, options) {
      const { ctx, config, data, chartArea: {top, bottom, left, right, width, height } } = chart;
      ctx.save();
      

      const needleValue = dataHum.datasets[0].needleValue;
      const dataTotal = dataHum.datasets[0].data.reduce((a, b) => a + b,0);
      //należy zmienić wzór dla zmiennej angle
      const angle =  Math.PI + ( 1 / dataTotal * needleValue * Math.PI);
    
      //od PI - 180 st do 360 
      
      const cx = width / 2;
      const cy = chart._metasets[0].data[0].y;

      //needle
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0,-2);
      ctx.lineTo(chart._metasets[0].data[0].outerRadius + 50, 0);
      ctx.lineTo(0, 2);
      ctx.fillStyle = '#444';
      ctx.fill();

      //needle dot
      ctx.translate(-cx, cy);
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, 10);
      ctx.fill();
      ctx.restore();

      //text fill
      ctx.font = '50px Helvetica';
      ctx.fillStyle = '#444';
      ctx.fillText(needleValue + '*C' , cx, cy + 50 );
      ctx.textAlign = 'center';
      ctx.restore();
  }

}

// config 
const configHum = {
  type: 'doughnut',
  data,
  options: {

      events: ["mouseout", "click", "touchstart", "touchmove", "touchend"],
      responsive: true,
      plugins: {
          legend: {
              display: false,
          },
          tooltip: {
              yAlign: 'bottom',
              displayColors: false,
              
          }
      }
    
  },
  plugins: [gaugeNeedleHum]
};

// render init block
const humChart = new Chart(
  document.getElementById('hum-pn-in'),
  
  configHum
);

