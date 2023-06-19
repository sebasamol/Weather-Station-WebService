 const data = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [{
      label: 'Weekly Sales',
      data: [30, 0, 30],
      backgroundColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
        
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      needleValue: 0,
      borderWidth: 4,
      borderColor: 'white',
      cutout: '90%',
      circumference: 180,
      rotation: 270,
      borderRadius: 5,
    }]
  };
  // gaugeNeedle block
  const gaugeNeedle = {
    id: 'gaugeNeedle',
    afterDatasetDraw(chart, args, options) {
        const { ctx, config, data, chartArea: {top, bottom, left, right, width, height } } = chart;
        ctx.save();
        

        const needleValue = data.datasets[0].needleValue;
        const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);
        const angle = Math.PI + (1 / dataTotal * needleValue * Math.PI);

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
        ctx.fillText(needleValue , cx, cy + 50 );
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
  const myChart = new Chart(
    document.getElementById('myChart'),
    
    config
  );

const wykres = new Chart(
    document.getElementById('wykres'),
    config
)