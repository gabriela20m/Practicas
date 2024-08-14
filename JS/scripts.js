function toggleList(id) {
    var element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

function showAlert() {
    alert("¡Has hecho clic en el botón!");
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function saludarUsuario() {
    const nombre = document.getElementById('nombreUsuario').value;
    const mensaje = document.getElementById('mensajeSaludo');
    if (nombre) {
        mensaje.textContent = `¡Hola, ${nombre}! Gracias por visitar mi página.`;
    } else {
        mensaje.textContent = '¡Hola! Gracias por visitar mi página.';
    }
}
