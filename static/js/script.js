var lista = document.getElementById('nav-lista');
var items = lista.getElementsByTagName('li');

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        var seleccionado = lista.getElementsByClassName('seleccionado');
        if (seleccionado.length > 0) {
            seleccionado[0].className = seleccionado[0].className.replace('seleccionado', '');
        }
        this.className += 'seleccionado';
    });
}
