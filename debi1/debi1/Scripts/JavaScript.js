var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var form = document.getElementById('form');
var username = document.getElementById('username');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var birth = document.getElementById('birthday')
var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	names();
	usernameValidation();
	passwordValidation();
	emailValidation();
	phoneValidation();
	birthdayValidation();
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
	small.style.display = "block";
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	const small = formControl.querySelector('small');
	if (small) {
		small.innerText = '';
		small.style.display = 'none';
	}
}



                function names() {
	             var length = 2;
				var nameValue = firstname.value;
				var lastnameValue = lastname.value;
				if (!nameValue.match(letters)) {
					setErrorFor(firstname, 'The name needs to contain only letters');
				} else if (nameValue === '') {
					setErrorFor(firstname, 'Name cannot be blank');

				} else if (nameValue.length < length) {
						setErrorFor(firstname, 'first name must be at least 2 letters long');

				} else {
					setSuccessFor(firstname);
				}

				if (!lastnameValue.match(letters)) {
					setErrorFor(lastname, 'The last name needs to contain only letters');
				} else if (lastnameValue === '') {
					setErrorFor(lastname, 'Last name cannot be blank');

				} else if (lastnameValue.length < length) {
					setErrorFor(lastname, 'last name must be at least 2 letters long');

				} else {
					setSuccessFor(lastname);
				}
			}

               function usernameValidation() {
				   var length = 3;
				var usernameValue = username.value;
				if (usernameValue === '') {
					setErrorFor(username, 'Username cannot be blank');
				}

				else if (usernameValue.length < length) {
					setErrorFor(username, 'Username must be at least 3 letters long');

				} else if (!/[A-Z]/.test(usernameValue)) {
					setErrorFor(username, 'Username must include at least 1 capital letter');
				} else if (/[^a-zA-Z0-9]/.test(usernameValue)) {
					setErrorFor(username, 'Username cannot include symbols');
				} else if (!/\d/.test(usernameValue)) {
					setErrorFor(username, 'Username must include at least 1 number');
				} else {
					setSuccessFor(username);
				}
			}


			function passwordValidation() {
				var length = 6;
				var passwordValue = password.value;
				var password2Value = password2.value;

				if (passwordValue === '') {
					setErrorFor(password, 'Password cannot be blank');
				} else if (!/[A-Z]/.test(passwordValue)) {
					setErrorFor(password, 'Password must include at least 1 letter');
				} else if (!/\d/.test(passwordValue)) {
					setErrorFor(password, 'Password must include at least 1 number');
				} else if (passwordValue.length < length) {
					setErrorFor(password, 'Password must be at least 6 characters long');
				} else {
					setSuccessFor(password);
				}

				if (password2Value === '') {
					setErrorFor(password2, 'Password confirmation cannot be blank');
				} else if (passwordValue !== password2Value) {
					setErrorFor(password2, 'Passwords do not match');
				} else {
					setSuccessFor(password2);
				}
			}

function emailValidation() {
	var emailValue = email.value;
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!emailRegex.test(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
}

			function phoneValidation() {
				var phoneRegex = /^(\+?\d{1,3})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
				var phoneValue = phone.value;

				if (phoneValue === '') {
					setErrorFor(phone, 'Phone number cannot be blank');
				} else if (!phoneRegex.test(phoneValue)) {
					setErrorFor(phone, 'Phone number is need to be with numbers only.');
				} else {
					setSuccessFor(phone);
				}
			}

			function birthdayValidation() {
				var birthdayValue = birthday.value;

				if (birthdayValue === '') {
					setErrorFor(birthday, 'Birthday cannot be blank');
				} else {
					var birthdayDate = new Date(birthdayValue);
					var currentDate = new Date();

					if (birthdayDate > currentDate) {
						setErrorFor(birthday, 'Birthday cannot be in the future');
					} else if (currentDate.getFullYear() - birthdayDate.getFullYear() > 100) {
						setErrorFor(birthday, 'Birthday cannot be more than 100 years ago');
					} else {
						setSuccessFor(birthday);
					}
				}
			}


			var floating_btn = document.querySelector('.floating-btn');
			var close_btn = document.querySelector('.close-btn');
			var social_panel_container = document.querySelector('.social-panel-container');

			floating_btn.addEventListener('click', () => {
				social_panel_container.classList.toggle('visible')
			});

			close_btn.addEventListener('click', () => {
				social_panel_container.classList.remove('visible')
			});

function clearInput() {
	document.getElementById("form").reset();
}