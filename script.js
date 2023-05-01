var botonMensaje = document.querySelector("textarea");
botonMensaje.focus();
var encryptarMensaje = document.getElementById("encryptar");
encryptarMensaje.onclick = encryptMessage;
var desencryptarMensaje = document.getElementById("desencryptar");
desencryptarMensaje.onclick = descryptMessage;
var copiar = document.getElementById("copiar")
copiar.onclick = copiarMensaje;

var mensajeEncryptado;
var mensajeDesencryptado;

var textarea = document.getElementById("miTextArea");
var modal = document.getElementById("modal");
var modalContent = document.getElementById("modal-content");

window.addEventListener("load", function() {
  textarea.blur(); // Remueve el enfoque del textarea al cargar la página
});
textarea.addEventListener("focus", function() {
  this.placeholder = ""; // Cuando se hace clic en el textarea, se elimina el placeholder
});
textarea.addEventListener("blur", function() {
  if (this.value === "") {
    this.placeholder = "Ingresa tu Mensaje"; // Cuando se hace clic fuera del textarea y está vacío, se restaura el placeholder
  }
});
encryptarMensaje.addEventListener("click", () => {
  var texto = mensajeEncryptado; // Aquí debes agregar el texto encriptado generado
  console.log(texto);
  modal.style.display = "flex";
  modalContent.innerText = texto;
  modalContent.appendChild(copiar);
});
desencryptarMensaje.addEventListener("click", () => {
  var texto = mensajeEncryptado; // Aquí debes agregar el texto encriptado generado
  console.log(texto);
  modal.style.display = "flex";
  modalContent.innerText = texto;
  modalContent.appendChild(copiar);
});
// Agregar event listener para cerrar modal cuando se hace clic fuera de él
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



function encryptMessage() {
    
    let mensajeObtenido = botonMensaje.value;

    let box = ["enter", "imes", "ai", "ober", "ufat"]

    let mensajeEn = mensajeObtenido.replace(/e/g, box[0]).replace(/i/g, box[1]).replace(/a/g, box[2]).replace(/o/g, box[3]).replace(/u/g, box[4]);

    botonMensaje.value = "";
    botonMensaje.focus();

    mensajeEncryptado = mensajeEn;

    return mensajeEn;
}

function descryptMessage() {
    
    let mensaje = botonMensaje.value;

    let box = ["e", "i", "a", "o", "u"]

    let mensajeDesencryptado = mensaje.replace(/enter/g, box[0]).replace(/imes/g, box[1]).replace(/ai/g, box[2]).replace(/ober/g, box[3]).replace(/ufat/g, box[4]);

    botonMensaje.value = "";
    botonMensaje.focus();

    mensajeEncryptado = mensajeDesencryptado;
    
    return mensajeDesencryptado;
}

function copiarMensaje() {
  navigator.clipboard.writeText(mensajeEncryptado)
    .then(function() {
      // Si la copia es exitosa, mostramos una alerta con el texto copiado

    })
    .catch(function(err) {
      // Si hay un error al copiar, lo mostramos en la consola del navegador
        console.error("Error al copiar el texto: ", err);
    });

  alert("Se ha copiado el Texto");
}