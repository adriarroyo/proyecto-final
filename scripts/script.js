
// Mostrar u Ocultar la seccion de Leer más...
function toggleSection() {    
    var textoOculto = document.getElementById("toggleBloque");  
      if (!textoOculto.style.display || textoOculto.style.display === "none") {  
          textoOculto.style.display = "block";       
          document.getElementById("toggleBloque").textContent = "Leer menos";   
     } else {       
          textoOculto.style.display = "none";        
          document.getElementById("toggleBloque").textContent = "Leer más";    
        }
    }