// BASE DATOS//

const usuarios = [
    { dni: '12345678', nombre: 'Alonso Santiago', saldo: 102500 },
    { dni: '87654321', nombre: 'Maldonado Marcos', saldo: 453000 },
    { dni: '31284010', nombre: 'Riccardi Gonzalo', saldo: 268500 }
];

//INGRESO//


function encontrarUsuario(dni) {
    return usuarios.find(usuario => usuario.dni === dni);
}

function accesoCuenta() {
    const dniIngresado = prompt('Ingrese su N° de DNI:');
    const usuario = encontrarUsuario(dniIngresado);

    if (usuario) {
        alert('Bienvenido ' + usuario.nombre);
        console.log('Usuario Validado');
        OperacionesCuenta(usuario);

    } else {
        alert('N° de DNI Invalido. Por favor Intente nuevamente');

        accesoCuenta();
    }
}

// OPERACIONES//

function OperacionesCuenta(usuario) {
    let opcion = '';

    while (opcion !== '4') {
        opcion = prompt('Seleccione el N° con la operacion deseada:\n1. Ver Saldo\n2. Realizar Depósito\n3. Realizar Trasferencia\n4. Cerra Sesion')

        switch (opcion) {
            case '1':
                verSaldo(usuario);
                break;

            case '2':
                realizarDepósito(usuario);
                break;

            case '3':
                realizarTranferencia(usuario);
                break;

            case '4':
                cerrarSesion(usuario);
                break;

            default:
                alert('Opcion no válida. Intente Nuevamente');
        }
    }
}

//FUNCIONES//

function verSaldo(usuario) {
    alert('El saldo de su cuenta es $' + usuario.saldo);
}


function realizarDepósito(usuario) {
    const montoDepósito = parseInt(prompt('Ingrese monto a Transferir:'));

    usuario.saldo = usuario.saldo += montoDepósito
    alert('Depósito realizado con Exito. Su saldo es $' + usuario.saldo)
}

function realizarTranferencia(usuario) {
    const monto = parseInt(prompt('Ingrese monto a Transferir:'));

    if ((monto) && monto > 0 && monto <= usuario.saldo) {
        usuario.saldo -= monto;
        alert('Transferencia realizada con éxito. Su saldo es $' + usuario.saldo);
    } else {
        alert('Saldo Insuficiente para el monto indicado.\nRevise su saldo e Intente nuevamente.');
    }

}

function cerrarSesion() {
    alert('Sesión finalizada con éxito.\n "Muchas Gracias"');
}

accesoCuenta();
