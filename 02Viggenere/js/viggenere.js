var viggenere = viggenere || (function () {
    var doStaff = function (txt, clave, action) {
        var abc = "abcdefghijklmnopqrstuvwxyz";
        var l = abc.length;
        var result = "";

        for (var i = 0; i < txt.length; i++) {
            var char = txt.charAt(i);
            var isUpperCase = char === char.toUpperCase();
            char = char.toLowerCase();

            var keyChar = clave.charAt(i % clave.length).toLowerCase();
            var keyIndex = abc.indexOf(keyChar);

            if (abc.indexOf(char) != -1) {
                var offset = action ? keyIndex : -keyIndex;
                var newIndex = (abc.indexOf(char) + offset + l) % l;
                var newChar = abc.charAt(newIndex);

                if (isUpperCase) {
                    newChar = newChar.toUpperCase();
                }

                result += newChar;
            } else {
                result += char;
            }
        }

        return result;
    };

    return {
        encode: function (txt, clave) {
            return doStaff(txt, clave, true);
        },
        decode: function (txt, clave) {
            return doStaff(txt, clave, false);
        }
    };
})();

function longitudCifrar() {
    camposVacios();
    var texto = document.getElementById("txt").value;
    var clave = document.getElementById("txtClave").value;
    if (clave.length > texto.length) {
        alert("La clave no puede ser más grande que el texto a cifrar");
    } else {
        codificar(texto, clave);
    }
}

function longitudDescifrar() {
    camposVacios();
    var texto = document.getElementById("txt").value;
    var clave = document.getElementById("txtClave").value;
    if (clave.length > texto.length) {
        alert("La clave no puede ser más grande que el texto a cifrar");
    } else {
        decodificar(texto, clave);
    }
}

function codificar(texto, clave) {
    var resultado = viggenere.encode(texto, clave);
    document.getElementById("res").value = resultado;
}

function decodificar(texto, clave) {
    var resultado = viggenere.decode(texto, clave);
    document.getElementById("res").value = resultado;
}

function camposVacios() {
    var texto = document.getElementById("txt").value;
    var clave = document.getElementById("txtClave").value;
    if (texto == "") {
        alert("Ingrese un texto para cifrar");
    }
    if (clave == "") {
        alert("Ingrese una clave para cifrar");
    }
}

function colocar() {
    var copiar = document.getElementById("res").value;
    document.getElementById("txt").value = copiar;
}

function reiniciar() {
    document.getElementById("txt").value = "";
    document.getElementById("txtClave").value = "";
    document.getElementById("res").value = "";
}