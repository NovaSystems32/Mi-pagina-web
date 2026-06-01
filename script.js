// --- BOTÓN DE ALERTA ---
let boton = document.getElementById("miBoton");
if (boton) {
  boton.addEventListener("click", function() {
    alert("¡Hiciste clic en el botón!");
  });
}


// --- BOTÓN CAMBIAR COLOR ---
let btnColor = document.getElementById("btnColor");
if (btnColor) {
  btnColor.addEventListener("click", function() {
    let parrafo = document.getElementById("miParrafo");
    parrafo.style.color = "red";
    parrafo.style.fontSize = "24px";
  });
}


// --- BOTÓN SALUDAR ---
let btnSaludar = document.getElementById("btnSaludar");
if (btnSaludar) {
  btnSaludar.addEventListener("click", function() {
    let nombre = document.getElementById("miInput").value;
    let saludo = document.getElementById("saludo");

    if (nombre === "") {
      saludo.textContent = "Por favor escribí tu nombre.";
    } else {
      saludo.textContent = "¡Hola, " + nombre + "! Bienvenido a mi página.";
    }
  });
}


// --- FORMULARIO DE CONTACTO ---
let btnEnviar = document.getElementById("btnEnviar");
if (btnEnviar) {
  btnEnviar.addEventListener("click", function() {
    let nombre    = document.getElementById("nombre").value;
    let email     = document.getElementById("email").value;
    let mensaje   = document.getElementById("mensaje").value;
    let respuesta = document.getElementById("respuesta");

    if (nombre === "" || email === "" || mensaje === "") {
      respuesta.textContent = "⚠️ Por favor completá todos los campos.";
      respuesta.style.color = "red";
    } else {
      respuesta.textContent = "✅ ¡Mensaje enviado! Gracias, " + nombre + ".";
      respuesta.style.color = "green";
    }
  });
}