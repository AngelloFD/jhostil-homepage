document.addEventListener("DOMContentLoaded", (event) => {
	// get all elements with id "expand-btn"
	var expandBtns = document.querySelectorAll("#expand-btn");
	// add click event listener to each element
	var lista = document.querySelector(".navbar-nav");
	var items = lista.querySelectorAll(".nav-link");

	for (var i = 0; i < items.length; i++) {
		items[i].addEventListener("click", function () {
			var seleccionado = lista.querySelector(".seleccionado");
			if (seleccionado) {
				seleccionado.classList.remove("seleccionado");
			}
			this.classList.add("seleccionado");
		});
	}
	expandBtns.forEach(function (btn) {
		btn.addEventListener("click", function () {
			// remove class "expanded" from all elements
			expandBtns.forEach(function (btn) {
				btn.classList.remove("expanded");
			});
			// add class "expanded" to the clicked element
			this.classList.add("expanded");
		});
	});
});
