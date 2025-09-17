
const ctx = document.getElementById('dashboardChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['File 1', 'File 2', 'File 3', 'File 4', 'File 5'],
        datasets: [{
            label: 'Detected Threats',
            data: [0, 1, 0, 1, 0],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});
