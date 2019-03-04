$(document).ready(() => {
    $("#contact_submit").click(function(event) {
        let mailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

        let email = document.querySelector("#contact_email");
        let nombre = document.querySelector("#contact_nombre");
        let localidad = document.querySelector("#contact_localidad");
        let tlfn = document.querySelector("#contact_tlfn");
        let mensaje = document.querySelector("#contact_mensaje");

        // Primero comprobamos que el email esté bien formado, usando un regex, mucho más eficiente que la validación de html5
        if(mailRegex.test(email.value)) {
            // Luego el resto de campos, que sean válidos, esta vez usando el api html5
            if(nombre.validity.valid) {
                if(localidad.validity.valid) {
                    if(tlfn.validity.valid) {
                        if(mensaje.validity.valid) {
                            // He buscado un api de mandar correos, pero no encontré ninguna que funcionara bien... :(
                            $("#formerror").html("Gracias por su mensaje !!!");                
                        } else {
                            $("#formerror").html("Por favor, incluya un mensaje.");
                        }
                    } else {
                        $("#formerror").html("El campo teléfono no es válido.");
                    }
                } else {
                    $("#formerror").html("El campo localidad no es válido.");
                }               
            } else {
                $("#formerror").html("El campo nombre no es válido.");
            }                 
        } else {
            $("#formerror").html("El email es incorrecto.");
        }
    });
});