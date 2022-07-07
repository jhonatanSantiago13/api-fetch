
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

	/*console.log("nombre", nombre);
	console.log("correo", correo);
	console.log("telefono", telefono);
	console.log("codigoPostal", codigoPostal);*/

	const json_data = {

		 "nombre":nombre,
         "correo":correo,
         "telefono":telefono,
         "cp":codigoPostal

	};

	const url = "http://demo0176096.mockable.io/";

	/*console.log("json", json_data);*/

	fetch(url,{

		method: "post",
		body: json_data

	})
	.then(data => data.json())
	.then(data =>{

			console.log("resultado", data);

	})
	.catch(function(error){

		console.error(error);

	})

})
