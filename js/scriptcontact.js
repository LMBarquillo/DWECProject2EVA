const API = "https://www.mailjet.com/email-api/";

$(document).ready(() => {

    $("#contact_submit").click(function(event) {
        let mailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        // Primero comprobamos que el email esté bien formado
        if(mailRegex.test($("#contact_email").val())) {
            // Luego el resto de campos, simplemente que estén rellenos.
            if($("#contact_nombre").val().length > 0
            && $("#contact_localidad").val().length > 0
            && $("#contact_tlfn").val().length > 0 
            && $("#contact_mensaje").val().length > 0) {
                /* Ok, habiendo validado, usamos un api para mandar un correo.
                    Debería recibirlo la empresa, pero para probar lo mandamos a la misma dirección que 
                    especificamos en el campo email. */

                


            } else {
                $("#formerror").html("Por favor, rellene correctamente todos los campos.");    
            }     
        } else {
            $("#formerror").html("El email es incorrecto.");
        }
    });
});