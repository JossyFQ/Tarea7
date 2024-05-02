function usrpas() {
    var usuario = document.getElementById('user').value;
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('seconame').value;
    var email = document.getElementById('email').value;
    var fechaNacimiento = document.getElementById('dia_de_birth').value;
    var telefono = document.getElementById('numer').value;
    var password = document.getElementById('password').value;

    if (usuario.trim() === '' || nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || fechaNacimiento.trim() === '' || telefono.trim() === '' || password.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    document.oncontextmenu=new Function("return false");

    alert('¡Usuario registrado correctamente!');
    return true;
}
