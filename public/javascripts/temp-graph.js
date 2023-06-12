//import Chart from 'chart.js/auto';
const ctx = document.getElementById('temp');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [3,1,1,1],
                value: [1,1,1,1],
                backgroundColor:["blue","green", "yellow", "red"],
                borderWidth: 4,
            }
        ]
    },
    options: {
        circumference: 180,
        rotation: 270,
        cutout: '80%',
        aspectRatio: 2,
        events: ["mouseout", "click", "touchstart", "touchmove", "touchend"],
        responsive: true,
        
    } 
  });
  