const API = "https://randomuser.me/api/";
var gente = [];

$(document).ready(() => {
    // Primero cargamos los caretos, los incrustamos en el html y luego ponemos en marcha el slider
    cargarGente();
});

function cargarGente() {
    // Cargamos 4 interfectos, pero en lugar de usar fetch como en el home, aquí usamos ajax
    for(let i=0; i<4; i++) {
        $.ajax({
            url: API,
            type: 'GET',
            success: function(data) {
                gente.push(data);
                mostrarGente();
            },
            error: function(error) {
                console.log(error);
            }
        });	
    }    
}

function mostrarGente() {
    for(let i=1; i<=gente.length; i++) {
		let data = gente[i-1].results[0];

        $("#expert-img"+i).attr("src", data.picture.large);
        $("#expert-name"+i).html(data.name.first.toUpperCase() + ' ' + data.name.last.toUpperCase());
    }
}