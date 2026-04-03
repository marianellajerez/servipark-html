document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo de Fechas (Rango de 2 meses)
    const inputInicio = document.getElementById('fechaInicio');
    const inputFin = document.getElementById('fechaFin');
    
    if (inputInicio && inputFin) {
        const hoy = new Date();
        const haceDosMeses = new Date();
        haceDosMeses.setMonth(hoy.getMonth() - 2);

        const formatDate = (date) => date.toISOString().split('T')[0];

        inputInicio.value = formatDate(haceDosMeses);
        inputFin.value = formatDate(hoy);
    }

    // 2. Inicialización de Gráficos
    initCharts();
    
    // Simulación de datos KPI
    document.getElementById('kpi-ingresos').textContent = '$1.250.000';
    document.getElementById('kpi-tickets').textContent = '245';
});

function initCharts() {
    // Gráfico Circular (Distribución)
    const ctxCircular = document.getElementById('chartCircular').getContext('2d');
    new Chart(ctxCircular, {
        type: 'pie',
        data: {
            labels: ['Carros', 'Motos', 'Bicicletas'],
            datasets: [{
                data: [65, 30, 5],
                backgroundColor: ['#22C55E', '#F59E0B', '#EF4444'],
                borderWidth: 1
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    // Gráfico de Barras (Ingresos)
    const ctxBarras = document.getElementById('chartBarras').getContext('2d');
    new Chart(ctxBarras, {
        type: 'bar',
        data: {
            labels: ['Febrero', 'Marzo', 'Abril'],
            datasets: [{
                label: 'Ingresos ($)',
                data: [450000, 520000, 280000],
                backgroundColor: '#22C55E'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true } }
        }
    });
}