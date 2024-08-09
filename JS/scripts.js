// scripts.js

function showAlert() {
    alert('¡Gracias por visitar mi página!');
}

// Ejemplo de función para alternar la visibilidad de las listas
function toggleList(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
