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

document.addEventListener('DOMContentLoaded', function () {
   // Asegúrate de que el primer foco esté encendido por defecto
   document.getElementById('CL1').classList.add('encendido');
});