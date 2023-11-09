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

	// Inicializa el índice de la tarjeta a mostrar
	let cardIndex = 0;

	// Obtiene los botones y el contenedor de las tarjetas
	let nextButton = document.getElementById('nextButton');
	let prevButton = document.getElementById('prevButton');
	let cardContainer = document.getElementById('cardContainer');

	// Función para actualizar la posición de las tarjetas
	function updateCardPosition() {
		let cardWidth = document.querySelector('.card').offsetWidth;
		cardContainer.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
	}

	// Función para manejar el click en el botón siguiente
	nextButton.addEventListener('click', () => {
		if (cardIndex < cardContainer.children.length - 3) {
			cardIndex++;
			updateCardPosition();
		}
	});

	// Función para manejar el click en el botón anterior
	prevButton.addEventListener('click', () => {
		if (cardIndex > 0) {
			cardIndex--;
			updateCardPosition();
		}
	});

	// Actualiza la posición de las tarjetas al cargar la página y cuando se redimensiona la ventana
	window.addEventListener('load', updateCardPosition);
	window.addEventListener('resize', updateCardPosition);

});
