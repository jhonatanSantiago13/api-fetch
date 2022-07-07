
/*=============================================
ENVIAR DATOS
=============================================*/

const Formulario = document.querySelector("#formulario");

Formulario.addEventListener('submit', (e) => {

	e.preventDefault();

	datos = new FormData(document.getElementById("formulario"));

	let nombre   	 = datos.get("nombre");
	let correo   	 = datos.get("correo");
	let telefono     = datos.get("telefono");
	let codigoPostal = datos.get("codigoPostal");

	

})
