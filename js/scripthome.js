const API = "https://randomuser.me/api/?results=3";
var gente = [];

$(document).ready(() => {
    // Primero cargamos los caretos, los incrustamos en el html y luego ponemos en marcha el slider
    cargarGente();
});

function cargarGente() {
	// Cargamos 4 individuos del api.
	fetch(API).then(result => {
		return result.json();
	}).catch(error => {
		console.log(error);
	}).then(data => {
		gente = data.results;
        mostrarGente();
	});
}

function mostrarGente() {
    for(let i=1; i<=gente.length; i++) {
		let data = gente[i-1];

        $("#testimonial"+i).attr("src", data.picture.large);
        $("#testimonial-name"+i).html(data.name.first.toUpperCase() + ' ' + data.name.last.toUpperCase());
    }
}