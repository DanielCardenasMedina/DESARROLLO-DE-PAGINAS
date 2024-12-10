function showSection(sectionId) {
   const sections = document.querySelectorAll('.hero, .content-section');
   sections.forEach(section => {
       section.classList.remove('active');
       section.style.opacity = '0';
       section.style.transform = 'translateY(20px)';
   });

   setTimeout(() => {
       document.getElementById(sectionId).classList.add('active');
       document.getElementById(sectionId).style.opacity = '1';
       document.getElementById(sectionId).style.transform = 'translateY(0)';
   }, 500);
}

function showLogin() {
   alert('Redirigiendo a la página de inicio de sesión de Google.');
   // Aquí podrías agregar la redirección a la página de inicio de sesión real
}
