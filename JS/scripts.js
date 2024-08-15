// Función para mostrar u ocultar listas
function toggleList(id) {
    const element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

// Función para mostrar una alerta cuando se hace clic en el botón
function showAlert() {
    alert("Bienvenidos a mi pagina mejorada");
}

// Función para alternar entre modo claro y oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Función para saludar al usuario
function saludarUsuario() {
    const nombre = document.getElementById('nombreUsuario').value;
    const mensaje = document.getElementById('mensajeSaludo');
    if (nombre) {
        mensaje.textContent = `¡Hola, ${nombre}! Gracias por visitar mi página.`;
    } else {
        mensaje.textContent = '¡Hola! Gracias por visitar mi página.';
    }
}
