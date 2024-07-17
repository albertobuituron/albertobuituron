const botonE = document.getElementById("botonEnc");
const botonD = document.getElementById("botonDec");
const botonC = document.getElementById("botonCop");
const botonP = document.getElementById("botonCop");
const botonB = document.getElementById("botonborrar");
const letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù']/g; //[a-z] podria ser mejor pero no funciona como quiero, hay que mejorar!


limpiar();

function validar() {
    let nuevomensaje = document.getElementById("texto").value;
    if (nuevomensaje.match(letras) != null) {
        limpiar();
        foco();
        Swal.fire({
            position: "top-start",
            icon: "error",
            title: "Ingrese solo letras minúsculas y sin acentos",
            showConfirmButton: true,
            /* background: "transparent", */
            border: "10px",

        });
    }
}

function encriptar() {
    let nuevoTexto = document.getElementById("texto").value.trimStart();
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    nuevoTexto;

    document.getElementById("tArea").value = nuevoTexto;
    document.getElementById("tArea").style.color = "#495057";
    ocultarmensaje();
}

function desencriptar() {
    let nuevoTexto = document.getElementById("texto").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    nuevoTexto;

    document.getElementById("tArea").value = nuevoTexto;
    document.getElementById("tArea").style.color = "#495057";
    ocultarmensaje();
}

function copiar() {
    document.getElementById("texto").placeholder = "";
    let textCopi = document.getElementById("tArea");
    textCopi.select();
    document.execCommand("copy");
    
    limpiar();
    foco();
 
    Swal.fire({
        position:"top-start",
        title:"Texto Copiado",
        icon:"success",
        text:"Utilice el portapapeles para pegar el resultado del encriptador",
        showConfirmButton: "true",
    });
}

function ocultarmensaje() {
    var textoVacio = "";
    let textoT = document.getElementById("tArea").value;
    textoT;
    if (textoVacio !== textoT) {
        document.getElementById("tapa").style.display = "none";
    } else document.getElementById("tapa").style.display = "";
}


function limpiar() {
    document.getElementById("texto").value = "";
    document.getElementById("tArea").value = "";
}

function foco() {
    document.getElementById("texto").focus();
}

function borrar() {
    document.getElementById("texto").placeholder = "Ingrese el texto para encriptar o desencriptar aqui";
    document.getElementById("tArea").placeholder = "";
    document.getElementById("tArea").style.color = "#000000";
    limpiar();
    foco();
    ocultarmensaje(); 
}
/* #495057 */
foco();


botonE.addEventListener("click", validar);
botonE.addEventListener("click", encriptar);

botonD.addEventListener("click", validar);
botonD.addEventListener("click", desencriptar);

botonC.addEventListener("click", copiar);
botonB.addEventListener("click", borrar);
