document.addEventListener('DOMContentLoaded', () => {
    // --- 1. CONFIGURACIÓN DE VALORES ALEATORIOS ---

    // Tarifa: Aleatoria entre 20 y 80, múltiplo de 10
    const tarifaPorMinuto = Math.floor(Math.random() * (8 - 2 + 1) + 2) * 10;

    // Tiempo: Entre 1 y 5 horas, en fracciones de 10 minutos
    // 1 hora = 60 min, 5 horas = 300 min. 
    // Paso de 10 min: elegimos un número entre 6 y 30 y multiplicamos por 10.
    const minutosTranscurridos = Math.floor(Math.random() * (30 - 6 + 1) + 6) * 10;
    
    // --- 2. CÁLCULOS DE TIEMPO Y DINERO ---
    
    const ahora = new Date();
    const fechaIngresoDato = new Date(ahora.getTime() - (minutosTranscurridos * 60 * 1000));
    const valorTotal = minutosTranscurridos * tarifaPorMinuto;

    // --- 3. FUNCIONES DE FORMATO ---

    const formatFecha = (fecha) => {
        const hora = fecha.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        const dia = fecha.toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' });
        return `${hora} - ${dia}`;
    };

    const formatMoneda = (valor) => `$${valor.toLocaleString('es-CO')}`;

    const formatTiempo = (totalMinutos) => {
        const hrs = Math.floor(totalMinutos / 60);
        const mins = totalMinutos % 60;
        return hrs > 0 ? `${hrs}h ${mins > 0 ? mins + 'min' : ''}` : `${mins} min`;
    };

    // --- 4. INYECCIÓN DE DATOS EN EL DOM ---

    const elementos = {
        fechaIngreso: document.getElementById('fechaIngreso'),
        fechaActual: document.getElementById('fechaActual'), // Para salida o impresión
        tarifaDisplay: document.getElementById('tarifaDisplay'),
        tiempoDisplay: document.getElementById('tiempoDisplay'),
        totalDisplay: document.getElementById('totalDisplay')
    };

    if (elementos.fechaIngreso) elementos.fechaIngreso.textContent = formatFecha(fechaIngresoDato);
    if (elementos.fechaActual) elementos.fechaActual.textContent = formatFecha(ahora);
    if (elementos.tarifaDisplay) elementos.tarifaDisplay.textContent = formatMoneda(tarifaPorMinuto);
    if (elementos.tiempoDisplay) elementos.tiempoDisplay.textContent = formatTiempo(minutosTranscurridos);
    if (elementos.totalDisplay) elementos.totalDisplay.textContent = formatMoneda(valorTotal);

    // Persistencia opcional: Si quieres que la placa sea dinámica en todos
    const placa = document.getElementById('placaDisplay');
    if (placa) placa.textContent = localStorage.getItem('lastPlaca') || 'ABC123';
});