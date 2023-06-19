////////////////////////////// Temperature in home Poznan///////////////////////////////////////////////////////////
const tinpn = document.getElementById('temp-in-pn');
const hinpn = document.getElementById('hum-in-pn');

const toutpn = document.getElementById('temp-out-pn');
const houtpn = document.getElementById('hum-out-pn');
const poutpn = document.getElementById('press-out-pn');

new Chart(tinpn, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [3,1,1,1],
                value: [1,1,1,1],
                backgroundColor:["blue","green", "yellow", "red"],
                borderWidth: 1,
            }
        ]
    },
    options: {
        circumference: 180,
        rotation: 270,
        cutout: '90%',
        aspectRatio: 2,
        events: ["mouseout", "click", "touchstart", "touchmove", "touchend"],
        responsive: true,
        
    } 
  });
///////////////////////////// Humidity in home Poznan///////////////////////////////////////////////////////////
new Chart(hinpn, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [2,1,1,1],
                value: [1,1,1,1],
                backgroundColor:["orange","yellow", "green", "blue"],
                borderWidth: 1,
            }
        ]
    },
    options: {
        circumference: 180,
        rotation: 270,
        cutout: '90%',
        aspectRatio: 2,
        events: ["mouseout", "click", "touchstart", "touchmove", "touchend"],
        responsive: true,
        
    } 
  });
///////////////////////////// Temperature outside in Poznan///////////////////////////////////////////////////////////
new Chart(toutpn, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [3,1,1,1],
                value: [1,1,1,1],
                backgroundColor:["blue","green", "yellow", "red"],
                borderWidth: 1,
            }
        ]
    },
    options: {
        circumference: 180,
        rotation: 270,
        cutout: '90%',
        aspectRatio: 2,
        events: ["mouseout", "click", "touchstart", "touchmove", "touchend"],
        responsive: true,
        
    } 
  });
///////////////////////////// Humidity outside in Poznan///////////////////////////////////////////////////////////
new Chart(houtpn, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [2,1,1,1],
                value: [1,1,1,1],
                backgroundColor:["orange","yellow", "green", "blue"],
                borderWidth: 1,
            }
        ]
    },
    options: {
        circumference: 180,
        rotation: 270,
        cutout: '90%',
        aspectRatio: 2,
        events: ["mouseout", "click", "touchstart", "touchmove", "touchend"],
        responsive: true,
        
    } 
  });
///////////////////////////// Air pressure outside in Poznan///////////////////////////////////////////////////////////
new Chart(poutpn, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [2,1,1,1],
                value: [1,1,1,1],
                backgroundColor:["orange","yellow", "green", "blue"],
                borderWidth: 1,
            }
        ]
    },
    options: {
        circumference: 180,
        rotation: 270,
        cutout: '90%',
        aspectRatio: 2,
        events: ["mouseout", "click", "touchstart", "touchmove", "touchend"],
        responsive: true,
        
    } 
  });