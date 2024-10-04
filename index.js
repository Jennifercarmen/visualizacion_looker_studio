const dscc = require('@google/dscc');

const drawViz = (data) => {
  const ctx = document.getElementById('myChart').getContext('2d');

  const labels = data.tables.DEFAULT.map(row => row.dimension[0]);
  const sessions = data.tables.DEFAULT.map(row => row.metric[0]);
  const registrosPersonas = data.tables.DEFAULT.map(row => row.metric[1]);
  const registrosComerciantes = data.tables.DEFAULT.map(row => row.metric[2]);
  const tasaExito = data.tables.DEFAULT.map(row => row.metric[3]);

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'barra_vertical_100',
          data: sessions,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'media_barra_1',
          data: registrosPersonas,
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: 'medio_barra_2',
          data: registrosComerciantes,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Tasa de éxito',
          data: tasaExito,
          type: 'line',
          fill: false,
          borderColor: 'rgba(153, 102, 255, 1)',
          tension: 0.1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
};

dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
