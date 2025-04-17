function cambiarTexto() {
    document.getElementById("miParrafo").textContent = "¡El texto ha sido cambiado!";
  }
  
  window.cambiarTexto = cambiarTexto; // Esto la hace accesible desde el HTML