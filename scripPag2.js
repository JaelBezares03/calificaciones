document.addEventListener('DOMContentLoaded', function(){
    var numero = localStorage.getItem('numeroSeleccionado');
    console.log('Numero en la pagina principal: ', numero);
    var resultadoIndex = document.getElementById('resultadoIndex');
    resultadoIndex.textContent = 'You selected ' + numero + ' out 5 ';
});