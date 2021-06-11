
// Mostrar u Ocultar la seccion de Leer más...
function toggleSection() {    
    var textoOculto = document.getElementById("textoOculto");  
      if (!textoOculto.style.display || textoOculto.style.display === "none") {  
          textoOculto.style.display = "block";       
          document.getElementById("toggleBloque").textContent = "Leer menos";   
     } else {       
          textoOculto.style.display = "none";        
          document.getElementById("toggleBloque").textContent = "Leer más";    
        }
    }
    function showCategory(type) {
        var mascotasElement = document.getElementById("mascotas");
        var paseosElement = document.getElementById("paseos");
        var familiaElement = document.getElementById("familia");

        var mascotasBtnElement = document.getElementById("mascotas-btn");
        var paseosBtnElement = document.getElementById("paseos-btn");
        var familiaBtnElement = document.getElementById("familia-btn");
        switch (type) {
            case "mascotas":
                paseosElement.style.display = "none";
                familiaElement.style.display = "none";
                mascotasElement.style.display = "block";

                paseosBtnElement.style.backgroundColor = "rgb(9, 47, 82)";
                familiaBtnElement.style.backgroundColor = "rgb(9, 47, 82)";
                mascotasBtnElement.style.backgroundColor = "rgb(24, 168, 173)";
                break;
            case "paseos":
                familiaElement.style.display = "none";
                mascotasElement.style.display = "none";
                paseosElement.style.display = "block";

                familiaBtnElement.style.backgroundColor = "rgb(9, 47, 82)";
                mascotasBtnElement.style.backgroundColor = "rgb(9, 47, 82)";
                paseosBtnElement.style.backgroundColor = "rgb(24, 168, 173)";
                break;
            default:
                mascotasElement.style.display = "none";
                paseosElement.style.display = "none";
                familiaElement.style.display = "block";

                mascotasBtnElement.style.backgroundColor = "rgb(9, 47, 82)";
                paseosBtnElement.style.backgroundColor = "rgb(9, 47, 82)";
                familiaBtnElement.style.backgroundColor = "rgb(24, 168, 173)";
                break;

        }
    }