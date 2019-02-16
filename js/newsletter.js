$(document).ready(() => {
    $("#suscribebutton").click(function(event) {
        let mailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

        if(mailRegex.test($("#susemail").val())) {
            $("#suscribemsg").html("Te has suscrito correctamente");
        } else {
            $("#suscribemsg").html("Por favor, revisa tu email");
        }
    });
});