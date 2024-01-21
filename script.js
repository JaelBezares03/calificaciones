document.addEventListener('DOMContentLoaded', function () {
    var valores = document.querySelectorAll('.valor');

    function cambiarColor(elemento) {
        valores.forEach(function (el) {
            el.classList.remove('cambiarColor');
        });
        elemento.classList.toggle('cambiarColor');
    }

    // Agrega el evento 'click' a cada elemento con la clase 'valor'
    for (var i = 0; i < valores.length; i++) {
        valores[i].addEventListener('click', function () {
            cambiarColor(this);
            numero(this);
        });
    }
});
function numero (e){
    var numeroSeleccionado = parseInt(e.textContent);
    console.log(numeroSeleccionado);

    localStorage.setItem('numeroSeleccionado',numeroSeleccionado);
   
}
