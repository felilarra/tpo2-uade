// ─── SCROLL SUAVE ───────────────────────────────────────────

// Selecciona todos los links del menú que empiecen con #
// (o sea, los que apuntan a secciones de la misma página)
const linksMenu = document.querySelectorAll('a[href^="#"]');

// Para cada link, se escucha el evento "click"
linksMenu.forEach(function(link) {
  link.addEventListener("click", function(e) {

    // Se cancela el salto brusco que haría el navegador por defecto
    e.preventDefault();

    // Se lee a qué sección apunta el link (por ejemplo "#nosotros")
    const destino = link.getAttribute("href");

    // Buscamos ese elemento en la página
    const seccion = document.querySelector(destino);

    // Si existe, scrollea hasta ahí de forma suave
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ─── NAVBAR QUE CAMBIA AL SCROLLEAR ─────────────────────────

// Selecciona el navbar
const navbar = document.getElementById("envoltorio-nav");

// Escucha el evento "scroll" en la ventana
window.addEventListener("scroll", function() {

  // Si el usuario bajó más de 60px desde arriba...
  if (window.scrollY > 200) {

    // Se agrega una clase CSS que cambia el estilo
    navbar.classList.add("navbar-scrolleada");

  } else {

    // Si volvió arriba, se saca esa clase
    navbar.classList.remove("navbar-scrolleada");
  }
});