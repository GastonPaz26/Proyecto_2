const registerSeccion = document.querySelector('#registerSeccion') 
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const submitBtn = form.querySelector('#submitBtn');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//La contraseña debe tener entre 8 y 16 caracteres, al menos una mayuscula, una minuscula y un numero
const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,30}$/

/* let user = [
	{ name: "admin"
		email: "pepe@gmail.com"
		password: "1234"
}
] */

form.addEventListener('submit', e => {
	e.preventDefault();

});

eventListener();
function eventListener() {
  //Campos del formulario
	username.addEventListener('blur', checkInputs);
  email.addEventListener('blur', checkInputs);
	password.addEventListener('blur', checkInputs);
  password2.addEventListener('blur', checkInputs);
	submitBtn.addEventListener('click', submitRegister);
	
	
  // //Añadir submit
  // form.addEventListener('submit', sendMessage);
  // resetBtn.addEventListener('click', resetForm);

}



function checkInputs(e) {
	// trim to remove the whitespaces
	const usernameValue = username.value.length;
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	localStorage.setItem("username", JSON.stringify(username.value,));
	localStorage.setItem("email", JSON.stringify(email.value,));
	localStorage.setItem("password", JSON.stringify(password.value,));


 if(e.target.id	=== 'username'){
		const small = document.querySelector('small')
			deleteMessage(small)
		if (usernameValue > 0 && usernameValue < 4){
			setSuccessFor(username, 'El nombre debe contener al menos 4 letras')
		}else if(usernameValue >= 4){
			setSuccessFor(username, 'El nombre de usuario es valido')
		}
		else if(usernameValue === 0){
			setErrorFor(username, 'Este campo es obligatorio');
		}
	}

	if(e.target.type === 'email'){
		const small = document.querySelector('small')
		deleteMessage(small)

		if(emailRegex.test(e.target.value)) {	
			setSuccessFor(email, 'Email correcto')
		} else if(e.target.value < 1){
			setErrorFor(email,'Este campo es obligatorio')
		} else {
			setErrorFor(email,'Email Incorrecto')
		}
	}
	
	if(e.target.type === 'password'){
			const small = document.querySelector('small')
			deleteMessage(small)
		if(passwordRegex.test(e.target.value)) {	
				setSuccessFor(password, 'Constraseña correcta');
		} else if(e.target.value <= 0){
			setErrorFor(password, 'La contraseña no puede estar en blanco');
		}
			else {setErrorFor(password, 'La contraseña debe tener entre 8 y 30 caracteres, al menos una mayuscula, una minuscula y un unmero');
			
		}
	}
	

	if(e.target.id === 'password2'){
		const small = document.querySelector('small')
		deleteMessage(small)
		if(e.target.value <= 0){
			setErrorFor(password2, 'La contraseña no puede estar en blanco');
		}	
		else if(passwordValue === password2Value){
			setSuccessFor(password2, 'Constraseña coinciden');
		}
	}



}




function setErrorFor(input, message) {
	const small = document.createElement('small');
	
	small.innerText = message;
	const formControl = input.parentElement;
	formControl.append(small);
	small.classList.add("smallsmall") ;

}

function setSuccessFor(input, message) {
	const small = document.createElement('small');
	small.innerText = message;
	const formControl = input.parentElement;
	formControl.append(small);
	input.classList.add("border-success") ;
}

function deleteMessage(small){
		 if (small) {
      small.remove();
    }
}


function registerbtn(e){ 
	if (emailRegex.test(email.value) && email.value !== '' && username.value.length > 4 && passwordRegex.test(password.value) && password.value === password2.value && formCheck.length !== 0) {
		e.preventDefault();
  	const spinner = document.querySelector('#spinner');
		spinner.style.display = 'flex';
				console.log(formCheck.length)
		setTimeout(() => {
		const modalWrapper = document.querySelector("div.modal-wrapper")
		const modalBody = document.querySelector('.modalBody')
		const	modalFooter= document.querySelector('.modalFooter');
		modalBody.innerHTML = "<h1>Registro exitoso</h1>";
		modalFooter.innerHTML= "<button class='closeBtn btn btn-success '>Close</button>";
		const closeBtn = document.querySelector('.closeBtn');

		closeBtn.addEventListener('click' , () => {
		modal.classList.remove('open');
		});
		modalWrapper.classList.add("open");
    spinner.style.display = 'none';  
    form.insertBefore(modalWrapper, spinner);
    setTimeout(() => {
		modalWrapper.classList.remove("open");
    }, 5000)
  }, 3000)
	}}
// 	if(emailRegex.test(email.value) && email.value !== '' && username.value.length > 4  ) {
// 		 e.preventDefault();
//   const spinner = document.querySelector('#spinner');
// 		spinner.style.display = 'flex';
// 		setTimeout(() => {
// 		const modalWrapper = document.querySelector("div.modal-wrapper")
// 		const modalBody = document.querySelector('.modalBody')
// 		const	modalFooter= document.querySelector('.modalFooter');
// 		modalBody.innerHTML = "<h1>Registro exitoso</h1>";
// 		modalFooter.innerHTML= "<button class='closeBtn btn btn-success '>Close</button>";
// 		const closeBtn = document.querySelector('.closeBtn');
// 		console.log(username)
// 		closeBtn.addEventListener('click' , () => {
// 		modal.classList.remove('open');
// 		});

// 		modalWrapper.classList.add("open");
//     spinner.style.display = 'none';  
//     form.insertBefore(modalWrapper, spinner);
//     setTimeout(() => {
// 		modalWrapper.classList.remove("open");
//     }, 5000)
//   }, 3000)
// 	}
	
// }

function submitRegister(e){
	registerbtn(e)
}