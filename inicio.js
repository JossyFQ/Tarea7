function usrpas() {
    //var email = document.getElementById('email').value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar que los campos no estén vacíos
    if (username.trim() === '' || password.trim() === '') {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    
    document.oncontextmenu=new Function("return false");

    // En este ejemplo, simplemente mostramos un mensaje de éxito
    alert("Inicio de sesión exitoso para el usuario: " + username);
    return true;
}
