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
                
                $("#formerror").html("Gracias por su mensaje !!!");                
            } else {
                $("#formerror").html("Por favor, rellene correctamente todos los campos.");    
            }     
        } else {
            $("#formerror").html("El email es incorrecto.");
        }
    });
});


/* INTENTO DE USAR UN API DE EMAIL QUE NO FUNCIONA MUY BIEN... Si me sobra tiempo, vuelvo a probar */

/* 
Para usar este API, lo he registrado con la siguiente cuenta:  
    Usuario: lavon.runte385@theroyalweb.club
    Contraseña: ribera2019.ES

Y a continuación, me han facilitado la siguiente clave para usar la API
    API: 55b2f9bef12d395708f8f62605d47401
    Secret: 9fd6a9af1c2a4a787ec9ac66989c1478 
*/
/*

const API = "https://api.mailjet.com/v3.1/send";
const USER = "55b2f9bef12d395708f8f62605d47401";
const PASS = "9fd6a9af1c2a4a787ec9ac66989c1478";

let body = {
    "Messages":[
        {
            "From": {
                "Email": $("#contact_email").val(),
                "Name": $("#contact_nombre").val()
            },
            "To": [
                {
                    "Email": $("#contact_email").val(),
                    "Name": $("#contact_nombre").val()
                }
            ],
            "Subject": "Gracias por escribirnos!!",
            "HTMLPart": "<h3>Estimado cliente, gracias por su email!</h3><br>Que la fuerza te acompañe!<br>" + $("#contact_mensaje").val()
        }
    ]
};

// Tras componer el cuerpo de la petición,  mandamos el ajax
$.ajax({
    url: API,
    type: 'POST',
    dataType: 'json',
    crossDomain: true,
    data: body,
    xhrFields: {
        withCredentials: true
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Basic " + btoa(USER + ":" + PASS));
    },
    success: function(data) {
        console.log("EXITO");
        console.log(data);
    },
    error: function(error) {
        console.log("ERROR");
        console.log(error);
    }
});	

*/