const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

const desplazamientoValor = document.getElementById("desplazamientoValor");

        desplazamiento.addEventListener("input", () => {
            desplazamientoValor.textContent = desplazamiento.value;
        });
// Función para cifrar y descifrar
function cifrado(accion) {
    const textoIngresado = texto.value;
    textoCifrado.value = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);

        if (valorEntero >= 97 && valorEntero <= 122) {
            const valorDesplazamiento = parseInt(desplazamiento.value);
            let nuevoValorEntero;

            if (accion === "cifrar") {
                nuevoValorEntero = (valorEntero + valorDesplazamiento > 122) ?
                    97 + (valorEntero - 122) + valorDesplazamiento - 1 :
                    valorEntero + valorDesplazamiento;
            } else if (accion === "descifrar") {
                nuevoValorEntero = (valorEntero - valorDesplazamiento < 97) ?
                    122 - (97 - (valorEntero - valorDesplazamiento)) + 1 :
                    valorEntero - valorDesplazamiento;
            }

            let cifrado = String.fromCharCode(nuevoValorEntero);
            return mayus ? cifrado.toUpperCase() : cifrado;
        }

        return c;
    }).join('');
}

texto.addEventListener("keyup", () => cifrado("cifrar"));
desplazamiento.addEventListener("input", () => cifrado("cifrar"));

// Agregar un botón para descifrar
const descifrarBtn = document.createElement("button");
descifrarBtn.innerText = "Descifrar";
descifrarBtn.classList.add("btn", "btn-info", "mt-3");
descifrarBtn.addEventListener("click", () => cifrado("descifrar"));

document.querySelector(".form-group:last-child").appendChild(descifrarBtn);