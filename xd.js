// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Porfavor introduzca su nombre";
const EMAIL_REQUIRED = "Por favor introduce tu email";
const EMAIL_INVALID = "Porfavor introduzca su correo";
const Apellidos_Required = "Introduzca su apellidos";
const Telefono_REQUIRED = "Introduzca su telefono";
form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	let apellidosValid = hasValue(form.elements["apellidos"], Apellidos_Required);
	let telfvalid = hasValue(form.elements["Telefono"], Telefono_REQUIRED);
	let checkValid = false;
	if (form.elements["accept"].checked) {
		checkValid = true;
	}
	else {
		checkValid = false;
	}

	// if valid, submit the form.
	if (nameValid && emailValid && apellidosValid && telfvalid && checkValid) {
		alert("Mensaje enviado");
	}
});


function comprobar(){

	var inputName = document.getElementById("name");
	var inputApellidos = document.getElementById("apellidos");
	var inputEmail = document.getElementById("email");
	var inputTlf = document.getElementById("Telefono");

	if (inputName.value.length==0){
		inputName.className = "error";
	}
	else{
		inputName.className = "success";
	}

	if (inputApellidos.value.length==0){
		inputApellidos.className = "error";
	}
	else{
		inputApellidos.className = "success";
	}
	if (inputEmail.value.length==0){
		inputEmail.className = "error";
	}
	else{
		inputEmail.className = "success";
	}
	if (inputTlf.value.length==0){
		inputTlf.className = "error";
	} 
	else{
		inputTlf.className = "success";
	}
}