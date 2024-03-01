

function encriptador(mensaje) {
    let mensaje_encriptado = "";

    // Verificar si el mensaje contiene caracteres que no son letras minúsculas
    if (/[A-ZÁÉÍÓÚÜÑ^~`!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/.test(mensaje)) {
        mostrarAlerta("Por favor, ingresa solo letras minúsculas y sin acentos.", "alerta");
        return "!ERROR!"; // Devuelve una cadena vacía si el mensaje contiene caracteres no minúsculos
    }

    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        switch (letra) {
            case 'e':
                mensaje_encriptado += 'enter';
                break;
            case 'i':
                mensaje_encriptado += 'imes';
                break;
            case 'a':
                mensaje_encriptado += 'ai';
                break;
            case 'o':
                mensaje_encriptado += 'ober';
                break;
            case 'u':
                mensaje_encriptado += 'ufat';
                break;
            default:
                mensaje_encriptado += letra;
                break;
        }
    }
    return mensaje_encriptado;
}
function desencriptador(mensaje_encriptado) {
    let mensaje_desencriptado = "";
    let i = 0;
    while (i < mensaje_encriptado.length) {
        let letra = mensaje_encriptado[i];
        if (letra === 'e' && mensaje_encriptado.substring(i, i + 5) === 'enter') {
            mensaje_desencriptado += 'e';
            i += 5; // Mover el índice al siguiente fragmento
        } else if (letra === 'i' && mensaje_encriptado.substring(i, i + 4) === 'imes') {
            mensaje_desencriptado += 'i';
            i += 4; // Mover el índice al siguiente fragmento
        } else if (letra === 'a' && mensaje_encriptado.substring(i, i + 2) === 'ai') {
            mensaje_desencriptado += 'a';
            i += 2; // Mover el índice al siguiente fragmento
        } else if (letra === 'o' && mensaje_encriptado.substring(i, i + 4) === 'ober') {
            mensaje_desencriptado += 'o';
            i += 4; // Mover el índice al siguiente fragmento
        } else if (letra === 'u' && mensaje_encriptado.substring(i, i + 4) === 'ufat') {
            mensaje_desencriptado += 'u';
            i += 4; // Mover el índice al siguiente fragmento
        } else {
            mensaje_desencriptado += letra; // Si no se encuentra una coincidencia, mantener la letra original
            i++; // Mover el índice al siguiente carácter
        }
    }
    return mensaje_desencriptado;
}

function encriptar() {
    let mensajeOriginal = document.getElementById("mensajeOriginal").value;
    let mensajeEncriptado = encriptador(mensajeOriginal);
    document.getElementById("mensajeResultado").textContent = mensajeEncriptado;
}

function desencriptar() {
    let mensajeEncriptado = document.getElementById("mensajeResultado").textContent;
    let mensajeDesencriptado = desencriptador(mensajeEncriptado);
    document.getElementById("mensajeResultado").textContent = mensajeDesencriptado;
}

function copiarResultado() {
    let mensajeResultado = document.getElementById("mensajeResultado");
    let resultadoTexto = mensajeResultado.textContent;

    if (resultadoTexto) {
        navigator.clipboard.writeText(resultadoTexto)
            .then(() => {
                mostrarAlerta("¡El resultado se ha copiado al portapapeles!");
            })
            .catch(err => {
                console.error('Error al intentar copiar el texto: ', err);
                mostrarAlerta("Ha ocurrido un error al intentar copiar el resultado al portapapeles.", "error");
            });
    } else {
        mostrarAlerta("No hay resultado para copiar.", "warning");
    }
}

function mostrarAlerta(mensaje, tipo) {
    const alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.className = `alert alert-${tipo}`;
    document.body.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}