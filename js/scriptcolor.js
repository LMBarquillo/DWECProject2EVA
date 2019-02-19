const KEY = "css";
const DEFAULT_VALUE = "blue";       // Color por defecto

$(document).ready(() => {
    let css = localStorage.getItem(KEY);

    if(css == null) {
        css = DEFAULT_VALUE;
        setColor(css);
    }

    $("#estilo").attr("href","css/" + css + ".css");

    $(".colorpicker").click(function(event) {
        let palette = event.currentTarget;
        let color = palette.getAttribute("data-color");
        setColor(color);
        location.reload(); 
    });
});

function setColor(color) {
    localStorage.setItem(KEY, color);
}
