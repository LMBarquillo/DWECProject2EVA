const API = "https://randomuser.me/api/?results=4&nat=ES";
var gente = [];

$(document).ready(() => {
    // Primero cargamos los caretos, los incrustamos en el html y luego ponemos en marcha el slider
    cargarGente();
});

function cargarGente() {
    // Cargamos 4 interfectos, pero en lugar de usar fetch como en el home, aquí usamos ajax
    $.ajax({
        url: API,
        type: 'GET',
        success: function(data) {
            gente = data.results;
            console.log(gente);
            mostrarGente();
        },
        error: function(error) {
            console.log(error);
        }
    });	   
}

function mostrarGente() {
    for(let i=1; i<=gente.length; i++) {
		let data = gente[i-1];

        $("#expert-img"+i).attr("src", data.picture.large);
        $("#expert-name"+i).html(data.name.first.toUpperCase() + ' ' + data.name.last.toUpperCase());
    }
}