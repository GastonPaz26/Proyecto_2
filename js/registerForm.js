const registerSeccion = document.querySelector('#registerSeccion') 
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const submitBtn = form.querySelector('#submitBtn');
const formCheck = document.querySelector('#formCheck')
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//La contraseña debe tener entre 8 y 16 caracteres, al menos una mayuscula, una minuscula y un numero
const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,30}$/
const totalUsers = []

class Users {
  constructor(username, email, password, rol) {
    this.username = username;
    this.email = email;
		this.password = password;
		this.rol = rol
  }
}

function createUser () {
	const username = document.querySelector('#username').value
	const email = document.querySelector('#email').value
	const	password = document.querySelector('#password').value
  
	const user = new Users(username, email, password)

	totalUsers.push(user)
	console.log(totalUsers)
}

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
	submitBtn.addEventListener('click', registerbtn);
}


function checkInputs(e) {
	// trim to remove the whitespaces
	const usernameLength = username.value.length;
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();




 if(e.target.id	=== 'username'){
	
			deleteMessage()
		if (usernameLength > 0 && usernameLength < 4){
			setSuccessFor(username, 'El nombre debe contener al menos 4 letras')
		}else if(usernameLength >= 4){
			setSuccessFor(username, 'El nombre de usuario es valido')
		}
		else if(usernameLength === 0){
			setErrorFor(username, 'Este campo es obligatorio');
		}
	}

	if(e.target.type === 'email'){

		deleteMessage()

		if(emailRegex.test(e.target.value)) {	
			setSuccessFor(email, 'Email correcto')
		} else if(e.target.value < 1){
			setErrorFor(email,'Este campo es obligatorio')
		} else {
			setErrorFor(email,'Email Incorrecto')
		}
	}
	
	if(e.target.type === 'password'){

			deleteMessage()
		if(passwordRegex.test(e.target.value)) {	
				setSuccessFor(password, 'Constraseña correcta');
		} else if(e.target.value <= 0){
			setErrorFor(password, 'La contraseña no puede estar en blanco');
		}
			else {setErrorFor(password, 'La contraseña debe tener entre 8 y 30 caracteres, al menos una mayuscula, una minuscula y un unmero');
			
		}
	}
	

	if(e.target.id === 'password2'){

		deleteMessage()	
		if(e.target.value <= 0){
			setErrorFor(password2, 'La contraseña no puede estar en blanco');
		}	
		else if(passwordValue === password2Value){
			setSuccessFor(password2, 'Constraseña coinciden');
		}
	}



}


//Funciones que ejecutan el mensaje de ERROR o Exito
function setErrorFor(input, message) {
	const small = document.createElement('small');
	small.innerText = message;
	const formControl = input.parentElement;
	formControl.append(small);
	small.classList.add("small-error") ;
	input.classList.add("border-error")

}

function setSuccessFor(input, message) {
	input.classList.remove("border-error")
	input.classList.add("border-success")
	const small = document.createElement('small');
	small.innerText = message;
	const formControl = input.parentElement;
	formControl.append(small);
	small.classList.add("small-success") ;
}

//funcion para eliminar los small de errores/exitos
function deleteMessage(){
		const small = document.querySelector('small')
		 if (small) {
      small.remove();
    };
		


}
function deleteBorder(){
	let inputs = document.querySelectorAll('input')
	for(let i=0; i< inputs.length; i++){
		inputs[i].classList.remove("border-success")
	}
}

//Funcion para el registro
function registerbtn(e){	

	if (emailRegex.test(email.value) && email.value !== '' && username.value.length > 4 && passwordRegex.test(password.value) && password.value === password2.value && formCheck.value !== 0 && formCheck.checked == true) {
		deleteBorder()

		createUser()
		e.preventDefault();
  	const spinner = document.querySelector('#spinner');
		spinner.style.display = 'flex';
			
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
	form.reset()
	}}


