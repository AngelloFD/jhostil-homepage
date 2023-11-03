var lista = document.getElementById('nav-lista');
var items = lista.getElementsByTagName('li');

document.addEventListener('DOMContentLoaded', (event) => {
    // get all elements with id "expand-btn"
    var expandBtns = document.querySelectorAll('#expand-btn');
    // add click event listener to each element
    expandBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // remove class "expanded" from all elements
            expandBtns.forEach(function(btn) {
                btn.classList.remove('expanded');
            });
            // add class "expanded" to the clicked element
            this.classList.add('expanded');
        });
    });
});

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        var seleccionado = lista.getElementsByClassName('seleccionado');
        if (seleccionado.length > 0) {
            seleccionado[0].className = seleccionado[0].className.replace('seleccionado', '');
        }
        this.className += 'seleccionado';
    });
}
