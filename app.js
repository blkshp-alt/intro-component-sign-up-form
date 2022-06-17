'use strict';

//get all input fields
//on button submit reset form

const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.querySelector('button');


//after form submit reset form 
form.addEventListener('submit', e => {
	e.preventDefault();	
	checkInputs();

    window.setTimeout(() => {
      window.location.reload(true);
  }, 4000);
});

//get input values and remove whitespaces
//check if input value is empty if yes return errorMessage

function checkInputs() {
	// trim method will remove all white spaces
	const firstValue =first.value.trim();
	const lastValue = last.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

 
	if(!firstValue) {
		errorMessage(first, 'First Name cannot be empty');
	} else {
		first.style.border = '2px solid rgb(56, 204, 140)';
	}

	if(!lastValue) {
		errorMessage(last, 'Last Name cannot be empty');
	} else {
		last.style.border = '2px solid rgb(56, 204, 140)';
	}
	
	if(!emailValue) {
		errorMessage(email, 'Email cannot be empty');
	} else if (!isEmail(emailValue)) {
		errorMessage(email, 'Looks like this is not an email');
	} else {
		email.style.border = '2px solid rgb(56, 204, 140)';
	}
	
	if(!passwordValue) {
		errorMessage(password, 'Password cannot be empty');
	} else {
		password.style.border = '2px solid rgb(56, 204, 140)';
	}
	
}
//get input parent which is the input-container class
function errorMessage(input, message) {
	const inputContainer = input.parentElement;
	const small = inputContainer.querySelector('small');
	inputContainer.className = 'input-container error';
	small.innerText = message;
}

	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
