document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    // Establece tu usuario y contraseña válidos
    const validUsername = 'admin'; // Cambia esto según necesites
    const validPassword = 'admin'; // Cambia esto según necesites

    // Lógica de autenticación
    if (username === validUsername && password === validPassword) {
        sessionStorage.setItem('isAuthenticated', true); // Guardar estado de autenticación
        window.location.href = 'index.html'; // Redirigir a index.html
    } else {
        error.textContent = 'Usuario o contraseña incorrectos.'; // Mensaje de error
    }
});
