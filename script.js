function mostrarProgreso() {
    document.getElementById('pagina-principal').style.display = 'none';
    document.getElementById('progreso-academico').style.display = 'block';
 
    const completedCycles = [1]; // Ejemplo de ciclos completados, esto debería provenir de tu base de datos
 
    for (let i = 1; i <= 8; i++) {
       const foco = document.getElementById(CL${i});
       if (completedCycles.includes(i)) {
          foco.classList.add('encendido');
       } else {
          foco.classList.remove('encendido');
       }
    }
 }
 
 function enviarConsulta() {
    const consulta = document.getElementById('soporte-texto').value;
    alert(Consulta enviada: ${consulta});
    // Aquí podrías agregar la lógica para enviar la consulta a un servidor o un correo electrónico
    document.getElementById('soporte-texto').value = ''; // Limpiar el campo de texto
 }
 
 function verDetalles(url) {
    window.location.href = url;
 }
 
 function irCalificaciones() {
    document.getElementById('pagina-principal').style.display = 'none';
    document.getElementById('calificaciones').style.display = 'block';
 }
 
 function irEvaluaciones() {
    document.getElementById('pagina-principal').style.display = 'none';
    document.getElementById('evaluaciones').style.display = 'block';
 }
 
 function volverInicio() {
    document.getElementById('progreso-academico').style.display = 'none';
    document.getElementById('ucal-connect').style.display = 'none';
    document.getElementById('pagina-principal').style.display = 'block';
 }
 
 function irTutorAcademico() {
    document.getElementById('pagina-principal').style.display = 'none';
    document.getElementById('tutor-academico').style.display = 'block';
 }
 
 function mostrarCalendario() {
    // Lógica para mostrar el calendario
 }
 
 document.addEventListener('DOMContentLoaded', function () {
    // Asegúrate de que el primer foco esté encendido por defecto
    document.getElementById('CL1').classList.add('encendido');
 });