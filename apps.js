function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let hombre = document.getElementById("hombre");

    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    if (texto.length != 0) {
      tituloMensaje.textContent = textoCifrado;
      parrafo.textContent = "";
      hombre.src = "img/encriptado.jpg";
    } else {
      hombre.src = "img/hombrebuscando.jpg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Lo sentimos!", "Debes ingresar un texto", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let hombre = document.getElementById("hombre");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        tituloMensaje.textContent = textoCifrado;
        parrafo.textContent = "";
        hombre.src = "img/desencriptado.jpeg";
      } else {
        hombre.src = "img/hombrebuscando.jpg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Lo sentimos!", "Debes ingresar un texto", "warning");
      }
  }


  function copiar() {
    let copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copiar");
  }
  
  document.querySelector("#copiar").addEventListener("click", copiar);
  